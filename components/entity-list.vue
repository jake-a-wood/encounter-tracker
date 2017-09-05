<template>
<v-layout column>

	<entity class="separation-spacing"
		v-for="entity in entities"
		:key="entity.id"
		:entity="entity"/>

</v-layout>
</template>

<script>
import Entity from '~/components/entity.vue'
export default {
	components :  {
		Entity
	},
	computed : {
		entities () {
			return this.$store.getters['entities/read']
		}
	}
}
</script>

<style scoped>
.separation-spacing {
	margin-bottom : 20px;
}
</style>