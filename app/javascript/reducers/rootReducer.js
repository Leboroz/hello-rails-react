import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'

const rootReducer = combineReducers({
    messages: messagesReducer
});

export default rootReducer;
