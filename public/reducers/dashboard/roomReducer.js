import { combineReducers } from 'redux';
import { getWidget } from 'reducers/dashboard/widgetReducer';
import { FETCH_WIDGETS_SUCCESS } from 'actions/dashboard/dashboardTypes';
import _ from 'lodash';
import { fillWidgetsInTheBoard } from 'helpers/widgetsHelpers';

// Room reducer
const roomReducer = () => {
    const byId = (state = {}, action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
                return action.response.rooms;
            default:
                return state;
        }
    };
    const actual = (state = {}, action) => {
        switch (action.type){
            default:
                return state;
        }
    };
    return combineReducers({
        byId,
        actual
    });
};
export default roomReducer;

//************* Reducer selectors *************//
export const getRoomWidgets = (state, id = 'asdfa') => _getRoomWidgets(state, id);

//************* Reducer local functions *************//
const _getRoomWidgets = ({rooms, widgets}, id) => {
    const ids = getRoomWidgetsById(rooms.byId, id);
    if(ids !== undefined){
        const connectedWidgets = [];
        _.forEach(ids, (id) => {
            const rawWidget = getWidget(widgets, id);
            connectedWidgets[rawWidget.position] = rawWidget;
        });
        return fillWidgetsInTheBoard(connectedWidgets, getRoomType(rooms.byId, id));
    }
    return [];
};
const getRoomWidgetsById = (state, id) => {
    return !state.hasOwnProperty(id)?
        undefined:
        state[id].widgets;
};

const getRoomType = (state, id) => state[id].type;
