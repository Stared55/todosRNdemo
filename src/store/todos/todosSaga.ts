import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import * as actionsTypes from 'src/store/todos/todosTypes';
import * as actions from 'src/store/todos/todosActions';
import store from 'src/store/store';
import { getTodosApi } from 'src/utils/api/todosApi';
import { ITodo } from 'src/utils/types/todoTypes';
import {
  _getData,
  asyncStorageKeys,
  _removeData,
  _storeData,
} from 'src/utils/asyncStorage';

function* handleGetTodos() {
  try {
    yield put(actions.getTodosPending());
    const todosFromAsync: ITodo[] = yield call(checkAsyncStorage);
    console.log('todosFromAsync: ', todosFromAsync);

    if (todosFromAsync?.length > 0) {
      yield put(actions.getTodosResolved(todosFromAsync));
      return;
    }

    const response = yield call(getTodosApi);
    if (response.length <= 0) {
      yield put(actions.getTodosRejected('no data'));
    }
    const slicedResponse = response.slice(0, 10);

    yield put(actions.getTodosResolved(slicedResponse));
  } catch (error) {
    console.log(error);
    yield put(actions.getTodosRejected(error));
  }
}

function* handleAddTodo({ payload }: any) {
  try {
    yield put(actions.addTodoPending());
    const todo = payload;
    const todosFromStore = store.getState().todos.todos;
    const updatedTodos = [...todosFromStore];
    updatedTodos.push(todo);

    yield put(actions.addTodoResolved(updatedTodos));
  } catch (error) {
    console.log(error);
    yield put(actions.addTodoRejected(error));
  }
}

function* handleSaveTodos() {
  try {
    yield put(actions.saveTodosPending());
    const todosFromStore = store.getState().todos.todos;
    yield call(_storeData, asyncStorageKeys.todos, todosFromStore);

    yield put(actions.saveTodosResolved());
  } catch (error) {
    console.log(error);
    yield put(actions.saveTodosRejected(error));
  }
}

function* handleToggleTodos({ payload }: any) {
  try {
    yield put(actions.toggleTodosPending());
    const { todoIds, state } = payload;
    const todosFromStore = store.getState().todos.todos;
    todosFromStore.forEach((todo) => {
      if (todoIds.includes(todo.id)) {
        todo.completed = state;
      }
    });

    yield put(actions.toggleTodosResolved(todosFromStore));
  } catch (error) {
    console.log(error);
    yield put(actions.toggleTodosRejected(error));
  }
}

function* handleDeleteTodos({ payload }: any) {
  try {
    yield put(actions.deleteTodosPending());
    const todoIds = payload;
    const state = store.getState();
    let updatedTodos: ITodo[] = [];

    state.todos.todos.forEach((todo: ITodo) => {
      if (!todoIds.includes(todo.id)) {
        updatedTodos.push(todo);
      }
    });

    yield put(actions.deleteTodosResolved(updatedTodos));
  } catch (error) {
    console.log(error);
    yield put(actions.deleteTodosRejected(error));
  }
}

function* checkAsyncStorage() {
  const result = yield call(_getData, asyncStorageKeys.todos);
  const jsonResult = yield JSON.parse(result);
  return jsonResult;
}

function* handleClearTodos() {
  try {
    yield put(actions.clearTodosPending());
    yield call(_removeData, asyncStorageKeys.todos);
    yield put(actions.clearTodosResolved());
  } catch (error) {
    console.log(error);
    yield put(actions.clearTodosRejected(error));
  }
}

function* watchTodosRequest() {
  yield all([takeLatest(actionsTypes.GET_TODOS, handleGetTodos)]);
  yield all([takeLatest(actionsTypes.ADD_TODO, handleAddTodo)]);
  yield all([takeLatest(actionsTypes.SAVE_TODOS, handleSaveTodos)]);
  yield all([takeLatest(actionsTypes.CLEAR_TODOS, handleClearTodos)]);
  yield all([takeLatest(actionsTypes.TOGGLE_TODOS, handleToggleTodos)]);
  yield all([takeLatest(actionsTypes.DELETE_TODOS, handleDeleteTodos)]);
}

const todosSagas = [fork(watchTodosRequest)];

export default todosSagas;
