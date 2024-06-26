import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {},
    },
    screens: {
      xs: "0px", // Extra small (dispositivos móviles pequeños)
      sm: "375px", // Small (dispositivos móviles)
      md: "768px", // Medium (tablets)
      lg: "1024px", // Large (portátiles y escritorios)
      xl: "1440px", // Extra large (pantallas grandes y alta resolución)
      "2xl": "1920px", // 2 Extra large (monitores de escritorio muy grandes)
    },
  },
  plugins: [],
};
export default config;
