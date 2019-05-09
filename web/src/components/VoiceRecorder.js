import React, { Component } from 'react';
import './VoiceRecorder.sass';
import RecordRTC from 'recordrtc';
import { StereoAudioRecorder } from 'recordrtc'
import { connect } from "react-redux";
import { microphoneActions, songDataActions, historyActions } from '../actions'
import { captureUserMedia, getLastSongId } from '../services/common'
import { identify, isSongRecognized } from '../services/identify_song'

const MAX_RECORD_TIME = 7000
const VIBRATION_TIME = 500

class VoiceRecorder extends Component {
  render() {
    return (
      <div className="voice-recorder">
        <div className={this.microphoneWrapperClassName()} onClick={this.toggleRecording}>
          <div className="circle"></div>
          <div className="microphone"></div>
          <div className="spinner-wrapper">
            <div className="spinner">
              <div className="dot1"></div>
              <div className="dot2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.shouldRecordOnMount){
      this.toggleRecording()
      this.props.disableRecordingOnMount()
    }
  }

  microphoneWrapperClassName = () => {
    if (!this.props.processing) {
      return this.props.recording ? "microphone-wrapper active" : "microphone-wrapper"
    } else {
      return "microphone-wrapper processing"
    }
  }

  setDisableRecordingTimeout = () => {
    clearTimeout(this.props.timeout)

    if (this.props.recording) { return }

    let timeout = setTimeout(this.disableRecording, MAX_RECORD_TIME)
    this.props.setDisableTimeout(timeout)
  }

  toggleRecording = () => {
    if (this.props.processing) { return }
    this.setDisableRecordingTimeout()
    this.props.recording ? this.disableRecording() : this.enableRecording()
  }

  disableRecording = () => {
    clearTimeout(this.props.timeout)
    const self = this
    this.props.recorder.stopRecording(() => {
      identify(self.props.recorder.blob, function(response) {
        response.id = getLastSongId(self.props.history) + 1
        self.props.setSongData(response)
        if (isSongRecognized(response.status.code)) {
          self.props.saveToHistory(response)
        }
        self.props.stopProcessing()
        window.navigator.vibrate(VIBRATION_TIME)
      })
    });

    this.props.startProcessing()
    this.props.stopRecording()
  }

  enableRecording = () => {
    const self = this
    captureUserMedia((stream) => {
      self.props.setRecorder(RecordRTC(stream, {
        type: 'audio',
        mimeType: 'audio/wav',
        recorderType: StereoAudioRecorder
      }))
      self.props.startRecording()
      self.props.recorder.startRecording();
    });
  }
}

const mapStateToProps = function(state) {
  return { ...state.microphone, history: state.history }
}

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(microphoneActions.startRecording()),
  startProcessing: () => dispatch(microphoneActions.startProcessing()),
  stopRecording: () => dispatch(microphoneActions.stopRecording()),
  stopProcessing: () => dispatch(microphoneActions.stopProcessing()),
  setDisableTimeout: (timeout) => dispatch(microphoneActions.setDisableTimeout(timeout)),
  setRecorder: (recorder) => dispatch(microphoneActions.setRecorder(recorder)),
  setSongData: (data) => dispatch(songDataActions.setSongData(data)),
  disableRecordingOnMount: () => dispatch(microphoneActions.setRecordingOnMount(false)),
  saveToHistory: (song) => dispatch(historyActions.addSong(song))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoiceRecorder);
