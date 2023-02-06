/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: { min: "90rem" },
        ssm: { max: "460px" },
        mo: { max: "900px" },
      },
      fontFamily: {
        OpenSans: "var(--open-sans)",
      },
      colors: {
        gray: {
          6: "#666666",
        },
        green: {
          2: "#227A30",
          3: "#38942C",
        },
        blue: {
          0: "#0084FF",
        },
      },

      unf: ":nth=child(n + 2)",
    },
  },
  plugins: [],
};
