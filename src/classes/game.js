export class Game {
  constructor(side = 8, knightAt = [0, 0]) {
    this.board = this.createBoard(side)
    this.knightAt = knightAt
  }

  createBoard(side) {
    // should return an array of subarrays each representing an position on a chess board as [x, y]
    const result = []
    for (let i = 0; i < side; i++) {
      for (let j = 0; j < side; j++) {
        result.push([i, j])
      }
    }
    return result
  }

  knightMoves(start, end) {
    let numMoves = 0
    let result = [start, end]
    console.log(
      `You made it in ${numMoves} moves!  Heres your path: [${result}]`
    )
  }
}
