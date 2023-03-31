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
          9: "#999999",
          14: "#DDDDDD",
          16: "#f3f3f3",
          18: "#4A4A4A",
        },
        green: {
          2: "#227A30",
          28: '#2E8C3D',
          3: "#38942C",
          4: "#CBDED0",
        },
        blue: {
          0: "#0084FF",
        },
        orange: {
          16: "#FF8D00",
          169: "#FF9640",
        },
      },

      unf: ":nth=child(n + 2)",
    },
  },
  plugins: [],
};
