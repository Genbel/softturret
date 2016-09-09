import { expect } from '../../../test_helper';
import { FETCH_WIDGETS_SUCCESS, ROOM_CHANGED } from 'actions/dashboard/dashboardTypes';
import roomReducer, { getRoomWidgets, getActualRoom, getTotalRooms, getActualRoomName, getActualRoomId } from 'reducers/dashboard/roomReducer';
import { getRoomStateObject, getFullObjectOfTheState, getPaginationState } from '../../../mockElements/dashboard/states';
import { widgetsFetchedData, newRoomAction } from '../../../mockElements/dashboard/actions';
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
            const newState = { byId: {}, actual: 1, pagination: [] };
            expect(reducer({}, { type: ROOM_CHANGED, page: 1 })).to.eql(newState);
        });
        it('--- PENDIENT --- should handle WIDGET_ATTACHED action: PENDIENT, WE HAVE TO IMPLEMENT', () => {
            expect(true).to.be.false;
        });
        it('should handle ROOM_ADDED action', () => {
            const action = newRoomAction();
            const newState = getRoomStateObject();
            expect(reducer({actual: 0}, action)).to.eql(newState);
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
        })
    });
});