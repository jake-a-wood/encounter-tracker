//
// Entity
//

let entityCount = 0

class Entity {
	constructor (values) {
		this.id = entityCount
		this.name = values.name
		this.hp = values.hp
		this.damage = 0
		this.conditions = []
		this.initiative = 0
		this.inititativeEntry = false
		this.editable = true
		this.activeTurn = false
		this.needsDamageHeal = false
		entityCount++
	}

	update (payload) {
		for(let key in payload) {
			// id should never change after instantiation
			if(key != 'id') { 
				this[key] = payload[key]
			}
		}
	}

	addDamage (damageAmount) {
		this.needsDamageHeal = false
		this.damage += damageAmount
		if (this.damage > this.hp) this.damage = this.hp
	}

	removeDamage (healAmount) {
		this.needsDamageHeal = false
		this.damage -= healAmount
		if (this.damage < 0) this.damage = 0
	}

	currentHP () {
		return this.hp - this.damage
	}

	bloodied () {
		return this.currentHP <= Math.floor(this.hp / 2)
	}

	healthPercentage () {
		return 100 - ((this.damage / this. hp) * 100)
	}
}

export default Entity