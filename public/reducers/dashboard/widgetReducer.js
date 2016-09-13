import {
    FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST, FETCH_WIDGETS_FAILURE,
    UNIT_WIDGET_EDITED, UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS } from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';
import _ from 'lodash';

// Widget reducer
const widgetReducer = () => {
    const byId = (state = {}, action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
                return action.response.widgets;
            case UNIT_WIDGET_EDITED:
                const { widgetId, attached, position } = action.response;
                const newWidget = state[widgetId];
                newWidget.position = attached? null : position;
                newWidget.attached = !attached;
                return { ...state, [widgetId]: newWidget };
            case UNIT_WIDGET_FAILED:
                const data = action.response;
                const newObject = state[data.widgetId];
                newObject.position = !data.attached? null : data.position;
                newObject.attached = data.attached;
                return { ...state, [data.widgetId]: newObject };
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
    const restQueue = (state = [], action) => {
        switch (action.type){
            case UNIT_WIDGET_EDITED:
                return [ ...state, action.response.widgetId];
            case UNIT_WIDGET_SUCCESS:
            case UNIT_WIDGET_FAILED:
                return _.pull(state, action.response.widgetId);
            default:
                return state
        }
    };

    return combineReducers({
        byId,
        isFetching,
        restQueue
    });
};

export default widgetReducer;


//************* Reducer selectors *************//
export const getWidget = (state, id) => state[id];
export const getDisconnectedWidgets = (state) =>  !_.isEmpty(state.byId)? _.filter(state.byId, ({attached}) => !attached ): state.byId;

//************* Reducer local functions *************//
