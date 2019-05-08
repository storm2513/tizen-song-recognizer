import { songDataConstants } from '../constants';

export function songData(state = {}, action) {
  switch (action.type) {
    case songDataConstants.SET_SONG_DATA:
      return action.payload
    case songDataConstants.REMOVE_SONG_DATA:
      return {}
    default:
      return state
  }
}
