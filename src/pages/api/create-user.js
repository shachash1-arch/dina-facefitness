// בתוך try - אחרי Supabase insert, לפני מייל:
const secretKey = crypto.randomBytes(16).toString('hex');
await supabase.from('users').insert({
  // ...שאר השדות
  secret_key: secretKey,
  login_url: `https://dinafacefitness.com/protected?username=${encodeURIComponent(username)}&token=${secretKey}`
});

// מייל עם קישור לדף כניסה:
await resend.emails.send({
  // ...
  html: `
    <div style="font-family:Arial;text-align:center;padding:20px">
      <h1 style="color:#d63384">🎉 שלום ${name}!</h1>
      <p style="font-size:18px">התשלום אושר! הקורס מוכן בשבילך:</p>
      
      <div style="background:#fff3e0;padding:30px;border-radius:15px;margin:30px 0">
        <h3>📧 פרטי כניסה:</h3>
        <p><strong>משתמש:</strong> ${username}</p>
        <p><strong>סיסמה:</strong> ${password}</p>
      </div>
      
      <a href="https://dinafacefitness.com/protected" 
         style="background:#d63384;color:white;padding:20px 50px;text-decoration:none;border-radius:15px;font-size:20px;font-weight:bold;display:inline-block">
        🔐 כניסה לקורס עכשיו
      </a>
      
      <p style="margin-top:30px;color:#666">
        💖 גישה מלאה לקורס | דינה פייס פיטנס
      </p>
    </div>
  `
});
