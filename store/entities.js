//
// Entities Store
//

import Entity from '~/classes/entity.js'

export const state = () => ({
	entities : []
})

export const mutations = {
	create (state, payload) {
		state.entities.push(new Entity(payload))
	},

	update (state, payload) {
		payload.entity.update(payload)
	},

	delete (state, payload) {
		state.entities
		.splice(state.entities.indexOf(payload.entity), 1)
	},

	sortByInit (state) {
		state.entities
		.sort((a, b) => {
			if(parseInt(a.initiative) < parseInt(b.initiative)) {
				return 1
			}
			
			if(parseInt(a.initiative) > parseInt(b.initiative)) {
				return -1
			}
			
			return 0
		})

		state.entities
		.forEach(entity => { entity.update({ activeTurn : false }) })

		state.entities[0]
		.update({ activeTurn : true })
	},

	resetActiveTurn (state) {
		state.entities
		.forEach(entity => { entity.update({ activeTurn : false }) })
	},

	resetAllInitiative (state) {
		state.entities.forEach(entity => entity.inititativeEntry = true)
	},

	damage (state, payload) {
		payload.entity.addDamage(payload.hp)
	},

	heal (state, payload) {
		payload.entity.removeDamage(payload.hp)
	},
}

export const getters = {
	read : state => state.entities,

	editable : state => 
	state.entities.filter(entity => entity.editable),

	currentEditableEntity : (state, getters) => 
	getters.editable.length ? getters.editable[0] : false,

	initiativeEntries : state => 
	state.entities.filter(entity => entity.inititativeEntry),

	damageHealEntries : state => 
	state.entities.filter(entity => entity.needsDamageHeal),

	currentInitiativeEntry : (state, getters) => 
	getters.initiativeEntries.length ? getters.initiativeEntries[0] : false,

	needsDamageHeal : (state, getters) => 
	getters.damageHealEntries.length ? getters.damageHealEntries[0] : false,
}