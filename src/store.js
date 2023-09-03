
import { createStore, combineReducers } from 'redux';
import historyReducer from './reducers';

const rootReducer = combineReducers({
    history: historyReducer,
});

const store = createStore(rootReducer);

export default store;
