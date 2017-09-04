<template>
<v-card class="grey  white--text" 
	:class="{ 'darken-1' : active, 'darken-3' : !active }"
	column>

	<v-card-title>
		<div class="headline">
			{{entity.name}}
		</div>

		<v-spacer />

		<v-chip small class="green white--text">
			<v-avatar class="green darken-4">
				HP
			</v-avatar>
			{{currentHP}}
		</v-chip>

		<v-progress-linear class="progress-bar"
			v-model="healthPercentage" 
			height="3"
			success>
		</v-progress-linear>
		
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
			// valueDeterminate : Math.round(Math.random() * 100)
		}
	},

	computed : {
		conditions () {
			// return this.$store.getters['conditions/read']
			return []
		},
		
		statuses () {
			return this.conditions.join(', ')
		},

		healthPercentage () {
			return this.entity.healthPercentage()
		},

		currentHP () {
			return this.entity.currentHP()
		},

		active () {
			return this.entity.activeTurn
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