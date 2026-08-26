import Link from "next/link";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/courses", label: "קורסים" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
  { href: "/faq", label: "שאלות נפוצות" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-500 bg-slate-950 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500 text-xl shadow-lg transition duration-300 group-hover:rotate-3 group-hover:bg-indigo-400">
            🎓
          </span>

          <div>
            <p className="text-lg font-bold tracking-tight">Academy</p>

            <p className="text-sm font-medium text-indigo-300">CodeHub</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition duration-300 hover:bg-indigo-300 hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/courses"
          className="hidden rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-lg md:block"
        >
          התחילו ללמוד
        </Link>
      </div>
    </header>
  );
}
