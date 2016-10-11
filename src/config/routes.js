'use strict';
var widgetCtrl = require('../controllers/widgetController');
var roomCtrl = require('../controllers/roomController');
var userCtrl = require('../controllers/userController');
var buttonCtrl = require('../controllers/buttonController');
var path = require('path'),
    _ = require('lodash');

// Define all the routes of the app
var routes = [
    // WARNING: IN SOME REQUEST WE NEED A requiresLogin function as middleware
    {
        path: '/dashboard/widget-board',
        httpMethod: 'GET',
        middleware: [renderIndex]
    },{
        path:'/api/dataservice/button/change_button_name',
        httpMethod: 'POST',
        middleware: [buttonCtrl.changeButtonName]
    },{
        path:'/api/dataservice/widget/fetch_widgets',
        httpMethod: 'POST',
        middleware: [widgetCtrl.fetchWidgets]
    },{
        path:'/api/dataservice/widget/add_widget',
        httpMethod: 'POST',
        middleware: [widgetCtrl.addWidget]
    },{
        path: '/api/dataservice/widget/change_widget_name',
        httpMethod: 'POST',
        middleware: [widgetCtrl.changeWidgetName]
    },{
        path: '/api/dataservice/widget/remove_widget',
        httpMethod: 'POST',
        middleware: [widgetCtrl.removeWidget]
    },{
        path: '/api/dataservice/room/add_room',
        httpMethod: 'POST',
        middleware: [roomCtrl.addRoom]
    },{
        path: '/api/dataservice/room/edit_rooom',
        httpMethod: 'POST',
        middleware: [roomCtrl.editRoom]
    },{
        path: '/api/dataservice/room/change_room_name',
        httpMethod: 'POST',
        middleware: [roomCtrl.changeRoomName]
    },{
        path:'/api/dataservice/room/remove_room',
        httpMethod: 'POST',
        middleware: [roomCtrl.removeRoom]
    },{
        path: '/api/dataservice/user/update_user',
        httpMethod: 'POST',
        middleware: [userCtrl.updateUser]
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