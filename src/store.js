import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer as formReducer } from 'redux-form'

const logger = []

if (process.env.NODE_ENV === 'development') {
  logger.push(createLogger())
}

const middleware = applyMiddleware(
  thunk,
  ...logger,
)

/*
  Root Reducer for redux
 */
const rootReducer = combineReducers({
  form: formReducer,
})

const store = createStore(rootReducer, middleware)

export default store
