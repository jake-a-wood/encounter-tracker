<template>
<v-dialog v-model="show" persistent>

	<v-card>
		<v-card-title>
			<span class="headline">
				{{entity.name}}
			</span>
		</v-card-title>

		<v-card-text>
			<v-text-field label="Name" 
				v-model="name">
            </v-text-field>
				
			<v-text-field label="Hit Points" 
				v-model="hp"
				type="number">
            </v-text-field>
		</v-card-text>
		
		<v-card-actions>
			<v-btn class="red--text darken-1" flat 
				@click="onDeleteClick">
				Delete
			</v-btn>

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
	data () {
		return {
			hp : '',
            name : ''
		}
	},

	methods : {
		onSaveClick () {
			this.$store.commit('entities/update', {
				entity: this.entity,
				hp : this.hp,
				name : this.name,
                editable : false
			})
		},

		onDeleteClick () {
			if(confirm("Are you sure?")) {
				this.$store.commit('entities/delete', {
					entity: this.entity
				})
			}
		}
	},

	computed : {
		entity () {
            let entity = this.$store.getters['entities/currentEditableEntity']

            if(entity) {
                this.hp = entity.hp
                this.name = entity.name
            }

			return entity
		},

        show () {
            return !!this.entity
        }
	}
}
</script>