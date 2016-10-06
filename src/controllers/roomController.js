'use strict';

exports.editRoom = function(req, res) {
    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 3){
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