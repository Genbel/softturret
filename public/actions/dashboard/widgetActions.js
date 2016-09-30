import {
    FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST, FETCH_WIDGETS_FAILURE,
    UNIT_WIDGET_EDITED, UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS,
    ADD_WIDGET, ADD_WIDGET_SUCCESS, ADD_WIDGET_FAILED
} from './dashboardTypes';
import axios from 'axios';
import {APIPath} from 'config/staticPaths';
import assign from 'lodash/assign';

export const fetchWidgets = () => (dispatch, getState) => {
    dispatch({ type: FETCH_WIDGETS_REQUEST });
    return axios.post(`${APIPath}/widget/fetch_widgets`)
        .then(({ data }) => {
            dispatch({ type: FETCH_WIDGETS_SUCCESS, response: data });
        })
        .catch(({ response }) => {
            dispatch({ type: FETCH_WIDGETS_FAILURE, response: response.data.message });
        });
};

export const widgetActionInTheRoom = (widgetInfo) => (dispatch) => {
    dispatch({ type: UNIT_WIDGET_EDITED, response: widgetInfo });
    return axios.post(`${APIPath}/room/edit_rooom`, widgetInfo)
        .then(({ data }) => {
            dispatch({ type: UNIT_WIDGET_SUCCESS, response: widgetInfo});
        })
        .catch(({ response }) => {
            assign(widgetInfo, { errorMessage: response.data });
            dispatch({ type: UNIT_WIDGET_FAILED, response: widgetInfo });
        });
};

export const addWidget = (widgetInfo) => (dispatch) => {
    dispatch({ type: ADD_WIDGET });
    return axios.post(`${APIPath}/widget/add_widget`, widgetInfo)
        .then(({ data }) => {
            dispatch({ type: ADD_WIDGET_SUCCESS, response: data});
        })
        .catch(({ response }) => {
            dispatch({ type: ADD_WIDGET_FAILED, response: response.data });
        });
};