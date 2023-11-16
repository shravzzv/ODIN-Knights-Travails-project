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
  console.log(index)
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
  console.log(path)
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

// todo: display the path traversed
// ! data-index attribute isn't congruent with x,y pattern of Game module: The game module treats the -left square as [0,0] in x,y pattern. Whereas the UI treats the top-left square as [0,0] with y,x pattern

Game.knightMoves([0, 0], [1, 0])
