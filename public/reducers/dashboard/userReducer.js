import { FETCH_USER_INFO, USER_UPDATE_SUCCESS, UPDATE_USER_INFO, USER_UPDATE_FAILURE } from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';

const userReducer = () => {
    const user =  (state = {}, action) => {
        switch (action.type) {
            case FETCH_USER_INFO:
                return action.response;
            case USER_UPDATE_SUCCESS:
                return action.response;
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        switch (action.type) {
            case UPDATE_USER_INFO:
                return true;
            case USER_UPDATE_SUCCESS:
            case USER_UPDATE_FAILURE:
                return false;
            default:
                return state;
        }
    };

    return combineReducers({
        user,
        isFetching
    })
};

export default userReducer;

//************* Reducer selectors *************//
export const getUserInfo = (state) => state.user;
export const isFetching = (state) => state.isFetching;