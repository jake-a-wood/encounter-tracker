<template>
<div class="root">

    <btn icon="plus"
        @click.native="onAddClick"/>
    <btn icon="sort-numeric-asc"/>
    <btn text="2"/>
    <btn icon="arrow-up"/>
    <btn icon="arrow-down"/>

</div>
</template>

<script>
import Btn from '~/components/btn'

export default {
    components : {
        Btn
    },
    methods : {
        onAddClick (e) {
            this.$store.commit('entities/create')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
    height: gh(2);
    display: flex;
    justify-content: space-around;
    background-color: black;
}
</style>