import { expect } from '../../../test_helper';
import { FETCH_WIDGETS_SUCCESS, ROOM_CHANGED, UNIT_WIDGET_EDITED, TOGGLE_EDIT_ROOM, UNIT_WIDGET_FAILED } from 'actions/dashboard/dashboardTypes';
import roomReducer, { getRoomWidgets, getActualRoom, getTotalRooms, getActualRoomName, getActualRoomId, getRoomEditModeState } from 'reducers/dashboard/roomReducer';
import { getRoomStateObject, getFullObjectOfTheState, getPaginationState, getRoomStateAfterDisconnectTheWidget } from '../../../mockElements/dashboard/states';
import { widgetsFetchedData, newRoomAction, unitWidgetActionCreator } from '../../../mockElements/dashboard/actions';
import { getWidgetOrderedForTheRoom } from '../../../mockElements/dashboard/selectors';

// actual reducer that we get from roomReducer combineReducer object
const reducer = roomReducer();
describe('#dashboard-reducers: room reducer (Reducer, roomReducer.js)', () => {
    describe('-> creating new state of the room reducer', () => {
        it('should handle FETCH_WIDGETS_SUCCESS action', () => {
            const newState = getRoomStateObject();
            const response = widgetsFetchedData();
            expect(reducer({}, { type: FETCH_WIDGETS_SUCCESS, response: response})).to.eql(newState);
        });
        it('should handle ROOM_CHANGED action', () => {
            const newState = { byId: {}, actual: 1, pagination: [], editMode: false };
            expect(reducer({}, { type: ROOM_CHANGED, page: 1 })).to.eql(newState);
        });
        it('should handle ROOM_ADDED action', () => {
            const action = newRoomAction();
            const newState = getRoomStateObject();
            expect(reducer({actual: 0}, action)).to.eql(newState);
        });
        it('should handle UNIT_WIDGET_EDITED action, when widget is attached', () => {
            const action = unitWidgetActionCreator(true, UNIT_WIDGET_EDITED);
            const state = getRoomStateObject();
            const newState = getRoomStateAfterDisconnectTheWidget();
            expect(reducer(state, action)).to.eql(newState);
        });
        it('should handle UNIT_WIDGET_EDITED action, when widget is not attached', () => {
            const action = unitWidgetActionCreator(false, UNIT_WIDGET_EDITED);
            const state = getRoomStateAfterDisconnectTheWidget();
            const newState = getRoomStateObject();
            expect(reducer(state, action)).to.eql(newState);
        });
        it('should handle UNIT_WIDGET_FAILED action, when the async request has been done', () => {
            const action = unitWidgetActionCreator(true, UNIT_WIDGET_FAILED);
            const state = getRoomStateAfterDisconnectTheWidget();
            const newState = getRoomStateObject();
            expect(reducer(state, action)).to.eql(newState);
        });
        it('should handle TOGGLE_EDIT_ROOM action', () => {
            const action = { type: TOGGLE_EDIT_ROOM };
            const state = { byId: {}, actual: 1, pagination: [], editMode: false };
            const newState = { byId: {}, actual: 1, pagination: [], editMode: true };
            expect(reducer(state, action)).to.eql(newState);
            expect(reducer(newState, action)).to.eql(state);
        });
    });
    describe('-> reducer selectors', () => {
        it('should return all the widgets order by page key', () => {
            const state = getFullObjectOfTheState();
            const result = getWidgetOrderedForTheRoom();
            expect(getRoomWidgets(state.dashboard)).to.eql(result);
        });
        it('should return the actual room index', () => {
            expect(getActualRoom({ actual: 3 })).to.equal(3);
        });
        it('should return the pagination number', () => {
            const paginationState = getPaginationState();
            expect(getTotalRooms(paginationState)).to.equal(2);
        });
        it('should return the actual room name', () => {
            const state = getFullObjectOfTheState();
            expect(getActualRoomName(state.dashboard)).to.equal('Surrounding People');
        });
        it('should return the actual room id', () => {
            const state = getFullObjectOfTheState();
            expect(getActualRoomId(state.dashboard.rooms)).to.equal('asdf2kf0asdfnasdf90');
        });
        it('should return the edit mode state', () =>{
            const state = { editMode: true };
            expect(getRoomEditModeState(state)).to.be.true;
        })
    });
});