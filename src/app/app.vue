<template>
	<div>
		<div :class="containerClassList">
			<v-button block @click="setTheme('brown')">Brown</v-button>
			<v-button :button-style="BUTTON_STYLES.WHITE" @click="setTheme('green')">Green</v-button>
			<v-button @click="setTheme('violet')">Violet</v-button>
			<v-button :button-style="BUTTON_STYLES.BLACK_OUTLINED">Outlined</v-button>
			<v-button :button-style="BUTTON_STYLES.ACCENT">Accent</v-button>
		</div>
	</div>
</template>

<script>
import { BUTTON_ICON_POSITIONS, BUTTON_STYLES, VButton } from 'shared/ui'

export default {
	components: {
		VButton,
	},
	data () {
		return {
			theme: 'brown',
			BUTTON_STYLES,
			BUTTON_ICON_POSITIONS,
		}
	},
	methods: {
		setTheme (theme) {
			this.theme = theme
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
