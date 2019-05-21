import { call, put } from 'redux-saga/effects';
import { LOGIN_USER } from '../actions/types';
import { loginApi, fetchMeApi } from '../api/auth';
import { navigate } from '@reach/router'

function* handleLogin(action) {
  const { login, password, meta } = action;

  try {
    const user = yield call(loginApi, login, password);

    if (user && user.token) {
      yield put({type: LOGIN_USER, payload: user});
      const me = yield call(fetchMeApi);
      yield put({type: LOGIN_USER, payload: {...me, token: user.token}, meta});

    	localStorage.setItem('bearer_token', user.token)
    	navigate('/app/profile')
    } else {
      localStorage.removeItem('bearer_token')
    }
  } catch (error) {
    
  }
}

function* handleFetchMe(action) {
  const { meta } = action
  try {
    const me = yield call(fetchMeApi);
    yield put({type: LOGIN_USER, payload: {...me, token: localStorage.getItem('bearer_token')}, meta});

  } catch (error) {
    localStorage.removeItem('bearer_token')
    navigate('/app/login')
  }
}

export {
  handleLogin, handleFetchMe
};