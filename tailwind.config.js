/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#47D1FF",
        secondary: "#907AD6",
        textPrimary: "#EEE",
        textSecondary: "#CFADFF",
        accent: "#252651",
        hoverSecondary: "#BC96E6",
        hoverPrimary: "#BC96E6",
        divider: "rgba(238, 238, 238, 0.10)",
        icons: "#393E46",
        overlay: "rgba(0, 0, 0, 0.25)",
        background: "#1B1C31",
        lavander: "#BABBDE",
        violet: "#3A3D69",
        pinkPurple: "#AE759F",
      },
      screens: {
        xs: "420px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
};
