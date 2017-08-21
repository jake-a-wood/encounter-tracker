<template>
<div class="root">

	<div class="active-turn"
		v-if="entity.activeTurn">
	</div>

	<div class="name">
		<div>
			{{entity.name}}
		</div>
	</div>
	
	<div class="conditions">
	</div>

	<div class="hp"
		@click="onHpClick">
		<span class="currentHP"
			:class="bloodiedClass">
			{{entity.currentHP()}} /
		</span> 
		<span class="maxHP">
			{{entity.hp}}
		</span>
	</div>

	<div class="initiative">
		{{entity.initiative}}
	</div>

</div>
</template>

<script>
export default {
	props : ['entity'],
	methods : {
		onHpClick (e) {
			
		}
	},
	computed : {
		bloodiedClass () {
			return this.entity.bloodied() ? 'bloodied' : ''
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
	height: gh(2);
	margin: gh(1);
	display: flex;
	justify-content: space-between;

	border: 2px solid gray;
	background-color: yellow;
	border-radius: 5px;
	
	position: relative;
	overflow: visible;

	.active-turn {
		border: gw(.75) solid transparent;
		border-right: 0 solid transparent;
		border-left: gw(.75) solid green;
		position: absolute;
		left: gw(-.5);
	}

	.name {
		display: flex;
		align-items: center;
		width: gw(7);
		padding-left: gw(1);
		font-weight: bold;
	}
	.conditions {
		width: gw(3);
	}

	.hp {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: gw(4);
		padding-right: gw(1);
	}

	.currentHP {
		font-weight: bold;

		&.bloodied {
			color: red;
		}
	}

	.maxHP {
		font-size: 12px;
	}

	.initiative {
		position: absolute;
		right: gw(-.5);
		top: gh(-.25);
		
		border-radius: 100%;
		border: 1px solid black;
		background-color: blue;
		
		display: flex;
		justify-content: center;
		align-items: center;
		width: gh(.75);
		height: gh(.75);

		color: #fff;
		font-size: 12px;
		font-weight: bold;
		line-height: 1;
	}
}
</style>