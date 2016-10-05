exports.getTemplate = function(type) {
    switch (type) {
        case 1:
            return { type: 'GS', buttons: 8 };
        case 2:
            return { type: 'GM', buttons: 16 };
        case 3:
            return { type: 'CBS', buttons: 8 };
        case 4:
            return { type: 'CBM', buttons: 16 };
        default:
            return undefined;
    }
};