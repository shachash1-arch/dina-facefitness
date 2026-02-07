import { useState, useEffect } from 'react';
import Navigation from "../../components/Navigation";

const BokalCoursePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const userEmail = urlParams.get('user');
    if (userEmail) {
      setEmail(userEmail);
      if (userEmail.includes('@')) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogin = () => {
    if (email.includes('@') && password.length > 5) {
      setIsLoggedIn(true);
    } else {
      alert('נא להזין מייל תקף + סיסמה');
    }
  };

  if (isLoggedIn) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gradient-hero pt-20">
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair text-5xl font-bold text-foreground mb-12">
                🎉 ברוכה הבאה לקורס!
              </h1>
              <p className="text-2xl text-muted-foreground mb-12">
                {email} - גישה מלאה לכל הסרטונים
              </p>
              <div className="bg-green-50/80 p-12 rounded-3xl border-4 border-green-200">
                <h2 className="text-3xl font-bold text-green-800 mb-8">
                  📹 שיעור 1 זמין לצפייה
                </h2>
                {/* iframe Bunny.net - הפתרון הנכון */}
                <div className="aspect-video rounded-2xl overflow-hidden mx-auto max-w-4xl bg-gray-200">
                  <iframe
                    src="https://player.mediadelivery.net/embed/594735/ee429d6d-000b-4f94-8d1a-f172786f37d2"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                    title="שיעור 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-hero pt-20">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto bg-card p-12 rounded-3xl shadow-elegant">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
              🎬 קורס עיסוי בוקאלי
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              הזן את הפרטים שקיבלת במייל או השתמש בלינק האישי
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="המייל שלך"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border-2 border-border rounded-2xl text-lg text-center"
              />
              <input
                type="text"
                placeholder="הסיסמה שקיבלת (dina_bokal_XXX)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border-2 border-border rounded-2xl text-lg text-center"
              />
              <button 
                onClick={handleLogin}
                className="w-full bg-gradient-primary text-white py-6 rounded-2xl font-bold text-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                התחבר לצפייה בקורס
              </button>
              <p className="text-sm text-muted-foreground mt-6">
                💡 או השתמש בלינק האישי שקיבלת: /course/bokal?user=your@email.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BokalCoursePage;
