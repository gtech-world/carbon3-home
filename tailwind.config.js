/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: { min: "90rem" },
        ssm: { max: "460px" },
        mo: { max: "900px" },
        md:  [
          {'min': '0', 'max': '1280px'},
        ]
      },
      fontFamily: {
        OpenSans: "var(--open-sans)",
      },
      colors: {
        gray: {
          3: "#333333",
          6: "#666666",
          9: "#999999",
          14: "#DDDDDD",
          16: "#f3f3f3",
          18: "#4A4A4A",
          20: "#eeeeee",
          bg: "#f1f1f1",
          28: "#f8f8f8"
        },
        green: {
          2: "#29953A",
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
