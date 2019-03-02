import React, { Component } from 'react';
import './VoiceRecorder.sass';
import RecordRTC from 'recordrtc';
import { StereoAudioRecorder } from 'recordrtc'
import identify from '../services/identify_song'

class VoiceRecorder extends Component {
  state = {
    recording: false,
    processing: false,
    timeout: null,
    recorder: null
  }

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

  microphoneWrapperClassName = () => {
    if (!this.state.processing) {
      return this.state.recording ? "microphone-wrapper active" : "microphone-wrapper"
    } else {
      return "microphone-wrapper processing"
    }
  }

  captureUserMedia = (callback) => {
    var params = { audio: true, video: false };

    navigator.getUserMedia(params, callback, (error) => {
      alert(JSON.stringify(error));
    });
  };

  setDisableRecordingTimeout = () => {
    clearTimeout(this.state.timeout)

    if (this.state.recording) {
      return
    }

    let timeout = setTimeout(this.disableRecording, 5000)
    this.setState({
      timeout: timeout
    })
  }

  toggleRecording = () => {
    if (this.state.processing) {
      return
    }
    this.setDisableRecordingTimeout()
    this.state.recording ? this.disableRecording() : this.enableRecording()
  }

  disableRecording = () => {
    clearTimeout(this.state.timeout)
    const self = this
    this.state.recorder.stopRecording(() => {
      identify(self.state.recorder.blob, function(response) {
        console.log(response)
        self.props.setSongData(response)
        self.setState({processing: false})
      })
    });

    this.setState({
      recording: false,
      processing: true
    })
  }

  enableRecording = () => {
    const self = this
    this.captureUserMedia((stream) => {
      self.setState({
        recorder: RecordRTC(stream, {
          type: 'audio',
          mimeType: 'audio/wav',
          recorderType: StereoAudioRecorder
        }),
        recording: true
      })
      self.state.recorder.startRecording();
    });
  }
}

export default VoiceRecorder;
