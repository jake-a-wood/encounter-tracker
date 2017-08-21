<template>
<div class="root">

	<entity v-if="showEntityList"
		v-for="entity in entities" 
		:key="entity.id"
		:entity="entity"/>

	<entity-detail v-if="showEntityDetail"/>

</div>
</template>

<script>
import Entity from '~/components/entity'
import EntityDetail from '~/components/entityDetail'

export default {
	components : {
		Entity,
		EntityDetail
	},
	computed : {
		showEntityList () {
			return !this.editableEntities.length
		},

		showEntityDetail () {
			return this.editableEntities.length
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
	height: 90%;
	overflow: scroll;
}
</style>