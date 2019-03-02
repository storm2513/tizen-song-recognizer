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

  componentDidMount() {
    if (window.tizen) {
      window.tizen.power.request("SCREEN", "SCREEN_NORMAL");
    }
    window.addEventListener('tizenhwkey', (ev) => {
      if ((ev.key || ev.keyName) === 'back') {
        if (this.state.songData === null) {
          try {
            window.tizen.application.getCurrentApplication().exit();
          } catch (err) {}
        } else {
          this.setState({songData: null})
        }
      }
    })
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
