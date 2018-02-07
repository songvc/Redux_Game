import React, { Component } from 'react';

const color = { color:'#FEEDE6' };
const color2 = { backgroundColor:'#F4F1F0' };
const color3 = { backgroundColor:'#E04006' };

const Tile = ({ id, isClicked, isFlagged, getMineNums, isMine, onLeft, onRight, onEnd, uiState }) => {

    if (isFlagged) {
        return (
          <div className='tile'
            onContextMenu={(e) => {onRight(id); e.preventDefault();}} >
            <i className="fa fa-lock fa-1x" style={color}></i>
          </div>
        )
    } else if (isClicked) {
      if (uiState === 'blank') {
        return (
          <div className='tile tile-state'
            style={color2}>
          </div>
        )
      } else if (uiState === 'number') {
        return (
          <div className='tile tile-state'
            style={color2}>
            <i>{getMineNums}</i>
          </div>
        )
      } else {
        return (
          <div className='tile tile-state' style={color3}>
            <i className="fa fa-bomb fa-1x" aria-hidden="true" style={color}></i>
          </div>
        )
      }
    } else {
        return (
          <div className='tile'
            onClick={() => onLeft(id)}
            onContextMenu={(e) => {onRight(id); e.preventDefault();}} >
          </div>
        )
    }
}

export default Tile;
