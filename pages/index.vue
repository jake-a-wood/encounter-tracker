<style lang="scss" scoped>
// @import '~assets/css/test.scss';
// .root {
	// @include test;
// }
</style>

<template>
<div class="root">

	<action-menu/>

	<turn-tracker/>

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