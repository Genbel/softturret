import { ROOM_ADDED, UNIT_WIDGET_EDITED } from 'actions/dashboard/dashboardTypes';

export const widgetsFetchedData = () => ({
    widgets: {
        1: {
            type: 'GS',
            position: 1,
            text: 'Lina Familly',
            attached: true,
            id: 1
        }
    },
    rooms: {
        'asdf2kf0asdfnasdf90': {
            type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: [1]
        }
    }
});

export const newRoomAction = () => ({
    type: ROOM_ADDED,
    response: {
        'asdf2kf0asdfnasdf90': {
            type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: [1]
        }
    }
});

export const unitWidgetArgument = (attached) => ({
    widgetId: 1,
    attached,
    position: 3,
    roomId: 'asdf2kf0asdfnasdf90'
});
export const unitWidgetActionCreatorObject = (attached) => ({
    widgetId: 1,
    attached,
    position: 3,
    roomId: 'asdf2kf0asdfnasdf90',
    errorMessage: 'It was an error while we were saving, try it again!'
});

export const unitWidgetActionCreator = (attached, type) => ({
    type,
    response: {
        widgetId: 1,
        attached,
        position: 3,
        roomId: 'asdf2kf0asdfnasdf90',
        errorMessage: 'It was an error while we were saving, try it again!'
    }
});