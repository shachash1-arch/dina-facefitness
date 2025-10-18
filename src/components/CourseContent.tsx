const CourseContent = () => {
  const courseFeatures = [
    {
      title: "תרגילים מודרכים בווידאו",
      description: "הדגמות מפורטות ובהירות של כל תרגיל עם הסברים מדויקים",
      icon: "🎥",
      highlight: true
    },
    {
      title: "דגשים ותוויות אזהרה",
      description: "הנחיות חשובות לתרגול נכון ובטוח למניעת פציעות",
      icon: "⚠️",
      highlight: false
    },
    {
      title: "תרגילים לכל אזורי הפנים",
      description: "תרגילים מתמחים לכל אזור בפנים עם הסברים מדויקים",
      icon: "🎯",
      highlight: true
    },
    {
      title: "לוח זמנים מותאם אישית",
      description: "תוכנית תרגילים מדורגת לפי רמת הניסיון והזמן הפנוי",
      icon: "📅",
      highlight: false
    },
    {
      title: "גישה דיגיטלית מכל מקום",
      description: "צפייה בקורס מכל מכשיר, בכל זמן ובכל מקום שנוח לך",
      icon: "📱",
      highlight: true
    },
    {
      title: "מעקב התקדמות אישי",
      description: "מעקב אישי אחר התוצאות ומתן דגשים באופן פרטני",
      icon: "📊",
      highlight: false
    }
  ];

  const modules = [
    {
      title: "שיעור 1: עבודה על מערכת לימפטית זרימת דם והצוואר",
      content: "תרגילים לשיפור זרימת הדם והלימפה, חיזוק ושיפור אזור הצוואר והדקולטה",
      duration: "בסיס חשוב לכל התרגול"
    },
    {
      title: "שיעור 2: שליש תחתון של הפנים", 
      content: "סנטר, שפתיים, לחיים שרירי לעיסה, אף, קו לסת ותרגילים נגד סנטר כפול",
      duration: "מיקוד באזור התחתון"
    },
    {
      title: "שיעור 3: עיניים ומצח",
      content: "תרגילים מדויקים לחיזוק אזור העיניים, הרמת העפעפיים והחלקת המצח",
      duration: "מיקוד באזור העליון"
    },
    {
      title: "שיעור 4: תרגילים ליציבה נכונה",
      content: "תרגילים לשיפור היציבה המשפיעים באופן ישיר על מראה הפנים",
      duration: "יציבה"
    },
    {
      title: "שיעור 5: שיעור מלא ללא הסברים",
      content: "כל התרגילים מהדקולטה עד קודקוד הראש ברצף רצוף, מושלם לתרגול יומי",
      duration: "שיעור מקיף"
    },
    {
      title: "שיעור בונוס 1: תרגילים מתקדמים",
      content: "תרגילים מורכבים יותר לתוצאות מתקדמות ושיפור מואץ",
      duration: "רמה מתקדמת"
    },
    {
      title: "שיעור בונוס 2: תרגילים לאצבעות הרגליים",
      content: "קשר ישיר לעמוד השדרה וליציבה נכונה",
      duration: "בונוס"
    },
    {
      title: "שיעור בונוס 3: תרגילים לשרירי רצפת האגן",
      content: "משפיע בעקיפין על המראה, היציבה והתחושה הכללית",
      duration: "בונוס"
   }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              מה כולל{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                הקורס?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              קורס דיגיטלי מקיף עם כל מה שאת צריכה כדי להתחיל ולהצליח באימון פנים
            </p>
          </div>
          
          {/* Course Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {courseFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border ${
                  feature.highlight 
                    ? 'bg-gradient-soft shadow-elegant hover:shadow-glow border-turquoise/20' 
                    : 'bg-card shadow-soft hover:shadow-elegant border-border/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-inter">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Course Modules */}
          <div className="animate-fade-in">
            <h3 className="font-playfair text-3xl font-bold text-center text-foreground mb-12">
              מבנה הקורס - 8 שיעורים מקיפים
            </h3>
            
            <div className="space-y-6">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 border border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-1 space-y-2">
                    <h4 className="font-playfair text-xl font-semibold text-turquoise">
                      {module.title}
                    </h4>
                    <p className="text-muted-foreground font-inter">
                      {module.content}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <div className="bg-gold/10 px-4 py-2 rounded-full">
                      <span className="text-gold font-semibold font-inter text-sm">
                        {module.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Course Benefits Summary */}
          <div className="mt-16 p-10 bg-gradient-primary rounded-3xl text-center text-white animate-fade-in">
            <h3 className="font-playfair text-2xl font-bold mb-6">
              קורס דיגיטלי מלא עם גישה לכל החיים
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl">🕐</div>
                <h4 className="font-semibold">גמישות מלאה</h4>
                <p className="text-sm opacity-90">למדי בקצב שלך, בזמן שנוח לך</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">♾️</div>
                <h4 className="font-semibold">גישה לכל החיים</h4>
                <p className="text-sm opacity-90">רכישה חד פעמית עם גישה בלתי מוגבלת</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">📞</div>
                <h4 className="font-semibold">תמיכה מלאה</h4>
                <p className="text-sm opacity-90">קבלי תמיכה וייעוץ במהלך הקורס</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;