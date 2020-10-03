import {combineReducers} from 'redux';
import todosReducer from './todos_reducer'


const rootReducer = combineReducers( { // look into combineReducers
    todos: todosReducer //k,v
}  );



export default rootReducer