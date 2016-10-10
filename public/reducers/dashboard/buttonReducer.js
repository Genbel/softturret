import {
    CHANGE_BUTTON_NAME, CHANGE_BUTTON_NAME_SUCCESS, CHANGE_BUTTON_NAME_FAILED
} from 'actions/dashboard/dashboardTypes';
import remove from 'lodash/remove';
import { _findElementState } from 'helpers/local.dashboardHelpers';

const buttonReducer = () => {
    return (state = [], action) => {
        switch (action.type) {
            case CHANGE_BUTTON_NAME:
                return [...state, action.response.buttonId];
            case CHANGE_BUTTON_NAME_FAILED:
            case CHANGE_BUTTON_NAME_SUCCESS:
                return remove(state, (elem) => { return elem !== action.response.buttonId });
            default:
                return state;
        }
    };
};

export default buttonReducer;

//************* Reducer selectors *************//
export const getButtonUpdateState = (state, id) => _findElementState(state, id);

//************* Reducer local functions *************//
