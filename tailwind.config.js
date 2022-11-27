module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}","./pages/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}","./components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        kosugimaru: ['Kosugi Maru'],
        azeretmono: ['Azeret Mono'],
      },
    },
  },
  daisyui: {
    themes: ["cmyk", "winter"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  darkMode: "class",
}