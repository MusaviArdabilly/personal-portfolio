/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      rotate: {
      '-17': '-17deg',
      },
      boxShadow: {
        light: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        dark: '0 2px 4px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
