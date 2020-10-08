import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "../middleware/thunk"

// order matters for the middleware. thunk needs to be hit first before the logger.
// logger is just a middleware that console.logs
const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));
export default configureStore;