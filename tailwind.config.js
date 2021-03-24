module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './**/*.vue',
  ],
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      "light": "#f2f2f2"
    })
  },
  variants: {},
  plugins: [],
}
