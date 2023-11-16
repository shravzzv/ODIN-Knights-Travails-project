import 'normalize.css'
import './styles/main.css'
import { Game } from './modules/game'

import Board from './components/board'
import Controller from './components/controller'

const root = document.getElementById('root')
root.appendChild(Controller())
root.appendChild(Board())

let knightIndex = [0, 0]

const handleSquareClick = (e) => {
  const index = e.target.attributes['data-index'].value
  e.target.classList.add('knight')
  e.target.textContent = '🐴'
  Game.knightMoves(knightIndex, index.split(','))
}

Array.from(document.querySelectorAll('.square')).forEach((square) =>
  square.addEventListener('click', handleSquareClick)
)

/* 
* to be continued:
todo: Implement controller functionality 
todo: Implement controller design 
todo: Adjust board styles
*/
