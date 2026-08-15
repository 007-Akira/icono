import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        smoke: "#11120D",
        olive: "#565449",
        bone: "#D8CFBC",
        floral: "#FFFBF4",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
      maxWidth: { site: "1440px" },
      spacing: { section: "clamp(5rem, 9vw, 8rem)" },
    },
  },
  plugins: [],
};

export default config;
