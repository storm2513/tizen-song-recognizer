import React, { Component } from 'react';
import NoResult from './NoResult'
import Song from './Song'

export default class SongRecognitionResult extends Component {
  render() {
    const songData = this.props.songData
    return (
      <div>
        { !this.isRecognized(songData.status.code) &&
          <NoResult />
        }
        { this.isRecognized(songData.status.code) &&
          <Song songData={songData} />
        }
      </div>
    )
  }

  isRecognized = (code) => {
    return code === 0
  }
}
