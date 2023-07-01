export const INPUTS = {
	USERNAME: {
		id: 'username',
		icon: 'user',
	},
	PASSWORD: {
		id: 'password',
		icon: 'key',
	},
	NAME: {
		id: 'full_name',
		icon: 'lines',
	},
	SEARCH: {
		id: 'search',
		icon: 'search',
	},
}

INPUTS.LIST = [
	INPUTS.USERNAME,
	INPUTS.PASSWORD,
	INPUTS.NAME,
	INPUTS.SEARCH,
]

INPUTS.ID_TO_DATA = {
	[INPUTS.USERNAME.id]: INPUTS.USERNAME,
	[INPUTS.PASSWORD.id]: INPUTS.PASSWORD,
	[INPUTS.NAME.id]: INPUTS.NAME,
	[INPUTS.SEARCH.id]: INPUTS.SEARCH,
}

export const INPUT_TYPES = {
	DATE: 'date',
	EMAIL: 'email',
	SEARCH: 'search',
	PASSWORD: 'password',
	TEXT: 'text',
}

INPUT_TYPES.LIST = [
	INPUT_TYPES.DATE,
	INPUT_TYPES.EMAIL,
	INPUT_TYPES.SEARCH,
	INPUT_TYPES.PASSWORD,
	INPUT_TYPES.TEXT,
]
