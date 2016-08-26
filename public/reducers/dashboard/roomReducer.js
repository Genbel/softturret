import { combineReducers } from 'redux';
import { getWidget } from 'reducers/dashboard/widgetReducer';
import { FETCH_WIDGETS_SUCCESS, WIDGET_ATTACHED, ROOM_CHANGED } from 'actions/dashboard/dashboardTypes';
import _ from 'lodash';
import { fillWidgetsInTheBoard } from 'helpers/widgetsHelpers';

// Room reducer
const roomReducer = () => {
    const byId = (state = {}, action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
            case WIDGET_ATTACHED:
                return action.response.rooms;
            default:
                return state;
        }
    };
    const actual = (state = null, action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
                return findActualRoom(action.response.rooms, state);
            case ROOM_CHANGED:
                return action.page;
            default:
                return state;
        }
    };
    const pagination = (state = {}, action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
                return createRoomPagination(action.response.rooms);
            default:
                return state;
        }
    };
    return combineReducers({
        byId,
        actual,
        pagination
    });
};
export default roomReducer;

//************* Reducer selectors *************//
export const getRoomWidgets = (dashboard) => _getRoomWidgets(dashboard, dashboard.rooms.actual);
export const getActualRoom = (state) => state.actual;
export const getTotalRooms = (state) => _.size(state.pagination) - 1;

//************* Reducer getter functions *************//
const getRoomType = (state, id) => state[id].type;

//************* Reducer local functions *************//
const _getRoomWidgets = ({rooms, widgets}, page) => {
    const roomId = rooms.pagination[page];
    const roomIds = getRoomWidgetsById(rooms.byId, roomId);
    if(roomIds !== undefined){
        const connectedWidgets = [];
        _.forEach(roomIds, (widgetId) => {
            const rawWidget = getWidget(widgets, widgetId);
            connectedWidgets[rawWidget.position] = rawWidget;
        });
        return fillWidgetsInTheBoard(connectedWidgets, getRoomType(rooms.byId, roomId));
    }
    return [];
};
const getRoomWidgetsById = (state, id) => {
    return !state.hasOwnProperty(id)?
        undefined:
        state[id].widgets;
};
const findActualRoom = (rooms, state) => {
    const keys = getRoomsKey(rooms);
    return keys === null ? {} : state === null? 0 : state;
};
const createRoomPagination = (rooms) => getRoomsKey(rooms);
const getRoomsKey = (rooms) =>  _.isEmpty(rooms) ? null : _.keys(rooms);


