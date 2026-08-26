# Academy CodeHub

## תיאור הפרויקט

Academy CodeHub הוא אתר תדמית לאקדמיה ללימודי תכנות, שנבנה במסגרת מטלת תרגול ב-Next.js.

האתר כולל חמישה עמודים מרכזיים:

- דף הבית
- קורסים
- אודות
- יצירת קשר
- שאלות נפוצות

המידע על הקורסים נשמר בקובץ מקומי בשם `data/courses.js`.

## טכנולוגיות

- Next.js
- React
- JavaScript
- Tailwind CSS
- Next.js App Router

## מבנה הפרויקט

app/

├── about/
│ └── page.js

├── contact/
│ ├── layout.js
│ └── page.js

├── courses/
│ ├── [id]/
│ │ └── page.js
│ ├── not-found.js
│ └── page.js

├── faq/
│ ├── layout.js
│ └── page.js

├── globals.css
├── layout.js
└── page.js

components/

├── CourseCard.jsx
├── Footer.jsx
└── Navbar.jsx

data/

└── courses.js

## תכונות

- File-Based Routing באמצעות Next.js App Router
- Layout משותף לכל האתר
- Navbar ו-Footer לשימוש חוזר
- קומפוננטת CourseCard לשימוש חוזר
- שימוש ב-Props
- הצגת קורסים באמצעות `.map()`
- הצגת 3 קורסים נבחרים באמצעות `.slice(0, 3)`
- עמוד פרטי קורס באמצעות Dynamic Routing
- טיפול בקורס שלא נמצא באמצעות `notFound()`
- טופס יצירת קשר עם `useState`
- בדיקת שדות ריקים בטופס
- הודעת שגיאה במקרה של שדות חסרים
- הודעת הצלחה לאחר שליחת הטופס
- ניקוי שדות הטופס לאחר שליחה מוצלחת
- שאלות נפוצות עם פתיחה וסגירה באמצעות `useState`
- ניווט פנימי באמצעות `Link`
- עיצוב באמצעות Tailwind CSS
- עיצוב Responsive למסכים שונים
- אפקטי hover ו-transition
- Metadata לעמודים באתר
- עמודי פרטי קורס דינמיים לפי מזהה הקורס

## התקנה והרצה

### התקנת החבילות

לאחר הורדת או שכפול הפרויקט, יש לפתוח את הטרמינל בתיקיית הפרויקט ולהריץ:

```bash
npm install
```

### הפעלת שרת הפיתוח

לאחר התקנת החבילות, יש להריץ:

```bash
npm run dev -- -p 3001
```

### פתיחת האתר

לאחר שהשרת עולה, יש לפתוח בדפדפן:

http://localhost:3001

## שם הסטודנט

אליאור כהן
