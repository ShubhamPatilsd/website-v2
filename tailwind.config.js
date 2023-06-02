module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        paragraph: "var(--paragraph)",
        background: {
          lighter: "var(--background_lighter)",
          DEFAULT: "var(--background)",
        },
        secondary: "var(--secondary)",
      },

      fontFamily: {
        sans: [
          "EB Garamond",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        monospace: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
