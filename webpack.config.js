const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			}
		]
	},

	plugins: [
//		new UglifyJSPlugin(),
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			title: 'Meal planning',
			filename: 'index.html',
			template: './src/index.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Meal planning',
			filename: 'main.html',
			template: './src/main.html'
		})
	]
};