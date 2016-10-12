//############### DASHBOARD COMPLETE STATE ###############//
export const getFullObjectOfTheState = () =>  {
    return {
        dashboard: {
            rooms:{
                actual: 0,
                pagination: ['asdf2kf0asdfnasdf90', 'pqioerp0923klfqpsd890u2n', 'mcio-029na98-2in'],
                byId: {
                    'asdf2kf0asdfnasdf90': {
                        type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
                        text: 'Surrounding People',
                        widgets: ["1"]
                    }
                }
            },
            widgets: {
                byId:{
                    1: {
                        type: 'GS',
                        position: 1,
                        text: 'Lina Familly',
                        attached: true,
                        id: "1"
                    },
                    2: {
                        type: 'GS',
                        position: null,
                        text: 'My family',
                        attached: false,
                        id: "2"
                    },
                    3: {
                        type: 'GS',
                        position: null,
                        text: 'Friends',
                        attached: false,
                        id: "3"
                    }
                },
                isFetching: false
            }
        }
    };
};

//############### PAGINATION CONTAINER ###############//
// Pagination container test state
export const getPaginationStateObject = () => {
    return {
        dashboard: {
            rooms:{
                actual: 1,
                pagination: ['asdf2kf0asdfnasdf90', 'pqioerp0923klfqpsd890u2n', 'mcio-029na98-2in']
            }
        }
    };
};

//############### ROOM REDUCER ###############//
// After FETCH_WIDGETS_SUCCESS the new state of the rooms reducer. We get that applying 'widgetsFetchedData 'mock action response
export const getRoomStateObject = () => ({
    actual: 0,
    pagination: ['asdf2kf0asdfnasdf90'],
    byId: {
        'asdf2kf0asdfnasdf90': {
            type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: ["1"]
        }
    },
    removedRoomId: null,
    sendingRequest: false,
    editMode: false
});

export const getNewRoomState = () => ({
    actual: 1,
    pagination: ['asdf2kf0asdfnasdf90'],
    byId: {
        'asdf2kf0asdfnasdf90': {
            _id: "asdf2kf0asdfnasdf90",
            attached: false,
            type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: ["1"]
        }
    },
    removedRoomId: null,
    sendingRequest: false,
    editMode: false
});
// After UNIT_WIDGET_EDIT action, the new state of the reducer.
export const getRoomStateAfterDisconnectTheWidget = () => ({
    actual: 0,
    pagination: ['asdf2kf0asdfnasdf90'],
    byId: {
        'asdf2kf0asdfnasdf90': {
            type: ['GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS', 'GS'],
            text: 'Surrounding People',
            widgets: []
        }
    },
    editMode: false,
    removedRoomId: null,
    sendingRequest: false
});
// Pagination state for the room selector in roomReducer test
export const getPaginationState = () => ({
    pagination: ['asdf2kf0asdfnasdf90', 'pqioerp0923klfqpsd890u2n', 'mcio-029na98-2in']
});

//############### WIDGET REDUCER ###############//
//After FETCH_WIDGETS_SUCCESS the new state of the widgets reducer. We get that applying 'widgetsFetchedData' mock action response
export const getWidgetStateObject = () => ({
    byId: {
        1: {
            type: 'GS',
            position: 1,
            text: 'Lina Familly',
            attached: true,
            id: "1"
        }
    },
    isFetching: false,
    restQueue: [],
    removedWidgetId: null,
    sendingRequest: false
});
// We use getFullObjectOfTheState object and we have to extract all the disconnected widgets
export const getDisconnectedWidgetsObject = () => {
    return [
        {
            type: 'GS',
            position: null,
            text: 'My family',
            attached: false,
            id: "2"
        },
        {
            type: 'GS',
            position: null,
            text: 'Friends',
            attached: false,
            id: "3"
        }
    ]
};
// Non attached a widget
export const nonAttachedWidget = (restQueue) => ({
    byId: {
        1: {
            type: 'GS',
            position: null,
            text: 'Lina Familly',
            attached: false,
            id: "1"
        }
    },
    isFetching: false,
    restQueue,
    removedWidgetId: null,
    sendingRequest: false
});
// Attach a widget
export const attachedWidget = (restQueue) => ({
    byId: {
        1: {
            type: 'GS',
            position: 3,
            text: 'Lina Familly',
            attached: true,
            id: "1"
        }
    },
    isFetching: false,
    restQueue,
    removedWidgetId: null,
    sendingRequest: false
});