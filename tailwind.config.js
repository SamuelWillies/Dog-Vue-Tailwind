module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false,
     theme: {
       extend: {
        colors: {
          'bg': '#082032',
          'bgcard': '#2C394B',
          'bgdiscount': '#3b4c63'
        },
        screens: {
          'sm': '600px',
          'md': '720px'
         },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }