var express = require('express'),
    path = require('path'),
    http = require('http'),
    https = require('https'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan');
var serverConfig = require('../config').server;
var routes = require('../routes');

module.exports = {
    app: function() {
        var server;
        var app = express();
        // Set the environment
        if (process.env.NODE_ENV === 'dev') {
            app.use(morgan('dev'));
        }
        if(!serverConfig.enableHTTPS) {
            server = http.createServer(app);
        } else {
            var options = {
                key: fs.readFileSync('./config/ssl/key.pem'),
                cert: fs.readFileSync('./config/ssl/key-cert.pem')
            };
            server = https.createServer(options, app);
        }
        // Get the request body data: req.body
        app.use(bodyParser.json());
        // Let has to add PUT and DELETE http calls
        app.use(methodOverride());

        var publicPath = express.static(path.join(__dirname, 'public'));

        app.use('/public', publicPath);
        // Set up application routes for API request
        routes(app);

        var port = serverConfig.enableHTTPS? serverConfig.httpsPort : serverConfig.httpPort;
        server.listen(port, serverConfig.domain, function(){
            console.log('Express server listening at ' + serverConfig.schema + '://' + serverConfig.domain + ':' + port + ' in ' + process.env.NODE_ENV + ' mode');
        });

        return server;
    }
};