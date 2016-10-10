'use strict';
var widgetModel = require('../models/widgetModel');

exports.fetchWidgets = function(req, res){
    var data = widgetModel.getUserInfo();

    return setTimeout(function(){
        return res.status(200).json(data);
    }, 100);
    //return res.status(200).json(data);
};

exports.addWidget = function(req, res) {
    var type = req.body.widgetType;
    var name = req.body.widgetName;
    // Data base operation
    var newWidget = widgetModel.createNewWidget(name, type);

    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 0){
            return res.status(200).json(newWidget);
        }
        return res.status(400).json('It was an error while we were saving the ' + name + ' widget, try it again!');
    }, 1000);
};

exports.removeWidget = function(req, res) {
    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 0){
            return res.status(200).json('ok');
        }
        return res.status(400).json('It was an error while we were deleting the widget , try it again!');
    }, 1000);
};

exports.changeWidgetName = function(req, res) {
    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 0){
            return res.status(200).json('ok');
        }
        return res.status(400).json('It was an error while we were saving the ' + req.body.widgetName + ' widget , try it again!');
    }, 1000);
};