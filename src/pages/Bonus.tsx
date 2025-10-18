import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";

const Bonus = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="בונוס נוסף – תרגילים מתקדמים | Face Fitness" description="תרגילים מתקדמים ושדרוגים: Facebuilding, רצפת האגן ותרגילי כפות רגליים." />
      <Navigation />
      {/* Header */}
      <header className="py-12 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ✨ בונוס מיוחד ✨
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter">
              תרגילים מתקדמים ובונוסים נוספים לתוצאות מקסימליות
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Advanced Exercises Bonus */}
            <section className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  בנוסף לתרגילים הבסיסיים, את מקבלת גישה גם לתרגילים מתקדמים יותר – חלקם מתוך שיטת Facebuilding.
                </p>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  אלו תרגילים שמחזקים את השרירים, מוסיפים נפח ומעצבים את הפנים, למשל:
                </p>
                <ul className="space-y-4 text-lg text-muted-foreground font-inter">
                  <li className="flex items-start gap-3">
                    <span className="text-turquoise text-xl mt-1">•</span>
                    <span>תרגיל ייחודי להדגשת עצמות הלחיים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-turquoise text-xl mt-1">•</span>
                    <span>תרגיל להרמת העפעף העליון</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-turquoise text-xl mt-1">•</span>
                    <span>ועוד סדרה של תרגילים מתקדמים שנותנים מראה צעיר ורענן</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Pelvic Floor Bonus */}
            <section className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-bold text-turquoise mb-4">
                  💎 בונוס נוסף – לנשים במיוחד
                </h2>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  אומנם זה לא תרגיל פנים ישיר, אבל הוא משפיע בעקיפין על המראה, היציבה והתחושה הכללית:
                </p>
                <p className="text-lg font-semibold text-foreground font-inter">
                  חיזוק שרירי רצפת האגן.
                </p>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  אני לא פיזיותרפיסטית, אבל במהלך לימודיי בתחום ה–<span className="text-turquoise font-semibold">Face Fitness</span> עברתי הכשרה של 3 שעות בנושא זה. מאז אני מתרגלת באופן קבוע, ואני באמת מאמינה שכל אישה חייבת לדעת וליישם את זה בחיי היומיום.
                </p>
              </div>
            </section>

            {/* Foot Exercises Bonus */}
            <section className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-bold text-gold mb-4">
                  👣 בונוס שלישי – תרגילי כפות רגליים
                </h2>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  לרוב אנחנו שוכחות, אבל גם לכפות הרגליים יש קשר ישיר לעמוד השדרה וליציבה.
                </p>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  תרגילים פשוטים לאצבעות וכף הרגל:
                </p>
                <ul className="space-y-4 text-lg text-muted-foreground font-inter">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">•</span>
                    <span>מסייעים בהפחתת בליטות (כמו "עצם בולטת")</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">•</span>
                    <span>משפרים יציבה</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">•</span>
                    <span>ובסופו של דבר – תורמים גם להרמה טבעית של הפנים</span>
                  </li>
                </ul>
                <div className="bg-gradient-soft p-6 rounded-2xl mt-6">
                  <p className="text-lg font-semibold text-turquoise font-inter text-center">
                    כי כשיש לנו יציבה נכונה – הפנים תמיד נראות מורמות יותר!
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Bonus;