export const SYSTEM_PARAMS = {
	order: 'ascending',// or 'descending' - currently hardcoded to one value
	n: 10, // ten at a time
	offset: 10, // TODO: check this
	seven: 7,
}

export const SORT = {
	POPULARITY: 'popularity',
	HEAT: 'heat',
	FAVORITES: 'favorites',
	CREATED: 'created',
	UPDATED: 'updated'
}

export const PLATFORM = {
	PC: 'standalonewindows',
	QUEST: 'android',
	CROSS_PLATFORM: 'standalonewindows,android'
}