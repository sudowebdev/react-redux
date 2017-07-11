import {combineReducers} from 'redux';
import TodoReducer from './reducer-todo.js';


const allReducers = combineReducers({
	todo: TodoReducer
});

export default allReducers;