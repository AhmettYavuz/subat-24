/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        kitten: "url('./assets/kitten.jpg')",
      },
    },
  },
  plugins: [],
};
