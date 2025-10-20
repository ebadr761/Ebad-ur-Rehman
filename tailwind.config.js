/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1f2430',
        surface: '#191e2a',
        panel: '#242d38',
        border: '#2b3240',
        text: '#cbccc6',
        subtext: '#9da5b4',
        muted: '#6c7680',
        'accent-purple': '#d4bfff',
        'accent-blue': '#73d7ff',
        'accent-orange': '#ffcc99',
        'accent-green': '#a6cc70',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};