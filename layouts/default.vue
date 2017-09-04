<template>
<v-app dark class="application--footer application--toolbar">

	<!-- <v-navigation-drawer></v-navigation-drawer> -->

	<v-toolbar>
		<v-chip class="teal white--text">
			Round 0
		</v-chip>
		
		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>fa-sort-amount-desc</v-icon>
		</v-btn>

		<v-spacer></v-spacer>
		
		<v-btn icon>
			<v-icon>fa-arrow-up</v-icon>
		</v-btn>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>fa-arrow-down</v-icon>
		</v-btn>
	</v-toolbar>

	<entity-dialog :show="showDialog"
		@close="onDialogClose" />

	<main>
		<v-container fluid class="scroll">

			<nuxt/>

		</v-container>
	</main>

	<v-footer :absolute="footer.fixed">
		<v-flex xs12 class="text-xs-center">
			<v-btn class="indigo no-margin"
				@click="onAddClick">
				<v-icon>add</v-icon>
			</v-btn>
		</v-flex>
	</v-footer>

</v-app>
</template>

<script>
import EntityDialog from '~/components/entity-dialog.vue'
export default {
	components : {
		EntityDialog
	},
	data: () => ({
		footer: {
			fixed: true
		},
		showDialog : false
	}),
	methods : {
		onAddClick (e) {
			this.showDialog = true
		},
		onDialogClose (e) {
			this.showDialog = false
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