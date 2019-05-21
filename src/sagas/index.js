import { takeEvery, all } from 'redux-saga/effects';
import { REQUEST_LOGIN, FETCH_USER } from '../redux/actions/types';
import { handleLogin, handleFetchMe } from './auth';

function *watchAll() {
  yield all([
    takeEvery(REQUEST_LOGIN, handleLogin),
    takeEvery(FETCH_USER, handleFetchMe),
  ])
}

export default watchAll;
