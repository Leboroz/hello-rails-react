import { LOAD_MESSAGES, LOAD_MESSAGE } from '../actions/actionTypes'

export const loadMessages = (messages) => {
  return { type: LOAD_MESSAGES, payload: messages }
}

export const loadMessage = (message) => {
  return { type: LOAD_MESSAGE, payload: message }
}
