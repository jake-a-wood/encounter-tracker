<template>
<div class="root">

    <entity v-for="entity in entities" 
        :key="entity.id"
        name="Fredrick" hp="120" />

    <!-- <entity name="Fredrick" hp="120" />
    <entity name="Kuthrick Adult" hp="12" />
    <entity name="Thomas" hp="80" /> -->

</div>
</template>

<script>
import Entity from '~/components/entity'

export default {
    components : {
        Entity
    },
    computed : {
        entities () {
            return this.$store.getters['entities/read']
        }
    }
}
</script>

<style lang="scss" scope>
</style>