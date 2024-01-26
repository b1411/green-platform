/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: "#1C7E66",
                "primary-content": "#ffffff",
                secondary: "#14584f",
                "secondary-content": "#ffffff",
                accent: "#FFC107",
                neutral: "#3d4451",
                base: {
                    100: "#ffffff",
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mylight: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#1C7E66",
                    "primary-focus": "#14584f",
                    "primary-content": "#ffffff",
                    secondary: "#F4E04D",
                    "secondary-focus": "#F2D024",
                    "secondary-content": "#ffffff",
                    accent: "#FFC107",
                    "accent-focus": "#FFA000",
                    "accent-content": "#ffffff",
                    neutral: "#3d4451",
                    "neutral-focus": "#2a2e37",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#ffffff",
                    "base-300": "#ffffff",
                    "base-content": "#000000",
                },
            },
        ],
    },
};
