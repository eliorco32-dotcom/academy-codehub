import courses from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export const metadata = {
  title: "קורסים | Academy CodeHub",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <section className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-300">
            המסלולים שלנו
          </span>

          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            הקורסים שלנו
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
            בחרו את המסלול שמתאים לכם ורכשו את הכלים הדרושים כדי להתחיל לבנות את
            הקריירה שלכם בעולם התוכנה.
          </p>
        </section>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
}
