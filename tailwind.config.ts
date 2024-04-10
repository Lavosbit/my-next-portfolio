import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/app/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Georgia", ...defaultTheme.fontFamily.serif],
      },
    },
  },
};
export default config;
