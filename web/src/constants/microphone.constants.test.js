import { microphoneConstants } from './microphone.constants'

it("returns correct microphone constants", () => {
  expect(microphoneConstants.SET_RECORDER).toEqual('SET_RECORDER')
  expect(microphoneConstants.SET_RECORDING_ON_MOUNT).toEqual('SET_RECORDING_ON_MOUNT')
  expect(microphoneConstants.SET_TIMEOUT).toEqual('SET_TIMEOUT')
  expect(microphoneConstants.START_PROCESSING).toEqual('START_PROCESSING')
  expect(microphoneConstants.START_RECORDING).toEqual('START_RECORDING')
  expect(microphoneConstants.STOP_PROCESSING).toEqual('STOP_PROCESSING')
  expect(microphoneConstants.STOP_RECORDING).toEqual('STOP_RECORDING')
})
