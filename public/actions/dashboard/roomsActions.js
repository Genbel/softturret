import { ROOM_CHANGED, ROOM_ADDED, CLEAR_ALL_WIDGETS, TOGGLE_EDIT_ROOM } from './dashboardTypes';

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

export const toggleEditRoom = () => ({
    type: TOGGLE_EDIT_ROOM
});

export const clearAllRoom = (roomId) => ({
    // Has to be async data
    type: CLEAR_ALL_WIDGETS,
    response: roomId
});