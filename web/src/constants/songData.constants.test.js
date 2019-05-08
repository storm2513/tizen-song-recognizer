import { songDataConstants } from './songData.constants'

it("returns correct song data constants", () => {
  expect(songDataConstants.REMOVE_SONG_DATA).toEqual('REMOVE_SONG_DATA')
  expect(songDataConstants.SET_SONG_DATA).toEqual('SET_SONG_DATA')
})
