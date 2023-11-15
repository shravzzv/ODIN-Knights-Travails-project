const game = (function () {
  const _adjList = new Map()

  const _knightChoices = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ]

  const _addVertex = (vertex) => {
    if (!_adjList.has(vertex)) {
      _adjList.set(vertex, [])
    }
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // convert arrays into strings before adding to the list
      _addVertex([i, j].join(','))
    }
  }

  const _addEdge = (start, target) => {
    if (_adjList.has(start) && _adjList.has(target)) {
      if (!_adjList.get(start).includes(target)) {
        _adjList.get(start).push(target)
      }
      if (!_adjList.get(target).includes(start)) {
        _adjList.get(target).push(start)
      }
    }
  }

  for (const key of _adjList.keys()) {
    // key is a string as '1,1'
    for (const move of _knightChoices) {
      let destX = parseInt(key[0]) + move[0]
      let destY = parseInt(key[2]) + move[1]

      if (destX >= 0 && destX < 8 && destY >= 0 && destY < 8) {
        _addEdge(key, [destX, destY].join(','))
      }
    }
  }

  return {
    print: () => console.log(_adjList),
    knightMoves: (start, end, graph = _adjList) => {
      // return the shortest path between start and end vertices using bfs

      start = start.join(',')
      end = end.join(',')
      if (!graph.has(start) || !graph.has(end)) return 'Invalid start or end'

      const queue = [[start]]
      const visited = new Set()

      while (queue.length) {
        const path = queue.shift()
        const vertex = path[path.length - 1]

        if (!visited.has(vertex)) {
          visited.add(vertex)

          if (vertex === end) {
            console.log(
              `You made it in ${path.length - 1} moves! Here's your path:`
            )
            return path.map((coord) => coord.split(',').map(Number))
          }

          for (const neighbor of graph.get(vertex)) {
            const newPath = [...path, neighbor]
            queue.push(newPath)
          }
        }
      }

      return null // no path found
    },
  }
})()

console.log(game.knightMoves([0, 0], [7, 6]))
