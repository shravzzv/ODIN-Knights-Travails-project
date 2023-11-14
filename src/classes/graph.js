export class Graph {
  constructor() {
    this.adjList = new Map()
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(`${vertex}`, [])
    }
  }

  addEdge(src, dest) {
    if (!this.adjList.has(src) || !this.adjList.has(dest)) {
      // console.error('Invalid vertex')
      return
    }

    if (!this.adjList.get(src).includes(dest)) {
      this.adjList.get(src).push(dest)
    } else {
      // console.error('Edge already exists')
    }

    // since the graph is undirected, add an edge from dest to src also
    if (!this.adjList.get(dest).includes(src)) {
      this.adjList.get(dest).push(src)
    } else {
      // console.error('Edge already exists')
    }
  }

  doBFS(startingVertex, fn = null) {
    if (!this.adjList.has(startingVertex)) {
      console.error('Invalid starting vertex')
      return
    }

    const visited = {}
    visited[startingVertex] = true
    const queue = []
    queue.push(startingVertex)

    while (queue.length > 0) {
      let vertex = queue.shift()
      fn ? fn(vertex) : console.log(vertex)

      const adjacents = this.adjList.get(vertex)

      for (let adjacent of adjacents) {
        if (!visited[adjacent]) {
          visited[adjacent] = true
          queue.push(adjacent)
        }
      }
    }
  }

  print() {
    console.log(this.adjList)
  }

  knightMoves(start, end) {
    console.log(start + ' ' + end)
  }
}
