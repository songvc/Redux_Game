import React, { Component } from 'react';

const Spinner = ({ isPlaying, onLeft, start }) => {
  if (isPlaying) {
    return (
      <div className='spinner runanimation'></div>
    )
  } else {
    return (
      <div className='spinner end-state' onClick={()=> {onLeft();start(60);}}></div>
    )
  }

}

export default Spinner;
