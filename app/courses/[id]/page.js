import Link from "next/link";
import courses from "@/data/courses";
import { notFound } from "next/navigation";

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;

  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/courses"
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 font-medium text-slate-300 transition duration-300 hover:border-indigo-400/50 hover:bg-slate-800 hover:text-indigo-300"
        >
          ← חזרה לכל הקורסים
        </Link>

        {/* Course */}
        <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Course Header */}
          <div className="border-b border-slate-800 p-8 md:p-12">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              {/* Level */}
              <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 font-semibold text-indigo-300">
                {course.level}
              </span>

              {/* Price */}
              <span className="rounded-xl bg-indigo-500 px-4 py-2 font-bold text-white shadow-lg shadow-indigo-500/10">
                ₪{course.price}
              </span>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-400">
              Academy CodeHub
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
              {course.title}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-400">
              {course.description}
            </p>
          </div>

          {/* Course Details */}
          <div className="grid gap-6 p-8 md:grid-cols-2 md:p-12">
            {/* What You'll Learn */}
            <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:border-indigo-400/30">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-xl">
                💻
              </div>

              <h2 className="mb-3 text-xl font-bold text-white">
                מה תלמדו בקורס?
              </h2>

              <p className="leading-7 text-slate-400">
                בקורס תלמדו את היסודות החשובים של {course.title}
                ותתרגלו אותם באמצעות דוגמאות ופרויקטים מעשיים.
              </p>
            </section>

            {/* Course Information */}
            <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:border-indigo-400/30">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-xl">
                📚
              </div>

              <h2 className="mb-3 text-xl font-bold text-white">פרטי הקורס</h2>

              <div className="space-y-3 text-slate-400">
                <p>
                  <span className="font-semibold text-slate-200">רמה:</span>{" "}
                  {course.level}
                </p>

                <p>
                  <span className="font-semibold text-slate-200">מחיר:</span> ₪
                  {course.price}
                </p>

                <p>
                  <span className="font-semibold text-slate-200">תחום:</span>{" "}
                  פיתוח תוכנה
                </p>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="border-t border-slate-800 bg-indigo-500/5 p-8 text-center md:p-10">
            <h2 className="mb-3 text-2xl font-bold">מוכנים להתחיל ללמוד?</h2>

            <p className="mb-6 text-slate-400">
              הצעד הבא שלכם בעולם התכנות מתחיל כאן.
            </p>

            <Link
              href="/contact"
              className="inline-block rounded-xl bg-indigo-500 px-7 py-3 font-bold text-white shadow-lg shadow-indigo-500/10 transition duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-indigo-500/20"
            >
              צור קשר
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
