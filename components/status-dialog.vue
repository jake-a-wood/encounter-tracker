<template>
<v-dialog v-model="show" persistent>

	<v-tabs v-model="activeTab">
		<v-tabs-bar class="brown">
			<v-tabs-item ripple
				href="#1">
				Damage
			</v-tabs-item>
			<v-tabs-item ripple
				href="#2">
				Heal
			</v-tabs-item>
			<!-- <v-tabs-item ripple
				href="#3">
				Statuses
			</v-tabs-item> -->
			<v-tabs-slider class="yellow"/>
		</v-tabs-bar>
		<v-tabs-items>
			<v-tabs-content id="1">
				<v-card>
					<v-card-title>
						<span class="headline">
							{{entity.name}}
						</span>
					</v-card-title>
					
					<v-card-text>
						<v-text-field label="How much damage?"
							type="number"
							v-model="damage">
						</v-text-field>
					</v-card-text>
					
					<v-card-actions>
						<v-btn class="blue--text darken-1" flat 
							@click="onCancelClick">
							Cancel 
						</v-btn>

						<v-spacer></v-spacer>

						<v-btn class="blue--text darken-1" flat 
							@click="onDamageClick">
							Deal Damage 
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-tabs-content>
			<v-tabs-content id="2">
				<v-card>
					<v-card-title>
						<span class="headline">
							{{entity.name}}
						</span>
					</v-card-title>

					<v-card-text>
						<v-text-field label="How much damage?"
							type="number"
							v-model="heal">
						</v-text-field>
					</v-card-text>
					
					<v-card-actions>
						<v-btn class="blue--text darken-1" flat 
							@click="onCancelClick">
							Cancel 
						</v-btn>

						<v-spacer></v-spacer>

						<v-btn class="blue--text darken-1" flat 
							@click="onHealClick">
							Heal Damage
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-tabs-content>
			<!-- <v-tabs-content id="3">
				<v-card>
					<v-card-text>
						Add a Status
					</v-card-text>
					
					<v-card-actions>
						<v-spacer></v-spacer>

						<v-btn class="blue--text darken-1" flat 
							@click="onSaveClick">
							Add Status
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-tabs-content> -->
		</v-tabs-items>
	</v-tabs>
	<!--  -->

</v-dialog>
</template>

<script>
export default {
	data () {
		return {
			damage : 0,
			heal : 0,
			activeTab : null
		}
	},

	methods : {
		onCancelClick () {
			this.$store.commit('entities/update', {
				entity: this.entity,
				needsDamageHeal : false
			})
		},

		onDamageClick () {
			this.$store.commit('entities/damage', {
				entity: this.entity,
				hp : this.damage
			})
		},

		onHealClick () {
			this.$store.commit('entities/heal', {
				entity: this.entity,
				hp : this.heal
			})
		}
	},

	computed : {
		entity () {
			return this.$store.getters['entities/needsDamageHeal']
		},

		show () {
			return !!this.entity
		}
	}
}
</script>