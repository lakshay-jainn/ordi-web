import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Theme: The Void & The Event Horizon
        void: {
          DEFAULT: "#050505", // Deepest matte black
          light: "#0a0a0a",
          dark: "#000000",
        },
        starlight: {
          DEFAULT: "#F8FAFC", // Crisp white
          dim: "#94A3B8", // Slate for secondary text
        },
        accretion: {
          DEFAULT: "#EAB308", // Gold core
          glow: "#FDE047", // Bright outer glow
          amber: "#D97706", // Deep amber
        },
        quantum: {
          DEFAULT: "#E2E8F0", // Silver
          metallic: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "shimmer-slide": "shimmer-slide 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "orbit-slow": "spin 60s linear infinite",
        "counter-orbit": "counter-spin 60s linear infinite",
        "warp-in": "warp-in 0.8s ease-out forwards",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "warp-in": {
          "0%": { opacity: "0", transform: "scale(0.9) translateZ(-100px)" },
          "100%": { opacity: "1", transform: "scale(1) translateZ(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "counter-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        }
      },
    },
  },
  plugins: [],
};
