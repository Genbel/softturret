import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers/reducerIndex.js';

const configureStore = (state) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(reducers, state);
};
export default configureStore;