import React, { Component } from 'react';
import { start, restart_game, tick_timer, stop_timer, set_timer } from '../actions/actions.js';
import { connect } from 'react-redux'
import Spinner from '../components/Spinner.jsx';
import Timer from '../components/Timer.jsx';

const mapStateToProps = (state) => {
  return {
    counter: state.timeApp.counter,
    isPlaying: state.boardApp.isPlaying
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    start: (time) => {
      dispatch(start(time))
    },
    reStart: () => {
      dispatch(restart_game())
    }
  }
}

let Title = ({ counter, isPlaying, start, reStart }) => {
  return (
      <div>
        <h1>Mine Sweeping Games</h1>
        <Timer isPlaying={isPlaying} start={start} time={counter}/>
        <Spinner isPlaying={isPlaying} start={start} onLeft={reStart} />
      </div>
  )
}

Title = connect(mapStateToProps, mapDispatchToProps)(Title)

export default Title;
