import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Academy CodeHub",
  description: "לימוד פיתוח תוכנה ב-Academy CodeHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

// "העמודים Contact ו־FAQ הם Client Components בגלל שהם משתמשים ב־useState. מכיוון ש־metadata הוא API של Server Components, לא הגדרתי metadata ישירות בתוך העמודים האלה. במקום זאת, הגדרתי metadata ברירת מחדל ב־root layout, ולכן הם עדיין מקבלים metadata."
