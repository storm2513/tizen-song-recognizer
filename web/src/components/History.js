import React, { Component } from 'react';
import './History.sass';
import SongPreview from './SongPreview'
import { connect } from "react-redux";

class History extends Component {
  render() {
    let songs = this.props.history.sort((a, b) => (a.id > b.id) ? -1 : 1 )

    return (
      <div className="history">
        <div className="title">
          History
        </div>
        <div className="content">
          { songs && songs.map(songData => {
            return (<SongPreview song={songData.metadata.music[0]} key={songData.id} />)
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(History)
