import { expect } from '../../../test_helper';
import { FETCH_WIDGETS_SUCCESS, FETCH_WIDGETS_REQUEST } from 'actions/dashboard/dashboardTypes';
import widgetReducer, { getWidget, getDisconnectedWidgets } from 'reducers/dashboard/widgetReducer';
import { widgetsFetchedData } from '../../../mockElements/dashboard/actions';
import { getWidgetStateObject, getFullObjectOfTheState, getDisconnectedWidgetsObject } from '../../../mockElements/dashboard/states';

const reducer = widgetReducer();

describe('#dashboard-reducers: widget reducer (Reducer, widgetReducer.js)', () => {
    describe('-> creating new state of the widget reducer', () => {
        it('should handle FETCH_WIDGETS_REQUEST action', () => {
            const newState = { byId: {}, isFetching: true };
            const action = { type: FETCH_WIDGETS_REQUEST };
            expect(reducer({}, action)).to.eql(newState);
        });
        it('should handle FETCH_WIDGETS_SUCCESS action', () => {
            const state = { byId:{}, isFetching: true };
            const action = { type: FETCH_WIDGETS_SUCCESS, response: widgetsFetchedData()};
            const newState = getWidgetStateObject();
            expect(reducer(state, action)).to.eql(newState);
        });
    });
    describe('-> reducer selectors', () => {
        it('should return the unique widget information', () => {
            const state = getWidgetStateObject();
            const result = { type: 'GS', position: 1, text: 'Lina Familly', attached: true, id: 1 };
            expect(getWidget(state.byId, 1)).to.eql(result);
        });
        it('should return all the disconnected widgets', () =>{
            const state = getFullObjectOfTheState();
            const result = getDisconnectedWidgetsObject();
            expect(getDisconnectedWidgets(state.dashboard.widgets)).to.eql(result);
        });
    });
});