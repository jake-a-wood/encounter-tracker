<template>
<div class="root">

    <div class="col name">
        <div>{{name}}</div>
    </div>
    
    <div class="col conditions">
    </div>

    <div class="col hp">
        <div>{{hp}}</div>
    </div>

</div>
</template>

<script>
export default {
    props : ['name', 'hp']
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
}

.col {
    margin: 0 gw(.5);
    display: flex;
    align-items: center;

    // &:last-child {
    //     margin: 0;
    // }
}

.name {
    width: gw(7);
    // background-color: rgba(green, .75);
    display: flex;
    align-content: center;
}
.conditions {
    width: gw(3);
    // background-color: rgba(purple, .75);
}

.hp {
    width: gw(2);
    // background-color: rgba(red, .75);
    display: flex;
    justify-content: flex-end;
}

</style>