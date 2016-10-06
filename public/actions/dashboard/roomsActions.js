import {
    ROOM_CHANGED, ROOM_ADDED, CLEAR_ALL_WIDGETS, TOGGLE_EDIT_ROOM,
    REMOVE_ROOM_ID, REMOVE_ROOM, REMOVE_ROOM_FAILED, REMOVE_ROOM_SUCCESS,
    REMOVE_ROOM_MODAL_OPENED, REMOVE_ROOM_MODAL_CLOSED
} from './dashboardTypes';
import axios from 'axios';
import { APIPath } from 'config/staticPaths';
import assign from 'lodash/assign';

export const changeRoom = (page) => ({
    type: ROOM_CHANGED,
    page
});

export const addNewRoom = (name, roomType) => {
    // Has to be async data
    const data = {
        'asdf2kkdi8k2asdf90': {
            type: roomType,
            text: name,
            widgets: []
        }
    };
    return { type: ROOM_ADDED, response: data };
};

export const showRemoveRoomModal = (roomId) => (dispatch) => {
    dispatch({ type: REMOVE_ROOM_ID, roomId });
    dispatch({ type: REMOVE_ROOM_MODAL_OPENED });
};

export const removeRoom = (roomId) => (dispatch, getState) => {
    dispatch({ type: REMOVE_ROOM, roomId });
    axios.post(`${APIPath}/room/remove_room`, roomId)
        .then(() => {
            const { actual, pagination } = getState().dashboard.rooms;
            dispatch({ type: REMOVE_ROOM_SUCCESS, response: { roomId, actualPage: getActualPage(actual, pagination) }});
            dispatch({ type: REMOVE_ROOM_MODAL_CLOSED });
        })
        .catch(({ response }) => {
            dispatch({ type: REMOVE_ROOM_FAILED, response: { roomId, errorMessage: response.data }});
        });
};

const getActualPage = (actual, pagination) => {
    const beforeDeleteRoomAmount = pagination.length;
    return beforeDeleteRoomAmount == 1?
        null :
        beforeDeleteRoomAmount === actual + 1? actual -1 : actual ;
};

export const toggleEditRoom = () => ({
    type: TOGGLE_EDIT_ROOM
});