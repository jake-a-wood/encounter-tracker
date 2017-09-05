<template>
<v-app dark class="application--footer application--toolbar">

	<!-- <v-navigation-drawer></v-navigation-drawer> -->

	<v-toolbar>
		<v-chip class="teal white--text">
			Round {{round}}
		</v-chip>
		
		<v-spacer></v-spacer>

		<v-btn icon
			@click="onInitClick">
			<v-icon>fa-sort-amount-desc</v-icon>
		</v-btn>

		<v-spacer></v-spacer>
		
		<v-btn icon
			@click="onPrevTurnClick">
			<v-icon>fa-arrow-up</v-icon>
		</v-btn>

		<v-spacer></v-spacer>

		<v-btn icon
			@click="onNextTurnClick">
			<v-icon>fa-arrow-down</v-icon>
		</v-btn>
	</v-toolbar>

	<entity-dialog :show="showEntityDialog"
		@close="onDialogClose" />
	
	<init-dialog :show="showInitDialog"
		@close="onInitDialogClose" />
	
	<entity-edit-dialog />

	<main>
		<v-container fluid class="scroll">

			<nuxt/>

		</v-container>
	</main>

	<v-footer :absolute="footer.fixed">
		<v-flex xs12 class="text-xs-center">
			<v-btn class="indigo no-margin"
				@click="onAddEntityClick">
				<v-icon>add</v-icon>
			</v-btn>
		</v-flex>
	</v-footer>

</v-app>
</template>

<script>
import EntityDialog from '~/components/entity-new-dialog.vue'
import InitDialog from '~/components/init-dialog.vue'
import EntityEditDialog from '~/components/entity-edit-dialog.vue'
export default {
	components : {
		EntityDialog,
		InitDialog,
		EntityEditDialog
	},

	data : () => ({
		footer : {
			fixed : true
		},
		showEntityDialog : false,
		showInitDialog : false
	}),

	methods : {
		onAddEntityClick (e) {
			this.showEntityDialog = true
		},
		
		onDialogClose (e) {
			this.showEntityDialog = false
		},

		onInitClick (e) {
			this.$store.commit('entities/resetAllInitiative')
			this.$store.commit('encounter/resetRound')
			this.showInitDialog = true
		},

		onInitDialogClose (e) {
			this.showInitDialog = false
		},

		onPrevTurnClick (e) {
			this.$store.dispatch('encounter/prevTurn')
		},

		onNextTurnClick (e) {
			this.$store.dispatch('encounter/nextTurn')
		},
	},

	computed : {
		round () {
			return this.$store.getters['encounter/round']
		}
	}
}
</script>

<style scoped>
.no-margin {
	margin: 0
}

.scroll {
	height: calc(100vh - 64px - 36px);
    overflow: scroll;
	overflow-x: hidden;
	overflow-y: scroll;
} 
</style>