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
      fontFamily: {
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        editor: {
          bg: "#0F172A",
          surface: "#16213A",
          border: "#28344F",
        },
        accent: {
          sky: "#38BDF8",
          amber: "#FBBF24",
          emerald: "#34D399",
        },
        trail: {
          pine: "#1F4D3A",
          pineLight: "#3D7A5C",
          path: "#B08968",
          ice: "#DCEEFB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
