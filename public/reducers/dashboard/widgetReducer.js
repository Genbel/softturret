import { FETCH_WIDGETS_SUCCESS } from 'actions/dashboard/dashboardTypes';
import _ from 'lodash';

// Widget reducer
const widgetReducer = () => {
    const widgets = (state = {}, action) => {
        switch (action.type){
            case FETCH_WIDGETS_SUCCESS:
                return action.response.widgets;
            default:
                return state;
        }
    };
    return widgets;
};

export default widgetReducer;


//************* Reducer selectors *************//
export const getWidget = (state, id) => state[id];
export const getDisconnectedWidgets = (state) =>  !_.isEmpty(state)? _.filter(state, ({attached}) => !attached ): state;

//************* Reducer local functions *************//
