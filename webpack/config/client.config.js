const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	mode: 'development',
	entry: {
		app: './src/client/app/main.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../../build/client')
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
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(css|sass|scss)$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
						{loader: 'css-loader'},
						{loader: 'resolve-url-loader'},
						{loader: 'sass-loader', options: {sourceMap: true}},
					],
				}),
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/client/index.html',
			appRoot: 'test-app/',
		}),
		 new ExtractTextWebpackPlugin({filename: 'style.css'})
    ],
    optimization: {
        minimizer: [
          new UglifyJsPlugin()
        ]
    }
}

module.exports = config;
