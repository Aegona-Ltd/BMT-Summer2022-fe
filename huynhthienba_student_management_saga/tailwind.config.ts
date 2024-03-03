import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#FFFFFF",
          200: "#FBFBFB",
        },
        dark: {
          100: "#000000",
          200: "#1F1F1F",
          300: "#1B1B1B",
          400: "#131313",
          500: "#1A1A1A",
          600: "#1E1E1E",
        },
        grey: {
          100: "#8D8D8D",
          200: "#E0E0E0",
          300: "#484848",
          400: "#616161",
          500: "#717171",
          600: "#848484",
          700: "#C9C9C9",
        },
      },
      fontSize: {
        "3xl": ["40px", "110%"],
        "2xl": ["36px", "110%"],
        xl: ["28px", "120%"],
        lg: ["18px", "140%"],
        base: ["16px", "140%"],
        sm: ["14px", "140%"],
        xs: ["12px", "normal"],
      },
    },
  },
  plugins: [],
};
export default config;
