const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    // must be an abosulute path, not a relative
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  plugins: [
    // add an object to pass data
    new HtmlWebpackPlugin({
      title: 'Webpack and HTML Plugin',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true
    })
  ]
}
