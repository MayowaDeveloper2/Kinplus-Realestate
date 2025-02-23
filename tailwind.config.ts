import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': { 'min': '360px', 'max': '410px' },
      'sm': { 'min': '412px', 'max': '767px' },
      'lg': '1024px', // Applies to 1024px and above
    },
    extend: {
      colors: {
        customBlue: "#390ca2",
      },
    },
  },
  plugins: [],
} satisfies Config;
