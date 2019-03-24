import { microphoneConstants } from '../constants';

const initialState = {
  recording: false,
  processing: false,
  timeout: null,
  recorder: null,
  shouldRecordOnMount: false
}

export function microphone(state = initialState, action) {
  switch (action.type) {
    case microphoneConstants.START_RECORDING:
      return {
        ...state,
        recording: true
      }
    case microphoneConstants.START_PROCESSING:
      return {
        ...state,
        processing: true
      }
    case microphoneConstants.STOP_RECORDING:
      return {
        ...state,
        recording: false
      }
    case microphoneConstants.STOP_PROCESSING:
      return {
        ...state,
        processing: false
      }
    case microphoneConstants.SET_TIMEOUT:
      return {
        ...state,
        timeout: action.payload
      }
    case microphoneConstants.SET_RECORDER:
      return {
        ...state,
        recorder: action.payload
      }
    case microphoneConstants.SET_RECORDING_ON_MOUNT:
      return {
        ...state,
        shouldRecordOnMount: action.payload
      }
    default:
      return state
  }
}
