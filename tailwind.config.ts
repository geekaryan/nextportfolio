import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          screens: {
            'lg-md': '1000px', // Custom breakpoint at 1000px
          },
        },
      },
      colors: {
        background: "rgba(108, 104, 75, 0.09)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'bcport-img': "url('/a.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
