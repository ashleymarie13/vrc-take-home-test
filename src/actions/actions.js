import fetch from 'cross-fetch'

export const REQUEST_WORLD_RESULTS  ='REQUEST_WORLD_RESULTS'
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

export function fetchWorlds(params) {
	// check all params are available
	// set other ones
	// make fetch call
		
}