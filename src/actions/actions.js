import fetch from 'cross-fetch'
import { SYSTEM_PARAMS } from '../constants'

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
export const UPDATE_TERM = 'UPDATE_TERM'
export const UPDATE_PLATFORM = 'UPDATE_PLATFORM'
export const REQUEST_WORLD_RESULTS  = 'REQUEST_WORLD_RESULTS'
export const RECEIVE_WORLD_RESULTS = 'RECEIVE_WORLD_RESULTS'

export function updateSearchText(text) {
	return {
		type: UPDATE_SEARCH_TEXT,
		text,
	}
}

export function updateTerm(term) {
	return {
		type: UPDATE_TERM,
		term,
	}
}

export function updatePlatform(platform) {
	return {
		type: UPDATE_PLATFORM,
		platform,
	}
}

// TODO 1. start a loading dials while resukts are loadng 2. disable search buttin
export function requestWorldResults(params) {
	return {
		type: REQUEST_WORLD_RESULTS,
		params
	}
}


export function receiveWorldResults(params, json) {
	return {
		type: RECEIVE_WORLD_RESULTS,
		params,
		results: json,//.data.children.map(child => child.data),
		receivedAt: Date.now()
	}
}

function constructParamString(params) {

	let searchText = params.search.replace(' ', '+')
	
	let searchString = ''
	searchString = searchString.concat(
		'&search=', encodeURI(searchText), // only uri encoding this because its the only place recieving text input from the user
		'&sort=', params.sort, 
		'&platform=', params.platform,
		'&order=', SYSTEM_PARAMS.order,
		'&n=', SYSTEM_PARAMS.n,
		'&offset=',SYSTEM_PARAMS.offset,
		'&seven=',SYSTEM_PARAMS.seven
		)


	console.log('string = ',searchString)
	return searchString

}

export function fetchWorlds(params) {
	var paramString = constructParamString(params)

	return function(dispatch) {
		dispatch(requestWorldResults(params))
		return fetch(`https://vrchat.com/api/1/worlds?apiKey=JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26${paramString}`)
			.then(
				response => response.json(),
				error => console.log('There was an error', error) //TODO error handling
			)
			.then(json => dispatch(receiveWorldResults(params, json)))
	}

}





