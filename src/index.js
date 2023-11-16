import 'normalize.css'
import './styles/main.css'
import Info from './components/info'
import Board from './components/board'
import Controller from './components/controller'
import { Interface } from './modules/interface'

const root = document.getElementById('root')

// appending DOM nodes
root.appendChild(Info())
root.appendChild(Board())
root.appendChild(Controller())

// event handlers
const handleSquareClick = (e) => {
  if (e.target.textContent === '🐴' || e.target.textContent === '⭐') return
  const index = e.target.attributes['data-index'].value

  Interface.hasKnightMoved()
    ? Interface.updateKnight(index.split(','))
    : Interface.updateStar(index.split(','))

  Interface.highlightPath()
}

document
  .querySelectorAll('.square')
  .forEach((square) => square.addEventListener('click', handleSquareClick))

document
  .querySelector(`input[type='checkbox']`)
  .addEventListener('input', Interface.togglePlayerChoice)

Interface.initalize()
