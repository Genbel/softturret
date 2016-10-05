import {
    FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST, FETCH_WIDGETS_FAILURE,
    UNIT_WIDGET_EDITED, UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS,
    ADD_WIDGET, ADD_WIDGET_SUCCESS, ADD_WIDGET_FAILED,
    CHANGE_WIDGET_NAME, CHANGE_WIDGET_NAME_SUCCESS, CHANGE_WIDGET_NAME_FAILED,
    CHANGE_BUTTON_NAME, CHANGE_BUTTON_NAME_SUCCESS, CHANGE_BUTTON_NAME_FAILED,
    ADD_WIDGET_MODAL_CLOSED, REMOVE_WIDGET_MODAL_OPENED, REMOVE_WIDGET_MODAL_CLOSED,
    REMOVE_WIDGET_ID, REMOVE_WIDGET, REMOVE_WIDGET_SUCCESS, REMOVE_WIDGET_FAILED
} from './dashboardTypes';
import axios from 'axios';
import {APIPath} from 'config/staticPaths';
import assign from 'lodash/assign';

export const fetchWidgets = () => (dispatch, getState) => {
    dispatch({ type: FETCH_WIDGETS_REQUEST });
    return axios.post(`${APIPath}/widget/fetch_widgets`)
        .then(({ data }) => {
            console.log('success');
            dispatch({ type: FETCH_WIDGETS_SUCCESS, response: data });
        })
        .catch(({ response }) => {
            console.log('fail');
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
            dispatch({ type: ADD_WIDGET_MODAL_CLOSED });
        })
        .catch(({ response }) => {
            dispatch({ type: ADD_WIDGET_FAILED, response: { errorMessage: response.data }});
        });
};

export const changeWidgetName = (widgetInfo) => (dispatch) => {
    dispatch({ type: CHANGE_WIDGET_NAME, response: widgetInfo });
    return axios.post(`${APIPath}/widget/change_widget_name`, widgetInfo)
        .then(() => {
            dispatch({ type: CHANGE_WIDGET_NAME_SUCCESS, response: widgetInfo });
        })
        .catch(({ response }) => {
            assign(widgetInfo, { errorMessage: response.data });
            dispatch({ type: CHANGE_WIDGET_NAME_FAILED, response: widgetInfo });
        });
};

export const showWidgetRemoveModal = (widgetId) => (dispatch) => {
    dispatch({ type: REMOVE_WIDGET_ID, widgetId });
    dispatch({ type: REMOVE_WIDGET_MODAL_OPENED});
};

export const removeWidget = ( widgetId ) => (dispatch) => {
    dispatch({ type: REMOVE_WIDGET });
    axios.post(`${APIPath}/widget/remove_widget`, widgetId)
        .then(() => {
            console.log('success');
            dispatch({ type: REMOVE_WIDGET_SUCCESS, widgetId });
            dispatch({ type: REMOVE_WIDGET_MODAL_CLOSED });
        })
        .catch(() => {
            console.log('fail');
            dispatch({ type: REMOVE_WIDGET_FAILED });
        });
};