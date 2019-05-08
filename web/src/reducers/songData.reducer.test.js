import { songDataConstants } from '../constants';
import { songData as reducer } from './songData.reducer'

describe('songData reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle SET_SONG_DATA', () => {
    const data = { data: 'some data' }
    expect(reducer({}, {
      type: songDataConstants.SET_SONG_DATA,
      payload: data
    })).toEqual(data)
  })

  it('should handle REMOVE_SONG_DATA', () => {
    expect(reducer({}, {
      type: songDataConstants.REMOVE_SONG_DATA
    })).toEqual({})
  })
})
