const path = require('path')

module.exports = {
  devServer: {
    port: 612
  },
  pluginOptions: {
    // Automatic imports (SCSS variables, mixins)
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve(__dirname, 'src/assets/scss/imports.scss')
      ]
    }
  }
}
