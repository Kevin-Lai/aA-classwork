import {combineReducers} from 'redux'
import entitiesReducer from "./entities_reducer"
//when the action is dispatched the action goes through ever reducer
const rootReducer = combineReducers({
    entities: entitiesReducer
  });
  export default rootReducer