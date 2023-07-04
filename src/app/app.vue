<template>
	<div>
		<div :class="containerClassList">
			<v-button block @click="setTheme('brown')">Brown</v-button>
			<v-button :button-style="BUTTON_STYLES.WHITE" @click="setTheme('green')">Green</v-button>
			<v-button @click="setTheme('violet')">Violet</v-button>
			<v-button :button-style="BUTTON_STYLES.BLACK_OUTLINED">Outlined</v-button>
			<v-button :button-style="BUTTON_STYLES.ACCENT">Accent</v-button>
			<v-input id="name" name="name" placeholder="Full name" type="text" @input="handleInput"/>
			<v-list-icon :color="LIST_ICON_COLORS.LIGHT_BLUE"/>
		</div>
	</div>
</template>

<script>
import {
	BUTTON_ICON_POSITIONS,
	BUTTON_STYLES,
	INPUT_TYPES,
	INPUTS,
	LIST_ICON_COLORS,
	VButton,
	VInput,
	VListIcon,
} from 'shared/ui'

export default {
	components: {
		VButton,
		VInput,
		VListIcon,
	},
	data () {
		return {
			theme: 'brown',
			BUTTON_STYLES,
			BUTTON_ICON_POSITIONS,
			INPUT_TYPES,
			INPUTS,
			LIST_ICON_COLORS,
		}
	},
	methods: {
		setTheme (theme) {
			this.theme = theme
		},
		handleInput (v) {
			console.log(`LOLKEK: ${v}`)
		},
		handleBlur () {
			console.log('BLUR')
		},
		handleFocus () {
			console.log('FOCUS')
		},
	},
	computed: {
		containerClassList () {
			return `container ${this.theme} flex`
		},
	},
}
</script>

<style lang="scss">
@import './app';
</style>
