var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000', 
		'webpack/hot/only-dev-server',
		'./public/index.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
		{
			test:[/\.jsx$/, /\.js$/],
			loaders:['react-hot', 'babel'],
			include: path.join(__dirname, 'public')
		},
		{
			test: [/\.scss$/, /\.css$/],
			loaders: ['style', 'css', 'sass']
		}]
	},
	resolve: {
		root: path.resolve(__dirname),
		alias: {
			components: 'public/components',
			containers: 'public/containers',
			actions: 'public/actions',
			assets: 'assets',
			reducers: 'public/reducers',
			helpers: 'public/helpers'
		},
		extensions: ['', '.js', '.jsx']
	}
};