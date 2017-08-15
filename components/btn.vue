<template>
<div class="root">

    <div class="icon">
    </div>

</div>
</template>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
    height: gh(2);
    width: gw(2);
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    @include size(1,1);
    background-color: red;
}
</style>