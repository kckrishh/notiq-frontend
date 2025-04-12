/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#14433B", // Main brand color (used in buttons, links, accents)
        background: "#F5F7FA", // Page background
        card: "#FFFFFF", // Used for white cards like forms and notes
        border: "#DDE2E5", // Light border color for input fields/cards
        heading: "#2C2C2C", // Heading text color
        text: "#333333", // Body and input text color
        grayText: "#666666", // Placeholder, helper, and muted text
        hover: "#103830",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Used for paragraph and input text
        poppins: ["Poppins", "sans-serif"], // Used for headings, buttons, brand/logo
      },
      animation: {
        slowspin: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
