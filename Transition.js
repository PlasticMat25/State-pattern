//Dont know if that make sence. Its just class that holds 2 fields
//that represents the next state and the event that must be emmited
module.exports =  class Transition {
    constructor(state, event) {
        this.state = state;
        this.event = event;
    }
}