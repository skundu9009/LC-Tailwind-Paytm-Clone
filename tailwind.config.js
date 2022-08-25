module.exports = {
  content: [
    './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '378px',
      sx: '768px',
      md: '1050px',
      lg: '1260px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'brightblue': 'rgb(0, 186, 242)',
        'darkblue': 'rgb(0, 41, 112)',
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
