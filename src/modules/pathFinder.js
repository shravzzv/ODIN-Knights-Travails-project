// module responsible for finding the shortest path between a knight and a destination using an undirected graph and breadth-first-search
export const PathFinder = (function () {
  // representing a graph using an adjacent list
  const _adjList = new Map()

  // all possible choices for index 0,0
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

  // adds 64 vertices to the adjacent list to represent each square on the chess board as 'x,y'
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // convert arrays into strings before adding to the list since arrays are of reference type
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

  // for each vertex, adds an edge to all of its possible knight choices
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

  // returns the shortest path between a start and an end vertex using bfs
  const knightMoves = (start, end, graph = _adjList) => {
    // expected start and end arguments of type Array; convert them into strings
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
          return path.map((coord) => coord.split(',').map(Number))

          // * commented code below was the required project ouput; it was no longer useful since a UI was implemented
          // console.log(
          //   `You made it in ${path.length - 1} moves! Here's your path:`
          // )
          // console.log(path.map((coord) => coord.split(',').map(Number)))
        }

        for (const neighbor of graph.get(vertex)) {
          const newPath = [...path, neighbor]
          queue.push(newPath)
        }
      }
    }

    return null // no path found
  }

  return {
    knightMoves,
  }
})()
