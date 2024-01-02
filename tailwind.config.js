/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1d2531",
        "trinary-color": "#b4d8f6",
        "trinary--color-m": "#42a5f5",
      },
    },
  },
  plugins: [],
};
