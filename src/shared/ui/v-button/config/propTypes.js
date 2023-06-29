import { BUTTON_ICON_POSITIONS, BUTTON_STYLES } from './config'

export const propTypes = {
	buttonStyle: {
		type: String,
		default: BUTTON_STYLES.BLACK,
		validator: v => Object.values(BUTTON_STYLES).includes(v),
	},
	block: {
		type: Boolean,
		default: false,
	},
	withIcon: {
		type: Boolean,
		default: false,
	},
	iconPosition: {
		type: String,
		default: BUTTON_ICON_POSITIONS.LEFT,
		validator: v => Object.values(BUTTON_ICON_POSITIONS).includes(v),
	},
}
