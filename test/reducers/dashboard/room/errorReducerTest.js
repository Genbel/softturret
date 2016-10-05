import { expect } from '../../../test_helper';
import errorReducer, { getRoomError } from 'reducers/dashboard/errorReducer';
import { UNIT_WIDGET_FAILED, UNIT_WIDGET_SUCCESS } from 'actions/dashboard/dashboardTypes';

const reducer = errorReducer();
describe('#dashboard-reducer: error reducer (Reducer, errorReducer.js)', () =>{
    describe('-> creating new state of the room reducer', () => {
        it('should handle UNIT_WIDGET_SUCCESS action', () => {
            const state = { roomErrors: null };
            expect(reducer(state, { type: UNIT_WIDGET_SUCCESS })).to.eql(state);
        });
        it('should handle UNIT_WIDGET_FAILED action', () => {
            const state = { roomErrors: null };
            const action = { type: UNIT_WIDGET_FAILED, response: { errorMessage: 'It went something wrong' }};
            const newState = { roomErrors: 'It went something wrong' };
            expect(reducer(state, action)).to.eql(newState);
        })
    });
    describe('-> reducer selectors', () => {
        const state = { roomErrors: 'It went something wrong' };
        expect(getRoomError(state)).to.equal('It went something wrong');
    });
});