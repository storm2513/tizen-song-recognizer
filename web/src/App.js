import React, { Component } from 'react';
import './App.sass';
import VoiceRecorder from './components/VoiceRecorder'
import SongRecognitionResult from './components/SongRecognitionResult'

class App extends Component {
  state = {
    songData: null
  }

  setSongData = (songData) => {
    this.setState({songData: songData})
  }

  render() {
    const songData = this.state.songData
    return (
      <div className="app">
        { songData &&
          <SongRecognitionResult songData={songData} />
        }
        { !songData &&
          <VoiceRecorder setSongData={this.setSongData} />
        }
      </div>
    );
  }
}

export default App;
