import React, { Component } from 'react';
import './SongPreview.sass'

class SongPreview extends Component {
  render() {
    const song = this.props.song
    const title = song.title
    const artists = song.artists.map(artist => artist.name).join(", ")

    return (
      <div className="song-preview">
        <div className="title">
          {title}
        </div>
        <div className="artists">
          {artists}
        </div>
      </div>
    )
  }
}

export default SongPreview
