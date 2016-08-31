import { FETCH_WIDGETS_SUCCESS, WIDGET_ATTACHED, FETCH_WIDGETS_REQUEST } from './dashboardTypes';
import axios from 'axios';

const APIPath = 'http://192.168.0.2:3001/api/dataservice';

export const fetchWidgets = () => (dispatch, getState) => {
    dispatch({ type: FETCH_WIDGETS_REQUEST, response: 'Hello' });
    axios.post(`${APIPath}/fetch_widgets`)
        .then((response) => {
            console.log(JSON.parse(response.data));
            dispatch({ type: FETCH_WIDGETS_SUCCESS, response: JSON.parse(response.data) })
        })
        .catch((error) => {
            console.log('error fetching widgets data for the user');
        });
};

export const widgetAttachedToTheRoom = (response) => ({
    type: WIDGET_ATTACHED,
    response: getWidgets_II()
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