const { createClient } = require('@supabase/supabase-js');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'רק POST' });
  
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'חסרים פרטים' });
  }

  try {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    
    const { data: user, error } = await supabase
      .from('users')
      .select('video_url, username, password')
      .eq('username', username)
      .eq('password', password)
      .single();

    if (error || !user) {
      return res.status(401).json({ success: false, error: 'משתמש או סיסמה שגויים' });
    }

    res.json({ 
      success: true, 
      videoUrl: user.video_url,
      message: 'כניסה הצליחה!' 
    });

  } catch (error) {
    res.status(500).json({ error: 'שגיאה בשרת' });
  }
}
