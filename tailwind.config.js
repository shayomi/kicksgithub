/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "300px",
        // => @media (min-width: 300px) { ... }

        md: "600px",
        // => @media (min-width: 300px) { ... }

        lg: "1000px",
        // => @media (min-width: 300px) { ... }
      },
    },
  },
  plugins: [],
};
