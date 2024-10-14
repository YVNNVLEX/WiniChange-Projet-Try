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
      animation: {
        'rotate-opposite': 'rotate-opposite 30s linear infinite',
        'rotate-infinity': 'rotate-infinity 30s linear infinite',
      },
      keyframes: {
        'rotate-opposite': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-90deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '75%': { transform: 'rotate(-270deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'rotate-infinity': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    
    },
  },
  plugins: [],
};
export default config;
