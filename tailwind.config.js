const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"),addVariablesForColors],
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


// module.exports = {
//     content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       animation: {
//         first: "moveVertical 30s ease infinite",
//         second: "moveInCircle 20s reverse infinite",
//         third: "moveInCircle 40s linear infinite",
//         fourth: "moveHorizontal 40s ease infinite",
//         fifth: "moveInCircle 20s ease infinite",
//       },
//       backgroundImage: {
//                 "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//                  "gradient-conic":
//                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//                },
//       keyframes: {
//         moveHorizontal: {
//           "0%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//           "50%": {
//             transform: "translateX(50%) translateY(10%)",
//           },
//           "100%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//         },
//         moveInCircle: {
//           "0%": {
//             transform: "rotate(0deg)",
//           },
//           "50%": {
//             transform: "rotate(180deg)",
//           },
//           "100%": {
//             transform: "rotate(360deg)",
//           },
//         },
//         moveVertical: {
//           "0%": {
//             transform: "translateY(-50%)",
//           },
//           "50%": {
//             transform: "translateY(50%)",
//           },
//           "100%": {
//             transform: "translateY(-50%)",
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };



// module.exports = {
//   content: ["./src/**/*.{ts,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       animation: {
//         first: "moveVertical 30s ease infinite",
//         second: "moveInCircle 20s reverse infinite",
//         third: "moveInCircle 40s linear infinite",
//         fourth: "moveHorizontal 40s ease infinite",
//         fifth: "moveInCircle 20s ease infinite",
//       },
//       keyframes: {
//         moveHorizontal: {
//           "0%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//           "50%": {
//             transform: "translateX(50%) translateY(10%)",
//           },
//           "100%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//         },
//         moveInCircle: {
//           "0%": {
//             transform: "rotate(0deg)",
//           },
//           "50%": {
//             transform: "rotate(180deg)",
//           },
//           "100%": {
//             transform: "rotate(360deg)",
//           },
//         },
//         moveVertical: {
//           "0%": {
//             transform: "translateY(-50%)",
//           },
//           "50%": {
//             transform: "translateY(50%)",
//           },
//           "100%": {
//             transform: "translateY(-50%)",
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
