import {
    FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST, FETCH_WIDGETS_FAILURE,
    UNIT_WIDGET_EDITED, UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS,
    ADD_WIDGET, ADD_WIDGET_SUCCESS, ADD_WIDGET_FAILED,
    CHANGE_WIDGET_NAME, CHANGE_WIDGET_NAME_SUCCESS, CHANGE_WIDGET_NAME_FAILED,
    CHANGE_BUTTON_NAME_SUCCESS,
    REMOVE_WIDGET_ID, REMOVE_WIDGET_SUCCESS, REMOVE_WIDGET, REMOVE_WIDGET_FAILED
} from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';
import { _findElementState, removeElementFromTheState } from 'helpers/local.dashboardHelpers';
import _ from 'lodash';

// Widget reducer
const widgetReducer = () => {
    // All the widgets sort by id
    const byId = (state = {}, action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
                return action.response.widgets;
            case ADD_WIDGET_SUCCESS:
                return { ...state, [action.response.id]: action.response };
            case CHANGE_WIDGET_NAME_SUCCESS:
                const { widgetName } = action.response;
                const newNameWidget = state[action.response.widgetId];
                newNameWidget.text = widgetName;
                return { ...state, [action.response.widgetId]: newNameWidget };
            case UNIT_WIDGET_EDITED:
                const { widgetId, attached, position } = action.response;
                const newUnitWidget = state[widgetId];
                newUnitWidget.position = attached? null : position;
                newUnitWidget.attached = !attached;
                return { ...state, [widgetId]: newUnitWidget };
            case UNIT_WIDGET_FAILED:
                const data = action.response;
                const newFailWidget = state[data.widgetId];
                newFailWidget.position = !data.attached? null : data.position;
                newFailWidget.attached = data.attached;
                return { ...state, [data.widgetId]: newFailWidget };
            case CHANGE_BUTTON_NAME_SUCCESS:
                const newValues = action.response;
                const newWidgetButton = state[newValues.widgetId];
                newWidgetButton['buttons'][newValues.buttonId]['display_text'] = newValues.buttonName;
                return { ...state, [newValues.widgetId]: newWidgetButton };
            case REMOVE_WIDGET_SUCCESS:
                return removeElementFromTheState(state, action.widgetId);
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
            case REMOVE_WIDGET:
                return true;
            case ADD_WIDGET_SUCCESS:
            case ADD_WIDGET_FAILED:
            case REMOVE_WIDGET_SUCCESS:
            case REMOVE_WIDGET_FAILED:
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
                return [ ...state, String(action.response.widgetId)];
            case UNIT_WIDGET_SUCCESS:
            case UNIT_WIDGET_FAILED:
                return _.remove(state, (elem) => { return String(elem) !== String(action.response.widgetId) });
            case CHANGE_WIDGET_NAME_SUCCESS:
            case CHANGE_WIDGET_NAME_FAILED:
                return _.remove(state, (elem) => { return elem !== action.response.widgetId });
            default:
                return state
        }
    };
    // The widget that we are going to remove
    const removedWidgetId = (state = null, action) => {
        switch (action.type) {
            case REMOVE_WIDGET_ID:
                return action.widgetId;
            case REMOVE_WIDGET_SUCCESS:
                return null;
            default:
                return state;
        }
    };
    return combineReducers({
        byId,
        isFetching,
        sendingRequest,
        restQueue,
        removedWidgetId
    });
};

export default widgetReducer;


//************* Reducer selectors *************//
export const getWidget = (state, id) => state[id];
export const getAllWidgets = (state) => state.byId;
export const getDisconnectedWidgets = (state) =>  !_.isEmpty(state.byId)? _.filter(state.byId, ({attached}) => !attached ): state.byId;
export const sendingRequest = (state) => state.sendingRequest;
export const getWidgetUpdateState = (state, id) => _findElementState(state.restQueue, id);
export const getWidgetButtons = (state, id) => state.byId[id];
export const getRemovedWidgetId = (state) => state.removedWidgetId;

//************* Reducer local functions *************//