/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

"primary": "#248062",

"secondary": "#13413B",

"accent": "#13413B",

"neutral": "#ffffff",

"base-100": "#E5F7F5",

"info": "#E5F7F5",

"dullgreen" :"#D6FFF1",

"success": "#356656",

"warning": "#fbbf24",

"error": "#e11d48",
          },
        },
      ],
    },
    plugins: [
      require('daisyui'),

    ],

}
