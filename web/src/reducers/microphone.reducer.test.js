import { microphoneConstants } from '../constants';
import { microphone as reducer } from './microphone.reducer'

describe('microphone reducer', () => {
  const initialState = {
    recording: false,
    processing: false,
    timeout: null,
    recorder: null,
    shouldRecordOnMount: false
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle START_RECORDING', () => {
    expect(reducer(initialState, {
      type: microphoneConstants.START_RECORDING
    })).toEqual({ ...initialState, recording: true })
  })

  it('should handle START_PROCESSING', () => {
    expect(reducer(initialState, {
      type: microphoneConstants.START_PROCESSING
    })).toEqual({ ...initialState, processing: true })
  })

  it('should handle STOP_RECORDING', () => {
    expect(reducer(initialState, {
      type: microphoneConstants.STOP_RECORDING
    })).toEqual({ ...initialState, recording: false })
  })

  it('should handle STOP_PROCESSING', () => {
    expect(reducer(initialState, {
      type: microphoneConstants.STOP_PROCESSING
    })).toEqual({ ...initialState, processing: false })
  })

  it('should handle SET_TIMEOUT', () => {
    const timeout = 1000
    expect(reducer(initialState, {
      type: microphoneConstants.SET_TIMEOUT,
      payload: timeout
    })).toEqual({ ...initialState, timeout: timeout })
  })

  it('should handle SET_RECORDER', () => {
    const recorder = { recorder: true }
    expect(reducer(initialState, {
      type: microphoneConstants.SET_RECORDER,
      payload: recorder
    })).toEqual({ ...initialState, recorder })
  })

  it('should handle SET_RECORDING_ON_MOUNT', () => {
    expect(reducer(initialState, {
      type: microphoneConstants.SET_RECORDING_ON_MOUNT,
      payload: true
    })).toEqual({ ...initialState, shouldRecordOnMount: true })
    expect(reducer(initialState, {
      type: microphoneConstants.SET_RECORDING_ON_MOUNT,
      payload: false
    })).toEqual({ ...initialState, shouldRecordOnMount: false })
  })
})
