import { ITodo } from 'src/utils/types/todoTypes';

// ---------- GET TODOS ----------

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_PENDING = 'GET_TODOS_PENDING';
export const GET_TODOS_RESOLVED = 'GET_TODOS_RESOLVED';
export const GET_TODOS_REJECTED = 'GET_TODOS_REJECTED';

export interface GetTodos {
  type: typeof GET_TODOS;
}

export interface GetTodosPending {
  type: typeof GET_TODOS_PENDING;
}

export interface GetTodosResolved {
  type: typeof GET_TODOS_RESOLVED;
  payload: ITodo[];
}

export interface GetTodosRejected {
  type: typeof GET_TODOS_REJECTED;
  payload: string;
}

// ---------- ADD TODO ----------

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_PENDING = 'ADD_TODO_PENDING';
export const ADD_TODO_RESOLVED = 'ADD_TODO_RESOLVED';
export const ADD_TODO_REJECTED = 'ADD_TODO_REJECTED';

export interface AddTodo {
  type: typeof ADD_TODO;
  payload: ITodo;
}

export interface AddTodoPending {
  type: typeof ADD_TODO_PENDING;
}

export interface AddTodoResolved {
  type: typeof ADD_TODO_RESOLVED;
  payload: ITodo[];
}

export interface AddTodoRejected {
  type: typeof ADD_TODO_REJECTED;
  payload: string;
}

// ---------- SAVE TODOS ----------

export const SAVE_TODOS = 'SAVE_TODOS';
export const SAVE_TODOS_PENDING = 'SAVE_TODOS_PENDING';
export const SAVE_TODOS_RESOLVED = 'SAVE_TODOS_RESOLVED';
export const SAVE_TODOS_REJECTED = 'SAVE_TODOS_REJECTED';

export interface SaveTodos {
  type: typeof SAVE_TODOS;
}

export interface SaveTodosPending {
  type: typeof SAVE_TODOS_PENDING;
}

export interface SaveTodosResolved {
  type: typeof SAVE_TODOS_RESOLVED;
}

export interface SaveTodosRejected {
  type: typeof SAVE_TODOS_REJECTED;
  payload: string;
}

// ---------- CLEAR TODOS ----------

export const CLEAR_TODOS = 'CLEAR_TODOS';
export const CLEAR_TODOS_PENDING = 'CLEAR_TODOS_PENDING';
export const CLEAR_TODOS_RESOLVED = 'CLEAR_TODOS_RESOLVED';
export const CLEAR_TODOS_REJECTED = 'CLEAR_TODOS_REJECTED';

export interface ClearTodos {
  type: typeof CLEAR_TODOS;
}

export interface ClearTodosPending {
  type: typeof CLEAR_TODOS_PENDING;
}

export interface ClearTodosResolved {
  type: typeof CLEAR_TODOS_RESOLVED;
}

export interface ClearTodosRejected {
  type: typeof CLEAR_TODOS_REJECTED;
  payload: string;
}

// ---------- TOGGLE TODOS ----------

export const TOGGLE_TODOS = 'TOGGLE_TODOS';
export const TOGGLE_TODOS_PENDING = 'TOGGLE_TODOS_PENDING';
export const TOGGLE_TODOS_RESOLVED = 'TOGGLE_TODOS_RESOLVED';
export const TOGGLE_TODOS_REJECTED = 'TOGGLE_TODOS_REJECTED';

export interface ToggleTodos {
  type: typeof TOGGLE_TODOS;
  payload: {
    todoIds: number[];
    state: boolean;
  };
}

export interface ToggleTodosPending {
  type: typeof TOGGLE_TODOS_PENDING;
}

export interface ToggleTodosResolved {
  type: typeof TOGGLE_TODOS_RESOLVED;
  payload: ITodo[];
}

export interface ToggleTodosRejected {
  type: typeof TOGGLE_TODOS_REJECTED;
  payload: string;
}

// ---------- DELETE TODOS ----------

export const DELETE_TODOS = 'DELETE_TODOS';
export const DELETE_TODOS_PENDING = 'DELETE_TODOS_PENDING';
export const DELETE_TODOS_RESOLVED = 'DELETE_TODOS_RESOLVED';
export const DELETE_TODOS_REJECTED = 'DELETE_TODOS_REJECTED';

export interface DeleteTodos {
  type: typeof DELETE_TODOS;
  payload: number[];
}

export interface DeleteTodosPending {
  type: typeof DELETE_TODOS_PENDING;
}

export interface DeleteTodosResolved {
  type: typeof DELETE_TODOS_RESOLVED;
  payload: ITodo[];
}

export interface DeleteTodosRejected {
  type: typeof DELETE_TODOS_REJECTED;
  payload: string;
}

export type TodosActionTypes =
  | GetTodos
  | GetTodosPending
  | GetTodosRejected
  | GetTodosResolved
  | AddTodo
  | AddTodoPending
  | AddTodoRejected
  | AddTodoResolved
  | ClearTodos
  | ClearTodosPending
  | ClearTodosRejected
  | ClearTodosResolved
  | SaveTodos
  | SaveTodosPending
  | SaveTodosRejected
  | SaveTodosResolved
  | DeleteTodos
  | DeleteTodosPending
  | DeleteTodosRejected
  | DeleteTodosResolved
  | ToggleTodos
  | ToggleTodosPending
  | ToggleTodosRejected
  | ToggleTodosResolved;
