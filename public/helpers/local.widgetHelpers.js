import _ from 'lodash';
/**
 * @param {Array} widgets - Widgets which contains a specific room
 * @param {Array} roomType - The structure of our room. We have identified the widgets types
 * @returns {Array}
 */
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