import { ADD_ROOM_MODAL_OPENED, ADD_ROOM_MODAL_CLOSED } from 'actions/dashboard/dashboardTypes';
import { expect } from '../../test_helper';
import { toggleModal } from 'actions/dashboard/modalActions';

describe('#dashboard-modal-actions: Modal Action Creator', () => {
   it('toggleModal should create an action with the same type that we pass as argument', () => {
       expect(toggleModal(ADD_ROOM_MODAL_CLOSED)).to.eql({ type: ADD_ROOM_MODAL_CLOSED });
       expect(toggleModal(ADD_ROOM_MODAL_OPENED)).to.eql({ type: ADD_ROOM_MODAL_OPENED });
   });
});