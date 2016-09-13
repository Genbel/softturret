import { combineReducers } from 'redux';
import widgetReducer from 'reducers/dashboard/widgetReducer';
import roomReducer from 'reducers/dashboard/roomReducer';
import modalReducer from 'reducers/dashboard/modalReducer';
import errorReducer from 'reducers/dashboard/errorReducer';

// Dashbord reducers
const createDashboard = () => {
    return combineReducers({
        widgets: widgetReducer(),
        rooms: roomReducer(),
        modals: modalReducer(),
        errors: errorReducer()
    });
};
export default createDashboard;



