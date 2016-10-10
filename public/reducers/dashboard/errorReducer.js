import {
    UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS,
    USER_UPDATE_FAILURE, USER_UPDATE_SUCCESS,
    ADD_WIDGET_SUCCESS, ADD_WIDGET_FAILED,
    CHANGE_WIDGET_NAME_SUCCESS, CHANGE_WIDGET_NAME_FAILED,
    CHANGE_BUTTON_NAME_SUCCESS, CHANGE_BUTTON_NAME_FAILED,
    ROOM_ADDED_FAILED, ROOM_ADDED_SUCCESS,
    ROOM_NAME_CHANGED_FAILED, ROOM_NAME_CHANGED_SUCCESS,
    REMOVE_ROOM_FAILED, REMOVE_ROOM_SUCCESS
} from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';

const errorReducer = () => {
    const roomErrors = (state = null, action) => {
        switch (action.type) {
            case UNIT_WIDGET_FAILED:
            case ROOM_ADDED_FAILED:
            case ROOM_NAME_CHANGED_FAILED:
            case REMOVE_ROOM_FAILED:
                return action.response.errorMessage;
            case UNIT_WIDGET_SUCCESS:
            case ROOM_NAME_CHANGED_SUCCESS:
            case ROOM_ADDED_SUCCESS:
            case REMOVE_ROOM_SUCCESS:
                return null;
            default:
                return state;
        }
    };

    const userErrors = (state = null, action) => {
        switch (action.type) {
            case USER_UPDATE_FAILURE:
                return action.response;
            case USER_UPDATE_SUCCESS:
                return null;
            default:
                return state;
        }
    };

    const widgetErrors = (state = null, action) => {
        switch (action.type) {
            case ADD_WIDGET_FAILED:
            case CHANGE_WIDGET_NAME_FAILED:
                return action.response.errorMessage;
            case ADD_WIDGET_SUCCESS:
            case CHANGE_WIDGET_NAME_SUCCESS:
                return null;
            default:
                return state;
        }
    };
    const buttonErrors = (state = null, action) => {
        switch (action.type) {
            case CHANGE_BUTTON_NAME_SUCCESS:
                return null;
            case CHANGE_BUTTON_NAME_FAILED:
                return action.response.errorMessage;
            default:
                return state;
        }
    };
    return combineReducers({
        roomErrors,
        userErrors,
        widgetErrors,
        buttonErrors
    });
};

export default errorReducer;

//************* Reducer selectors *************//
export const getRoomError = (state) => state.roomErrors;
export const getUserError = (state) => state.userErrors;
export const getWidgetError = (state) => state.widgetErrors;
export const getButtonError = (state) => state.buttonErrors;
