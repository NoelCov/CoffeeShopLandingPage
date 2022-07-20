/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.html"],
    theme: {
        extend: {},
        colors: {
            darkBrown: "#352D29",
            lightBrown: "#E3DACA",
            yellowBrown: "#B69970",
            gray: "#808080",
            shadowGray: "#e0e7ff",
        },
        fontFamily: {
            titleFont: ["Kaushan Script", "cursive"],
            linksFont: ["Poppins", "sans-serif"],
            textFont: ["Inconsolata", "monospace"],
        },
    },
    plugins: [],
};
