import * as actionsTypes from 'src/store/todos/todosTypes';
import { ITodo } from 'src/utils/types/todoTypes';

interface IState {
  loading: boolean;
  todos: ITodo[];
  error: string | null;
}

const initialState: IState = {
  loading: false,
  todos: [],
  error: null,
};

export default function todosReducer(
  state: IState = initialState,
  action: actionsTypes.TodosActionTypes,
) {
  switch (action.type) {
    // ---------- GET TODOS ----------
    case actionsTypes.GET_TODOS_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionsTypes.GET_TODOS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actionsTypes.GET_TODOS_RESOLVED:
      return {
        ...state,
        error: null,
        loading: false,
        todos: action.payload,
      };

    // ---------- ADD TODO ----------

    case actionsTypes.ADD_TODO_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionsTypes.ADD_TODO_RESOLVED:
      return {
        ...state,
        todos: action.payload,
        error: null,
        loading: false,
      };

    case actionsTypes.ADD_TODO_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // ---------- SAVE TODOS ----------

    case actionsTypes.SAVE_TODOS_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionsTypes.SAVE_TODOS_RESOLVED:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case actionsTypes.SAVE_TODOS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // ---------- CLEAR TODOS ----------

    case actionsTypes.CLEAR_TODOS_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionsTypes.CLEAR_TODOS_RESOLVED:
      return {
        ...state,
        error: null,
        loading: false,
        todos: [],
      };

    case actionsTypes.CLEAR_TODOS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // ---------- TOGGLE TODOS ----------

    case actionsTypes.TOGGLE_TODOS_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionsTypes.TOGGLE_TODOS_RESOLVED:
      const updatedTodos = [...action.payload];
      return {
        ...state,
        error: null,
        loading: false,
        todos: updatedTodos,
      };

    case actionsTypes.TOGGLE_TODOS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    // ---------- DELETE TODOS ----------

    case actionsTypes.DELETE_TODOS_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionsTypes.DELETE_TODOS_RESOLVED:
      return {
        ...state,
        error: null,
        loading: false,
        todos: action.payload,
      };

    case actionsTypes.DELETE_TODOS_REJECTED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
