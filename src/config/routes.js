'use strict';
/*var usersCtrl = require('./controllers/users.server.controller'),*/
var widgetsCtrl = require('../controllers/widgetsController');
var path = require('path'),
    _ = require('lodash');

// Define all the routes of the app
var routes = [
    // WARNING: IN SOME REQUEST WE NEED A requiresLogin function as middleware
    {
        path: '/dashboard',
        httpMethod: 'GET',
        middleware: [renderIndex]
    },{
        path:'/api/dataservice/fetch_widgets',
        httpMethod: 'POST',
        middleware: [widgetsCtrl.fetchWidgets]
    }


];

function renderIndex(req, res){
    var indexPath = path.join(__dirname, '../../index.html');
    return res.sendFile(indexPath);
}
// Encapsulates app routes management code into a single unit of code
module.exports = function(app) {

    _.each(routes, function(route) {
        // We can work on that later
        // route.middleware.unshift(ensureAuthorized);
        var args = _.flatten([route.path, route.middleware]);

        switch(route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }
    });
};