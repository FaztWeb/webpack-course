## Webpack Course
this a webpak course that focused on webpack version 3

## Installation
- to see all versions of webpack: `npm view webpack versions --json`
- to install webpack: `npm install webpack`
  - add as DevDependency: `-D`
  - add as globally: `-g`

## Usefull Commands
  - to transform a file: `webpack .src/input.js ./dist/output.js`
    - to watch changes: `--watch` or `-d`
    - to build for production: `-p`
  - to import a file: `require("./miFile.js")`
  - install and require modules, fuctions , and so on
  7. instalar loaders: `npm intall css-loader style-loader --save-dev`
  8. crear archivo de configuracion: `webpack.config.js` y ejecutar: `webpack`
  9. estructurar contenido
  10. instalar webpack-dev-server: `npm install webpack-dev-server --save-dev`
  11. configurar package.json
  12. intalar babel: `npm install babel-core babel-loader babel-preset-es2015 --save-dev`

## Configurations Of Webpack
This is a folder with some basic and common configurations
  - webpack.basic-config.js

## Articles
- [Webpack3](https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b)
