/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
plugins:[],


// extends
    extend: {

// font size start
      fontSize: {
        
        'heroTitle': ['8rem', {
          lineHeight: '8rem',
          fontWeight: '500',
        }],

        'heroTitleSub': ['4.2rem', {
          lineHeight: '8rem',
          fontWeight: '400',
        }],
      },

      // font fontFamily start
      fontFamily: {
        'centabel': ['centabel', ...defaultTheme.fontFamily.sans],
      },

      

    },
  },

}