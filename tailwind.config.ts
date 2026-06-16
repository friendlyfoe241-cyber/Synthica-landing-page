import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["--font-inter"],
        googleSansFlex: ["--font-google-sans-flex"],
      },
    },
  },
  plugins: [],
} satisfies Config;