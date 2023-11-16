import { Game } from './game'

// module responsible for modifying the UI
export const Interface = (function () {
  let _knightIndex = [0, 0]
  let _starIndex = [7, 7]
  let _isKnightMoving = false

  const _placeKnightAt = (index) => {
    document.querySelector(
      `.square[data-index='${index.join(',')}']`
    ).textContent = '🐴'
  }

  const _placeStarAt = (index) => {
    document.querySelector(
      `.square[data-index='${index.join(',')}']`
    ).textContent = '⭐'
  }

  const _clearAllSquaresExceptKnight = () => {
    document.querySelectorAll('.square').forEach((square) => {
      if (square.textContent !== '🐴') {
        square.textContent = ''
      }
    })
  }

  const _clearAllSquaresExceptStar = () => {
    document.querySelectorAll('.square').forEach((square) => {
      if (square.textContent !== '⭐') {
        square.textContent = ''
      }
    })
  }

  const highlightPath = () => {
    Game.knightMoves(_knightIndex, _starIndex)
      .slice(1, -1)
      .forEach((index) => {
        document.querySelector(
          `.square[data-index='${index.join(',')}']`
        ).textContent = '💥'
      })
  }

  const initalize = () => {
    _placeKnightAt(_knightIndex)
    _placeStarAt(_starIndex)
    highlightPath()
  }

  const updateKnight = (index) => {
    _knightIndex = index
    _clearAllSquaresExceptStar()
    _placeKnightAt(_knightIndex)
  }

  const updateStar = (index) => {
    _starIndex = index
    _clearAllSquaresExceptKnight()
    _placeStarAt(_starIndex)
  }

  const hasKnightMoved = () => _isKnightMoving

  const togglePlayerChoice = () => (_isKnightMoving = !_isKnightMoving)

  return {
    initalize,
    hasKnightMoved,
    updateKnight,
    updateStar,
    highlightPath,
    togglePlayerChoice,
  }
})()
