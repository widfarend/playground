const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
	entry: {
		bundle: "./src/index.js"
	},

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist")
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
			},
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Playground',
			template: 'index.html'
		}),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: ['/css/output.css'],
			append: false,
			publicPath: ''
		}),
        new ExtractTextPlugin('output.css')
	]
};