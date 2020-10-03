import * as actionTypes from 'src/store/todos/todosTypes';
import { ITodo } from 'src/utils/types/todoTypes';

// ---------- GET TODOS ----------

export const getTodos = (): actionTypes.GetTodos => ({
  type: actionTypes.GET_TODOS,
});

export const getTodosPending = (): actionTypes.GetTodosPending => ({
  type: actionTypes.GET_TODOS_PENDING,
});

export const getTodosResolved = (
  list: ITodo[],
): actionTypes.GetTodosResolved => ({
  type: actionTypes.GET_TODOS_RESOLVED,
  payload: list,
});

export const getTodosRejected = (
  error: string,
): actionTypes.GetTodosRejected => ({
  type: actionTypes.GET_TODOS_REJECTED,
  payload: error,
});

// ---------- ADD TODO ----------

export const addTodo = (todo: ITodo): actionTypes.AddTodo => ({
  type: actionTypes.ADD_TODO,
  payload: todo,
});

export const addTodoPending = (): actionTypes.AddTodoPending => ({
  type: actionTypes.ADD_TODO_PENDING,
});

export const addTodoResolved = (
  todos: ITodo[],
): actionTypes.AddTodoResolved => ({
  type: actionTypes.ADD_TODO_RESOLVED,
  payload: todos,
});

export const addTodoRejected = (
  error: string,
): actionTypes.AddTodoRejected => ({
  type: actionTypes.ADD_TODO_REJECTED,
  payload: error,
});

// ---------- SAVE TODOS ----------

export const saveTodos = (): actionTypes.SaveTodos => ({
  type: actionTypes.SAVE_TODOS,
});

export const saveTodosPending = (): actionTypes.SaveTodosPending => ({
  type: actionTypes.SAVE_TODOS_PENDING,
});

export const saveTodosResolved = (): actionTypes.SaveTodosResolved => ({
  type: actionTypes.SAVE_TODOS_RESOLVED,
});

export const saveTodosRejected = (
  error: string,
): actionTypes.SaveTodosRejected => ({
  type: actionTypes.SAVE_TODOS_REJECTED,
  payload: error,
});

// ---------- CLEAR TODOS ----------

export const clearTodos = (): actionTypes.ClearTodos => ({
  type: actionTypes.CLEAR_TODOS,
});

export const clearTodosPending = (): actionTypes.ClearTodosPending => ({
  type: actionTypes.CLEAR_TODOS_PENDING,
});

export const clearTodosResolved = (): actionTypes.ClearTodosResolved => ({
  type: actionTypes.CLEAR_TODOS_RESOLVED,
});

export const clearTodosRejected = (
  error: string,
): actionTypes.ClearTodosRejected => ({
  type: actionTypes.CLEAR_TODOS_REJECTED,
  payload: error,
});

// ---------- TOGGLE TODOS ----------

export const toggleTodos = (
  todoIds: number[],
  state: boolean,
): actionTypes.ToggleTodos => ({
  type: actionTypes.TOGGLE_TODOS,
  payload: {
    todoIds,
    state,
  },
});

export const toggleTodosPending = (): actionTypes.ToggleTodosPending => ({
  type: actionTypes.TOGGLE_TODOS_PENDING,
});

export const toggleTodosResolved = (
  todos: ITodo[],
): actionTypes.ToggleTodosResolved => ({
  type: actionTypes.TOGGLE_TODOS_RESOLVED,
  payload: todos,
});

export const toggleTodosRejected = (
  error: string,
): actionTypes.ToggleTodosRejected => ({
  type: actionTypes.TOGGLE_TODOS_REJECTED,
  payload: error,
});

// ---------- DELETE TODOS ----------

export const deleteTodos = (todoIds: number[]): actionTypes.DeleteTodos => ({
  type: actionTypes.DELETE_TODOS,
  payload: todoIds,
});

export const deleteTodosPending = (): actionTypes.DeleteTodosPending => ({
  type: actionTypes.DELETE_TODOS_PENDING,
});

export const deleteTodosResolved = (
  todos: ITodo[],
): actionTypes.DeleteTodosResolved => ({
  type: actionTypes.DELETE_TODOS_RESOLVED,
  payload: todos,
});

export const deleteTodosRejected = (
  error: string,
): actionTypes.DeleteTodosRejected => ({
  type: actionTypes.DELETE_TODOS_REJECTED,
  payload: error,
});
