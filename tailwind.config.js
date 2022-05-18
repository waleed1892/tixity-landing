// const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#95B541',
          light: '#F2F9E4'
        },
        gray: '#8B99B2',
        gray2: '#F3F5F9',
        black: '#26243B',
        purple: '#3D3246'
      }
    },
  },
  plugins: [],
}
