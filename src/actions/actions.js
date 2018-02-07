// constants
export const SET_GAMEBOARD_DIMENSION = 'SET_GAMEBOARD_DIMENSION';
export const GENERATE_GAMEBOARD = 'GENERATE_GAMEBOARD';

export const SET_COUNTER = 'SET_COUNTER';
export const START_TIMER = 'START_TIMER';
export const TICK_TIMER = 'TICK_TIMER';
export const STOP_TIMER = 'STOP_TIMER';

export const OPEN_BLANK_TILE = 'OPEN_BLANK_TILE';
export const OPEN_NUMBER_TILE = 'OPEN_NUMBER_TILE';
export const OPEN_MINE_TILE = 'OPEN_MINE_TILE';
export const TOGGLE_FLAG = 'TOGGLE_FLAG';

export const PLAY_GAME = 'PLAY_GAME';
export const END_GAME = 'END_GAME';
export const RESTART_GAME = 'RESTART_GAME';

// actions
export function set_gameboard_dimension(a, b, c) {
  return {
    type: SET_GAMEBOARD_DIMENSION,
    x: a,
    y: b,
    z: c
  }
}

export function generate_gameboard() {
  return {
    type: GENERATE_GAMEBOARD
  }
}

export function play_game() {
  return {
    type: PLAY_GAME
  }
}

export function restart_game() {
  return {
    type: RESTART_GAME
  }
}

export function start(counter) {
  return (dispatch) => {
    const interval = setInterval(() => dispatch(tick()),1000);
    dispatch(start_timer(counter, interval));
  }
}

export function start_timer(counter, interval) {
  return {
    type: START_TIMER,
    counter,
    interval
  }
}

export function tick() {
  return (dispatch, getState) => {
    let { counter } = getState().timeApp;
    if (counter === 1) {
      dispatch(stop_timer());
      dispatch(end_game());
      dispatch(open_mine_tile());
    }
    return dispatch(tick_timer());
  }
}

export function tick_timer() {
  return {
    type: TICK_TIMER
  }
}

export function stop_timer() {
  return {
    type: STOP_TIMER
  }
}

export function check_tile(id) {

  return (dispatch, getState) => {
      let { isClicked, isFlagged, isMine, adjency, getMineNums } = getState().boardApp.tiles[id];
      let { boardSizeY } = getState().boardApp;
      // let  = {};
      // console.log('checking', id);

      if ( isClicked || isFlagged ) {
        return;
      } else if (getMineNums > 0 && !isMine) {
        dispatch(open_number_tile(id));
      } else if (getMineNums == 0 && !isMine) {
        // console.log('adjency',adjency);
        dispatch(open_blank_tile(id));
        for (let i = 0; i < adjency.length; i++) {
          let nextId = adjency[i][0] * boardSizeY + adjency[i][1];
          dispatch(check_tile(nextId));
        }
      } else {
        dispatch(open_mine_tile(id));
        dispatch(end_game());
        dispatch(stop_timer());
      }
  }
}

export function open_blank_tile(id) {
  return {
    type: OPEN_BLANK_TILE,
    id
  }
}

export function open_number_tile(id) {
  return {
    type: OPEN_NUMBER_TILE,
    id
  }
}

export function open_mine_tile(id) {
  return {
    type: OPEN_MINE_TILE,
    id
  }
}

export function toggle_flag(id) {
  return {
    type: TOGGLE_FLAG,
    id
  }
}

export function end_game() {
  return {
    type: END_GAME
  }
}
