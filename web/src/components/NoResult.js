import React, { Component } from 'react';
import './NoResult.sass';
import { connect } from "react-redux";
import { microphoneActions, songDataActions } from '../actions'

class NoResult extends Component {
  render() {
    return (
      <div className="result">
        <div className="text">
          No result
        </div>
        <button onClick={this.onTryButtonClick}>
          Try again?
        </button>
      </div>
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

export default connect(null, mapDispatchToProps)(NoResult);
