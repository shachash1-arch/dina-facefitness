// ===================================
// GROW Webhook Handler
// ===================================
// קובץ זה מקבל עדכונים מ-GROW אחרי תשלום מצליח
// ויוצר משתמש חדש אוטומטית + שולח אימייל

import { createClient } from '@supabase/supabase-js';

// Supabase Client (עם Service Role Key - הרשאות מלאות)
const supabase = createClient(
  'https://ebuttkaamdjiyhfuzlku.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidXR0a2FhbWRqaXloZnV6bGt1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTkxNjU0NSwiZXhwIjoyMDU1NDkyNTQ1fQ.6vZPz0qOlj4WqRD1FuYOmv3rXjJ9xCkZgE5bRp8NKFM'
);

// פונקציה ליצירת סיסמה אקראית
function generatePassword(length = 12) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// פונקציה לשליחת אימייל דרך Resend
async function sendWelcomeEmail(email, password, fullName, courseName) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer re_ecgQtGy3_NoRSAdRdS94d6PKqRepbDY5H',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Dina Face Fitness <courses@dinafacefitness.com>',
        to: email,
        subject: `🎉 ברוכה הבאה לקורס "${courseName}"`,
        html: `
          <!DOCTYPE html>
          <html dir="rtl" lang="he">
          <head>
            <meta charset="UTF-8">
            <style>
              body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
              h1 { color: #d946ef; text-align: center; }
              .details { background: #fef3ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-right: 4px solid #d946ef; }
              .button { display: inline-block; background: linear-gradient(135deg, #d946ef 0%, #a855f7 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; text-align: center; }
              .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>🎉 ברוכה הבאה!</h1>
              <p>שלום ${fullName},</p>
              <p>תודה שרכשת את הקורס <strong>"${courseName}"</strong>!</p>
              <p>נוצר עבורך חשבון באתר עם הפרטים הבאים:</p>
              
              <div class="details">
                <p><strong>📧 אימייל:</strong> ${email}</p>
                <p><strong>🔑 סיסמה:</strong> ${password}</p>
              </div>
              
              <p style="text-align: center;">
                <a href="https://dinafacefitness.com/login" class="button">
                  כניסה לצפייה בקורס
                </a>
              </p>
              
              <p>לאחר ההתחברות תוכלי לצפות בסרטונים מיד!</p>
              <p>מומלץ לשנות את הסיסמה לאחר הכניסה הראשונה.</p>
              
              <div class="footer">
                <p>© 2026 Dina Face Fitness | dinafacefitness.com</p>
                <p>אם יש לך שאלות, פשוט תשיבי לאימייל הזה</p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Resend API error: ${error}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// ===================================
// Main Handler Function
// ===================================
export default async function handler(req, res) {
  // מאפשר רק POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('📥 Received webhook from GROW:', JSON.stringify(req.body));

    const {
      transactionId,
      email,
      fullName,
      phone,
      amount,
      status,
      productName
    } = req.body;

    // בדיקה שהתשלום הצליח
    if (status !== 'success' && status !== 'completed') {
      console.log('⚠️ Transaction not completed:', status);
      return res.status(200).json({ message: 'Transaction not completed' });
    }

    // בדיקה שיש את כל השדות הנדרשים
    if (!email || !fullName || !transactionId) {
      console.error('❌ Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 1. מציאת הקורס (לפי שם או מזהה)
    const { data: course, error: courseError } = await supabase
      .from('courses')
      .select('*')
      .eq('title', 'עיסוי בוקאלי')
      .single();

    if (courseError || !course) {
      console.error('❌ Course not found:', courseError);
      return res.status(404).json({ error: 'Course not found' });
    }

    // 2. בדיקה אם המשתמש כבר קיים
    const { data: existingUser } = await supabase.auth.admin.listUsers();
    const userExists = existingUser?.users?.find(u => u.email === email);

    let userId;
    let password = generatePassword();

    if (userExists) {
      // משתמש קיים - נשתמש ב-ID שלו
      userId = userExists.id;
      console.log('👤 User already exists:', email);
    } else {
      // יצירת משתמש חדש
      const { data: newUser, error: signUpError } = await supabase.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true,
        user_metadata: {
          full_name: fullName,
          phone: phone || ''
        }
      });

      if (signUpError || !newUser.user) {
        console.error('❌ Error creating user:', signUpError);
        return res.status(500).json({ error: 'Failed to create user' });
      }

      userId = newUser.user.id;
      console.log('✅ New user created:', email);

      // יצירת פרופיל משתמש
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: userId,
          full_name: fullName,
          phone: phone || ''
        });

      if (profileError) {
        console.error('⚠️ Error creating profile:', profileError);
      }
    }

    // 3. בדיקה אם הרכישה כבר קיימת
    const { data: existingPurchase } = await supabase
      .from('purchases')
      .select('*')
      .eq('transaction_id', transactionId)
      .single();

    if (existingPurchase) {
      console.log('⚠️ Purchase already recorded');
      return res.status(200).json({ message: 'Purchase already processed' });
    }

    // 4. שמירת הרכישה
    const { error: purchaseError } = await supabase
      .from('purchases')
      .insert({
        user_id: userId,
        course_id: course.id,
        transaction_id: transactionId,
        amount: parseFloat(amount) || course.price,
        status: 'completed'
      });

    if (purchaseError) {
      console.error('❌ Error saving purchase:', purchaseError);
      return res.status(500).json({ error: 'Failed to save purchase' });
    }

    console.log('✅ Purchase recorded');

    // 5. שליחת אימייל למשתמש
    if (!userExists) {
      // שולחים אימייל רק למשתמשים חדשים
      try {
        await sendWelcomeEmail(email, password, fullName, course.title);
        console.log('📧 Welcome email sent to:', email);
      } catch (emailError) {
        console.error('⚠️ Failed to send email:', emailError);
        // ממשיכים גם אם האימייל נכשל
      }
    }

    // 6. החזרת תשובה מוצלחת
    return res.status(200).json({
      success: true,
      message: 'Purchase processed successfully',
      userId: userId,
      courseId: course.id
    });

  } catch (error) {
    console.error('❌ Webhook error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}