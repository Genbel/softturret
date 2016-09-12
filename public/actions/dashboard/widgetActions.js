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

export const widgetActionInTheRoom = (widgetInfo) => (dispatch) => {
    !widgetInfo.attached? dispatch({ type: WIDGET_ATTACHED, response: widgetInfo }): null;
};