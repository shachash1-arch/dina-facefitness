import Navigation from "../../components/Navigation";

const BokalCoursePage = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-hero pt-20">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-2xl mx-auto bg-card p-12 rounded-3xl shadow-elegant">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
              🎬 קורס עיסוי בוקאלי
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ברוכה הבאה! מצאי את הלינק והסיסמה במייל שקיבלת
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="המייל שלך"
                className="w-full p-4 border-2 border-border rounded-2xl text-lg text-center"
              />
              <input
                type="text"
                placeholder="הסיסמה שקיבלת (dina_bokal_XXX)"
                className="w-full p-4 border-2 border-border rounded-2xl text-lg text-center"
              />
              <button className="w-full bg-gradient-primary text-white py-6 rounded-2xl font-bold text-xl shadow-glow hover:shadow-glow-lg transition-all duration-300">
                התחבר לצפייה בקורס
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BokalCoursePage;
