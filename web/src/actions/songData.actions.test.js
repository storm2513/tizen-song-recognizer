import { songDataConstants } from '../constants';
import { songDataActions } from './songData.actions'

it('should create an action to set song data', () => {
  const song = { data: 'some data'}
  const expectedAction = {
    type: songDataConstants.SET_SONG_DATA,
    payload: song
  }
  expect(songDataActions.setSongData(song)).toEqual(expectedAction)
})

it('should create an action to remove song data', () => {
  const expectedAction = {
    type: songDataConstants.REMOVE_SONG_DATA
  }
  expect(songDataActions.removeSongData()).toEqual(expectedAction)
})
