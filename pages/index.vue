<template>
<div class="root">

	<action-menu class="action-menu" />

	<turn-tracker class="turn-tracker" />

	<initiative-modal />

	<hp-modal />

</div>
</template>

<script>
import ActionMenu from '~/components/action-menu'
import TurnTracker from '~/components/turn-tracker'
import InitiativeModal from '~/components/initiative-modal'
import HpModal from '~/components/hp-modal'

export default {
	components: {
		ActionMenu,
		TurnTracker,
		InitiativeModal,
		HpModal
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
	height: 100%;
	overflow: hidden;
}
</style>