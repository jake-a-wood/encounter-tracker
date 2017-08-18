<template>
<div class="root">

    <entity v-for="entity in entities" 
        :key="entity.id"
        name="Fredrick" hp="120" />

    <!-- <entity name="Fredrick" hp="120" />
    <entity name="Kuthrick Adult" hp="12" />
    <entity name="Thomas" hp="80" /> -->

    <entity-detail/>

</div>
</template>

<script>
import Entity from '~/components/entity'
import EntityDetail from '~/components/entityDetail'

export default {
    components : {
        Entity,
        EntityDetail
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