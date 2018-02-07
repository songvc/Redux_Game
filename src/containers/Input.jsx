import React, { Component } from 'react';
import { set_gameboard_dimension, generate_gameboard, play_game, stop_timer, start, set_counter } from '../actions/actions.js';
import { connect } from 'react-redux'


let Input = ({ dispatch }) => {
  let input1, input2, input3;

  return (
      <form className='form' onSubmit={e => {
        e.preventDefault();

        if (!input1.value.trim()) {
          return
        }
        if (!input2.value.trim()) {
          return
        }
        if (!input3.value.trim()) {
          return
        }

        dispatch(set_gameboard_dimension(input1.value, input2.value, input3.value));
        dispatch(generate_gameboard());
        dispatch(play_game());
        dispatch(stop_timer());
        dispatch(start(30));

        input1.value = '';
        input2.value = '';
        input3.value = '';

      }}>

          <input name="boardSizeX" type="number" placeholder="Enter Row Numbers" ref={node => { input1 = node }}  />
          <input name="boardSizeY" type="number" placeholder="Enter Column Numbers" ref={node => { input2 = node }}  />
          <input name="mineQuantity" type="number" placeholder="Enter Mine Numbers" ref={node => { input3 = node }}  />
          <button type="submit">Submit</button>
      </form>
  )
}

Input = connect()(Input)

export default Input
