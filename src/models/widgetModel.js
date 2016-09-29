var times = require('lodash').times;
var assign = require('lodash').assign;
var uuid = require('uuid');
var widgetTemplates = require('../helpers/server.widgetTemplates');

exports.createNewWidget = function(widgetName, type) {
    var widgetType = widgetTemplates.getTemplate(type);
    var buttons = createWidgetButtons(widgetType.buttons);
    return {
        type: widgetType.type,
        position: null,
        text: widgetName,
        attached: false,
        id: uuid.v1(),
        buttons: buttons
    };
};

function createWidgetButtons(buttonAmount) {
    var buttons = {};
    times(buttonAmount, function(times) {
        var buttonId = uuid.v1();
        var button = {
            [buttonId]: {
                channel_ref: null,
                position: times + 1,
                id: buttonId
            }
        };
        assign(buttons, button);
    });
    return buttons;
}