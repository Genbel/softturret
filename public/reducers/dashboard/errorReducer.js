import { UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS } from 'actions/dashboard/dashboardTypes';
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

    return combineReducers({
        roomErrors
    });
};

export default errorReducer;

//************* Reducer selectors *************//
export const getRoomError = (state) => state.roomErrors;
