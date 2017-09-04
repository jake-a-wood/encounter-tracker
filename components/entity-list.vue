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
	mounted () {
		for(var i = 0; i < 1; i++) {
			this.$store.commit('entities/create', { hp : 1, name : 'Bob' })
			this.$store.commit('entities/create', { hp : 10, name : 'Bobby' })
			this.$store.commit('entities/create', { hp : 100, name : 'Bobby Bob' })
			this.$store.commit('entities/create', { hp : 1000, name : 'Bobby Bobby' })
			this.$store.commit('entities/create', { hp : 10000, name : 'Bobby Bobby Bob' })
			this.$store.commit('entities/create', { hp : 100000, name : 'Bobby Bobby Bobby' })
		}
	},
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