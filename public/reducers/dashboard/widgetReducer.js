import {
    FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST, FETCH_WIDGETS_FAILURE,
    UNIT_WIDGET_EDITED, UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS,
    ADD_WIDGET, ADD_WIDGET_SUCCESS, ADD_WIDGET_FAILED,
    CHANGE_WIDGET_NAME
} from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';
import _ from 'lodash';

// Widget reducer
const widgetReducer = () => {
    // All the widgets sort by id
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
            case ADD_WIDGET_SUCCESS:
                return { ...state, [action.response.widgetId]: action.response };
            default:
                return state;
        }
    };
    // Request indicator if we fetch some data
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
    // When we do REST operations, to load the spinners
    const sendingRequest = (state = false, action) => {
        switch (action.type) {
            case ADD_WIDGET:
                return true;
            case ADD_WIDGET_SUCCESS:
            case ADD_WIDGET_FAILED:
                return false;
            default:
                return state;
        }
    };
    // Request controller, it queues a request and when is successful or failed
    // we delete from the array
    const restQueue = (state = [], action) => {
        switch (action.type){
            case UNIT_WIDGET_EDITED:
            case CHANGE_WIDGET_NAME:
                return [ ...state, Number(action.response.widgetId)];
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
        sendingRequest,
        restQueue
    });
};

export default widgetReducer;


//************* Reducer selectors *************//
export const getWidget = (state, id) => state[id];
export const getAllWidgets = (state) => state.byId;
export const getDisconnectedWidgets = (state) =>  !_.isEmpty(state.byId)? _.filter(state.byId, ({attached}) => !attached ): state.byId;
export const sendingRequest = (state) => state.sendingRequest;
export const getWidgetUpdateState = (state, id) => _findWidgetState(state.restQueue, id);

//************* Reducer local functions *************//
const _findWidgetState = (updatingIds, id) => {
    return _.find(updatingIds, (elem) => {
        return elem == id;
    });
};