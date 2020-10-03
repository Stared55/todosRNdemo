import { all } from 'redux-saga/effects';
import todosSagas from 'src/store/todos/todosSaga';

export default function* rootSaga() {
  yield all([...todosSagas]);
}
