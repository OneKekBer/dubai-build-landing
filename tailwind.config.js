/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./components/**/*.{html,js}",
      "./pages/**/*.{html,js}",
      "./index.html",
   ],
   theme: {
      fontSize: {
         xl: "clamp(60px, 15vw, 90px)",
         lg: "48px",
         md: "32px",
         sm: "24px",
      },
      extend: {},
   },
   plugins: [],
   // ...
};
