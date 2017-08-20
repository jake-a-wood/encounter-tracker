//
// Rounds Store
//

export const state = () => ({
    round : 0
})

export const mutations = {
    increment (state) {
        state.round++
    }
}

export const getters = {
    read : state => state.round
}