import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061225",
          900: "#0B1B34",
          800: "#10284C",
          700: "#153B70",
        },
        gold: {
          500: "#D8A736",
          400: "#E9C46A",
          300: "#F3D995",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(216, 167, 54, 0.22)",
        panel: "0 28px 90px rgba(6, 18, 37, 0.18)",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowPan: {
          "0%": { transform: "scale(1.05) translateX(0)" },
          "100%": { transform: "scale(1.12) translateX(-1.5%)" },
        },
      },
      animation: {
        floatIn: "floatIn 900ms ease-out both",
        slowPan: "slowPan 14s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
