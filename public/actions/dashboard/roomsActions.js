import {
    ROOM_CHANGED, CLEAR_ALL_WIDGETS, TOGGLE_EDIT_ROOM,
    REMOVE_ROOM_ID, REMOVE_ROOM, REMOVE_ROOM_FAILED, REMOVE_ROOM_SUCCESS,
    REMOVE_ROOM_MODAL_OPENED, REMOVE_ROOM_MODAL_CLOSED,
    ROOM_ADDED, ROOM_ADDED_SUCCESS, ROOM_ADDED_FAILED
} from './dashboardTypes';
import axios from 'axios';
import { APIPath } from 'config/staticPaths';
import assign from 'lodash/assign';

export const paginateRoom = (page) => ({
    type: ROOM_CHANGED,
    page
});

export const addNewRoom = (newRoom) => (dispatch, getState) => {
    dispatch({ type: ROOM_ADDED });
    axios.post(`${APIPath}/room/add_room`, newRoom)
        .then(({ data }) => {
            const actualPage = getState().dashboard.rooms.pagination.length;
            dispatch({ type: ROOM_ADDED_SUCCESS, response: { room: data, actualPage }});
        })
        .catch(({ response }) => {
            assign(newRoom, { errorMessage: response.data });
            console.log(newRoom);
            dispatch({ type: ROOM_ADDED_FAILED, response: newRoom });
        });
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