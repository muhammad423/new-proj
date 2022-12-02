/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'sm': '676px',
      // => @media (min-width: 676px) { ... }

      'md': '780px',
      // => @media (min-width: 768px) { ... }

      'lg': '990px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1180px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

   
    extend: {
      screens: {
        'xs': {'min':'300px', 'max':'675px'}, 
        // => @media (min-width: 992px) { ... }
      },

    },
  },
  plugins: [],
}
