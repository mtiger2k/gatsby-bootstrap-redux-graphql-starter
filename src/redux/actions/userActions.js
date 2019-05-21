import {
  REQUEST_LOGIN,
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOADING,
  REGISTER_USER,
} from './types'

export const requestLogin = (login, password) => {
  return {
    type: REQUEST_LOGIN,
    login, password,
    meta: {
      thunk: true
    }
  }
}

export const fetchUser = () => {
  return {
    type: FETCH_USER,
    meta: {
      thunk: true
    }
  }
}

export const loginUser = (user) => {
  // Login goes here
  return {
    type: LOGIN_USER,
    payload: user,
  }
}

export const logoutUser = () => {
  // Logout goes here
  return ({
    type: LOGOUT_USER,
    payload: null,
  })
}


export const registerUser = (user) => (dispatch) => {
  dispatch({
    type: LOADING,
  })
  // Register goes here
  dispatch({
    type: REGISTER_USER,
    payload: user,
  })
}
