// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
	entry: {
		bundle: "./src/index.js"
	},

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "public")
	},

	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					/node_modules/
				],
				use: [
					{loader: "babel-loader"}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Playground',
			template: 'index.html'
		}),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: ['css/output.css'],
			append: false
		})
	]
};