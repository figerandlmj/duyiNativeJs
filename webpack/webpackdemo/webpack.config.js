var UglifyJSPlugin = require('uglifyjs-webpack-plugin');//代码压缩插件
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//独立出css样式
// jquery挂载全局
var providePlugin = new webpack.ProvidePlugin({
	$: 'jquery',
	jQuery: 'jquery',
	'window.jQuery': 'jquery'
});

module.exports = {
	entry: {
		index: './src/js/entry.js',
		index2: './src/js/entry2.js'
	},
	output: {
		// filename: '[name]-[chunkhash:8].js',
		filename: '[name].js',
		path: __dirname + '/out', //绝对路径
		// publicPath: './out' // css里面图片的路径不对
		// publicPath: './' // html里面图片路径不对
		publicPath: 'http://localhost:8080/out/'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: ['babel-loader']
			},
			// {
			// 	test: /.styles$/,
			// 	use: ['style-loader', 'styles-loader']
			// },
			//独立出css样式
			// {
			// 	test: /.styles$/,
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use: 'styles-loader'
			// 	})
			// },
			{
				test: /.less$/,
				use: ['style-loader', 'styles-loader', 'less-loader']
			},
			{
				test: /.jpg|png|gif|svg$/,
				// use: ['url-loader?limit=8192&name=img/[name].[ext]']
				use: ['url-loader?limit=3072&name=img/[name].[ext]']
			}
		]
	},
	plugins: [
		new UglifyJSPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',//模块名
			filename: 'commons.js',//文件名
			// minChunks: 3//引用>=3次被提取
			minChunks: 2//引用>=2次被提取
		}),
		new ExtractTextPlugin('styles/[name].css'),
		providePlugin
	]
}