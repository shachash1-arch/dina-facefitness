import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";

const MoreBonuses = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO title="בונוסים נוספים – תכנים משלימים | Face Fitness" description="בונוסים נוספים: טיפים יומיומיים, פרוטוקולי תחזוקה ומשאבים להדפסה לליווי התרגול." />
      <Navigation />

      <header className="py-12 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                🎁 בונוסים נוספים
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter">
              חיזוקים קטנים שעושים הבדל גדול בתוצאות
            </p>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Daily Micro-Habits */}
            <section className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-bold text-turquoise">הרגלי מיקרו יומיומיים</h2>
                <ul className="space-y-3 text-lg text-muted-foreground font-inter leading-relaxed">
                  <li>נשימת אף מודעת – 2 דקות, 3 פעמים ביום</li>
                  <li>קצב מצמוץ בריא מול מסכים – תזכורת כל 20 דקות</li>
                  <li>שחרור לסת עדין – 30 שניות בכל מעבר שעה</li>
                </ul>
              </div>
            </section>

            {/* Maintenance Protocols */}
            <section className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-bold text-gold">פרוטוקולי תחזוקה קצרים</h2>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  סדרות קצרות לשימור תוצאות – 5–7 דקות בלבד בימים עמוסים.
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground font-inter leading-relaxed">
                  <li>בוקר זריז: ניקוז לימפטי + הפעלה עדינה לצוואר</li>
                  <li>צהריים במשרד: תרגול קצר ללסת ולחיים</li>
                  <li>ערב רגוע: שחרור מצח ועיניים לפני שינה</li>
                </ul>
              </div>
            </section>

            {/* Printables */}
            <section className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl font-bold text-soft-pink-darker">משאבים להדפסה</h2>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  דפי מעקב, רשימות תרגול שבועיות וצ׳ק-ליסט ליציבה – להדפסה ושימוש קל בבית.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoreBonuses;
