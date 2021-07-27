module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        authHeroImage: "url('images/authHeroImg.webp')",
      }),
      colors: {
        primary: "rgb(67, 97, 238)",
      },
      fontFamily: {
        primary: ["Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
