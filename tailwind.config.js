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
        clubAccent: "#10253F",
        clubGradient: "linear-gradient(0%: {background: var(--clubRed)}, 25%: {background: var(--clubOrange)}, 75%: {background: var(--clubPurple)}, 100%: {background: var(--clubBlue)})"
      },
      animation: {
				fade: 'fadeIn .25s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
    },
  },
  plugins: [],
};
