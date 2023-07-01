<template>
	<div>
		<input
			:id="id"
			:class="inputClassList"
			:disabled="disabled"
			:name="name"
			:placeholder="placeholder"
			:readonly="readonly"
			:required="required"
			:type="type"
			:value="value"
			@blur="onBlur"
			@focus="onFocus"
			@input="onInput"
			@keyup.enter="onEnter"
		>
	</div>
</template>

<script>
import { propTypes } from '../config/propTypes'

export default {
	name: 'v-input',
	props: propTypes,
	methods: {
		onInput (e) {
			this.$emit('input', e.target.value)
		},
		onFocus () {
			this.$emit('focus')
		},
		onBlur () {
			this.$emit('blur')
		},
		onEnter () {
			this.$emit('enter')
		},
	},
	computed: {
		inputClassList () {
			return `v-input ${this.class} ${this.isError ? 'v-input--error' : ''} ${this.disabled ? 'v-input--disabled' : ''}`
		},
	},
}
</script>

<style lang="scss">
@import "./v-input";
</style>
