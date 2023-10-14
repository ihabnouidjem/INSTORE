/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-20": "rgb(0 0 0/20%)",
        "black-30": "rgb(0 0 0/30%)",
        "black-70": "rgb(0 0 0/70%)",
        zinc30: "rgb(250 250 250/30%)",
        zinc70: "rgb(250 250 250/70%)",
      },
      boxShadow: {
        review: "30px 40px 50px -40px rgb(255 0 0/0.5)",
      },

      fontFamily: {
        ubaskervville: ["Baskervville", "serif"],
        uinter: ["Inter", "sans-serif"],
        ununito: ["Inter", "sans-serif"],
        ununitoSans: ["Nunito Sans", "sans-serif"],
        umono: ["PT Mono", "monospace"],
      },
      gridTemplateColumns: {
        "1fr": "1fr",
        repeatProducts: "repeat(auto-fill, minmax(300px, 1fr))",
        repeatTABProducts: "repeat(auto-fill, minmax(260px, 1fr))",
        repeatPHNProducts: "repeat(auto-fill, minmax(180px, 1fr))",
        repeatBrands: "repeat(auto-fill, minmax(200px, 1fr))",
        repeatPosts: "repeat(auto-fill, minmax(286px, 1fr))",
        repeatTABPosts: "repeat(auto-fill, minmax(260px, 1fr))",
        repeatPHNPosts: "repeat(auto-fill, minmax(150px, 1fr))",
        repAuto: "repeat(auto-fill, 1fr",
      },
      gridTemplateRows: {
        "1fr": "1fr",
      },
      gridColumn: {
        12: "1 / 2",
      },
      gridRow: {
        12: "1 / 2",
      },
      animation: {
        qstIn: "qstIn 300ms linear",
        qstOut: "qstOut 300ms linear",
        slideAds: "slideAds 4000ms linear infinite",
      },
      kayframes: {
        qstIn: {
          "0%": { background: "#fafafa" },
          "100%": { background: "#d4d4d8" },
        },
        qstOut: {
          "0%": { background: "#d4d4d8" },
          "100%": { background: "#fafafa" },
        },
        slideAds: {
          "0%": {
            left: "0",
          },
          "70%": {
            left: "0",
          },
          "100%": {
            left: "calc(-8px-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
