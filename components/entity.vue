<template>
<v-card class="blue-grey darken-2 white--text" column>

	<v-card-title>
		<div class="headline">
			{{entity.name}}
		</div>

		<!-- <div>
		<v-layout class="inner-container" row> -->
		<v-spacer />
		<v-chip small class="green white--text">
			<v-avatar class="green darken-4">
				HP
			</v-avatar>
			{{entity.hp}}
		</v-chip>
		<v-progress-linear class="progress-bar"
			v-model="valueDeterminate" 
			height="3"
			success></v-progress-linear>
		<!-- </v-layout>
		</div> -->
		
		<div class="statuses">
			{{statuses}}
		</div>
	</v-card-title>

</v-card>
</template>

<script>
export default {
	props : [ 'entity' ],

	data () {
		return {
			valueDeterminate : Math.round(Math.random() * 100)
		}
	},

	computed : {
		conditions () {
			// return this.$store.getters['conditions/read']
			return []
		},
		
		statuses () {
			return this.conditions.join(', ')
		}
	}
}
</script>

<style scoped>
.progress-bar {
	/* margin-bottom: 0; */
}

.statuses {

}

.inner-container {
	padding: 0;
}
</style>