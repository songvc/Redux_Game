import React from 'react'
import PropTypes from 'prop-types'
import Tile from './Tile.jsx'

const TileList = ({ tiles, onLeftClick, onRightClick, endGame, counter = 0 }) => {

  return (
    <div className='board'>
      { tiles.map((chunk) => {
          return (
             <div key={`row_${counter++}`} className="board-row">
                  {chunk.map((tile) =>
                      <Tile key={tile.id} {...tile} onLeft={onLeftClick} onRight={onRightClick} onEnd={endGame} />)}
             </div>
          )
      })}
    </div>
  )
}

// TileList.propTypes = {
//   tiles: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       pos: PropTypes.array.isRequired,
//       isClicked: PropTypes.number.isRequired,
//       isFlagged: PropTypes.number.isRequired,
//       isMine: PropTypes.number.isRequired,
//       adjency: PropTypes.array.isRequired,
//       getMineNums: PropTypes.number.isRequired
//     }).isRequired
//   ).isRequired,
//   onLeftClick: PropTypes.func.isRequired,
//   onRightClick: PropTypes.func.isRequired
// }

export default TileList
