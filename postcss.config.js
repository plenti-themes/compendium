const production = process.env.NODE_ENV === "production";
const cssnano = require("cssnano");

const defaultOpts = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    production ? cssnano({ preset: "default" }) : null,
  ],
};

module.exports = defaultOpts;
