import {
    ADD_ROOM_MODAL_OPENED, ADD_ROOM_MODAL_CLOSED,
    CLEAR_ALL_MODAL_OPENED, CLEAR_ALL_MODAL_CLOSED
} from 'actions/dashboard/dashboardTypes';
import { expect } from '../../../../test_helper';
import modalReducer from 'reducers/dashboard/modalReducer';
import { getModalState } from '../../../../../public/reducers/dashboard/modalReducer';

const reducer = modalReducer();

describe('#dashboar-reducers: modal Reducer (Reducer, modalReducer.js)', () => {
    describe('-> creating new state of the modal reducer', () => {
        it('should handle ADD_ROOM_MODAL_OPENED', () => {
            const state = {
                addRoomModalIsOpen: false,
                addWidgetModalIsOpen: false,
                removeRoomModalIsOpen: false,
                removeWidgetModalIsOpen: false
            };
            const newState = {
                addRoomModalIsOpen: true,
                addWidgetModalIsOpen: false,
                removeRoomModalIsOpen: false,
                removeWidgetModalIsOpen: false
            };
            expect(reducer(state, { type: ADD_ROOM_MODAL_OPENED})).to.eql(newState);
        });
        it('should handle ADD_ROOM_MODAL_CLOSED', () => {
            const state = {
                addRoomModalIsOpen: true,
                addWidgetModalIsOpen: false,
                removeRoomModalIsOpen: false,
                removeWidgetModalIsOpen: false
            };
            const newState = {
                addRoomModalIsOpen: false,
                addWidgetModalIsOpen: false,
                removeRoomModalIsOpen: false,
                removeWidgetModalIsOpen: false
            };
            expect(reducer(state, { type: ADD_ROOM_MODAL_CLOSED})).to.eql(newState);
        });
    });
    describe('-> reducer selectors', () => {
        it('should return the actual display state of the modal', () => {
            const openState = { addRoomModalIsOpen: true };
            const closeState = { addRoomModalIsOpen: false };
            expect(getModalState(openState, 'addModal')).to.be.true;
            expect(getModalState(closeState, 'addModal')).to.be.false;
        });
    });
});