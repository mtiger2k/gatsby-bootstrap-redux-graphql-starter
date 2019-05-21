import {
  REQUEST_LOGIN,
  LOGIN_USER,
  LOGOUT_USER,
  LOADING,
  REGISTER_USER,
} from './types'

export const requestLogin = (login, password) => {
  return {
    type: REQUEST_LOGIN,
    login, password
  }
}

export const loginUser = (user) => (dispatch) => {
  dispatch({
    type: LOADING,
  })
  // Login goes here
  dispatch({
    type: LOGIN_USER,
    payload: user,
  })
}

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOADING,
  })
  // Logout goes here
  dispatch({
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
