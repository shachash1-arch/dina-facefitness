// src/pages/BokalMassage/BokalMassagePage.tsx - קובץ מלא סופי עם מסגרת דקה ויפה סביב התמונה בלבד
import Navigation from "../../components/Navigation";

const BokalMassagePage = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-hero pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-soft opacity-80"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
              <h1 className="font-playfair text-5xl md:text-5xl font-bold text-foreground leading-tight text-center mx-auto">
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  עיסוי בוקאלי עצמי
                </span>
                <br />
                טכניקה טבעית ועוצמתית לפיסול חלק תחתון של הפנים.
                <br className="hidden md:block" />
                <span className="block">לשחרור מתחים ולהחזרת חיוניות מבפנים החוצה.</span>
              </h1>

              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12 mx-auto">
                <div className="w-2 h-2 bg-turquoise rounded-full animate-pulse flex-shrink-0"></div>
                <div className="font-inter text-sm flex gap-1 justify-center">
                  <span className="inline-block animate-pulse-scale">בלי הזרקות</span>
                  <span>•</span>
                  <span className="inline-block animate-pulse-scale" style={{ animationDelay: "2s" }}>
                    בלי ניתוחים
                  </span>
                  <span>•</span>
                  <span className="inline-block animate-pulse-scale" style={{ animationDelay: "4s" }}>
                    בלי כאב
                  </span>
                </div>
              </div>

              <div className="text-xl font-inter text-center mx-auto max-w-2xl">
                מחיר השקה לנרשמות עכשיו{" "}
                <span className="font-extrabold text-turquoise">149 ₪</span>{" "}
                במקום{" "}
                <span className="line-through text-muted-foreground">189 ₪</span>
              </div>

              <a
                href="https://pay.grow.link/a945d77c5108f5af93b019bb29edc660-MzAxNDE2NQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-primary hover:shadow-glow transition-all duration-300 font-playfair text-xl px-12 py-6 rounded-full shadow-glow text-white font-bold mx-auto"
              >
                אני רוצה להתחיל
              </a>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-gradient-soft text-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-20">
              {/* Subtitle */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                  עיסוי ייחודי שעובד על שרירי הפנים העמוקים
                </h2>
                <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                  נותן לפנים מראה פתוח, מורם ורענן כבר מהתרגולים הראשונים
                </p>
              </div>

              {/* What is Buccal Massage */}
              <div className="bg-card p-12 rounded-3xl shadow-elegant border border-border/50 animate-fade-in text-center">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="w-16 h-16 bg-turquoise/10 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">👄</span>
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-turquoise mb-6">
                    מה זה עיסוי בוקאלי?
                  </h3>
                  <div className="space-y-4 text-xl text-muted-foreground leading-relaxed font-inter max-w-3xl">
                    <p>עיסוי בוקאלי (Buccal Massage) הוא עיסוי פיסולי ייחודי ועמוק המתבצע בתוך חלל הפה.</p>
                    <p>מטרתו לעודד התחדשות פעילה של החלק התחתון של הפנים, לשפר את טונוס השרירים ולהחזיר לפנים חיוניות טבעית.</p>
                    <p>העבודה הפנימית מאפשרת גישה לשרירים שלא ניתן להגיע אליהם בעיסוי רגיל.</p>
                    <p className="font-bold text-turquoise text-2xl">
                      וכך מתקבל פיסול טבעי ומדויק של הפנים
                    </p>
                  </div>
                </div>
              </div>

              {/* What it does */}
              <div className="space-y-6">
                <h3 className="font-playfair text-3xl font-bold text-gold mb-12">
                  מה העיסוי עושה בפועל?
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    ["💪", "משחרר מתחים עמוקים", "בלסת ובלחיים"],
                    ["✨", "מרים ומפסל", "לחיים וקו לסת"],
                    ["💧", "משפר זרימה", "דם וניקוז לימפטי"],
                    ["😌", "מראה רגוע ופתוח", "צעיר יותר"],
                  ].map(([icon, title, desc]) => (
                    <div
                      key={title}
                      className="flex flex-col items-center justify-center gap-4 p-8 bg-muted/50 rounded-2xl hover:bg-turquoise/5 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-turquoise/20 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{icon}</span>
                      </div>
                      <p className="font-semibold text-foreground text-xl">{title}</p>
                      <p className="text-muted-foreground font-inter">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who is it for */}
              <div className="bg-card p-12 rounded-3xl shadow-elegant border border-border/50 animate-fade-in">
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">👩</span>
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-gold mb-6">
                    למי זה מתאים?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
                    {[
                      ["😣", "נשים שמרגישות שהפנים 'מחזיקות' סטרס ורוצות שחרור עמוק"],
                      ["🌿", "מי שרוצה פיסול טבעי בלי חומרים"],
                    ].map(([icon, desc]) => (
                      <div key={desc} className="flex flex-col items-center p-6 bg-muted/50 rounded-xl">
                        <div className="w-12 h-12 bg-turquoise/20 rounded-lg flex items-center justify-center mb-4">
                          <span className="text-2xl">{icon}</span>
                        </div>
                        <p className="text-lg text-muted-foreground font-inter max-w-sm">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course content */}
              <div className="space-y-6">
                <h3 className="font-playfair text-3xl font-bold text-soft-pink-darker mb-12">
                  מה כולל הקורס הדיגיטלי?
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    ["📹", "הדרכה מלאה", "עיסוי בוקאלי – שלב אחר שלב"],
                    ["🎯", "סרטון ברור", "תרגול עצמי בטוח"],
                  ].map(([icon, title, desc]) => (
                    <div
                      key={title}
                      className="flex flex-col items-center justify-center gap-4 p-8 bg-card rounded-2xl shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-turquoise/20 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{icon}</span>
                      </div>
                      <p className="font-semibold text-foreground text-xl">{title}</p>
                      <p className="text-muted-foreground font-inter">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why digital course */}
              <div className="space-y-6 py-16 bg-gradient-primary/5 rounded-3xl mx-auto max-w-4xl">
                <h3 className="font-playfair text-3xl font-bold text-turquoise">
                  למה קורס דיגיטלי?
                </h3>
                <p className="text-xl text-muted-foreground font-inter leading-relaxed mb-8">
                  כי זו טכניקה שאפשר וצריך ללמוד נכון.
                </p>
                <p className="text-2xl font-bold text-foreground mb-8">
                  וכשיש לך את הידע – את לא תלויה בטיפולים חוזרים.
                </p>
                <p className="text-xl font-bold text-gold">זה ידע שנשאר איתך.</p>
              </div>

              {/* About me - מסגרת צבעונית דקה מהאתר */}
              <div className="bg-card p-12 rounded-3xl shadow-elegant border border-border/50 text-center animate-fade-in">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-8 flex items-center justify-center p-2 overflow-hidden">
                  <img 
                    src="/dina-profile.jpg" 
                    alt="דינה - מומחית לאימון פנים" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-playfair text-4xl font-bold text-turquoise mb-6">מי אני?</h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
                  אני דינה, מומחית לאימון פנים ושיטות טבעיות לפיסול ושימור מראה צעיר.
                  <br/>
                  <strong className="text-gold block mt-4">מלמדת עבודה חכמה ומדויקת.</strong>
                </p>
              </div>

              {/* Final CTA */}
              <div className="text-center space-y-8 py-20">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                  רגע האמת שלך
                </h2>
                <p className="text-2xl text-muted-foreground font-inter leading-relaxed">
                  אם את רוצה להרגיש ולראות שינוי אמיתי בפנים —<br />
                  <span className="text-gold font-bold">זה הזמן.</span>
                </p>
                <a
                  href="https://pay.grow.link/a945d77c5108f5af93b019bb29edc660-MzAxNDE2NQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-primary hover:shadow-glow transition-all duration-300 font-playfair text-2xl px-16 py-8 rounded-full shadow-glow text-white font-bold mx-auto"
                >
                  כן, אני רוצה את הקורס
                </a>
                <div className="text-xl font-inter">
                  מחיר השקה לנרשמות עכשיו{" "}
                  <span className="font-extrabold text-turquoise">149 ₪</span>{" "}
                  במקום{" "}
                  <span className="line-through text-muted-foreground">189 ₪</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BokalMassagePage;
