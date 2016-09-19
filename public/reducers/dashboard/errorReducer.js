import {
    UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS,
    USER_UPDATE_FAILURE, USER_UPDATE_SUCCESS } from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';

const errorReducer = () => {
    const roomErrors = (state = null, action) => {
        switch (action.type) {
            case UNIT_WIDGET_FAILED:
                return action.response.errorMessage;
            case UNIT_WIDGET_SUCCESS:
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

    return combineReducers({
        roomErrors,
        userErrors
    });
};

export default errorReducer;

//************* Reducer selectors *************//
export const getRoomError = (state) => state.roomErrors;
export const getUserError = (state) => state.userErrors;
