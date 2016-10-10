import { combineReducers } from 'redux';
import {
    ADD_ROOM_MODAL_OPENED, ADD_ROOM_MODAL_CLOSED, ROOM_ADDED_SUCCESS,
    REMOVE_ROOM_MODAL_OPENED, REMOVE_ROOM_MODAL_CLOSED,
    ADD_WIDGET_MODAL_OPENED, ADD_WIDGET_MODAL_CLOSED, ADD_WIDGET_SUCCESS,
    REMOVE_WIDGET_MODAL_OPENED, REMOVE_WIDGET_MODAL_CLOSED
} from 'actions/dashboard/dashboardTypes';

const modalReducer = () => {
    const addRoomModalIsOpen = (state = false, action) => {
        switch (action.type) {
            case ADD_ROOM_MODAL_OPENED:
                return true;
            case ADD_ROOM_MODAL_CLOSED:
            case ROOM_ADDED_SUCCESS:
                return false;
            default:
                return state;
        }
    };
    const removeRoomModalIsOpen = (state = false, action) => {
        switch (action.type) {
            case REMOVE_ROOM_MODAL_OPENED:
                return true;
            case REMOVE_ROOM_MODAL_CLOSED:
                return false;
            default:
                return state;
        }
    };
    const addWidgetModalIsOpen = ( state = false, action) => {
        switch (action.type) {
            case ADD_WIDGET_MODAL_OPENED:
                return true;
            case ADD_WIDGET_MODAL_CLOSED:
            case ADD_WIDGET_SUCCESS:
                return false;
            default:
                return state;
        }
    };
    const removeWidgetModalIsOpen = (state = false, action) => {
        switch (action.type) {
            case REMOVE_WIDGET_MODAL_OPENED:
                return true;
            case REMOVE_WIDGET_MODAL_CLOSED:
                return false;
            default:
                return state;
        }
    };
    return combineReducers({
        addRoomModalIsOpen,
        removeRoomModalIsOpen,
        addWidgetModalIsOpen,
        removeWidgetModalIsOpen
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
        case 'removeRoom':
            return state.removeRoomModalIsOpen;
        case 'addWidget':
            return state.addWidgetModalIsOpen;
        case 'removeWidget':
            return state.removeWidgetModalIsOpen;
        case undefined:
            throw new Error('Unknow modal type in _getModalState undefined. Set the proper one.');
        default:
            return false;
    }
};