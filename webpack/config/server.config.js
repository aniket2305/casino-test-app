const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	entry: {
		app: './src/server/server-build.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../../build/server')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'env'
					]
				}
			},
		]
	},
    optimization: {
        minimizer: [
          new UglifyJsPlugin()
        ]
	},
	node: {
		fs: 'empty',
		net: 'empty'
	}
}

module.exports = config;
