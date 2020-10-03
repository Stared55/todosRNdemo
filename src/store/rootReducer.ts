import { combineReducers } from 'redux';
import todosReducer from 'src/store/todos/todosReducer';

export default combineReducers({
  todos: todosReducer,
});
