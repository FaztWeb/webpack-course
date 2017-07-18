// Basic configuration to use Javascript with
// Ecmascript6 and CSS 
module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude:/node_modules/,
        query: {
          presets:['es2015']
        }
      }
    ]
  }
}
