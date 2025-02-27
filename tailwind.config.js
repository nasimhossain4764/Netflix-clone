/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // HTML & JS ফাইলগুলোর জন্য
  theme: {
    extend: {
      colors: {
        primary: "#E50914", // Netflix-red color
        dark: "#141414", // Netflix background color
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Netflix-font
      },
    },
  },
  plugins: [],
};
