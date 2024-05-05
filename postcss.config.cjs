module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwind"),
    require("tailwindcss/nesting"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
