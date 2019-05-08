import React, { Component } from 'react';
import TryAgainButton from './TryAgainButton'
import './NoResult.sass';

export default class NoResult extends Component {
  render() {
    return (
      <div className="result">
        <div className="text">
          No result
        </div>
        <TryAgainButton />
      </div>
    )
  }
}
