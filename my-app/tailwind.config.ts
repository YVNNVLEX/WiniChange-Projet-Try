import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      backgroundImage: {
        "conic-gradient":
          "conic-gradient(from 225deg, #00FF00, #d35400, #FFCC00, #2980b9, #00FF00)",
      },
      stroke: {
        1: "#26242C",
      },
      
    },
  },
  plugins: [],
};
export default config;
