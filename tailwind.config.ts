import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tw_bg: "#1C1C1C",
        tw_primary: "#D7544C",
        tw_secondary: "#D7B84C",
        tw_text: "#F6F6F6",
        tw_inactive: "#3F3F3F",
        tw_text_inactive: "#7F7F7F",
      },
      screens: {
        max_2xl: { max: "1536px" }, 
        max_2xl_3: { max: "1366px" },
        max_xl: { max: "1280px" },
        max_lg: { max: "1024px" },
        max_lg_2: { max: "845px" },
        max_md: { max: "768px" },
        max_sm: { max: "640px" },
        max_xs: { max: "480px" },
      },
    },
  },
  plugins: [],
};
export default config;
