import {combineReducers} from 'redux';
import TodoReducer from './reducer-todo.js';


const allReducers = combineReducers({
	todolist: TodoReducer
});

export default allReducers;