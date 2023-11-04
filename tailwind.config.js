/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["titleFont", "sans-serif"],
        textFont: ["textFont", "sans-serif"],
      },
      colors: {
        textColor: "#9B6D6D",
        backgroundColor: "#FFF5F5",
        selectedColor: "#D67979",
        hoverColor: "#F6B8B8",
      },
      spacing: {
        "1/5": "20%",

        "5/6": "83%",
      },
      backgroundImage: {
        tempBg: "url('./tempbg.png')",
      },
      width: {
        image: "28rem",
      },
      padding: {
        "1/2": "14%",
      },
    },
  },
  plugins: [],
};
