import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";


export default{
    darkMode: "class",
    content:[
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme:{
        extend:{
            screens:{ xs: "475px" },
            colors:{
                primary: {DEFAULT: "#0A1172"},
                secondary: "#1520A6",
                black: {DEFAULT : "#000000", 100: "#121417"},
                white: "#FFFFFF"
            },
            fontFamily:{
                "work-sans":["var(--font-work-sans)"],
            },
        },
    },
    plugins: [animate, typography],
};