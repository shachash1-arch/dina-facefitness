'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Protected() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    // אם הגיעו עם token - טען אוטומטי
    if (token) {
      const u = searchParams.get('username');
      if (u) {
        setUsername(u);
        document.getElementById('password').focus();
      }
    }
  }, [token, searchParams]);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/verify-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await res.json();
      if (data.success) {
        setVideoUrl(data.videoUrl);
      } else {
        setError('משתמש או סיסמה שגויים');
      }
    } catch {
      setError('שגיאה בשרת');
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div style={{ 
      maxWidth: '700px', 
      margin: '0 auto', 
      padding: '40px 20px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; }
      `}</style>
      
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '30px',
        borderRadius: '20px',
        marginBottom: '30px'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5em' }}>🔐 דינה פייס פיטנס</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>כניסה לקורס פרטי</p>
      </div>

      {!videoUrl ? (
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '3px solid #e9ecef'
        }}>
          <h2 style={{ color: '#d63384', marginBottom: '30px' }}>🎥 גישה לקורס עיסוי בוקאלי</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <input
              id="username"
              type="text"
              placeholder="משתמש (למשל: dina_ABC@facefitness.com)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                marginBottom: '15px',
                borderRadius: '12px',
                border: '2px solid #e9ecef',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              onKeyPress={handleKeyPress}
            />
            <input
              id="password"
              type="password"
              placeholder="סיסמה"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                marginBottom: '20px',
                borderRadius: '12px',
                border: '2px solid #e9ecef',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              onKeyPress={handleKeyPress}
            />
          </div>
          
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              background: loading ? '#ccc' : '#d63384',
              color: 'white',
              padding: '18px 50px',
              border: 'none',
              borderRadius: '15px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              width: '100%',
              transition: 'all 0.3s'
            }}
          >
            {loading ? '⏳ נטען...' : '🎥 פתח קורס עכשיו'}
          </button>
          
          {error && (
            <p style={{
              color: '#dc3545',
              marginTop: '20px',
              padding: '12px',
              background: '#f8d7da',
              borderRadius: '8px',
              border: '1px solid #f5c6cb'
            }}>
              {error}
            </p>
          )}
        </div>
      ) : (
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#28a745', marginBottom: '20px' }}>✅ נכנסת בהצלחה!</h2>
          <iframe
            width="100%"
            height="550"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
            style={{
              borderRadius: '15px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
            }}
          />
          <p style={{ color: '#666', marginTop: '20px', fontSize: '14px' }}>
            💖 תהני מהקורס! גישה מלאה .
          </p>
        </div>
      )}
    </div>
  );
}
