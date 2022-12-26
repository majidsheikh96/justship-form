/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          gray: "#F6F6F6",
        },
        dark: {
          purple: "#6211cb"
        },
        light: {
          purple: "#844FFA"
        }
      },
    },
  },
  plugins: [],
};
