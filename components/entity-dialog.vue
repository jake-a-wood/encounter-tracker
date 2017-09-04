<template>
<v-dialog v-model="show" persistent>

	<v-card>
		<v-card-title>
			<span class="headline">
				Entity
			</span>
		</v-card-title>

		<v-card-text>
			<v-text-field label="Name" 
				v-model="name"></v-text-field>
			<v-text-field label="Hit Points" 
				v-model="hp"
				type="number"></v-text-field>
		</v-card-text>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn class="blue--text darken-1" flat 
				@click="onCloseClick">
				Close
			</v-btn>
			<v-btn class="blue--text darken-1" flat 
				@click="onSaveClick">
				Save
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
			name : '',
			hp : 1
		}
	},
	methods : {
		onCloseClick (e) {
			this.$emit('close')
		},

		onSaveClick (e) {
			this.$store.commit('entities/create', {
				hp : this.hp,
				name : this.name
			})
			this.$emit('close')
			this.hp = 1
			this.name = ''
		}
	}
}
</script>