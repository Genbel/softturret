import { combineReducers } from 'redux';
import widgetReducer from 'reducers/dashboard/widgetReducer';
import roomReducer from 'reducers/dashboard/roomReducer';

// Dashbord reducers
const createDashboard = () => {
    return combineReducers({
        widgets: widgetReducer(),
        rooms: roomReducer()
    });
};
export default createDashboard;



