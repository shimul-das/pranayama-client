// /** @type {import('tailwindcss').Config} */
//  export default {
//    content: [
//      "./index.html",
//      "./src/**/*.{js,ts,jsx,tsx}",
//    ],
//    theme: {
//      extend: {},
//    },
//    plugins: [require("daisyui")],
//  }


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#333", // Custom dark background color
        darkText: "#fff", // Custom dark text color
      },
    },
  },
  plugins: [require("daisyui")],
};


