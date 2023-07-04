<template>
	<div :class="classList"/>
</template>

<script>
import { propTypes } from '../config/propTypes'

export default {
	name: 'v-list-icon',
	props: propTypes,
	computed: {
		classList () {
			return `v-list-icon v-list-icon--${this.color}`
		},
	},
}
</script>

<style lang="scss">
@import "./v-list-icon";
</style>
