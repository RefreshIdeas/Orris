/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
plugins:[],


// extends
    extend: {

      padding: {
        sectionPadding: '75px',
      },


      dropShadow: {
theme1:'0 4px 4px rgba(0, 0, 0, 0.25)',

      },

// font size start
      // fontSize: {
        
      

<<<<<<< HEAD
        'heroTitleSub': ['4.2rem', {
          lineHeight: ' 4rem',
          fontWeight: '400',
        }],
        'sectionHeading': ['4.2rem', {
          lineHeight: '5rem',
          fontWeight: '500',
        }],
=======
      //   'heroTitleSub': ['4.2rem', {
      //     lineHeight: '4rem',
      //     fontWeight: '400',
      //   }],
      //   'sectionHeading': ['4.2rem', {
      //     lineHeight: '5rem',
      //     fontWeight: '500',
      //   }],
>>>>>>> 16aaa47226451ac8f381205c7500cfdf54c97569

      //   'sectionSubHeading': ['2rem', {
      //     lineHeight: '3.4rem',
      //     fontWeight: '300',
      //   }],
      //   'sectionText': ['1.8rem', {
      //     lineHeight: '3rem',
      //     fontWeight: '300',
      //   }],


      // },


      colors:{
        theme1:'#007A7F',
        theme2:'#3A3947',
        light_blue:'#F5F8FF',
        light_blue:'#D2AF6F',
        themeGradient1:'#FFB400',
        themeGradient1_1:'#B87A02'
         
      },

      // font fontFamily start
      fontFamily: {
        'centabel': ['centabel', ...defaultTheme.fontFamily.sans],
      },

      

    },
  },

}