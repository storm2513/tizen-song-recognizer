import React, { Component } from 'react';
import TryAgainButton from './TryAgainButton'
import './Song.sass';

export default class Song extends Component {
  render() {
    const songData = this.props.songData
    const musicData = songData.metadata.music[0]
    const genres = musicData.genres && musicData.genres.map(genre => genre.name).join(", ")
    const artists = musicData.artists.map(artist => artist.name).join(", ")
    const title = musicData.title
    const album = musicData.album.name

    return (
      <div className="result">
        { genres &&
          <div className="genre">
            {genres}
          </div>
        }
        <div className="wrapper">
          <div className="title">
            {title}
          </div>
          <div className="album">
            {album}
          </div>
        </div>
        <div className="artist">
          {artists}
        </div>
        <TryAgainButton className="small" />
      </div>
    )
  }
}
