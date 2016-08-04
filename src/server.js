var express = require('express');
var path = require('path');

module.exports = {
	app: function() {

		const app = express();

		const indexPath = path.join(__dirname, '../index.html');
		const publicPath = express.static(path.join(__dirname, 'public'));

		app.use('/public', publicPath);
		app.get('/', function(req, res){ res.sendFile(indexPath) });

		app.listen(3001);

		return app;
	}
}
