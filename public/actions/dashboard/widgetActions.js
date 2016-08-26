import { FETCH_WIDGETS_SUCCESS, WIDGET_ATTACHED } from './dashboardTypes';

export const fetchWidgets = () => ({
    type: FETCH_WIDGETS_SUCCESS,
    response: getWidgets()
});

export const widgetAttachedToTheRoom = (response) => ({
    type: WIDGET_ATTACHED,
    response: getWidgets_II()
});

const getWidgets = () => ({
    widgets: {
        1: {
            type: 'GS',
            position: 1,
            text: 'Lina Familly',
            attached: true,
            id: 1
        },
        2: {
            type: 'GS',
            position: null,
            text: 'Iraolatarrak',
            attached: false,
            id: 2
        },
        3: {
            type: 'GS',
            position: null,
            text: 'Genbeltzutarrak',
            attached: false,
            id: 3
        },
        4: {
            type: 'GS',
            position: 3,
            text: 'Lagunak',
            attached: true,
            id: 4
        }
    },
    rooms: {
        'asdf2kf0asdfnasdf90': {
            type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: [1,4]
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
});
const getWidgets_II = () => ({
    widgets: {
        1: {
            type: 'GS',
            position: 1,
            text: 'Lina Familly',
            attached: true,
            id: 1
        },
        2: {
            type: 'GS',
            position: 4,
            text: 'Iraolatarrak',
            attached: true,
            id: 2
        },
        3: {
            type: 'GS',
            position: null,
            text: 'Genbeltzutarrak',
            attached: false,
            id: 3
        },
        4: {
            type: 'GS',
            position: 3,
            text: 'Lagunak',
            attached: true,
            id: 4
        }
    },
    rooms: {
        'asdf2kf0asdfnasdf90': {
            type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: [1,4,2]
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
});