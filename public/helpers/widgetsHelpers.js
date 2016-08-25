import _ from 'lodash';

export const fillWidgetsInTheBoard = (widgets, roomType) => {
    const roomWidgets = [];
    _.forEach(roomType, (type, number) => {
        if(widgets.hasOwnProperty(number)){
            roomWidgets[number] = widgets[number];
        } else {
            roomWidgets[number] = { attached: false, type: type, text: 'Drag Widget' };
        }
    });
    return roomWidgets;
};