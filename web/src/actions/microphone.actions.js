import { microphoneConstants } from '../constants';

export const microphoneActions = {
  startRecording,
  startProcessing,
  stopRecording,
  stopProcessing,
  setDisableTimeout,
  setRecorder,
  setRecordingOnMount
}

function startRecording() {
  return { type: microphoneConstants.START_RECORDING }
}

function stopRecording() {
  return { type: microphoneConstants.STOP_RECORDING }
}

function startProcessing() {
  return { type: microphoneConstants.START_PROCESSING }
}

function stopProcessing() {
  return { type: microphoneConstants.STOP_PROCESSING }
}

function setRecordingOnMount(shouldRecordOnMount = true) {
  return {
    type: microphoneConstants.SET_RECORDING_ON_MOUNT,
    payload: shouldRecordOnMount
  }
}

function setDisableTimeout(timeout) {
  return {
    type: microphoneConstants.SET_TIMEOUT,
    payload: timeout
  }
}

function setRecorder(recorder) {
  return {
    type: microphoneConstants.SET_RECORDER,
    payload: recorder
  }
}
