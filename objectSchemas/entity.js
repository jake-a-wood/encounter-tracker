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
    }
}

export default Entity