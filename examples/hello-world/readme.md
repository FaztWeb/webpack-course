## Commands
	- to convert: `webpack ./src/app.js ./dist/bundle.js`
	- to convert, minify and watch: `webpack ./src/app.js ./dist/bundle.js -p --watch`

## creating a webpack config
	- webpack.config.js:
			```javascript
				module.exports = {
							entry: './src/app.js',
							output: {
									filename: './dist/app.bundle.js'
								}
				};
			```

	- add to package.json: `dev: webpack -d --watch`
