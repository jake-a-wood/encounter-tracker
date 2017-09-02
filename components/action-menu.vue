<template>
<div class="root">

	<template v-if="showEntityListNav">
		<btn icon="plus"
			@click.native="onAddClick"/>
		
		<btn icon="sort-numeric-asc"
			@click.native="onInitiativeClick"/>
		
		<btn class="round-number"
			:text="currentRound"/>
		
		<btn icon="arrow-up"
			@click.native="onPrevTurnClick"/>

		<btn icon="arrow-down"
			@click.native="onNextTurnClick"/>
	</template>

	<template v-if="showEntityDetailNav">
		<btn icon="check"
			class="green"
			@click.native="onSubmitClick"/>
		
		<btn/>
		
		<btn/>
		
		<btn/>

		<btn icon="times"
			class="red"
			@click.native="onDeleteClick"/>
	</template>

</div>
</template>

<script>
import Btn from '~/components/btn'

export default {
	components : {
		Btn
	},
	methods : {
		onAddClick (e) {
			this.$store.commit('entities/create')
		},

		onInitiativeClick (e) {
			this.$store.commit('entities/resetAllInitiative')
			this.$store.commit('encounter/resetRound')
		},

		onPrevTurnClick (e) {
			this.$store.dispatch('encounter/prevTurn')
		},

		onNextTurnClick (e) {
			this.$store.dispatch('encounter/nextTurn')
		},

		onSubmitClick (e) {
			this.$store.commit('entities/update', {
				entity : this.currentEditableEntity,
				editable : false
			})
		},

		onDeleteClick (e) {
			this.$store.commit('entities/delete', {
				entity : this.currentEditableEntity
			})
		}
	},
	computed : {
		showEntityListNav () {
			return !this.editableEntities.length
		},

		showEntityDetailNav () {
			return this.editableEntities.length
		},

		editableEntities () {
			return this.$store.getters['entities/editable']
		},

		currentEditableEntity () {
			return this.$store.getters['entities/currentEditableEntity']
		},

		currentRound () {
			return this.$store.getters['encounter/round']
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
	height: 10%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: black;

	.green {
		color: green;
	}

	.red {
		color: red;
	}

	.round-number {
		font-weight: bold;
		background-color: white;
		color: black;
	}
}
</style>