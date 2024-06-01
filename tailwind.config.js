/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robot: ["Satisfy", "sans-serif"],
      },
      fontSize: {
        "10px": "10px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "17px": "17px",
        "30px": "30px",
      },
    },
  },
  plugins: [],
};
