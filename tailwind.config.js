/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}", "./**/*.{html,js,php}"], // مراقبة ملفات HTML و JS و PHP في الجذر وجميع المجلدات الفرعية
  darkMode: 'class', // تأكد من إضافة هذا السطر
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4fd1c5',
          DEFAULT: '#319795',
          dark: '#285e61',
        },
        background: {
          light: '#f0f4f8',
          dark: '#1a202c',
        },
        text: {
          light: '#1a202c',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
