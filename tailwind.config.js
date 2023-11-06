/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        msm: "400px",
      },
      fontFamily: {
        titleFont: ["titleFont", "sans-serif"],
        textFont: ["textFont", "sans-serif"],
      },
      colors: {
        textColor: "#6B4747",
        backgroundColor: "#FFFEFE",
        selectedColor: "#D67979",
        artBg: "#2B2222",
        hoverColor: "#F6B8B8",
        artTextColor: "#F8E4E4",
      },
      flexGrow: {
        2: "2",
      },
      spacing: {
        "1/5": "20%",
        "5/6": "83%",
        veryLarge: "95vh",
        large: "75vh",
        med: "50vh",
        small: "25vh",
      },
      backgroundImage: {
        tempBg: "url('./tempbg.png')",
      },
      height: {
        large: "75vh",
        med: "50vh",
        small: "25vh",
        preview: "26rem",
      },
      maxWidth: {
        image: "28rem",
        large: "75vw",
        preview: "45vw",
        med: "65vw",
        small: "25vw",
        screen: "100vw",
      },
      padding: {
        "1/2": "14%",
      },
    },
  },
  plugins: [],
};
