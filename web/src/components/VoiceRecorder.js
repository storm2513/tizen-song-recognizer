import React, { Component } from 'react';
import './VoiceRecorder.sass';
import RecordRTC from 'recordrtc';
import { StereoAudioRecorder } from 'recordrtc'

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
    clearInterval(this.state.timeout)

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
    clearInterval(this.state.timeout)

    this.state.recorder.stopRecording(() => {
      this.state.recorder.save("recording")
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
        })
      })
      this.state.recorder.startRecording();
    });

    this.setState({
      recording: true
    })
  }
}

export default VoiceRecorder;
