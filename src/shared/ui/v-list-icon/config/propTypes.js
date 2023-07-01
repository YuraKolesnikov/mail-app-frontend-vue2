import { LIST_ICON_COLORS } from './config'

export const propTypes = {
	color: {
		type: String,
		default: LIST_ICON_COLORS.BLUE,
		validator: v => LIST_ICON_COLORS.LIST.includes(v),
	},
}
