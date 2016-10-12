import { expect } from '../../test_helper';
import { paginateRoom, addNewRoom, toggleEditRoom, clearAllRoom } from 'actions/dashboard/roomsActions';
import { ROOM_CHANGED, TOGGLE_EDIT_ROOM, CLEAR_ALL_WIDGETS } from 'actions/dashboard/dashboardTypes';

describe('#dashboard-dnd-actions: Room actions (ActionCreator)', () => {
    it('changeRoom should create ROOM_CHANGED action', () => {
       expect(paginateRoom(2)).to.eql({ type: ROOM_CHANGED, page: 2 });
    });
    it('--- PENDIENT ASYNC REQUEST --- addNewRoom should create ROOM_ADDED action', () => {
        expect(true).to.be.false;
    });
    it('toggleEditRoom should create TOGGLE_EDIT_ROOM', () => {
        expect(toggleEditRoom()).to.eql({ type: TOGGLE_EDIT_ROOM });
    });
    it('--- PENDIENT ASYNCH REQUEST --- clearAllRoom should create CLEAR_ALL_WIDGETS action', () => {
        expect(true).to.be.false;
    })
});