<template>
<div class="root">

    <btn/>
    <btn/>
    <btn/>
    <btn/>
    <btn/>

</div>
</template>

<style lang="scss" scoped>
@import '~assets/css/mixins.scss';

.root {
    height: gh(2);
    display: flex;
    justify-content: space-around;
    background-color: black;
}
</style>

<script>
import Btn from '~/components/btn'

export default {
    components : {
        Btn
    }
}
</script>