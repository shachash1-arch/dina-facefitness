import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutDina from "@/components/AboutDina";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import CourseContent from "@/components/CourseContent";
import FinalCTA from "@/components/FinalCTA";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const faqs = [
    {
      question: "האם זה מתאים גם למי שמזריקה בוטוקס או עושה טיפולים אסתטיים?",
      answer: "בהחלט כן! התרגול מחזק את שרירי הפנים ותומך במבנה שלהם. גם אם בחרת עד היום בבוטוקס או חומרי מילוי – האימון יעזור לשמור על התוצאה לאורך זמן, להפחית את הצורך בחידוש תכוף, ולמי שרוצה – גם להפסיק להזריק לגמרי. מומלץ להתחיל לתרגל כחודש וחצי לאחר ההזרקה."
    },
    {
      question: "לאיזה גיל זה מתאים?",
      answer: "לכל גיל! נשים בשנות ה־20 משתמשות בתרגול לשימור המראה, ואילו נשים בגילאי 40, 50 ואף 60 ומעלה נהנות משיפור משמעותי – הרמה, החלקה וחיוניות."
    },
    {
      question: "מתי מתחילים לראות תוצאות?",
      answer: "זה אינדיבידואלי מאוד. אני אישית ראיתי שינוי כבר אחרי שבועיים–שלושה. כמו בחדר כושר – אי אפשר להבטיח מתי בדיוק יראו \"קוביות בבטן\", אבל התמדה מביאה תוצאות."
    },
    {
      question: "כמה פעמים בשבוע צריך לבצע?",
      answer: "מומלץ 4–5 פעמים בשבוע."
    },
    {
      question: "כמה זמן לוקח כל אימון?",
      answer: "האימון המלא נמשך כ־20 דקות. בנוסף, יש תרגילים קצרים של כמה דקות שאפשר לשלב בקלות במהלך היום – במשרד, ברכב או בבית."
    },
    {
      question: "האם צריך ציוד מיוחד?",
      answer: "לא. כל מה שצריך זה זוג ידיים, מראה וקצת סבלנות."
    },
    {
      question: "האם האימון מתאים גם לגברים?",
      answer: "בוודאי. גם גברים נהנים ממראה צעיר ומודגש יותר – קו לסת חד, עור מתוח ויציבה נכונה."
    },
    {
      question: "מה קורה אם מפסיקים לתרגל?",
      answer: "כמו בכל פעילות גופנית – אם מפסיקים לחלוטין, השרירים בהדרגה חוזרים למצבם הקודם. הבשורה הטובה: מספיק אימון קצר לשימור כדי לשמור על התוצאות לאורך שנים."
    },
    {
      question: "האם יש סיכונים או תופעות לוואי?",
      answer: "לא. כל עוד מתרגלים לפי ההדרכה – מדובר בתרגול טבעי לחלוטין, ללא כאבים וללא סיכונים. להפך – הוא אפילו משפר את זרימת הדם, בריאות העור והיציבה הכללית."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Face Fitness – אימון פנים טבעי עם דינה שאמיס" description="קורס אימון פנים טבעי עם דינה שאמיס – תוצאות טבעיות, תרגילים מודרכים ובונוסים." />
      <Navigation />
      <HeroSection />
      <AboutDina />
      <Benefits />
      <Results />
      <CourseContent />
      
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary">שאלות ותשובות נפוצות</h2>
          <p className="text-xl text-muted-foreground mb-12">
            כל מה שרצית לדעת על אימון הפנים הטבעי
          </p>
          
          <div className="text-right">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg bg-background/50 backdrop-blur-sm">
                  <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                    <span className="text-lg font-semibold text-primary">✨ {faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      <FinalCTA />
    </div>
  );
};

export default Index;