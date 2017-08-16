<template>
<div class="root">

    <div class="icon">
        <div>{{text}}</div>
        <i :class="iconClass" 
            aria-hidden="true"></i>
        <!-- <i class="fa fa-arrow-left" aria-hidden="true"></i> -->
    </div>

</div>
</template>

<script>
export default {
    props : [
        'icon',
        'text'
    ],
    
    computed : {
        iconClass () {
            return `fa fa-${this.icon}`
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
    @include size(2,2);
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    @include size(1,1);
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>