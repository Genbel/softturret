'use strict';
var roomModel = require('../models/roomModel');

exports.addRoom = function(req, res) {
// Has to be async data
    var data = roomModel.createNewRoom(req.body.roomText, req.body.roomType);
    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 7){
            return res.status(200).json(data);
        }
        return res.status(400).json('It was an error while we were creating the ' + req.body.roomText + ' page, try it again!');
    }, 1000);
};

exports.editRoom = function(req, res) {
    console.log(req.body);
    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 0){
            return res.status(200).json('ok');
        }
        return res.status(400).json('It was an error while we were saving, try it again!');
    }, 1000);
};

exports.removeRoom = function(req, res) {
    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 0){
            return res.status(200).json('ok');
        }
        return res.status(400).json('It was an error while we were deleting, try it again!');
    }, 1000);
};