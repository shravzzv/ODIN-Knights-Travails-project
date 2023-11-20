import Info from '../components/info'
import Board from '../components/board'
import Controller from '../components/controller'
import { PathFinder } from './pathFinder'

// module responsible for modifying the UI
export const Interface = (function () {
  let _knightIndex = [0, 0]
  let _starIndex = [7, 7]
  let _hasKnightMoved = false
  const _root = document.getElementById('root')

  const _appendComponents = () => {
    _root.appendChild(Info())
    _root.appendChild(Board())
    _root.appendChild(Controller())
  }

  const _setEventListeners = () => {
    document
      .querySelectorAll('.square')
      .forEach((square) => square.addEventListener('click', _handleSquareClick))

    document
      .querySelector(`input[type='checkbox']`)
      .addEventListener('input', _togglePlayerChoice)
  }

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

  const _highlightPath = () => {
    PathFinder.knightMoves(_knightIndex, _starIndex)
      .slice(1, -1)
      .forEach((index) => {
        document.querySelector(
          `.square[data-index='${index.join(',')}']`
        ).textContent = '💥'
      })
  }

  const _updateKnight = (index) => {
    _knightIndex = index
    _clearAllSquaresExceptStar()
    _placeKnightAt(_knightIndex)
  }

  const _updateStar = (index) => {
    _starIndex = index
    _clearAllSquaresExceptKnight()
    _placeStarAt(_starIndex)
  }

  const initalize = () => {
    _appendComponents()
    _setEventListeners()
    _placeKnightAt(_knightIndex)
    _placeStarAt(_starIndex)
    _highlightPath()
  }

  const _togglePlayerChoice = () => (_hasKnightMoved = !_hasKnightMoved)

  const _handleSquareClick = (e) => {
    if (e.target.textContent === '🐴' || e.target.textContent === '⭐') return
    const index = e.target.attributes['data-index'].value

    _hasKnightMoved
      ? _updateKnight(index.split(','))
      : _updateStar(index.split(','))

    _highlightPath()
  }

  return {
    initalize,
  }
})()
