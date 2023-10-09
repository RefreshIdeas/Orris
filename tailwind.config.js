/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
plugins:[],


// extends
    extend: {

      screens: {
       
      },

      padding: {
        sectionPadding: '75px',
        
        sectionPaddingMOB: '75px',
        sectionPaddingTAB: '75px',
      },

      margin: {
        sectionmargin: '75px',
      
      },


      dropShadow: {
        primary_shadow:'0 4px 4px rgba(0, 0, 0, 0.25)',
        secondary_shadow:'10px 10px 25px 0px rgba(0, 0, 0, 0.10)',


      },


     

// font size start
      // fontSize: {
        
      

      //   'heroTitleSub': ['4.2rem', {
      //     lineHeight: '4rem',
      //     fontWeight: '400',
      //   }],
      //   'sectionHeading': ['4.2rem', {
      //     lineHeight: '5rem',
      //     fontWeight: '500',
      //   }],

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
        
        primary_clr:'#007A7F',
        secondary_clr:'#3A3947',

        // bg colors
        primary_BG_clr:'#F5F8FF',        
        secondary_BG_clr:'#F5F4F4',  
        tertiary_BG_clr:'#FFB400',
        quartary_BG_clr:'#B87A02',
        senary_BG_clr:'#D2AF6F',
        septenary_BG_clr:'#5B5B5B',

        // border colors
        primary_border_clr:'#D9D9D9',
        secondary_border_clr:'rgba(#fff,0.25)',     
        

        // borderClrs
       
         
      },

      // font fontFamily start
      fontFamily: {
        'centabel': ['centabel', ...defaultTheme.fontFamily.sans],
      },

      

    },
  },

}