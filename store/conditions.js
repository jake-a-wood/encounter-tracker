//
// Conditions
//

export const state = () => ({
	conditions : [
        'Blinded',
        'Dazed',
        'Deafened',
        'Dominated',
        'Dying',
        'Helpless',
        'Immobilized',
        'Marked',
        'Petrified',
        'Prone',
        'Restrained',
        'Slowed',
        'Stunned',
        'Surprised',
        'Unconscious',
        'Weakened',
    ]
})

export const getters = {
    read : state => state.conditions
}