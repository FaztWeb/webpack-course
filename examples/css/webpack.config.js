const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    // must be an abosulute path, not a relative
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist/css/'
        })
      }
    ]
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
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    })
  ]
}
