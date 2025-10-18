import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";
import beforeAfter4 from "@/assets/before-after-4.jpg";
import beforeAfter5 from "@/assets/before-after-5.jpg";
import beforeAfter6 from "@/assets/before-after-6.jpg";
import beforeAfter7 from "@/assets/before-after-7.jpg";
import beforeAfter8 from "@/assets/before-after-8.jpg";
import beforeAfter9 from "@/assets/before-after-9.jpg";
import beforeAfter10 from "@/assets/before-after-10.jpg";
import beforeAfter11 from "@/assets/before-after-11.jpg";
import beforeAfter12 from "@/assets/before-after-12.jpg";
import beforeAfter13 from "@/assets/before-after-13.jpg";
import beforeAfter14 from "@/assets/before-after-14.jpg";
import beforeAfter15 from "@/assets/before-after-15.jpg";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Results = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const beforeAfterImages = [
    { image: beforeAfter1, title: "תוצאות מדהימות" },
    { image: beforeAfter2, title: "שיפור בצילינדר הצוואר" },
    { image: beforeAfter3, title: "עיניים פתוחות יותר" },
    { image: beforeAfter4, title: "הידוק עור הפנים" },
    { image: beforeAfter5, title: "קו לסת מודגש יותר" },
    { image: beforeAfter6, title: "הפחתת קמטים" },
    { image: beforeAfter7, title: "מראה צעיר וזוהר" },
    { image: beforeAfter8, title: "שיפור כללי בפנים" },
    { image: beforeAfter9, title: "שיפור פרופיל וצוואר" },
    { image: beforeAfter10, title: "פנים מורמות ורענות" },
    { image: beforeAfter11, title: "הפחתת נפיחות והידוק" },
    { image: beforeAfter12, title: "עיניים זוהרות ופתוחות" },
    { image: beforeAfter13, title: "קו לסת ברור ומודגש" },
    { image: beforeAfter14, title: "מראה צעיר ורענן" },
    { image: beforeAfter15, title: "שינוי משמעותי בפנים" },
  ];

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    
    console.log("Carousel initialized with", beforeAfterImages.length, "images");
    console.log("ScrollSnaps:", api.scrollSnapList().length);
  }, [api])

  const testimonials = [
    {
      name: "רחל, גיל 42",
      result: "תוך 3 חודשים ראיתי שינוי משמעותי בקו הלסת והעיניים נראות הרבה יותר פתוחות",
      rating: 5
    },
    {
      name: "שירה, גיל 38",
      result: "חברות שואלות אותי איך השגתי מראה כל כך רענן. התשובה היא Face Fitness עם דינה!",
      rating: 5
    },
    {
      name: "מיכל, גיל 45",
      result: "לאחר שנה של תרגול, אני נראית ומרגישה 10 שנים צעירה יותר. תודה דינה!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              התוצאות{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                מדברות בעד עצמן
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              ראו את השינויים המדהימים שהשיגו תלמידותי בדרך טבעית לחלוטין
            </p>
          </div>
          
          {/* Before and After Carousel */}
          <div className="mb-20">
            <div className="bg-muted rounded-3xl p-3 relative max-w-5xl mx-auto">
              <Carousel dir="rtl" setApi={setApi} opts={{ align: "start", loop: true, containScroll: "keepSnaps", slidesToScroll: 1, direction: "rtl" }} className="w-full mx-auto pb-6">
                <CarouselContent className="-ml-0">
                  {beforeAfterImages.map((item, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-full lg:basis-full pl-0">
                      <div className="relative aspect-[6/5] rounded-2xl shadow-elegant overflow-hidden flex items-center justify-center bg-background">
                        <img 
                          src={item.image}
                          alt={`תוצאות לפני ואחרי - ${item.title}`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-contain"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                          }}
                        />
                        {/* Before/After Labels */}
                        <div className="absolute top-3 left-3 bg-background/80 px-4 py-2 rounded-full shadow-soft">
                          <span className="font-playfair font-semibold text-foreground">לפני</span>
                        </div>
                        <div className="absolute top-3 right-3 bg-turquoise/90 px-4 py-2 rounded-full shadow-soft">
                          <span className="font-playfair font-semibold text-white">אחרי</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="top-auto bottom-4 left-4 right-auto translate-x-0" />
                <CarouselNext className="top-auto bottom-4 right-4 left-auto translate-x-0" />
              </Carousel>

              <div className="text-center mt-4">
                <p className="text-sm md:text-base text-muted-foreground font-inter">
                  <strong className="text-turquoise">תוצאות תלמידותי</strong> - שינוי אמיתי בדרך טבעית
                </p>
              </div>
            </div>
          </div>

          {/* Bonus Content */}
          <div className="mb-16 space-y-8">
            <div className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <h3 className="font-playfair text-2xl font-bold text-turquoise mb-6">
                ומה קורה כשמתקדמים צעד נוסף?
              </h3>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-4">
                בנוסף לתרגילים הבסיסיים, את מקבלת גישה גם לתרגילים מתקדמים יותר – חלקם מתוך שיטת Facebuilding.
                אלו תרגילים שמחזקים את השרירים, מוסיפים נפח ומעצבים את הפנים, למשל:
              </p>
              <ul className="space-y-2 text-muted-foreground font-inter">
                <li>• תרגיל ייחודי להדגשת עצמות הלחיים</li>
                <li>• תרגיל להרמת העפעף העליון</li>
                <li>• ועוד סדרה של תרגילים מתקדמים שנותנים מראה צעיר ורענן</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <h3 className="font-playfair text-2xl font-bold text-soft-pink-darker mb-6">
                💎 בונוס נוסף – לנשים במיוחד
              </h3>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                אומנם זה לא תרגיל פנים ישיר, אבל הוא משפיע בעקיפין על המראה, היציבה והתחושה הכללית:
                <strong className="text-turquoise"> חיזוק שרירי רצפת האגן.</strong>
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed mt-4">
                אני לא פיזיותרפיסטית, אבל במהלך לימודיי בתחום ה–<span className="text-turquoise font-semibold">Face Fitness</span> עברתי הכשרה של 3 שעות בנושא זה. 
                מאז אני מתרגלת באופן קבוע, ואני באמת מאמינה שכל אישה חייבת לדעת וליישם את זה בחיי היומיום.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-elegant border border-border/50">
              <h3 className="font-playfair text-2xl font-bold text-gold mb-6">
                👣 בונוס שלישי – תרגילי כפות רגליים
              </h3>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-4">
                לרוב אנחנו שוכחות, אבל גם לכפות הרגליים יש קשר ישיר לעמוד השדרה וליציבה.
                תרגילים פשוטים לאצבעות וכף הרגל:
              </p>
              <ul className="space-y-2 text-muted-foreground font-inter mb-4">
                <li>• מסייעים בהפחתת בליטות (כמו "עצם בולטת")</li>
                <li>• משפרים יציבה</li>
                <li>• ובסופו של דבר – תורמים גם להרמה טבעית של הפנים</li>
              </ul>
              <p className="text-lg text-turquoise font-inter font-semibold">
                כי כשיש לנו יציבה נכונה – הפנים תמיד נראות מורמות יותר! 
              </p>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold text-center text-foreground mb-12">
              מה אומרות התלמידות שלי
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in border border-border/50"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gold text-xl">⭐</span>
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground text-center italic font-inter leading-relaxed">
                      "{testimonial.result.split('Face Fitness').map((part, i, arr) => (
                        i < arr.length - 1 ? (
                          <span key={i}>
                            {part}<span className="text-turquoise font-semibold">Face Fitness</span>
                          </span>
                        ) : part
                      ))}"
                    </p>
                    
                    <div className="text-center">
                      <p className="font-playfair font-semibold text-turquoise">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Results Statistics */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center animate-fade-in">
            <div className="space-y-2">
              <div className="text-4xl font-playfair font-bold text-turquoise">95%</div>
              <p className="text-muted-foreground font-inter">מהתלמידות רואות שיפור תוך 30 יום</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-playfair font-bold text-gold">100%</div>
              <p className="text-muted-foreground font-inter">תוצאות טבעיות ללא תופעות לוואי</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-playfair font-bold text-soft-pink-darker">5</div>
              <p className="text-muted-foreground font-inter">שנות מחקר וניסיון מקצועי</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;