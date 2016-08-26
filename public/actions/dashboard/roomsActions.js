import { ROOM_CHANGED } from './dashboardTypes';

export const changeRoom = (page) => ({
    type: ROOM_CHANGED,
    page
});