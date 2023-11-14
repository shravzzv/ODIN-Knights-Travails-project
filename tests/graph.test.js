import { UDGraph } from '../src/classes/graph'

describe('UDGraph tests', () => {
  let graph

  beforeEach(() => {
    graph = new UDGraph()
  })

  describe('addVertex method', () => {
    test('should add a vertex to the graph', () => {
      graph.addVertex('A')
      expect(graph.adjList.has('A')).toBe(true)
    })

    test('should not add a duplicate vertex and log an error', () => {
      graph.addVertex('A')
      console.error = jest.fn()
      graph.addVertex('A')
      expect(console.error).toHaveBeenCalledWith('Vertex already exists')
    })
  })

  describe('addEdge method', () => {
    test('should add an edge between two vertices', () => {
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addEdge('A', 'B')
      expect(graph.hasEdge('A', 'B')).toBe(true)
    })

    test('should not add a duplicate edge and log an error', () => {
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addEdge('A', 'B')
      console.error = jest.fn()
      graph.addEdge('A', 'B')
      expect(console.error).toHaveBeenCalledWith('Edge already exists')
    })

    test('should log an error for invalid vertices', () => {
      console.error = jest.fn()
      graph.addEdge('A', 'B')
      expect(console.error).toHaveBeenCalledWith('Invalid vertex')
    })
  })

  describe('addVertexWithEdges method', () => {
    test('should add a vertex with edges to the graph', () => {
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertexWithEdges('A', ['B', 'C'])
      expect(graph.hasEdge('B', 'A')).toBe(true)
      expect(graph.hasEdge('C', 'A')).toBe(true)
    })

    test('should handle adding edges to a non-existent vertex', () => {
      graph.addVertex('A')
      graph.addVertexWithEdges('B', ['C'])
      expect(graph.hasEdge('B', 'A')).toBe(false)
    })
  })

  describe('removeVertex method', () => {
    test('should remove a vertex from the graph', () => {
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addEdge('A', 'B')
      graph.removeVertex('A')
      expect(graph.hasEdge('A', 'B')).toBe(false)
      expect(graph.getNeighbors('A')).toBe(undefined)
    })

    test('should handle removing a non-existent vertex', () => {
      console.error = jest.fn()
      graph.removeVertex('A')
      expect(console.error).not.toHaveBeenCalled()
    })
  })

  describe('hasEdge method', () => {
    test('should return true if there is an edge between two vertices', () => {
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addEdge('A', 'B')
      expect(graph.hasEdge('A', 'B')).toBe(true)
    })

    test('should return false if there is no edge between two vertices', () => {
      expect(graph.hasEdge('A', 'B')).toBe(false)
    })
  })

  describe('getNeighbors method', () => {
    test('should return the neighbors of a vertex', () => {
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addEdge('A', 'B')
      expect(graph.getNeighbors('A')).toEqual(['B'])
    })

    test('should return undefined for a non-existent vertex', () => {
      expect(graph.getNeighbors('A')).toBe(undefined)
    })
  })

  describe('doBFS method', () => {
    test('should perform BFS traversal starting from a specified vertex with callback', () => {
      const result = []
      const callback = (vertex) => result.push(vertex)

      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertex('D')
      graph.addVertex('E')
      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('B', 'D')
      graph.addEdge('C', 'E')

      graph.doBFS('A', callback)

      expect(result).toEqual(['A', 'B', 'C', 'D', 'E'])
    })

    test('should perform BFS traversal starting from a specified vertex without callback (logs vertices)', () => {
      console.log = jest.fn()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertex('D')
      graph.addVertex('E')
      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('B', 'D')
      graph.addEdge('C', 'E')

      graph.doBFS('A')

      expect(console.log).toHaveBeenCalledWith('A')
      expect(console.log).toHaveBeenCalledWith('B')
      expect(console.log).toHaveBeenCalledWith('C')
      expect(console.log).toHaveBeenCalledWith('D')
      expect(console.log).toHaveBeenCalledWith('E')
    })

    test('should handle BFS traversal from a non-existent vertex', () => {
      console.error = jest.fn()
      graph.doBFS('NonExistentVertex')
      expect(console.error).toHaveBeenCalledWith('Invalid starting vertex')
    })
  })

  describe('doDFS method', () => {
    test('should perform DFS traversal starting from a specified vertex with callback', () => {
      const result = []
      const callback = (vertex) => result.push(vertex)

      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertex('D')
      graph.addVertex('E')
      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('B', 'D')
      graph.addEdge('C', 'E')

      graph.doDFS('A', callback)

      expect(result).toEqual(['A', 'B', 'D', 'C', 'E'])
    })

    test('should perform DFS traversal starting from a specified vertex without callback (logs vertices)', () => {
      console.log = jest.fn()
      graph.addVertex('A')
      graph.addVertex('B')
      graph.addVertex('C')
      graph.addVertex('D')
      graph.addVertex('E')
      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('B', 'D')
      graph.addEdge('C', 'E')

      graph.doDFS('A')

      expect(console.log).toHaveBeenCalledWith('A')
      expect(console.log).toHaveBeenCalledWith('B')
      expect(console.log).toHaveBeenCalledWith('D')
      expect(console.log).toHaveBeenCalledWith('C')
      expect(console.log).toHaveBeenCalledWith('E')
    })

    test('should handle DFS traversal from a non-existent vertex', () => {
      console.error = jest.fn()
      graph.doDFS('NonExistentVertex')
      expect(console.error).toHaveBeenCalledWith('Invalid starting vertex')
    })
  })
})
