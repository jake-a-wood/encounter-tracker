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
		this.editable = false
		this.activeTurn = false
		this.needsDamageHeal = false
		entityCount++
	}

	update (payload) {
		for(let key in payload) {
			// id should never change after instantiation
			if(key != 'id' && key != 'entity') { 
				this[key] = payload[key]
			}
		}
	}

	addDamage (damageAmount) {
		this.needsDamageHeal = false
		this.damage += parseInt(damageAmount)
		if (this.damage > this.hp) this.damage = this.hp
	}

	removeDamage (healAmount) {
		this.needsDamageHeal = false
		this.damage -= parseInt(healAmount)
		if (this.damage < 0) this.damage = 0
	}

	currentHP () {
		// console.log('currentHP')
		return this.hp - this.damage
	}
	
	bloodied () {
		return this.currentHP() <= Math.floor(this.hp / 2)
	}
	
	dying () {
		return this.currentHP() <= 0
	}

	healthPercentage () {
		return 100 - ((this.damage / this. hp) * 100)
	}
	
}

export default Entity