import { historyConstants } from '../constants';
import { history as reducer } from './history.reducer'

describe('history reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ADD_SONG', () => {
    const song = { data: 'some data' }
    expect(reducer([], {
      type: historyConstants.ADD_SONG,
      payload: song
    })).toEqual([song])
  })
})
