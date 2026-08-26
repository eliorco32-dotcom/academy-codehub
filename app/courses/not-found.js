import Link from "next/link";

export default function CourseNotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-slate-900 px-6 py-12">
      <div className="text-center">
        <p className="mb-3 text-7xl font-bold text-blue-600">404</p>

        <h1 className="mb-4 text-3xl font-bold text-slate-50">הקורס לא נמצא</h1>

        <p className="mb-8 text-slate-200">הקורס שחיפשתם אינו קיים במערכת.</p>

        <Link
          href="/courses"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          חזרה לכל הקורסים
        </Link>
      </div>
    </main>
  );
}
