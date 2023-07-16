/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "13px",
        sm: "15px",
        lg: "15px",
        xl: "15px",
      },
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1281px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        clash: ["Clash Display Variable", "sans-serif"],
        satoshi: ["Satoshi Variable", "sans-serif"],
      },
      colors: {
        textColor: "#7e7d80",
        themeColor: "#15BFFD",
        themeColor2: "#48ffb6",
        themeColor3: "#B095DA",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
