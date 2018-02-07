import * as actions from '../src/actions/actions.js'

describe('actions', () => {
  it('should create an action to set gameboard dimension', () => {
    const expectedAction = {
      type: actions.SET_GAMEBOARD_DIMENSION,
      x: 2,
      y: 3,
      z: 5
    }
    expect(actions.set_gameboard_dimension(2,3,5)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to generate gameboard', () => {
    const expectedAction = {
      type: actions.GENERATE_GAMEBOARD
    }
    expect(actions.generate_gameboard()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to play game', () => {
    const expectedAction = {
      type: actions.PLAY_GAME
    }
    expect(actions.play_game()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to restart game', () => {
    const expectedAction = {
      type: actions.RESTART_GAME
    }
    expect(actions.restart_game()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to tick timer', () => {
    const expectedAction = {
      type: actions.TICK_TIMER
    }
    expect(actions.tick_timer()).toEqual(expectedAction)
  })
})
