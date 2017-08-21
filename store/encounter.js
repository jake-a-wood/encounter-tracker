//
// Encounter Store
//

export const state = () => ({
	round : 0,
	turn : 0
})

export const mutations = {
	nextRound (state) {
		state.round++
	},

	nextTurn (state) {
		state.turn++
	},

	resetTurn (state) {
		state.turn = 0
	},

	resetRound (state) {
		state.round = 0
	}
}

export const actions = {
	nextTurn ({ state, commit, rootGetters }) {
		return new Promise((resolve, reject) => {
			commit('nextTurn')
			console.log(rootGetters['entities/read'][state.turn])
			if(!rootGetters['entities/read'][state.turn]) {
				commit('nextRound')
				commit('resetTurn')
			}

			commit('entities/resetActiveTurn', null, { root: true })
			
			rootGetters['entities/read'][state.turn].update({
				activeTurn : true
			})

			resolve()
		})
	}
}

export const getters = {
	round : state => state.round
}