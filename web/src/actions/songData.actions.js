import { songDataConstants } from '../constants';

export const songDataActions = {
  setSongData,
  removeSongData
}

function setSongData(data) {
  return {
    type: songDataConstants.SET_SONG_DATA,
    payload: data
  }
}

function removeSongData() {
  return {
    type: songDataConstants.REMOVE_SONG_DATA
  }
}
