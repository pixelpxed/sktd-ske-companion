/** @type {import('tailwindcss').Config} */
module.exports = {
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
        clubRed: "#EB695A",
        clubOrange: "#E98462",
        clubPurple: "#6370B9",
        clubBlue: "#A16499",
        clubAccent: "#10253F"
      },
      animation: {
        fade: 'fadeIn .25s ease-in-out',
        slideIn: 'slideIn .25 ease-out'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      },
    },
  },
  plugins: [],
};
