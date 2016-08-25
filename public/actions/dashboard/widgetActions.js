import { FETCH_WIDGETS_SUCCESS } from './dashboardTypes';

export const fetchWidgets = () => ({
   type: FETCH_WIDGETS_SUCCESS,
    response: getWidgets()
});

const getWidgets = () => ({
    widgets: {
        1: {
            type: 'GS',
            position: 1,
            text: 'Lina Familly',
            attached: true
        },
        2: {
            type: 'GS',
            position: null,
            text: 'Iraolatarrak',
            attached: false
        },
        3: {
            type: 'GS',
            position: null,
            text: 'Genbeltzutarrak',
            attached: false
        },
        4: {
            type: 'GS',
            position: 7,
            text: 'Lagunak',
            attached: true
        }
    },
    rooms: {
        'asdfa': {
            type: ['GS', 'GS', 'GM', 'GM', 'GM', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: [1,4]
        }
    }
});