<template>
<div class="root">

	<action-menu class="action-menu"/>

	<turn-tracker class="turn-tracker"/>

</div>
</template>

<script>
import ActionMenu from '~/components/action-menu'
import TurnTracker from '~/components/turn-tracker'

export default {
	components: {
		ActionMenu,
		TurnTracker
	},
	head: {
		titleTemplate: 'Encounter Tracker',
		meta: [
			{ charset: 'utf-8' },
			{ 
				name: 'viewport', 
				content: 'width=device-width, initial-scale=1' 
			},
			{ 
				hid: 'description', 
				name: 'description', 
				content: 'Fan-Made Dungeons and Dragons 4th edition Encounter Tracker' 
			}
		]
	}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
	// height: gh(20);
	height: 100%;
	overflow: hidden;
}

.action-menu {
	// background-color: red;
}
</style>