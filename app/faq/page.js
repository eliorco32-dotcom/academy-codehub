"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "למי מתאימים הקורסים של Academy CodeHub?",
    answer:
      "הקורסים שלנו מתאימים למתחילים, למפתחים שרוצים להעמיק את הידע שלהם ולמי שמעוניין להתפתח בתחום התוכנה.",
  },
  {
    id: 2,
    question: "האם צריך ידע מוקדם כדי להתחיל ללמוד?",
    answer:
      "לא. חלק מהקורסים מתאימים גם למתחילים ללא ניסיון קודם. בכל קורס מצוינת רמת הידע הנדרשת.",
  },
  {
    id: 3,
    question: "אילו טכנולוגיות לומדים באקדמיה?",
    answer:
      "בין היתר ניתן ללמוד JavaScript, React, Next.js, Node.js, MongoDB ופיתוח Full Stack.",
  },
  {
    id: 4,
    question: "האם הלימודים כוללים תרגול מעשי?",
    answer:
      "כן. במהלך הקורסים משלבים תרגילים ופרויקטים מעשיים שמאפשרים ליישם את החומר הנלמד.",
  },
  {
    id: 5,
    question: "איך אפשר ליצור קשר עם האקדמיה?",
    answer:
      "ניתן לפנות אלינו דרך טופס יצירת הקשר באתר, ואחד מנציגי האקדמיה יחזור אליכם.",
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  function toggleQuestion(id) {
    setOpenId((currentId) => (currentId === id ? null : id));
  }

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <section className="mb-14 text-center">
          <span className="mb-5 inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-300">
            מרכז העזרה
          </span>

          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            שאלות נפוצות
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
            תשובות לשאלות הנפוצות ביותר על Academy CodeHub. לא מצאתם את מה
            שחיפשתם? מוזמנים ליצור איתנו קשר.
          </p>
        </section>

        {/* Questions */}
        <section className="space-y-4">
          {questions.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className={`overflow-hidden rounded-2xl border bg-slate-800 shadow-lg transition duration-300 ${
                  isOpen
                    ? "border-indigo-400/50 shadow-indigo-500/10"
                    : "border-slate-800 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(item.id)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-right transition cursor-pointer hover:bg-slate-800/50"
                >
                  <span className="text-lg font-bold text-slate-100">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-2xl transition duration-300 ${
                      isOpen
                        ? "bg-indigo-500 text-white"
                        : "bg-indigo-400/10 text-indigo-300"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-800 px-6 pb-6 pt-5 leading-8 text-slate-400">
                    {item.answer}
                  </div>
                )}
              </article>
            );
          })}
        </section>

        {/* Bottom CTA */}
        <section className="mt-14 rounded-3xl border border-indigo-400/20 bg-indigo- p-8 text-center bg-slate-800">
          <h2 className="mb-3 text-2xl font-bold text-white">
            עדיין יש לכם שאלה?
          </h2>

          <p className="mb-6 text-slate-400">
            אנחנו כאן כדי לעזור לכם לעשות את הצעד הראשון.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-xl bg-indigo-500 px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-400"
          >
            צרו קשר
          </a>
        </section>
      </div>
    </main>
  );
}
