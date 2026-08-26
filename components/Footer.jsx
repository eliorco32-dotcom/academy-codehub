import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-500 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold text-indigo-400 transition hover:text-indigo-300"
            >
              Academy CodeHub
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              המקום שלכם ללמוד פיתוח תוכנה, לתרגל טכנולוגיות מודרניות ולהתקדם
              לעולם ההייטק.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-white">ניווט</h2>

            <nav className="flex flex-col items-start gap-3">
              <Link
                href="/"
                className="text-slate-400 transition duration-200 hover:translate-x-1 hover:text-indigo-400"
              >
                בית
              </Link>

              <Link
                href="/courses"
                className="text-slate-400 transition duration-200 hover:translate-x-1 hover:text-indigo-400"
              >
                קורסים
              </Link>

              <Link
                href="/about"
                className="text-slate-400 transition duration-200 hover:translate-x-1 hover:text-indigo-400"
              >
                אודות
              </Link>

              <Link
                href="/contact"
                className="text-slate-400 transition duration-200 hover:translate-x-1 hover:text-indigo-400"
              >
                צור קשר
              </Link>

              <Link
                href="/faq"
                className="text-slate-400 transition duration-200 hover:translate-x-1 hover:text-indigo-400"
              >
                שאלות נפוצות
              </Link>
            </nav>
          </div>

          {/* Help */}
          <div>
            <h2 className="mb-5 text-lg font-bold text-white">צריכים עזרה?</h2>

            <p className="mb-5 max-w-xs text-sm leading-7 text-slate-400">
              יש לכם שאלה לגבי הקורסים או תהליך הלמידה? אנחנו כאן בשבילכם.
            </p>

            <Link
              href="/faq"
              className="inline-block rounded-xl bg-indigo-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/10 transition duration-300 hover:-translate-y-1 hover:bg-indigo-400"
            >
              שאלות נפוצות
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Academy CodeHub. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
