import { FETCH_WIDGETS_SUCCESS, WIDGET_ATTACHED, FETCH_WIDGETS_REQUEST, FETCH_WIDGETS_FAILURE } from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';
import _ from 'lodash';

// Widget reducer
const widgetReducer = () => {
    const byId = (state = {}, action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
                return action.response.widgets;
            case WIDGET_ATTACHED:
                return action.response.widgets;
            default:
                return state;
        }
    };
    const isFetching = (state = false, action) => {
        switch (action.type){
            case FETCH_WIDGETS_REQUEST:
                return true;
            case FETCH_WIDGETS_SUCCESS:
            case FETCH_WIDGETS_FAILURE:
                return false;
            default:
                return state;
        }
    };
    return combineReducers({
        byId,
        isFetching
    });
};

export default widgetReducer;


//************* Reducer selectors *************//
export const getWidget = (state, id) => state[id];
export const getDisconnectedWidgets = (state) =>  !_.isEmpty(state.byId)? _.filter(state.byId, ({attached}) => !attached ): state.byId;

//************* Reducer local functions *************//
