const path = require('path');
const webpack = require('webpack');
const process = require('process');

// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	mode: process.env.NODE_ENV || 'development',
	entry: [
		path.join(__dirname, 'src', 'initialize.js'),
		path.join(__dirname, 'src', 'SASS', 'app.scss')
	],
	output: {
		publicPath: '/',
		filename: 'app.js',
		path: path.join(__dirname, 'public')
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js|\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						// Use .babelrc
						// options: {
						// 	plugins: ['inferno', 'transform-class-properties'],
						// 	presets: ['es2015', 'stage-0']
						// }
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'app.css',
							outputPath: '/'
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	// watchOptions: {
	// 	poll: true
    // },
	plugins: [
		// new webpack.HotModuleReplacementPlugin()
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{from: 'src/assets/**/*', to: 'public'}
		// 	]
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: '_index.html',
		// 	template: path.join(__dirname, 'src', 'index.html')
		// })
	]
};

module.exports = config;