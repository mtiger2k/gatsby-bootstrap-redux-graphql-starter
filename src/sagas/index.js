import { takeEvery, all } from 'redux-saga/effects';
import { REQUEST_LOGIN } from '../redux/actions/types';
import { handleLogin } from './auth';

function *watchAll() {
  yield all([
    takeEvery(REQUEST_LOGIN, handleLogin),
  ])
}

export default watchAll;
