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

// event listeners
document
  .querySelectorAll('.square')
  .forEach((square) =>
    square.addEventListener('click', Interface.handleSquareClick)
  )

document
  .querySelector(`input[type='checkbox']`)
  .addEventListener('input', Interface.togglePlayerChoice)

Interface.initalize()
