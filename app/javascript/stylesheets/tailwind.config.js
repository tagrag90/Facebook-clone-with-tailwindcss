module.exports = {
  purge: [
    "./app/**/*.html.erb",
    ".app/helpers/**/*.rb",
    ".app/javascript/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-main": "#18191A",
        "dark-second": "#242526",
        "dark-third": "#3A3B3C",
        "dark-txt": "#B8BBBF",
        "logo-text": "#2CE2D0",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
