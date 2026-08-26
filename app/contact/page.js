"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess(false);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("נא למלא את כל השדות לפני שליחת ההודעה.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <section className="mb-14 text-center">
          <span className="mb-5 inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-300">
            אנחנו כאן בשבילכם
          </span>

          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            בואו נדבר
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
            יש לכם שאלה לגבי אחד הקורסים? רוצים לדעת איזה מסלול מתאים לכם?
            השאירו לנו הודעה ונחזור אליכם.
          </p>
        </section>

        {/* Content */}
        <section className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Information */}
          <div className="rounded-3xl border border-slate-800 bg-slate-800 p-8 shadow-xl">
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold text-white">
                נשמח לשמוע מכם
              </h2>

              <p className="leading-7 text-slate-400">
                אנחנו כאן כדי לעזור לכם לבחור את הקורס המתאים ולהתחיל את הדרך
                שלכם בעולם התכנות.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-xl">
                  📧
                </div>

                <div>
                  <p className="font-semibold text-white">אימייל</p>

                  <p className="mt-1 text-slate-400">hello@codehub.academy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-xl">
                  💬
                </div>

                <div>
                  <p className="font-semibold text-white">תמיכה</p>

                  <p className="mt-1 text-slate-400">נשמח לענות על כל שאלה</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-xl">
                  🚀
                </div>

                <div>
                  <p className="font-semibold text-white">מתחילים ללמוד</p>

                  <p className="mt-1 text-slate-400">הצעד הראשון מתחיל כאן</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <section className="rounded-3xl border border-slate-800 bg-slate-800 p-7 shadow-xl md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-slate-200"
                >
                  שם מלא
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="הקלידו את שמכם"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-slate-200"
                >
                  אימייל
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-slate-200"
                >
                  הודעה
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="כתבו לנו איך אפשר לעזור..."
                  rows={6}
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center font-medium text-red-400">
                  {error}
                </div>
              )}

              {/* Success */}
              {success && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-center font-medium text-emerald-400">
                  ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-500 px-6 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-indigo-500/20"
              >
                שליחת הודעה
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}
