//
// Entities Store
//

import Entity from '~/objectSchemas/entity.js'

export const state = () => ({
    entities : []
})

export const mutations = {
    create (state) {
        state.entities.push(new Entity())
    },

    update (state) {

    },

    delete (state) {

    }
}

export const getters = {
    read : state => {
        return state.entities
    }
}