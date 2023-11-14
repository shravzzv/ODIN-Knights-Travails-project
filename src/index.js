import { UDGraph } from './classes/graph'
import { Game } from './classes/game'

const gameBoard = new UDGraph()

// add all vertices
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let key = [i, j]
    gameBoard.addVertex(key)
  }
}

const knightMoves = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
]

// add all edges
for (const key of gameBoard.adjList.keys()) {
  for (const move of knightMoves) {
    let destX = parseInt(key[0]) + parseInt(move[0])
    let destY = parseInt(key[2]) + parseInt(move[1])

    if (destX >= 0 && destX < 8 && destY >= 0 && destY < 8) {
      let destination = `${destX},${destY}`
      gameBoard.addEdge(key, destination)
    }
  }
}

gameBoard.print()
