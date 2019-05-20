import { combineReducers } from 'redux'
import userReducer from './userReducer'
import countReducer from './countReducer'

const appReducer = combineReducers({
  user: userReducer,
  count: countReducer
})

export default function (state, action) {
  if (action.type === 'SIGNOUT_USER') {
    state = undefined // eslint-disable-line no-param-reassign
  }
  return appReducer(state, action)
}
