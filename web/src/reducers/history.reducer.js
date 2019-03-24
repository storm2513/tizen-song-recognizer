import { historyConstants } from '../constants';

let initialState = JSON.parse(localStorage.getItem("history")) || []

export function history(state = initialState, action) {
  switch (action.type) {
    case historyConstants.ADD_SONG:
      let newState = [...state, action.payload]
      localStorage.setItem("history", JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
