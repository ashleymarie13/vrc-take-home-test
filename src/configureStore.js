import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/reducers'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	)
}
