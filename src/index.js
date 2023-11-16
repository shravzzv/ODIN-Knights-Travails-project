import 'normalize.css'
import './styles/main.css'
import { Game } from './modules/game'

import Board from './components/board'
import Controller from './components/controller'

// appending DOM nodes

const root = document.getElementById('root')
root.appendChild(Controller())
root.appendChild(Board())

// variables & functions

let knightIndex = [0, 0]

const placeKnightAt = (index) => {
  document.querySelector(
    `.square[data-index='${index.join(',')}']`
  ).textContent = '🐴'
}

const placeStar = (e) => {
  const index = e.target.attributes['data-index'].value
  e.target.textContent = '⭐'
  highlightPath(Game.knightMoves(knightIndex, index.split(',')))
}

const clearAllSquares = () => {
  document
    .querySelectorAll('.square')
    .forEach((square) => (square.textContent = ''))
}

const clearAllSquaresExceptKnight = () => {
  document.querySelectorAll('.square').forEach((square) => {
    if (square.textContent !== '🐴') {
      square.textContent = ''
    }
  })
}

const clearAllSquaresExceptStar = () => {
  document.querySelectorAll('.square').forEach((square) => {
    if (square.textContent !== '⭐') {
      square.textContent = ''
    }
  })
}

const highlightPath = (path) => {
  path.slice(1, -1).forEach((index) => {
    document.querySelector(
      `.square[data-index='${index.join(',')}']`
    ).textContent = '💥'
  })
}

placeKnightAt(knightIndex)

// event handlers

const handleSquareClick = (e) => {
  clearAllSquaresExceptKnight()
  placeStar(e)
}

// event listenters

Array.from(document.querySelectorAll('.square')).forEach((square) =>
  square.addEventListener('click', handleSquareClick)
)
