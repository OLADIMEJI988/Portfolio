/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      xl: "1200px",
      mdXl: "1146px",
      header: "1010px",
      smXl: "976px",
      xsXl: "912px",
      md: "866px",
      mmd: "792px",
      smd: "725px",
      xsmd: "700px",
      sm: "590px",
      ssm: "541px",
      xsm: "521px",
      ctm: "460px",
      vctm: "415px",
      sctm: "386px",
      mobile: "320px",
    },

    extend: {},
  },
  plugins: [],
}
