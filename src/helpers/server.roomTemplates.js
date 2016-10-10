exports.getRoomTemplate = function(roomId) {
    switch (roomId) {
        case 1:
            return ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'];
        case 2:
            return ['GS', 'GS', 'GM', 'GS', 'GS', 'GM'];
        case 3:
            return ['GM', 'GS', 'GS', 'GS', 'GS', 'GM'];
        case 4:
            return ['GM', 'GM', 'GM', 'GM'];
        case 5:
            return ['GS', 'GS', 'GS', 'GS', 'GM', 'GM'];
        case 6:
            return ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GM'];
        case 7:
            return ['GS', 'GS', 'GS', 'GS', 'GS', 'GM', 'GS'];
        case 8:
            return ['GS', 'GS', 'GS' ,'GS', 'GM', 'GS', 'GS'];
        case 9:
            return ['GS', 'GS', 'GM', 'GM', 'GS', 'GS'];
        case 10:
            return ['GM', 'GS', 'GS',' GM', 'GS', 'GS'];
        case 11:
            return ['GS', 'GM', 'GS', 'GS', 'GM', 'GS'];
        case 12:
            return ['GS', 'GS', 'GM', 'GS', 'GM', 'GS'];
        default:
            return undefined;
    }
};