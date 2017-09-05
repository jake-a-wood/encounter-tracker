<template>
<v-card class="" 
	:class="{ 'brown darken-1' : active, 'grey darken-3' : !active }"
	column raised>

	<v-card-title>
		<div class="headline"
			@click="onNameClick">
			{{entity.name}}
		</div>

		<v-spacer />

		<v-chip small class="white--text"
			:class="healthColor"
			@click="onHPClick">
			<v-avatar class="darken-4"
				:class="healthColor">
				HP
			</v-avatar>
			{{currentHP}}
		</v-chip>

		<v-progress-linear class="progress-bar"
			:color-front="healthColor"
			color-back="grey"
			v-model="healthPercentage" 
			height="3">
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

	methods : {
		onNameClick (e) {
			this.$store.commit('entities/update', {
				entity : this.entity,
				editable : true
			})
		},

		onHPClick (e) {
			this.$store.commit('entities/update', {
				entity : this.entity,
				needsDamageHeal : true
			})
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

		bloodied () {
			return this.entity.bloodied()
		},

		dying () {
			return this.entity.dying()
		},

		healthColor () {
			if(this.dying) return 'grey'
			if(this.bloodied) return 'red'
			return 'green'
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