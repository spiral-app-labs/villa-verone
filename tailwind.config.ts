import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: "#1a1a1a",
          800: "#222222",
          700: "#2a2a2a",
          600: "#333333",
        },
        brass: {
          DEFAULT: "#c9a84c",
          light: "#d4b96a",
          dark: "#b08d3a",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dark: "#e8e0d0",
        },
        burgundy: {
          DEFAULT: "#722f37",
          light: "#8b3a44",
          dark: "#5a252c",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
