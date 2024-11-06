const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['"Press Start 2P"', ...defaultTheme.fontFamily.sans],
            sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                yellow: colors.amber,
                "dark-purple": "#130113",
                "dark-pink": "#130118",
                "dark-blue": "#000810",
                "dark-green": "#040a00",
                "dark-yellow": "#160e00",
                "dark-red": "#0a0300"
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
