<template>
<v-dialog v-model="show" persistent>

	<v-card>
		<v-card-title>
			<span class="headline">
				{{entity.name}}'s Initiative
			</span>
		</v-card-title>

		<v-card-text>
			<v-text-field label="Initiative" 
				type="number"
				v-model="initiative">
			</v-text-field>
		</v-card-text>
		
		<v-card-actions>
			<v-spacer></v-spacer>

			<v-btn class="blue--text darken-1" flat 
				@click="onSaveClick">
				Set
			</v-btn>
		</v-card-actions>
	</v-card>

</v-dialog>
</template>

<script>
export default {
	props : [ 'show' ],

	data () {
		return {
			initiative : 0
		}
	},

	methods : {
		onSaveClick () {
			this.$store.commit('entities/update', {
				entity: this.entity,
				initiative : this.initiative,
				inititativeEntry : false
			})

			this.$store.commit('entities/sortByInit')

			if(!this.entity) this.$emit('close')
		}
	},

	computed : {
		entity () {
			return this.$store.getters['entities/currentInitiativeEntry']
		}
	}
}
</script>