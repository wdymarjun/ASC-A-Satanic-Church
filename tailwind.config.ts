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
        sanctum: {
          950: "#070608",
          900: "#0d0c10",
          850: "#121117",
          800: "#18161f",
          700: "#24212d",
          border: "#292430",
          crimson: "#8b1818",
          "crimson-glow": "#c92424",
          ember: "#d4432a",
          gold: "#c5a059",
          "gold-muted": "#8d7240",
          bone: "#ede9e3",
          parchment: "#cfc9be",
          ash: "#8c8680",
        },
      },
      fontFamily: {
        serif: ["Cinzel", "Georgia", "Cambria", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
