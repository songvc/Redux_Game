import generateTiles from './generateTiles.jsx';
import { combineReducers } from 'redux'

const initialState = {
    boardSizeX: 0,
    boardSizeY: 0,
    mineQuantity: 0,
    dimension: [],
    tiles: [],
    isPlaying: false,
    counter: 30,
    timer: null
}

const boardApp = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_GAMEBOARD_DIMENSION':
          return { ...state,
            boardSizeX: action.x,
            boardSizeY: action.y,
            mineQuantity: action.z,
            dimension: [action.x, action.y, action.z]
          }

        case 'GENERATE_GAMEBOARD':
          return { ...state,
            tiles: generateTiles(state.dimension)
          }

        case 'OPEN_BLANK_TILE':
          return { ...state,
            tiles: state.tiles.map((tile) =>
              (tile.id == action.id && !tile.isClicked && !tile.isFlagged)? { ...tile, isClicked: !tile.isClicked, uiState: 'blank' } : tile
            )
          }

        case 'OPEN_NUMBER_TILE':
          return { ...state,
            tiles: state.tiles.map((tile) =>
              (tile.id == action.id && !tile.isClicked && !tile.isFlagged)? { ...tile, isClicked: !tile.isClicked, uiState: 'number' } : tile
            )
          }

        case 'OPEN_MINE_TILE':
          return { ...state,
            tiles: state.tiles.map((tile) =>
              (tile.isMine)? { ...tile, isClicked: !tile.isClicked, uiState: 'mine' } : tile
            )
          }

        case 'TOGGLE_FLAG':
          return { ...state,
            tiles: state.tiles.map((tile) =>
              (tile.id == action.id && !tile.isClicked)? { ...tile, isFlagged: !tile.isFlagged } : tile
            )
          }

        case 'PLAY_GAME':
          return { ...state, isPlaying: true }

        case 'END_GAME':
          return { ...state, isPlaying: false }

        case 'RESTART_GAME':
          return { ...state,
            isPlaying: true,
            tiles: generateTiles(state.dimension)
          }

        default:
          return state
    }
}

const timeApp = (state = initialState, action) => {
    switch (action.type) {
        case 'START_TIMER':
          return { ...state, counter: action.counter, timer: action.interval, isPlaying: true }

        case 'SET_COUNTER':
          return { ...state, counter: action.counter }

        case 'TICK_TIMER':
          return { ...state, counter: state.counter - 1 }

        case 'STOP_TIMER':
          clearInterval(state.timer)
          return { ...state, isPlaying: false }

        default:
          return state
    }
}


const gameApp = combineReducers({
    boardApp,
    timeApp
})

export default gameApp;
