import type { Config } from "tailwindcss";

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
      },
    },
    screens: {
      'sss': '360px',
      'ss': '414px',
      's': '540px',
      'xxm': '768px',
      'xm':'1024px',
      'm': '1280px',
      'l': '1440px',
      'xl': '1920px',
    }
  },
  plugins: [],
} satisfies Config;
