module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#212121'
      },
      fontFamily:{
        'mulish': 'Mulish',
        'Montserrat': 'Montserrat',
      },
      screens:{
        'hp':{'max': '858px'},
        'tab':{'max': '768px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
