import { microphoneConstants } from '../constants';
import { microphoneActions } from './microphone.actions'

it('should create an action to start recording', () => {
  const expectedAction = {
    type: microphoneConstants.START_RECORDING
  }
  expect(microphoneActions.startRecording()).toEqual(expectedAction)
})

it('should create an action to start processing', () => {
  const expectedAction = {
    type: microphoneConstants.START_PROCESSING
  }
  expect(microphoneActions.startProcessing()).toEqual(expectedAction)
})

it('should create an action to stop recording', () => {
  const expectedAction = {
    type: microphoneConstants.STOP_RECORDING
  }
  expect(microphoneActions.stopRecording()).toEqual(expectedAction)
})

it('should create an action to stop processing', () => {
  const expectedAction = {
    type: microphoneConstants.STOP_PROCESSING
  }
  expect(microphoneActions.stopProcessing()).toEqual(expectedAction)
})

it('should create an action to set recording on mount', () => {
  const expectedAction = (payload) => ({
    type: microphoneConstants.SET_RECORDING_ON_MOUNT,
    payload
  })
  expect(microphoneActions.setRecordingOnMount()).toEqual(expectedAction(true))
  expect(microphoneActions.setRecordingOnMount(true)).toEqual(expectedAction(true))
  expect(microphoneActions.setRecordingOnMount(false)).toEqual(expectedAction(false))
})

it('should create an action to set disable timeout', () => {
  const timeout = 1000
  const expectedAction = {
    type: microphoneConstants.SET_TIMEOUT,
    payload: timeout
  }
  expect(microphoneActions.setDisableTimeout(timeout)).toEqual(expectedAction)
})

it('should create an action to set recorder', () => {
  const recorder = { recorder: true }
  const expectedAction = {
    type: microphoneConstants.SET_RECORDER,
    payload: recorder
  }
  expect(microphoneActions.setRecorder(recorder)).toEqual(expectedAction)
})
