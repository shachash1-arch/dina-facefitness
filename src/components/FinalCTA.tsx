import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handlePaymentClick = () => {
    window.open(
      "https://pay.grow.link/f6f456002c02374a1359e1962bbbbeca-MjA1NjI4OQ",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-soft-pink/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-turquoise/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gold/15 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground leading-tight">
            הפנים שלך{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              בידיים שלך
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter">
            גלי את השיטה המוכחת שתשנה לך את המראה בדרך הטבעית והבטוחה ביותר
          </p>

          <div className="space-y-6 pt-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="hero"
                size="xl"
                className="font-playfair text-xl px-16 py-6 rounded-full shadow-glow hover:shadow-elegant"
                onClick={handlePaymentClick}
              >
                להצטרפות לקורס No Surgery Face Lift עכשיו
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-playfair font-semibold text-foreground mb-2">
                  תוצאות מוכחות
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  5 שנות ניסיון ומאות תלמידות מרוצות
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-2xl mb-2">🌿</div>
                <h3 className="font-playfair font-semibold text-foreground mb-2">
                  טבעי לחלוטין
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  בלי זריקות, בלי כימיקלים, בלי תופעות לוואי
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-2xl mb-2">💪</div>
                <h3 className="font-playfair font-semibold text-foreground mb-2">
                  שליטה מלאה
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  את קובעת את הקצב והתוצאות
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground font-inter">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-turquoise rounded-full"></div>
                <span>גישה מיידית לקורס</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>תמיכה מלאה</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-soft-pink-darker rounded-full"></div>
                <span>גישה לכל החיים</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
