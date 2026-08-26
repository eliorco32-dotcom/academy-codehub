export const metadata = {
  title: "אודות | Academy CodeHub",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <section className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-300">
            מי אנחנו?
          </span>

          <h1 className="mb-5 text-4xl font-extrabold text-white md:text-5xl">
            אודות Academy CodeHub
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
            מקום שבו סקרנות פוגשת טכנולוגיה, ולמידה הופכת ליכולת אמיתית.
          </p>
        </section>

        {/* About Content */}
        <section className="mx-auto max-w-4xl space-y-6 text-lg leading-9 text-slate-300">
          <p>
            Academy CodeHub היא אקדמיה ללימודי תכנות שנועדה לעזור לאנשים שרוצים
            להיכנס לעולם הטכנולוגיה ולפתח בסיס מקצועי בתחום הפיתוח.
          </p>

          <p>
            אנחנו מאמינים שלימוד תכנות לא צריך להסתכם בקריאת חומר תיאורטי. לכן
            הקורסים שלנו משלבים הסברים ברורים, תרגול מעשי ופרויקטים שמאפשרים
            לתלמידים ליישם את מה שלמדו.
          </p>

          <p>
            המטרה שלנו היא ליצור סביבת למידה נגישה, מסודרת ומעשית, שבה כל תלמיד
            יכול להתקדם בקצב שלו ולבנות בהדרגה את הביטחון והידע הדרושים לעולם
            הפיתוח.
          </p>
        </section>

        {/* Statistics */}
        <section className="mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Academy CodeHub במספרים
            </h2>

            <p className="mt-3 text-slate-400">
              הנתונים שמספרים את הסיפור שלנו
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Graduates */}
            <div className="group rounded-3xl border border-slate-800 bg-slate-800 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-indigo-400/50 hover:shadow-indigo-500/10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-400/10 text-2xl transition duration-300 group-hover:scale-110">
                🎓
              </div>

              <p className="text-4xl font-extrabold text-white">1,200+</p>

              <p className="mt-2 font-medium text-slate-400">בוגרים</p>
            </div>

            {/* Courses */}
            <div className="group rounded-3xl border border-slate-800 bg-slate-800 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-indigo-400/50 hover:shadow-indigo-500/10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-400/10 text-2xl transition duration-300 group-hover:scale-110">
                💻
              </div>

              <p className="text-4xl font-extrabold text-white">6</p>

              <p className="mt-2 font-medium text-slate-400">קורסים</p>
            </div>

            {/* Experience */}
            <div className="group rounded-3xl border border-slate-800 bg-slate-800 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-indigo-400/50 hover:shadow-indigo-500/10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-400/10 text-2xl transition duration-300 group-hover:scale-110">
                🚀
              </div>

              <p className="text-4xl font-extrabold text-white">8+</p>

              <p className="mt-2 font-medium text-slate-400">שנות ניסיון</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
