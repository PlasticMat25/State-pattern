const Transition = require('./Transition');

//This class store the transitions and consume events to point to the next state.
module.exports = class State {
    constructor(name) {
        this.name = name
        this.transitions = []
    }

    /**
     * Returns reference to the next state
     *
     * @param {string} event The name of the event that was emitted
     * @return {object} reference to the next state
     */
    Next(event) {
        for(let i = 0; i < this.transitions.length; i++) {
            const transition = this.transitions[i];
            if(transition.event != event) continue;
            return transition.state;
        }
    }
    
    /**
     * Create a new transition instance with the given arguments
     *
     * @param {object} to Reference to the next state
     * @param {string} event Name of the event that must be emitted to move to the next state 
     */
    AddTransition(to, event) {
        const transition = new Transition(to, event);
        this.transitions.push(transition);
    }
}