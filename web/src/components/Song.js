import React, { Component } from 'react';
import './Song.sass';

export default class Song extends Component {
  render() {
    const songData = this.props.songData
    const musicData = songData.metadata.music[0]
    const genre = musicData.genres && musicData.genres[0].name
    const artist = musicData.artists[0].name
    const title = musicData.title
    return (
      <div className="result">
        { genre &&
          <div className="genre">
            {genre}
          </div>
        }
        <div className="title">
          {title}
        </div>
        <div className="artist">
          {artist}
        </div>
      </div>
    )
  }
}
