//A custom implementation of the state machine pattern

const StateMachine = require('./StateMachine');

//Initialize State Machine
const stateMachine = new StateMachine();

//Add states
const draft = stateMachine.AddState('DRAFT');
const moderation = stateMachine.AddState('MODERATION');
const published = stateMachine.AddState('PUBLISHED');

//Set Initial state
stateMachine.SetInitial(draft);

//Add transitions from one state to another depending on event
draft.AddTransition(moderation, 'AUTHENTICATED');
moderation.AddTransition(draft, 'REJECTED');
moderation.AddTransition(published, 'ACCEPTED');

//Test Machine functionality
//Initially its draft
stateMachine.EmitChange('AUTHENTICATED'); // State machine moved from DRAFT to MODERATION
//Now its moderation
stateMachine.EmitChange('REJECTED'); // State machine moved from MODERATION to DRAFT
//Now its again draft
stateMachine.EmitChange('AUTHENTICATED'); // State machine moved from DRAFT to MODERATION
//Now it moderation again
stateMachine.EmitChange('ACCEPTED'); // State machine moved from DRAFT to MODERATION
//And its finally published
