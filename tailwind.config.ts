import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        googleSansFlex: ["var(--font-dm-sans)"],
        instrumentSerif: ["var(--font-instrument-serif)"],
      },
    },
  },
  plugins: [],
} satisfies Config;