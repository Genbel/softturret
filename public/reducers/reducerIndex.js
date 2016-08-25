import { combineReducers } from 'redux';
import createDashboard from './dashboardReducer';

// Root reducer of the app
const rootReducer = combineReducers({
    dashboard: createDashboard()
});

export default rootReducer;