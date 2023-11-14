export class UDGraph {
  constructor() {
    this.adjList = new Map()
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, [])
    } else {
      console.error('Vertex already exists')
    }
  }

  addEdge(src, dest) {
    if (!this.adjList.has(src) || !this.adjList.has(dest)) {
      console.error('Invalid vertex')
      return
    }

    if (!this.adjList.get(src).includes(dest)) {
      this.adjList.get(src).push(dest)
    } else {
      console.error('Edge already exists')
    }

    // since the graph is undirected, add an edge from dest to src also
    if (!this.adjList.get(dest).includes(src)) {
      this.adjList.get(dest).push(src)
    } else {
      console.error('Edge already exists')
    }
  }

  addVertexWithEdges(vertex, edges) {
    this.addVertex(vertex)

    edges.forEach((edge) => {
      this.addEdge(edge, vertex)
    })
  }

  removeVertex(vertex) {
    this.adjList.delete(vertex)

    for (const [key, value] of this.adjList) {
      this.adjList.set(
        key,
        value.filter((v) => v !== vertex)
      )
    }
  }

  hasEdge(src, dest) {
    return this.adjList.get(src).includes(dest)
  }

  getNeighbors(vertex) {
    return this.adjList.get(vertex)
  }

  doBFS(startingVertex, fn = null) {
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

  doDFS(startingVertex, fn = null) {
    const visited = {}

    function traverse(vertex, visited, list) {
      visited[vertex] = true
      fn ? fn(vertex) : console.log(vertex)

      const adjacents = list.get(vertex)

      for (let adjacent of adjacents) {
        if (!visited[adjacent]) {
          traverse(adjacent, visited, list)
        }
      }
    }

    traverse(startingVertex, visited, this.adjList)
  }

  printGraph() {
    for (const [vertex, adjacents] of this.adjList) {
      const adjacentStr = adjacents.join(' ')
      console.log(`${vertex} -> [ ${adjacentStr} ]`)
    }
  }

  print() {
    console.log(this.adjList)
  }
}
