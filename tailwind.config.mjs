/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#100389",
        secondary: "#292D35",
        darkBlue: "#1E325C",
        royalBlue: "#3949AB",
        lightBlue: "#C9E5EC",
        yellowGold: "#FDD116",
        lightRed: "#FF1717",
      },
      fontSize: {
        "primary-title": ["32px", { fontWeight: "bold", lineHeight: "1.2" }],
        "secondary-title": ["28px", { fontWeight: "bold", lineHeight: "1.2" }],
        "primary-content": ["16px", { fontWeight: "500", lineHeight: "1.5" }],
        "secondary-content": ["14px", { fontWeight: "400", lineHeight: "1.5" }],
        "button": ["13px", { fontWeight: "500" }],
        "action-link": ["16px", { fontWeight: "500", textTransform: "uppercase" }],
        "content-link": ["14px", { fontWeight: "400", textDecoration: "underline" }],
      },
    },
  },
  plugins: [],
};

export default config;
