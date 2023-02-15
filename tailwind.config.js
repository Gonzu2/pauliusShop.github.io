/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        xl: "1400px",
      },
      animation: {
        body: "body 5s ease infinite",
      },
      keyframes: {
        body: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        dropShadow: {
          "3xl": "0 35px 35px #fff",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
