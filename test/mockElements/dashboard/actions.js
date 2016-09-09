import { ROOM_ADDED } from 'actions/dashboard/dashboardTypes';

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