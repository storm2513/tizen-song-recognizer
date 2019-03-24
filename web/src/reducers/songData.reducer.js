import { songDataConstants } from '../constants';

let initialState = {}

export function songData(state = initialState, action) {
  switch (action.type) {
    case songDataConstants.SET_SONG_DATA:
      return action.payload
    case songDataConstants.REMOVE_SONG_DATA:
      return {}
    default:
      return state
  }
}
