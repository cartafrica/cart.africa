/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        century: "#304D6D",
      },
      spacing: {
        120: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
