const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'customGreen': 'rgba(171, 239, 95, 1)',
                'light-green': 'rgba(171, 239, 95, 1)',
                'background': 'rgba(244, 244, 244, 1)',
                'card1': 'rgba(231, 193, 211, 1)',
                'card2': 'rgba(239, 218, 110, 1)',
                'card3': 'rgba(164, 218, 195, 1)',
                'card4': 'rgba(119, 170, 234, 1)',
                'footerP': 'rgba(115, 115, 115, 1)'
            },
        },
    },
    plugins: [require('daisyui'),],
}