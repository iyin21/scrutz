/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    40: "#F0F4F4",
                    50: "#455454",
                    90: "#247B7B26",
                    100: "#247B7B",
                },
                black: {
                    100: "#000000",
                },
                white: {
                    100: "#ffffff",
                },
                gray: {
                    100: "#999999",
                },
                red: {
                    100: "#990000",
                },
                green: {
                    100: "#009918",
                },
                purple:{
                  100:"#3B247B"
                }
            },
            fontFamily: {
                workSans: ["Work Sans", "sans-serif"],
                nunito: ["Nunito", "sans-serif"],
                syne: ["Syne", "sans-serif"],
            },
            fontSize: {
                "2xl": ["32px", "32px"],
                xl: ["24px", "28px"],
                "2lg": ["20px", "28px"],
                lg: ["16px", "24px"],
                md: ["14px", "20px"],
                "2sm": ["12px", "16px"],
                sm: ["10px", "14px"],
            },
        },
    },
    plugins: [],
}
