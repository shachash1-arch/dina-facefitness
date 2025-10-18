import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dina-hero-image.jpg";

const HeroSection = () => {
  const openPaymentPage = () => {
    window.open(
      "https://pay.grow.link/f6f456002c02374a1359e1962bbbbeca-MjA1NjI4OQ",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Dina Face Fitness - אימון פנים טבעי" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-soft opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              No Surgery Face Lift
            </span>
            <br />
            מראה צעיר וזוהר - בלי זריקות רק עם אימון פנים
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter">
            הסוד לפנים חטובות ורעננות רק בידיים שלך
            <br />
            חמש שנות ידע, מחקר ותרגול מרוכזות בקורס אחד
          </p>
          
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p className="text-lg text-muted-foreground mb-6">
              אם גם את רוצה שינוי אמיתי – הגעת למקום הנכון
              <br />
              העניקי לפנים שלך חיוניות חדשה בצורה טבעית, בטוחה, ותראי תוצאות כבר תוך שבועות.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="font-playfair text-xl px-12 py-6 rounded-full shadow-glow"
              onClick={openPaymentPage}
            >
              הצטרפי עכשיו לקורס No Surgery Face Lift
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-turquoise rounded-full animate-pulse"></div>
              <div className="font-inter text-sm flex gap-1">
                <span className="inline-block animate-pulse-scale" style={{ animationDelay: '0s' }}>בלי זריקות</span>
                <span>•</span>
                <span className="inline-block animate-pulse-scale" style={{ animationDelay: '2s' }}>בלי טיפולים פולשניים</span>
                <span>•</span>
                <span className="inline-block animate-pulse-scale" style={{ animationDelay: '4s' }}>תוצאות טבעיות</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-soft-pink/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-32 h-32 bg-turquoise/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gold/15 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
