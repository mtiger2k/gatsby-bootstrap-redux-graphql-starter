import { combineReducers } from 'redux'
import userReducer from './userReducer'

export default function createReducer(injectedReducers = {}) {

	const appReducer = combineReducers({
	  user: userReducer,
	  ...injectedReducers,
	})

	return function (state, action) {
	  if (action.type === 'LOGOUT_USER') {
	    state = undefined // eslint-disable-line no-param-reassign
	  }
	  return appReducer(state, action)
	}
}
