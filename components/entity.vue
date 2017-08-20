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

	<div class="hp">
		<div>
			{{entity.currentHP()}} <br> 
			{{entity.hp}}
		</div>
	</div>

</div>
</template>

<script>
export default {
	props : ['entity']
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
	margin: gh(1);
	height: gh(2);
	background-color: yellow;
	display: flex;
	justify-content: space-between;
	border: 1px solid gray;
	position: relative;
	overflow: visible;

	.active-turn {
		border: gw(1) solid transparent;
		border-right: 0 solid transparent;
		border-left: gw(1) solid green;
		position: absolute;
		left: gw(-.5);
	}

	.name {
		width: gw(7);
		display: flex;
		align-items: center;
		padding-left: gw(1);
		// background-color: rgba(green, .75);
	}
	.conditions {
		width: gw(3);
		// background-color: rgba(purple, .75);
	}

	.hp {
		width: gw(4);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: gw(1);
		// background-color: rgba(red, .75);
	}
}
</style>