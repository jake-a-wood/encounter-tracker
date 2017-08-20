<template>
<div class="root">

	<template v-if="showEntityListNav">
		<btn icon="plus"
			@click.native="onAddClick"/>
		
		<btn icon="sort-numeric-asc"
			@click.native="onInitiativeClick"/>
		
		<btn text="2"/>
		
		<btn icon="arrow-up"/>

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
			class="red"/>
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
		},

		onNextTurnClick (e) {
			this.$store.commit('entities/next')
		},

		onSubmitClick (e) {
			this.$store.commit('entities/update', {
				id : this.currentEditableEntity.id,
				editable : false
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
}
</style>