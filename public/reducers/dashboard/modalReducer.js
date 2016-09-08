import { combineReducers } from 'redux';
import {
    ADD_ROOM_MODAL_OPENED, ADD_ROOM_MODAL_CLOSED,
    CLEAR_ALL_MODAL_OPENED, CLEAR_ALL_MODAL_CLOSED
} from 'actions/dashboard/dashboardTypes';

const modalReducer = () => {
    const addRoomModalIsOpen = (state = false, action) => {
        switch (action.type) {
            case ADD_ROOM_MODAL_OPENED:
                return true;
            case ADD_ROOM_MODAL_CLOSED:
                return false;
            default:
                return state;
        }
    };
    const clearAllModalIsOpen = (state = false, action) => {
        switch (action.type) {
            case CLEAR_ALL_MODAL_OPENED:
                return true;
            case CLEAR_ALL_MODAL_CLOSED:
                return false;
            default:
                return state;
        }
    };
    return combineReducers({
        addRoomModalIsOpen,
        clearAllModalIsOpen
    });
};

export default modalReducer;

//************* Reducer selectors *************//
export const getModalState = (state, type) => _getModalState(state, type);
//************* Reducer getter functions *************//


//************* Reducer local functions *************//
/**
 * We get the state of the requested modal
 * @param {Object} state: Reducer state
 * @param {String} type: Type of the modal. In that case the modal states that are in that reducer
 * @returns {boolean} describes the display state
 * @private
 */
const _getModalState = (state, type) => {
    switch (type) {
        case 'addModal':
            return state.addRoomModalIsOpen;
        case 'clearAll':
            return state.clearAllModalIsOpen;
        case undefined:
            throw new Error('Unknow modal type in _getModalState undefined. Set the proper one.');
        default:
            return false;
    }
};