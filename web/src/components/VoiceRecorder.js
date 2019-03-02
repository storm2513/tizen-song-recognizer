import React, { Component } from 'react';
import './VoiceRecorder.sass';
import RecordRTC from 'recordrtc';
import { StereoAudioRecorder } from 'recordrtc'
import identify from '../services/identify_song'

class VoiceRecorder extends Component {
  state = {
    recording: false,
    timeout: null,
    recorder: null
  }

  render() {
    return (
      <div className="voice-recorder">
        <div className={this.state.recording ? "microphone-wrapper active" : "microphone-wrapper"} onClick={this.toggleRecording}>
          <div className="circle"></div>
          <div className="microphone"></div>
        </div>
      </div>
    );
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
    this.setDisableRecordingTimeout()
    this.state.recording ? this.disableRecording() : this.enableRecording()
  }

  disableRecording = () => {
    clearTimeout(this.state.timeout)
    this.state.recorder.stopRecording(() => {
      identify(this.state.recorder.blob, function(response) {
        console.log(response)
      })
    });

    this.setState({
      recording: false
    })
  }

  enableRecording = () => {
    this.captureUserMedia((stream) => {
      this.setState({
        recorder: RecordRTC(stream, {
          type: 'audio',
          mimeType: 'audio/wav',
          recorderType: StereoAudioRecorder
        }),
        recording: true
      })
      this.state.recorder.startRecording();
    });
  }
}

export default VoiceRecorder;
