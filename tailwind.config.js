const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                xs: '480px',
                // => @media (min-width: 480px) { ... }

                sm: '650px',
                // => @media (min-width: 650px) { ... }

                md: '786px',
                // => @media (min-width: 650px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            fontSize: {
                xs: '0.7rem',
                sm: '0.8rem',
                base: '1rem',
                xl: '1.25rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            },
            fontFamily: {
                Roboto: ['Roboto'],
            },
            colors: {
                black: '#070707',
                'dark-blue': '#121228',
                'nav-default': '#d93c9f',
                blue: '#04aac7',
                'extra-green': '#2ffba1',
                green: '#23dcc8',
                'bright-green': '#28f4af',
                gray: '#6a7f8e',
                yellow: '#f3ba2f',
                red: '#e84142',
            },
            backgroundImage: {
                'banner-image': "url('/banner.jpg')",
            },
        },
    },
    plugins: [],
};

