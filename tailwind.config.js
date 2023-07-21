/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mob: { min: "150px", max: "767px" },
      md: { min: "768px" },
    },
  },
  plugins: [],
};
