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
        this.name = payload['name'] ? payload.name : this.name
        this.hp = payload['hp'] ? payload.hp : this.hp
        this.conditions = payload['conditions'] ? payload.conditions : this.conditions
        this.initiative = payload['initiative'] ? payload.initiative : this.initiative
        this.editable = typeof payload['editable'] == 'boolean' ? payload.editable : this.editable
        this.activeTurn = typeof payload['activeTurn'] == 'boolean' ? payload.activeTurn : this.activeTurn
        this.inititativeEntry = typeof payload['inititativeEntry'] == 'boolean' ? payload.inititativeEntry : this.inititativeEntry
    }

    currentHP () {
        return this.hp - this.damage
    }

    bloodied () {
        return this.currentHP <= Math.floor(this.hp / 2)
    }
}

export default Entity