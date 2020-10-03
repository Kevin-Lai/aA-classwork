import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer'

//import {createStore as banana} from 'redux';

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer, preLoadedState);
    //return banana(rootReducer, preLoadedState);
}

export default configureStore;