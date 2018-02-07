import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import TileList from '../components/TileList.jsx';
import { check_tile, toggle_flag, set_focus, end_game } from '../actions/actions.js';

const mapStateToProps = (state) => {
  // console.log("before chunks", state.boardApp.tiles);
  const chunked = _.chunk(state.boardApp.tiles, state.boardApp.boardSizeY)
  return {
    tiles: chunked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLeftClick: (id) => {
      dispatch(check_tile(id))
    },
    onRightClick: (id) => {
      dispatch(toggle_flag(id))
    }
  }
}

const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileList)

export default Board;
