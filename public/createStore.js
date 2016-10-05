'use strict';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducerIndex.js';

const configureStore = () => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    if(process.env.NODE_ENV !== 'production'){
        return createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension());
    }
    return createStoreWithMiddleware(reducers);
};
export default configureStore;