import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F3E8DE",
        coral: "#FF7F8A",
        sunrise: "#FFC466",
        ocean: "#3A86FF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  safelist: [
    // ensure focus utilities for a11y helpers always included
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
  ],
  plugins: [],
};

export default config;
