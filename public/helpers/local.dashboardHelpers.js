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
    return _.find(updatingIds, (elem) => {
            return String(elem) == String(id);
        }) !== undefined;
};

/**
 * Delete the given element from the state object. It can be a room or widget
 * @param {object} state: Actual state of the element object
 * @param {string} elementId: The element that we want to delete
 * @returns {{object}}: Widget object
 */
export const removeElementFromTheState = (state, elementId) => {
    const newById = {};
    _.forEach(state, (element, index) => {
        if(String(index) !== String(elementId)) {
            newById[index] = element;
        }
    });
    return newById;
};