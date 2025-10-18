const Benefits = () => {
  const benefits = [
    {
      title: "עיניים פתוחות, חיות ומלאות ביטוי",
      description: "תרגילים מיוחדים להרמת העפעפיים ומתיחת אזור העיניים",
      icon: "👁️"
    },
    {
      title: "קו לסת חד ומודגש",
      description: "טכניקות ייחודיות לחיזוק שרירי הלסת וחיטוב הפנים",
      icon: "💎"
    },
    {
      title: "מצח חלק ומתוח",
      description: "הרפיית קמטי מצח ויצירת מראה צעיר ורענן",
      icon: "✨"
    },
    {
      title: "עצמות לחיים ברורות ומודגשות",
      description: "הדגשת עצמות הלחיים והחזרת נפח טבעי לאזור",
      icon: "🌟"
    },
    {
      title: "צוואר ארוך ואלגנטי כמו ברבור",
      description: "חיזוק שרירי הצוואר ושיפור היציבה והמראה",
      icon: "🦢"
    },
    {
      title: "עור מתוח, זוהר ורענן",
      description: "שיפור זרימת הדם והלימפה לעור בריא וזוהר",
      icon: "💫"
    },
    {
      title: "פנים סימטריות והרמוניות יותר",
      description: "איזון שרירי הפנים ליצירת הרמוניה וסימטריה",
      icon: "⚖️"
    },
    {
      title: "מייק-אובר טבעי – ללא זריקות וללא ניתוחים",
      description: "תוצאות דרמטיות וטבעיות לחלוטין בלי התערבות חיצונית",
      icon: "🌿"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              מה תגלי{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                בתהליך הזה ✔️
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              שיטה טבעית, בטוחה ויעילה להשגת מראה צעיר ורענן ללא טיפולים פולשניים
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-inter">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Benefits;