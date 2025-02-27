import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fff",
        secondary: "#462A5A",
        active: "#C2B390",
        accent: "#E8E8E8"

      },
      animation: {
        floatRotate: "floatRotate 13s ease-in-out infinite",
      },
      keyframes: {
        floatRotate: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(3px) rotate(90deg)" }, 
          "100%": { transform: "translateY(0px) rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
