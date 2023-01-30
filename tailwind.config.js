/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: { min: "90rem" },
      },
      fontFamily: {
        OpenSans: 'var(--open-sans)',
      },
      colors: {
        green: {
          2: "#227A30",
          3: "#38942C",
        },
      },
    },
  },
  plugins: [],
};
