<template>
	<button :class="classList" @click="$emit('click')">
		<slot/>
	</button>
</template>

<script>
import { propTypes } from '../config/propTypes'

export default {
	name: 'v-button',
	props: propTypes,
	computed: {
		classList () {
			return `v-button ${this.block ? 'v-button--block' : ''} v-button--${this.buttonStyle}`
		},
	},
}
</script>

<style lang="scss">
@import "./v-button.scss";
</style>
