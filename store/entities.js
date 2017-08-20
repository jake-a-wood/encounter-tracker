//
// Entities Store
//

import Entity from '~/classes/entity.js'

export const state = () => ({
    entities : []
})

export const mutations = {
    create (state) {
        state.entities.push(new Entity())
    },

    update (state, payload) {
        state.entities
        .find(entity => entity.id == payload.id)
        .update(payload)
        // console.log(payload)
    },

    delete (state) {

    },

    sortByInit (state) {
        state.entities.sort((a, b) => a.initiative < b.initiative)
    }
}

export const getters = {
    read : state => state.entities,

    editable : state => state.entities.filter(entity => entity.editable),

    currentEditableEntity : (state, getters) => getters.editable.length ? getters.editable[0] : false
}