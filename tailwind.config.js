module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: {
          paleBlue: 'hsl(225,100%,94%)',
          lightBlue: 'hsl(245,75%,52%)'
        },
        neutral: {
          paleBlue: 'hsl(225,100%,98%)',
          desaturatedBlue: 'hsl(224,23%,55%)',
          darkBlue: 'hsl(223,47%,23%)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // function ({ addBase }) {
    //   addBase({
    //     body: {
    //       backgroundColor: 'black',
    //       color: 'white',
    //     },
    //   });
    // },
  ],
}
