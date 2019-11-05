import { combineReducers } from 'redux'
import {
	UPDATE_SEARCH_TEXT,
	UPDATE_TERM,
	UPDATE_PLATFORM,
	REQUEST_WORLD_RESULTS,
	RECEIVE_WORLD_RESULTS,
} from '../actions/actions'

import { PLATFORM } from '../constants'

/* State View

state = {
	params: {
		search: "some text",
		sort: POPULARITY,
		platform: CROSS_PLATFORM,
	},
	worldResults: {
		isFetching: boolean,
		results: [],
	}

}
*/

function params(
	state = {
		search: "",
		sort: PLATFORM.POPULARITY, // default because selector starts at popularity
		platform: PLATFORM.CROSS_PLATFORM // defaulting to cross platform but might want to move this up
	}, action) {
	switch (action.type) {

		case UPDATE_SEARCH_TEXT:
			return Object.assign({}, state, {
				...state,
				search : action.text,
			})
		case UPDATE_TERM:
			return Object.assign({}, state, {
				...state,
				sort: action.term,
			})
		case UPDATE_PLATFORM:
			return Object.assign({}, state, {
				...state,
				platform: action.platform,
			})
		default:
			return state
	}
}

function worldResults(
	state = {
		isFetching: false,
		results: [],
	}, action) {
	switch(action.type) {
		case REQUEST_WORLD_RESULTS:
			return Object.assign({}, state, {
				...state,
				isFetching: true
			})
		case RECEIVE_WORLD_RESULTS:
			return Object.assign({}, state, {
				...state,
				isFetching: false,
				results: action.results,
				lastUpdated: action.receivedAt,
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	params,
	worldResults,
})

export default rootReducer


