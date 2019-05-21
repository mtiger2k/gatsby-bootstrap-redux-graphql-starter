import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { middleware as thunkMiddleware } from 'redux-saga-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from '../sagas';

const initialState = {}
const saga = createSagaMiddleware();
const middleware = [thunkMiddleware, saga]

if (process.env.NODE_ENV === 'development'){
  middleware.push(logger)
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  ),
)

saga.run(rootSaga);

export default store