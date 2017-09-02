<template>
<div class="root">

	<entity :entity="entity" />

	<div class="input-field">
		<label>
			Name
		</label>
		<input :placeholder="placeholder"
			type="text"
			@keyup="onNameChange" />
	</div>

	<div class="input-field">
		<label>
			Hit Points
		</label>

		<input placeholder="HP"
			type="number"
			@keyup="onHPChange" />
	</div>

</div>
</template>

<script>
import Entity from '~/components/entity'

export default {
	components : {
		Entity
	},
	methods : {
		onNameChange (e) {
			this.$store.commit('entities/update', {
				entity : this.entity,
				name : e.currentTarget.value
			})
		},
		
		onHPChange (e) {
			this.$store.commit('entities/update', {
				entity : this.entity,
				hp : e.currentTarget.value
			})
		},
	},
	computed : {
		entity () {
			return this.$store.getters['entities/currentEditableEntity']
		},

		entities () {
			return this.$store.getters['entities/read']
		},

		editableEntities () {
			return this.$store.getters['entities/editable']
		},
		placeholder () {
			let x = Math.random()
			return x > .5 ? 'Name' : 'Paul is a faggot?'
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
	.input-field {
		margin: gh(1);
	}

	label {
		padding-bottom: gh(.25);
		display: block;
	}

	input {
		width: 100%;
		height: gh(1);
		padding: gh(.25) gw(.25);
	}

	.delete {
		margin: gh(2) gh(1) gh(1) gh(1);

		button {
			width: 100%;
			padding: gh(.25) gw(.25);
			background-color: red;
			color: white;
			font-weight: bold;
			border: solid 2px grey;
		}
	}
}
</style>