import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer'

export default preloadedState =>
  createStore(reducer, preloadedState, applyMiddleware(thunk, createLogger()))
