import {
    CHANGE_BUTTON_NAME, CHANGE_BUTTON_NAME_SUCCESS, CHANGE_BUTTON_NAME_FAILED
} from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';
import _ from 'lodash';



export const changeButtonName = (widgetInfo) => (dispatch) => {
    console.log("ActionCreator, ", widgetInfo);
    dispatch({ type: CHANGE_BUTTON_NAME, response: widgetInfo });
};