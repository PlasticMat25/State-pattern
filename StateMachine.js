const State = require ('./State');

//You can remove all the lines with the comment //DEBUG without affecting the functionallity of the program

//This class store states and keeps the current state of the machine.
module.exports = class StateMachine {
    constructor()  {
        this.states = [];
        this.current_state = undefined;
        this.status_message = '' // DEBUG
    }
    
    /**
     * Changine the current state depending on the state are currently in and what event was emmited.
     *
     * @param {string} event name of the event to change the current_state
     */
    EmitChange(event) {
        //Error check
        if(!this.current_state) {
            console.log("You have to set an initial state. call the function SetInitial(state) after adding states");
            return;
        }
 
        this.status_message = `State machine moved from ${this.current_state.name} `; //DEBUG
        
        this.current_state = this.current_state.Next(event);

        this.status_message += `to ${this.current_state.name}`; //DEBUG
        console.log(this.status_message); //DEBUG
        this.status_message = ''; //DEBUG
    }

    /**
     * Set initial state for current_state
     *
     * @param {object} state Reference to the object that will be assigned to the current_state
     */
    SetInitial(state) {
        this.current_state = state;
    }

    /**
     * Returns state that was pushed in the array
     *
     * @param {string} state_name The name of state that will be created and pushed in array
     * @return {object} reference to the state that was created
     */
    AddState(state_name) {
        const state = new State(state_name);
        this.states.push(state);
        return state;
    }
}