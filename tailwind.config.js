// Setup boolean to run purge only when not
// currently in development
// const production = !process.env.ROLLUP_WATCH;
const production = process.env.NODE_ENV === 'production';

// module.exports = {
// 	future: {
// 	  purgeLayersByDefault: true,
// 	  removeDeprecatedGapUtilities: true,
// 	},

const defaultOpts = {
  // leverage tailwind built-in css purge feature
  purge: {
    // disable purge in dev
    enabled: production,
    content: ["./layouts/**/*.svelte"],
    // content: ["./public/**/*.html"],
  },
  // extend tailwind's theme with new color schemes
  theme: {
    extend: {
      height: (theme) => ({
        "screen-90": "90vh",
        "screen-80": "80vh",
        "screen-70": "70vh",
        "screen-60": "60vh",
        "screen-50": "50vh",
        "screen-40": "40vh",
        "screen-30": "30vh",
        "screen-20": "20vh",
      }),
      width: (theme) => ({
        "screen-90": "90vh",
        "screen-80": "80vh",
        "screen-70": "70vh",
        "screen-60": "60vh",
        "screen-50": "50vh",
        "screen-40": "40vh",
        "screen-30": "30vh",
        "screen-20": "20vh",
      }),
    },
  },
  variants: {},
  plugins: [],
};

module.exports = defaultOpts;
