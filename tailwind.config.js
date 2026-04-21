/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        iris: {
          200: '#A5A6F6',
          300: '#7879F1',
          500: '#5D5FEF',
        },
        graytext: {
          100: '#9898AD',
          200: '#5A5A6E',
          300: '#0F0F11',
        },
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
      },
    },
  },
  plugins: [],
};
