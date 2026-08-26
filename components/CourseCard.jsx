import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-2xl">
      <Link
        href={`/courses/${course.id}`}
        className="absolute inset-0 z-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label={`לצפייה בפרטי הקורס ${course.title}`}
      />

      <div className="relative z-20 pointer-events-none">
        <div className="mb-6 flex items-center justify-between">
          <span className="rounded-full bg-indigo-400/10 px-3 py-1.5 text-sm font-semibold text-indigo-300">
            {course.level}
          </span>

          <span className="text-lg font-bold text-white">₪{course.price}</span>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white transition duration-300 group-hover:text-indigo-300">
          {course.title}
        </h2>

        <p className="mb-7 min-h-20 leading-7 text-slate-400">
          {course.description}
        </p>

        <div className="flex items-center justify-between border-t border-slate-700 pt-5">
          <span className="font-semibold text-indigo-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:text-indigo-50">
            פרטי הקורס
          </span>

          <span className="text-xl text-indigo-300 transition duration-300 group-hover:-translate-x-1 group-hover:text-indigo-50">
            ←
          </span>
        </div>
      </div>
    </article>
  );
}
