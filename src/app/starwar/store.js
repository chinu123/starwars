import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

// Sync dispatched route actions to the history
const middlewares = [reduxThunk];



const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export default createStoreWithMiddleware(rootReducer);
