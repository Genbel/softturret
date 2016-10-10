exports.changeButtonName = function(req, res) {
    return setTimeout(function(){
        console.log(req.body);
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 0){
            return res.status(200).json('ok');
        }
        return res.status(400).json('It was an error while we were saving the ' + req.body.buttonName + ' button , try it again!');
    }, 2000);
};