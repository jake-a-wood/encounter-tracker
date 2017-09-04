<template>
<v-card class="blue-grey darken-2 white--text" column>

    <v-card-title>
        <div class="headline">
            {{entity.name}}
        </div>
        <v-progress-linear class="progress-bar"
            v-model="valueDeterminate"
            success></v-progress-linear>
        
        <div class="statuses">
            {{statuses}}
        </div>

    </v-card-title>

</v-card>
</template>

<script>
export default {
	props : [ 'entity' ],

    data () {
        return {
            valueDeterminate : Math.round(Math.random() * 100)
        }
    },

    computed : {
		conditions () {
			// return this.$store.getters['conditions/read']
			return []
		},
        
        statuses () {
            return this.conditions.join(', ')
        }
	}
}
</script>

<style scoped>
.progress-bar {
    /* margin-bottom: 0; */
}

.statuses {

}
</style>