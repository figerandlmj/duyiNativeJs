var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		index: './src/js/entry.js',
		index2: './src/js/entry2.js'
	},
	output: {
		// filename: '[name]-[chunkhash:8].js',
		filename: '[name].js',
		path: __dirname + '/out', //绝对路径
		publicPath: './out'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: ['babel-loader']
			},
			{
				test: /.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /.jpg|png|gif|svg$/,
				// use: ['url-loader?limit=8192&name=/img/[name].[ext]']
				use: ['url-loader?limit=3072&name=/img/[name].[ext]']
			}
		]
	},
	plugins: [
		new UglifyJSPlugin()
	]
}