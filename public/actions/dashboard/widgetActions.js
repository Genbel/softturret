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
        'asdfa': {
            type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: [1,4]
        }
    }
});