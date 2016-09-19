'use strict';

exports.updateUser = function(req, res) {
    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 3){
            console.log(req.body);
            return res.status(200).json(req.body);
        }
        return res.status(400).json('It was an error while we were saving, try it again!');
    }, 1000);
};