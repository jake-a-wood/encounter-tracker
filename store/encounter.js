//
// Encounter Store
//

export const state = () => ({
	round : 0,
	turn : 0
})

export const mutations = {

	// Round mutations
	nextRound (state) {
		state.round++
	},

	resetRound (state) {
		state.round = 0
	},

	// Turn mutations
	nextTurn (state) {
		state.turn++
	},

	prevTurn (state) {
		if(!state.turn) return
		state.turn--
	},

	resetTurn (state) {
		state.turn = 0
	},
}

export const actions = {
	prevTurn ({ state, commit, rootGetters }) {
		return new Promise((resolve, reject) => {
			if(!rootGetters['entities/read'].length) {
				resolve();
				return;
			}

			commit('prevTurn')
			commit('entities/resetActiveTurn', null, { root : true })
			
			rootGetters['entities/read'][state.turn].update({
				activeTurn : true
			})

			resolve()
		})
	},

	nextTurn ({ state, commit, rootGetters }) {
		return new Promise((resolve, reject) => {
			if(!rootGetters['entities/read'].length) {
				resolve();
				return;
			}

			commit('nextTurn')
			
			if(!rootGetters['entities/read'][state.turn]) {
				commit('nextRound')
				commit('resetTurn')
			}

			commit('entities/resetActiveTurn', null, { root : true })
			
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