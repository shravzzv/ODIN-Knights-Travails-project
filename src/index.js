import { UDGraph } from './classes/graph'

const graph = new UDGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'C')
graph.addEdge('C', 'B')
graph.addVertexWithEdges('D', ['A', 'B', 'C'])
graph.addVertexWithEdges('E', ['A'])
graph.removeVertex('E')

graph.print()
