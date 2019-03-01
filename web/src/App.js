import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import VoiceRecorder from './components/VoiceRecorder'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VoiceRecorder />
      </div>
    );
  }
}

export default App;
