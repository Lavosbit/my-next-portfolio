import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/pages/**/*.{jsc,tsx}",
    "./src/app/components/**/*.{jsx,tsx}",
    "./src/app/**/*.{jsx,tsx}",
    "./src/app/model/**/*.{jsx,tsx}",
    "./src/app/about/**/*.{jsx,tsx}",
    "./src/app/resume/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
