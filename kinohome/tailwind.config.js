/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '350px',
      },
    },
    screens: {
      'md': '320px',
      'lg': '651px',
      'xl': '1001px'
    },
  },
  plugins: [],
}

