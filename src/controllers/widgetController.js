'use strict';
var widgetModel = require('../models/widgetModel');

exports.fetchWidgets = function(req, res){
    var data = {
        widgets: {
            1: {
                type: 'GM',
                position: 1,
                text: 'Lina Familly',
                attached: false,
                id: 1,
                buttons: {
                    fa9asdf9asd: {
                        channel_ref: null,
                        display_text: null,
                        position: 1
                    },
                    fa9aasf9asd: {
                        channel_ref: 'Lina Family, Klaipeda, SIP',
                        display_text: 'Agne Jonikaite',
                        position: 2
                    },
                    fa9asdfassd: {
                        channel_ref: 'Lina Family, Kvedarna, PORT 3 CH4',
                        display_text: 'Justinas Jonikas',
                        position: 3
                    },
                    fa9asdf9a132d: {
                        channel_ref: null,
                        display_text: null,
                        position: 4
                    }
                }
            },
            2: {
                type: 'GS',
                position: null,
                text: 'Iraolatarrak',
                attached: false,
                id: 2,
                buttons: {
                    fa9asdf9asd: {
                        channel_ref: null,
                        display_text: null,
                        position: 1
                    },
                    fa9aasf9asd: {
                        channel_ref: 'Iraolatarrak, Hernani, SIP Trunk',
                        display_text: 'Joxe Iraola',
                        position: 2
                    },
                    fa9asdfassd: {
                        channel_ref: null,
                        display_text: null,
                        position: 3
                    },
                    fa9asdf9a132d: {
                        channel_ref: 'Iraolatarrak, Hernani, Family Conference Bridge',
                        display_text: 'Maite Iraola',
                        position: 4
                    }
                }
            },
            3: {
                type: 'GS',
                position: null,
                text: 'Genbeltzutarrak',
                attached: false,
                id: 3,
                buttons: {
                    fa9asdf9asd: {
                        channel_ref: 'Genbeltzutarrak, Martindegi, SIP',
                        display_text: 'Maria Intxausti',
                        position: 1
                    },
                    fa9aasf9asd: {
                        channel_ref: 'Genbeltzutarrak, Martindegi, Help Conference Bridge',
                        display_text: 'Joxe Juan Genbeltzu',
                        position: 2
                    },
                    fa9asdfassd: {
                        channel_ref: null,
                        display_text: null,
                        position: 3
                    },
                    fa9asdf9a132d: {
                        channel_ref: null,
                        display_text: null,
                        position: 4
                    },
                    fa9adsdf9asd: {
                        channel_ref: 'Genbeltzutarrak, Martindegi, SIP',
                        display_text: 'Maria Intxausti',
                        position: 5
                    },
                    fa9aasfs9asd: {
                        channel_ref: 'Genbeltzutarrak, Martindegi, Help Conference Bridge',
                        display_text: 'Joxe Juan Genbeltzu',
                        position: 6
                    },
                    fa9asadfassd: {
                        channel_ref: null,
                        display_text: null,
                        position: 7
                    },
                    fa9asgdf9a132d: {
                        channel_ref: null,
                        display_text: null,
                        position: 8
                    }
                }
            },
            4: {
                type: 'GS',
                position: 2,
                text: 'Lagunak',
                attached: true,
                id: 4,
                buttons: {
                    fa9asdf9asd: {
                        channel_ref: 'Kuadrila, London, SIP',
                        display_text: 'Amin Kheireddine',
                        position: 1
                    },
                    fa9aasf9asd: {
                        channel_ref: null,
                        display_text: null,
                        position: 2
                    },
                    fa9asdfassd: {
                        channel_ref: null,
                        display_text: null,
                        position: 3
                    },
                    fa9asdf9a132d: {
                        channel_ref: 'Kuadrila, Nepal, PORT 7 CH 24',
                        display_text: null,
                        position: 4
                    }
                }
            }
        },
        rooms: {
            'asdf2kf0asdfnasdf90': {
                type: ['GS', 'GM', 'GS', 'GS', 'GS', 'GS', 'GS'],
                text: 'Surrounding People',
                widgets: [4]
            },
            'pqioerp0923klfqpsd890u2n': {
                type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
                text: 'People that I do not like',
                widgets: []
            },
            'mcio-029na98-2in': {
                type: ['GM', 'GM', 'GM', 'GM'],
                text: 'WorkMates',
                widgets: []
            }
        }
    };

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
        if(result > 7){
            return res.status(200).json(newWidget);
        }
        return res.status(400).json('It was an error while we were saving the new widget, try it again!');
    }, 1000);
};

exports.changeWidgetName = function(req, res) {
    return setTimeout(function(){
        var result = Math.floor(Math.random() * 6) + 1;
        if(result > 7){
            return res.status(200).json('ok');
        }
        return res.status(400).json('It was an error while we were saving the ' + req.body.widgetName + ' widget , try it again!');
    }, 1000);
};