import {
    CHANGE_BUTTON_NAME, CHANGE_BUTTON_NAME_SUCCESS, CHANGE_BUTTON_NAME_FAILED
} from 'actions/dashboard/dashboardTypes';
import axios from 'axios';
import assign from 'lodash/assign';
import { APIPath } from 'config/staticPaths';


export const changeButtonName = (widgetInfo) => (dispatch) => {
    dispatch({ type: CHANGE_BUTTON_NAME, response: widgetInfo });
    return axios.post(`${APIPath}/button/change_button_name`, widgetInfo)
        .then(() => {
            dispatch({ type: CHANGE_BUTTON_NAME_SUCCESS, response: widgetInfo });
        })
        .catch(({ response }) => {
            assign(widgetInfo, { errorMessage: response.data });
            dispatch({ type: CHANGE_BUTTON_NAME_FAILED, response: widgetInfo });
        });
};