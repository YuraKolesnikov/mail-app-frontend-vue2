import { INPUT_TYPES, INPUTS } from './config'

export const propTypes = {
	withIcon: {
		type: Boolean,
		default: false,
	},
	icon: {
		type: [String, null],
		default: null,
		validator: v => !!v ? INPUTS.LIST.reduce((acc, curr) => {
			if (Array.isArray(acc)) {
				acc.push(curr.id)
			}

			return acc
		}, []).includes(v) : true,
	},
	id: {
		type: String,
		required: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	name: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		default: '',
		required: true,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	required: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String,
		default: INPUT_TYPES.TEXT,
		validator: v => INPUT_TYPES.LIST.includes(v),
	},
	value: {
		type: String,
		default: '',
	},
	class: {
		type: String,
		default: '',
	},
	isError: {
		type: Boolean,
		default: false,
	},
}
