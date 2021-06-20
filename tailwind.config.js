// Setup boolean to run purge only when not
// currently in development
// const production = !process.env.ROLLUP_WATCH;
const production = false;

// module.exports = {
// 	future: {
// 	  purgeLayersByDefault: true,
// 	  removeDeprecatedGapUtilities: true,
// 	},

module.exports = {
  // leverage tailwind built-in css purge feature
  purge: {
    content: ["./layouts/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
  // extend tailwind's theme with new color schemes
//   theme: {
//     extend: {
//       colors: {
//         csCoolness: {
//           primary: "#367ee9",
//           secondary: "#a0aec0",
//           accent: "#718096",
//           background: "#fff",
//           main: "#0d0106",
//           header: "#2d3748",
//         },
//         csSimplicity: {
//           primary: "#367ee9",
//           secondary: "#a0aec0",
//           accent: "#718096",
//           background: "#fff",
//           main: "#0d0106",
//           header: "#2d3748",
//         },
//       },
//     },
//   },
  variants: {},
  plugins: [],
};
