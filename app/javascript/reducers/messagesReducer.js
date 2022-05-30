import { LOAD_MESSAGES, LOAD_MESSAGE } from '../actions/actionTypes'

function messagesReducer(state = '', action) 
{
  switch(action.type) {
    case LOAD_MESSAGES:
      return action.payload;
    case LOAD_MESSAGE:
      return action.payload;
    default:
      return state;    
  }
}

export default messagesReducer
