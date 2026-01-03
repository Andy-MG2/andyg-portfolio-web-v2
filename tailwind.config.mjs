import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { xs: "475px" },
      colors: {
        "skill-violet": "#8B5CF6", // violet-500
        "skill-blue": "#3B82F6", // blue-500
        "skill-pink": "#F472B6", // pink-400-ish
        "skill-lavender": "#A78BFA", // violet-400-ish
        "zinc": "#71717A", // zinc-500
        black: { DEFAULT: "#000000", 100: "#121417" },
        white: "#FFFFFF",
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
    },
  },
  plugins: [animate, typography],
};
