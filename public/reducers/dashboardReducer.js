import { combineReducers } from 'redux';
import widgetReducer from 'reducers/dashboard/widgetReducer';
import roomReducer from 'reducers/dashboard/roomReducer';
import modalReducer from 'reducers/dashboard/modalReducer';

// Dashbord reducers
const createDashboard = () => {
    return combineReducers({
        widgets: widgetReducer(),
        rooms: roomReducer(),
        modals: modalReducer()
    });
};
export default createDashboard;



