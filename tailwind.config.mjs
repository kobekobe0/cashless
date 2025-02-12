/** @type {import('tailwindcss').Config} */
const config = {
  important: true, // Ensures Tailwind utility classes always take priority
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"], // Add Roboto to the font stack
      },
      colors: {
        primaryDark: "#100389",
        primaryLight: "#FFFFFF",
        secondaryDark: "#292D35",
        blueDark: "#1E325C",
        deepBlue: "#3949AB",
        lightBlue: "#C9E5EC",
        yellowAccent: "#FDD116",
        redAccent: "#FF1717",
      },
      fontSize: {
        primaryTitle: ["32px", { fontWeight: "700", lineHeight: "1.2" }],
        secondaryTitle: ["28px", { fontWeight: "700", lineHeight: "1.2" }],
        primaryLabel: ["16px", { fontWeight: "500", lineHeight: "1.5" }],
        secondaryContent: ["14px", { fontWeight: "400", lineHeight: "1.5" }],
        buttonText: ["13px", { fontWeight: "500" }],
        actionLink: ["16px", { fontWeight: "500", textTransform: "uppercase" }],
        contentLink: ["14px", { fontWeight: "400", textDecoration: "underline" }],
      },
    },
  },
  plugins: [],
};

export default config;
