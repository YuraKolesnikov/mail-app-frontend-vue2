<template>
  <div>
		<div :class="containerClassList">
			<button @click="setTheme('brown')">Brown</button>
			<button @click="setTheme('green')">Green</button>
			<button @click="setTheme('violet')">Violet</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			theme: 'brown'
		}
	},
	methods: {
		setTheme(theme) {
			this.theme = theme
		}
	},
	computed: {
		containerClassList() {
			return `container ${this.theme} flex`
		}
	}
}
</script>

<style lang="scss">
@import './app';
</style>
