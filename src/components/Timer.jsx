import React, { Component } from 'react';
import { start, stop_timer } from '../actions/actions.js';

class Timer extends Component {

  componentDidMount() {
    if (this.props.playing) {
      this.props.start(60);    
    }
  }

  componentWillUnmount() {
    stop_timer();
  }

  render() {
    return (
      <h2>{this.props.time} Seconds Left</h2>
    );
  }
}

export default Timer;
