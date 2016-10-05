import forEach from 'lodash/forEach';
/**
 * @param {Array} widgets - Widgets which contains a specific room
 * @param {Array} roomType - The structure of our room. We have identified the widgets types
 * @returns {Array}
 */
export const fillWidgetsInTheBoard = (widgets, roomType) => {
    const roomWidgets = [];
    forEach(roomType, (type, number) => {
        if(widgets.hasOwnProperty(number)){
            roomWidgets[number] = widgets[number];
        } else {
            roomWidgets[number] = { attached: false, type: type, text: 'Drag Widget' };
        }
    });
    return roomWidgets;
};

/**
 * check the state of the widget update request
 * @param {array} updatingIds: all the widgets that are updating
 * @param {number} id: widgetId
 * @returns {boolean}
 */
export const _findElementState = (updatingIds, id) => {
    return  _.find(updatingIds, (elem) => {
            return elem == id;
        }) !== undefined;
};