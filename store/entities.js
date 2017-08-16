//
// Entities Store
//

export const state = () => ({
    entities : []
})

export const mutations = {
    create (state) {
        state.entities.push({id:Math.random()})
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