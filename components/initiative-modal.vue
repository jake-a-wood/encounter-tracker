<template>
<div class="root" v-if="entity">

	<div class="modal">
		<div class="title">
			{{entity.name}}'s initiative:
		</div>

		<div class="input-field">
			<input type="number" 
				value="0"
				@keyup="onInitKeyup"/>
			
			<button @click="onSubmitClick">
				<i class="fa fa-check" 
            		aria-hidden="true"></i>
			</button>
		</div>
	</div>

</div>
</template>

<script>
export default {
	methods : {
		onInitKeyup (e) {
			this.$store.commit('entities/update', {
				id : this.entity.id,
				initiative : e.currentTarget.value
			})
		},

		onSubmitClick (e) {
			this.$store.commit('entities/update', {
				id : this.entity.id,
				inititativeEntry : false
			})
			this.$store.commit('entities/sortByInit')
		}
	},
	computed : {
		entity () {
			return this.$store.getters['entities/currentInitiativeEntry']
		},
		entities () {
			return this.$store.getters['entities/read']
		},
	}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(black, .5);
	display: flex;
	justify-content: center;
	align-items: center;

	.modal {
		padding: gh(1) gw(1);
		background-color: #fff;
		border: 2px solid #000;
		width: 50%;
	}

	.title {
		padding-bottom: gh(.5);
		font-weight: bold;
	}
	
	.input-field {

	}
	
	input {
		display: inline;
		width: 60%;
		height: gh(1);
		padding: gh(.25) gw(.25);
	}
	
	button {
		display: inline;
		width: 40%;
		height: gh(1);
		color: green;
	}
}
</style>