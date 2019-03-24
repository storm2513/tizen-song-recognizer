import { historyConstants } from '../constants';

export const historyActions = {
  addSong
}

function addSong(song) {
  return {
    type: historyConstants.ADD_SONG,
    payload: song
  }
}
