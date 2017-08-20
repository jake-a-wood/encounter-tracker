//
// Entity
//

class Entity {
    constructor () {
        this.id = Math.random()
        this.name = ''
        this.hp = 0
        this.conditions = []
        this.initiative = 0
        this.editable = true
        this.activeTurn = false
    }

    update (payload) {
        this.name = payload['name'] ? payload.name : this.name
        this.hp = payload['hp'] ? payload.hp : this.hp
        this.conditions = payload['conditions'] ? payload.conditions : this.conditions
        this.initiative = payload['initiative'] ? payload.initiative : this.initiative
        this.editable = typeof payload['editable'] == 'boolean' ? payload.editable : this.editable
        this.activeTurn = payload['activeTurn'] ? payload.activeTurn : this.activeTurn
        console.log(this)
    }
}

export default Entity