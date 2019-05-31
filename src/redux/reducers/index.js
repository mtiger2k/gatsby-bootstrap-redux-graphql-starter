import { combineReducers } from 'redux'
import userReducer from './userReducer'
import countReducer from './countReducer'

export default function createReducer(injectedReducers = {}) {
console.log('create reducer...', injectedReducers)
	const appReducer = combineReducers({
	  user: userReducer,
	  //count: countReducer,
	  ...injectedReducers,
	})

	return function (state, action) {
	  if (action.type === 'LOGOUT_USER') {
	    state = undefined // eslint-disable-line no-param-reassign
	  }
	  return appReducer(state, action)
	}
}
