import { expect } from '../../test_helper';
import { changeRoom } from 'actions/dashboard/roomsActions';
import { ROOM_CHANGED } from 'actions/dashboard/dashboardTypes';

describe('#dashboard-dnd-actions: Room actions (ActionCreator)', () => {
   it('changeRoom should create ROOM_CHANGED action', () => {
       expect(changeRoom(2)).to.eql({ type: ROOM_CHANGED, page: 2 });
   });
});