import { FETCH_WIDGETS_SUCCESS, WIDGET_ATTACHED, FETCH_WIDGETS_REQUEST, FETCH_WIDGETS_FAILURE } from './dashboardTypes';
import axios from 'axios';
import {APIPath} from 'config/staticPaths';

export const fetchWidgets = () => (dispatch, getState) => {
    dispatch({ type: FETCH_WIDGETS_REQUEST });
    return axios.post(`${APIPath}/fetch_widgets`)
        .then(({data}) => {
            dispatch({ type: FETCH_WIDGETS_SUCCESS, response: data });
        })
        .catch(({response}) => {
            dispatch({ type: FETCH_WIDGETS_FAILURE, response: response.data.message });
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