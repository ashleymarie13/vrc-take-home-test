import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/reducers'
// REMOVE for testing
import { fetchPosts, updateSearchText } from './actions/actions'

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

/// REMOVE for testing
const store = configureStore()
store.dispatch(updateSearchText("hi")).then(() => console.log(store.getState()))
store.dispatch(fetchPosts({})).then(() => console.log(store.getState()))