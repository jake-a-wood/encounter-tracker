<template>
<div class="root">

	<entity 
		:entity="entity" />

	<div class="input-field">
		<label>
			Name
		</label>
		<input placeholder="Name"
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
				id : this.entity.id,
				name : e.currentTarget.value
			})
		},
		onHPChange (e) {
			this.$store.commit('entities/update', {
				id : this.entity.id,
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

	input {
		width: 100%;
	}
}
</style>