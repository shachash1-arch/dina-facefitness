import dinaPortrait from "@/assets/dina-portrait.jpg";

const AboutDina = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground text-center">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Dina FaceFitness
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground font-inter text-center">
                <h3 className="text-2xl font-semibold text-foreground">המסע שלי לחיים עם פנים צעירות ובריאות</h3>
                
                <p>
                  בת 45, ומעולם לא עברתי טיפולים פולשניים – מה שאתם רואים על הפנים שלי הוא תוצאה של אימוני פנים בלבד.
                </p>
                
                <p>
                  בגיל 36 ילדתי את בתי הקטנה. בהריון עליתי 25 קילו, ולמרות שתמיד שמרתי על אורח חיים בריא, ידעתי שאעשה הכול כדי לחזור לעצמי. ואכן, תוך חמישה חודשים חזרתי למשקל הרגיל שלי. אבל אז שמתי לב לשינויים בפנים: הירידה במשקל והגיל התחילו לתת את אותותיהם.
                </p>
                
                <p>
                  בוטוקס וטיפולים אסתטיים מעולם לא דיברו אליי, אז חיפשתי דרך אחרת – טבעית ובטוחה. במקרה, נחשפתי לעולם ה־<span className="text-turquoise font-semibold">Face Fitness</span>. רכשתי קורס ממאמנת ברוסיה, וכבר אחרי כמה שבועות ראיתי שינוי ברור. אחרי שלושה חודשים – התוצאות היו ניכרות לעין.
                </p>
                
                <p>
                  כמי שתמיד אוהבת להבין דברים לעומק, לא הסתפקתי בתרגול. רציתי לדעת איך ולמה זה עובד. שאלתי את המאמנת שלי היכן היא למדה, ובדיוק אז פרצה הקורונה. זה היה מושלם – כי פתאום הכל עבר לזום, וכך מצאתי את עצמי לומדת <span className="text-turquoise font-semibold">Face Fitness</span> במוסקבה ב<span className="text-gold font-semibold">FaceFitness Academy</span>.
                </p>
                
                <p>
                  <strong className="text-turquoise">מאז אני חוקרת, מתעמקת ומתאמנת – וכבר חמש שנים אני עוסקת באימון פנים.</strong> אני מדריכה מוסמכת ל־<span className="text-turquoise font-semibold">Face Fitness</span>, ומלמדת נשים אחרות איך לשמור על מראה פנים צעיר, רענן וחיוני – בלי בוטוקס, בלי ניתוחים ובלי שום התערבות חיצונית.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="bg-turquoise/10 px-6 py-3 rounded-full">
                  <span className="text-turquoise font-semibold">5 שנות ניסיון</span>
                </div>
                <div className="bg-gold/10 px-6 py-3 rounded-full">
                  <span className="text-gold font-semibold">מאמנת מוסמכת</span>
                </div>
                <div className="bg-soft-pink/50 px-6 py-3 rounded-full">
                  <span className="text-foreground font-semibold">שיטה טבעית</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative">
                <img 
                  src={dinaPortrait} 
                  alt="דינה שאמיס - מאמנת אימון פנים" 
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-elegant"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-turquoise/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-soft-pink/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDina;