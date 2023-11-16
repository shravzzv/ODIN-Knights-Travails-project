import 'normalize.css'
import './styles/main.css'
import { Game } from './modules/game'

import Board from './components/board'
import Info from './components/info'
import Controller from './components/controller'

// appending DOM nodes

const root = document.getElementById('root')
root.appendChild(Info())
root.appendChild(Board())
root.appendChild(Controller())

// variables & functions

let knightIndex = [0, 0]
let starIndex = [7, 7]

let isKnightMoving = false

const placeKnightAt = (index) => {
  document.querySelector(
    `.square[data-index='${index.join(',')}']`
  ).textContent = '🐴'
}

const placeStarAt = (index) => {
  document.querySelector(
    `.square[data-index='${index.join(',')}']`
  ).textContent = '⭐'
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

const highlightPath = () => {
  Game.knightMoves(knightIndex, starIndex)
    .slice(1, -1)
    .forEach((index) => {
      document.querySelector(
        `.square[data-index='${index.join(',')}']`
      ).textContent = '💥'
    })
}

const initalize = () => {
  placeKnightAt(knightIndex)
  placeStarAt(starIndex)
  highlightPath()
}
initalize()

// event handlers

const handleSquareClick = (e) => {
  if (e.target.textContent !== '') return

  if (isKnightMoving) {
    clearAllSquaresExceptStar()

    const index = e.target.attributes['data-index'].value
    knightIndex = index.split(',')

    placeKnightAt(knightIndex)
    highlightPath()
  } else {
    clearAllSquaresExceptKnight()

    const index = e.target.attributes['data-index'].value
    starIndex = index.split(',')

    placeStarAt(starIndex)
    highlightPath()
  }
}

const handleToggle = (e) => {
  isKnightMoving = !isKnightMoving
}

// event listenters

Array.from(document.querySelectorAll('.square')).forEach((square) =>
  square.addEventListener('click', handleSquareClick)
)

document
  .querySelector(`input[type='checkbox']`)
  .addEventListener('input', handleToggle)
