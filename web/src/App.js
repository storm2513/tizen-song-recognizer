import React, { Component } from 'react';
import './App.sass';
import VoiceRecorder from './components/VoiceRecorder'
import SongRecognitionResult from './components/SongRecognitionResult'
import History from './components/History'
import { connect } from "react-redux";
import { songDataActions } from "./actions"
import { addSwipeListeners } from "./services/swipe"

class App extends Component {
  componentDidMount() {
    let onLeftSwipe = () => {
      document.querySelector(".app .recognition").style.marginLeft = '-200%'
    }
    let onRightSwipe = () => {
      document.querySelector(".app .recognition").style.marginLeft = '0'
    }
    addSwipeListeners(onLeftSwipe, onRightSwipe)

    if (window.tizen) {
      window.tizen.power.request("SCREEN", "SCREEN_NORMAL");
    }
    window.addEventListener('tizenhwkey', event => {
      if ((event.key || event.keyName) === 'back') {
        if (this.props.songData && !this.props.songData.status) {
          try {
            window.tizen.application.getCurrentApplication().exit();
          } catch (error) {}
        } else {
          this.props.removeSongData()
        }
      }
    })
    window.addEventListener("rotarydetent", event => {
      const direction = event.detail.direction
      if (direction === "CW") {
        onLeftSwipe()
      } else if (direction === "CCW") {
        onRightSwipe()
      }
    })
  }

  render() {
    const songData = this.props.songData
    return (
      <div className="app">
        <div className="recognition">
          { songData && songData.status &&
            <SongRecognitionResult songData={songData} />
          }
          { songData && !songData.status &&
            <VoiceRecorder />
          }
        </div>
        <History />
      </div>
    );
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  removeSongData: () => dispatch(songDataActions.removeSongData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
