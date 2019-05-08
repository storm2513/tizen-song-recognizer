import React, { Component } from 'react';
import './TryAgainButton.sass';
import { connect } from "react-redux";
import { microphoneActions, songDataActions } from '../actions'

class TryAgainButton extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.onTryButtonClick}>
        Try again?
      </button>
    )
  }

  onTryButtonClick = () => {
    this.props.setRecordingOnMount()
    this.props.removeSongData()
  }
}

const mapDispatchToProps = dispatch => ({
  removeSongData: () => dispatch(songDataActions.removeSongData()),
  setRecordingOnMount: () => dispatch(microphoneActions.setRecordingOnMount(true))
})

export default connect(null, mapDispatchToProps)(TryAgainButton);
