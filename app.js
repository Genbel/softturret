var server = require('./src/server');
server.app();

if(process.env.NODE_ENV !== 'production') {

	var configParams = require('./src/config/config');

	var webpackDomain = configParams.webpackServer.domain;
	var webpackPort = configParams.webpackServer.port;
	var backendServerPort = configParams.enableHTTPS? configParams.server.httpsPort : configParams.server.httpPort;

	var webpack = require('webpack');
	var WebpackDevServer = require('webpack-dev-server');
	var config = require('./webpack.config');

	new WebpackDevServer(webpack(config), {
		publicPath: config.output.publicPath,
		hot: true,
		historyApiFallback: true,
		stats: {
		    colors: true
		},
		proxy: {
			'*': 'http://' + configParams.server.domain + ':' + backendServerPort
		}
	}).listen(webpackPort, webpackDomain, function(err, result) {
		if (err) {
			return console.log(err);
		}
		console.log('Listening webpack server at http://' + webpackDomain + ':' + webpackPort);
	});
}