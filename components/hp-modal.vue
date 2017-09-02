<template>
<div class="root" v-if="entity">

	<div class="modal">
		<div class="title">
			{{entity.name || entity.id}}
		</div>

		<div class="input-field">
			<input type="number" 
				@keyup="onHpKeyup"/>			
		</div>

        <div class="input-field">
			<button @click="onHealClick">
				<i class="fa fa-plus" 
            		aria-hidden="true"></i>
			</button>

            <button @click="onDamageClick">
				<i class="fa fa-minus" 
            		aria-hidden="true"></i>
			</button>
        </div>
	</div>

</div>
</template>

<script>
export default {
	methods : {
		onHpKeyup (e) {
            this.hpEffect = e.currentTarget.value
		},

		onDamageClick (e) {
            this.$store.commit('entities/damage', {
                entity : this.entity,
                hp: this.hpEffect
            })
		},

        onHealClick (e) {
            this.$store.commit('entities/heal', {
                entity : this.entity,
                hp: this.hpEffect
            })
        }
	},
	data () {
		return {
			hpEffect : 0
		}
	},
	computed : {
		entity () {
			return this.$store.getters['entities/needsDamageHeal']
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
		width: 100%;
		height: gh(1);
		padding: gh(.25) gw(.25);
	}
	
	button {
		display: inline;
		width: 50%;
		height: gh(1);
		color: green;
	}
}
</style>