/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'manus-blue': '#0A84FF',
        'apple-gray': '#F5F5F7',
        'netflix-black': '#000000',
        'success-green': '#34C759',
        'alert-red': '#FF3B30',
        'accent-purple': '#5E5CE6',
      },
      fontFamily: {
        'sf-display': ['SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
        'sf-text': ['SF Pro Text', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
}
