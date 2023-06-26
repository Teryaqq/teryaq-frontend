/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'node_modules/preline/dist/*.js',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('/hero_image.avif')"
            },
        },
    },
    plugins: [require("preline/plugin")]
}
