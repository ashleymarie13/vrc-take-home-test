import fetch from 'cross-fetch'
import SYSTEM_PARAMS from '../constants'

export const REQUEST_WORLD_RESULTS  = 'REQUEST_WORLD_RESULTS'
// TODO 1. start a loading dials while resukts are loadng 2. disable search buttin
export function requestWorldResults(params) {
	return {
		type: REQUEST_WORLD_RESULTS,
		params
	}
}

export const RECEIVE_WORLD_RESULTS = 'RECEIVE_WORLD_RESULTS'

export function receiveWorldResults(params) {
	return {
		type: RECEIVE_WORLD_RESULTS,
		params,
		results: json.data.children.map(child => child.data),
		receivedAt: Date.now()
	}
}

export const DISABLE_SEARCH = 'DISABLE_SEARCH'

export function disableSearch() {
	return {
		type: DISABLE_SEARCH
	}
}

//TODO move these enums
export const sortTerms = {
	POPULARITY: 'popularity',
	HEAT: 'heat',
	FAVORITES: 'favorites',
	CREATED: 'created',
	UPDATED: 'updated'
}

export const platform {
	PC: 'standalonewindows',
	QUEST: 'android',
	CROSS_PLATFORM: 'standalonewindows,android'
}
function constructParamString(params) {
	//TODO concat spaces in search term
	// construct from System params and params
	let searchString = ''

	return '&search=foo'

}

export function fetchWorlds(params) {
	// check all params are available from user
	//search, sort,platform enums
	// set other ones
	// make fetch call
	params = {
		...params,
		// set any missing values
	}

	var paramString = constructParamString(params)

	return dispatch => {
		dispatch(requestWorldResults(params))
		return fetch(`https://vrchat.com/api/1/worlds?apiKey=JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26${paramString}.json`)
			.then(
				response => response.json(),
				error => console.log('There was an error', error) //TODO error handling
			)
			.then(json =>
				dispatch(receiveWorldResults(params, json))
			)
	}

}





