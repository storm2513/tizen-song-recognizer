import { historyConstants } from '../constants';
import { historyActions } from './history.actions'

it('should create an action to add song to history', () => {
  const song = { data: 'some data'};
  const expectedAction = {
    type: historyConstants.ADD_SONG,
    payload: song
  }
  expect(historyActions.addSong(song)).toEqual(expectedAction)
})
