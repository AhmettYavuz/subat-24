/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        kitten: "url('./assets/kitten.jpg')",
      },
      colors: {
        siyah: "#333",
      },
    },
  },
  plugins: [],
};
