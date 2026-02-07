import Navigation from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";

const FAQ = () => {
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };


  return (
    <div className="min-h-screen bg-background pt-24">
      <SEO title="שאלות ותשובות נפוצות | Face Fitness" description="תשובות לשאלות על אימון פנים: תדירות, תוצאות, בוטוקס, ציוד ועוד." jsonLd={faqJsonLd} />
      <Navigation />
      {/* Header */}
      <header className="py-12 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              שאלות{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ותשובות נפוצות
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter">
              כל מה שרציתם לדעת על אימון הפנים
            </p>
          </div>
        </div>
      </header>

      {/* FAQ Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-2xl px-6 shadow-soft hover:shadow-elegant transition-all duration-300"
                >
                  <AccordionTrigger className="text-right font-playfair text-lg font-semibold text-foreground py-6 hover:text-turquoise transition-colors">
                    <span className="text-turquoise text-xl ml-3">✨</span>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-muted-foreground font-inter leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;