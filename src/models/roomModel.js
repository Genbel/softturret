var uuid = require('uuid');
var roomHelper = require('../helpers/server.roomTemplates');

exports.createNewRoom = function(roomName, roomType) {
    return {
        _id: uuid.v1(),
        type: roomHelper.getRoomTemplate(roomType),
        text: roomName,
        attached: false,
        widgets: []
    };
};