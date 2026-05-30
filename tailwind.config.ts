import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201b",
        moss: "#42624b",
        sage: "#eff5ee",
        road: "#f7f2e8",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 27, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
