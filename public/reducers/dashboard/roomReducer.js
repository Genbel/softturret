import {
    FETCH_WIDGETS_SUCCESS, UNIT_WIDGET_EDITED, UNIT_WIDGET_FAILED,
    ROOM_CHANGED, ROOM_ADDED,
    TOGGLE_EDIT_ROOM } from 'actions/dashboard/dashboardTypes';
import { combineReducers } from 'redux';
import { getWidget } from 'reducers/dashboard/widgetReducer';
import _ from 'lodash';
import { fillWidgetsInTheBoard } from 'helpers/local.widgetHelpers';

// Room reducer
const roomReducer = () => {
    const byId = (state = {}, { type, response }) => {
        switch (type){
            case FETCH_WIDGETS_SUCCESS:
                return response.rooms;
            case UNIT_WIDGET_EDITED:
                const { widgetId, roomId, attached } = response;
                const newRoom = state[roomId];
                attached? _.pull(newRoom.widgets, widgetId): newRoom.widgets.push(widgetId);
                return { ...state, [roomId]: newRoom };
            case UNIT_WIDGET_FAILED:
                const actualRoom = state[response.roomId];
                !response.attached? _.pull(actualRoom.widgets, response.widgetId): actualRoom.widgets.push(response.widgetId);
                return { ...state, [response.roomId]: actualRoom };
            case ROOM_ADDED:
                const id = _.keys(response)[0];
                return {...state, [id]: response[id] };
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
    const pagination = (state = [], action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
                return createRoomPagination(action.response.rooms);
            case ROOM_ADDED:
                return [...state, _.keys(action.response)[0]];
            default:
                return state;
        }
    };
    const editMode = (state = false, action) => {
        switch (action.type) {
            case TOGGLE_EDIT_ROOM:
                return !state;
            default:
                return state;
        }
    };
    return combineReducers({
        byId,
        actual,
        pagination,
        editMode
    });
};
export default roomReducer;

//************* Reducer selectors *************//
export const getRoomWidgets = (dashboard) => _getRoomWidgets(dashboard, dashboard.rooms.actual);
export const getActualRoom = (state) => state.actual;
export const getTotalRooms = (state) => _.size(state.pagination) - 1;
export const getActualRoomName = (state) => _getActualRoomName(state.rooms.actual, state.rooms.pagination, state.rooms.byId);
export const getActualRoomId = (state) => _getActualRoomId(state.actual, state.pagination);
export const getRoomEditModeState = (state) => state.editMode;

//************* Reducer getter functions *************//
const getRoomType = (state, id) => {
    return state[id].type;
};
const _getActualRoomName = (pageNo, paginationElements, rooms) => !_.isEmpty(rooms)? rooms[paginationElements[pageNo]].text : null;

//************* Reducer local functions *************//
/**
 * Get the room widgets sort by widgets position.
 * @param {Object} rooms - All the rooms of the user
 * @param {Object} widgets - All the widgets of the user
 * @param {number} page - Actual state of the page
 * @returns {Array} => attached:bool, text:String, type:String, position: number, id: string
 */
const _getRoomWidgets = ({rooms, widgets}, page) => {
    const roomId = rooms.pagination[page];
    const roomIds = getRoomWidgetsById(rooms.byId, roomId);
    if(roomIds !== undefined){
        const connectedWidgets = [];
        _.forEach(roomIds, (widgetId) => {
            const rawWidget = getWidget(widgets.byId, widgetId);
            connectedWidgets[rawWidget.position] = rawWidget;
        });
        return fillWidgetsInTheBoard(connectedWidgets, getRoomType(rooms.byId, roomId));
    }
    return [];
};
/**
 * Get widgets that belongs to the room.
 * @param {number} state - All the rooms. byId reducer
 * @param {id} roomId
 * @return {Array} widgetId - room widgets sort by Id
 */
const getRoomWidgetsById = (state, roomId) => {
    return !state.hasOwnProperty(roomId)?
        undefined:
        state[roomId].widgets;
};
/**
 * Get the actual pagination number of the room. With that pagination number, we will get from pagination reducer the room id.
 * @param {Array} rooms - All the rooms sort by roomId
 * @param {number} state - Actual pagination number
 * @returns {number} pagination number
 */
const findActualRoom = (rooms, state) => {
    const keys = createRoomPagination(rooms);
    return keys === null ? {} : state === null? 0 : state;
};
/**
 * Create an array with all the rooms id
 * @param {Object} rooms - all the room objects after the response
 * @returns {Array} room ids
 */
const createRoomPagination = (rooms) => _.isEmpty(rooms) ? null : _.keys(rooms);

/**
 * We get the actual room id
 * @param {number} pageNumber: Actual room number selected
 * @param {Array} roomPagination: All the rooms sorted by room number and roomId pair
 * @return {number} roomId
 */
const _getActualRoomId = (pageNumber, roomPagination) => roomPagination[pageNumber];


