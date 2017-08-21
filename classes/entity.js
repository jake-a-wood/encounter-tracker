//
// Entity
//

class Entity {
	constructor () {
		this.id = Math.random()
		this.name = ''
		this.hp = 1
		this.damage = 0
		this.conditions = []
		this.initiative = 0
		this.inititativeEntry = false
		this.editable = true
		this.activeTurn = false
	}

	update (payload) {
		for(let key in payload) {
			// id should never change past instantiation
			if(key != 'id') { 
				this[key] = payload[key]
			}
		}
	}

	currentHP () {
		return this.hp - this.damage
	}

	bloodied () {
		return this.currentHP <= Math.floor(this.hp / 2)
	}
}

export default Entity