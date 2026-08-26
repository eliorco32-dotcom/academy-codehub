import Link from "next/link";
import courses from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export const metadata = {
  title: "Academy CodeHub",
};

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-white md:py-32">
        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-5 py-2 text-sm font-semibold text-indigo-300">
              🎓 העתיד שלך מתחיל כאן
            </span>

            <h1 className="mb-7 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              למדו פיתוח תוכנה
              <span className="block text-indigo-400">בנו את העתיד שלכם</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              קורסים מעשיים בטכנולוגיות המובילות בעולם הפיתוח, עם דגש על תרגול,
              פרויקטים וידע שבאמת אפשר להשתמש בו.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="rounded-xl bg-indigo-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-indigo-500/30"
              >
                גלו את הקורסים
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-slate-700 bg-slate-900/50 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:border-indigo-400/50 hover:bg-slate-800"
              >
                הכירו את Academy CodeHub
              </Link>
            </div>
          </div>

          {/* Hero stats */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center backdrop-blur">
              <p className="text-3xl font-extrabold text-white">6</p>
              <p className="mt-1 text-sm text-slate-400">קורסים מקצועיים</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center backdrop-blur">
              <p className="text-3xl font-extrabold text-white">100%</p>
              <p className="mt-1 text-sm text-slate-400">למידה מעשית</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center backdrop-blur">
              <p className="text-3xl font-extrabold text-white">∞</p>
              <p className="mt-1 text-sm text-slate-400">אפשרויות להתפתח</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-slate-600 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-2xl font-bold uppercase tracking-widest text-indigo-400">
              מתחילים מכאן
            </span>

            <h2 className="mb-4 text-5xl font-extrabold text-slate-900 ">
              קורסים נבחרים
            </h2>

            <p className="mx-auto max-w-xl text-slate-900">
              בחרנו עבורכם שלושה קורסים שיעזרו לכם לעשות את הצעד הראשון בעולם
              הפיתוח.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 px-7 py-3 font-bold text-slate-900 transition duration-300 hover:bg-slate-900 hover:text-white"
            >
              לכל הקורסים
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
