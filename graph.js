const GraphNode = function(data) {
  this.data = data
  this.edges = new Set()
}

const Graph = function() {
  this.nodes = new Set()
}

Graph.prototype.addNode = function(data) {
  const newNode = new GraphNode(data)
  this.nodes.add(newNode)
  return newNode
}

Graph.prototype.addEdge = function(node_a, node_b) {
  if (this.nodes.has(node_a) && this.nodes.has(node_b)) {
    node_a.edges.add(node_b)
    node_b.edges.add(node_a)
  }
  else {
    console.log('WARNING! tried to add an edge for one or more nodes not in graph')
  }
}

Graph.prototype.printNodesData = function() {
  this.nodes.forEach(node => console.log(node.data))
}

/**
 *
 * @param {GraphNode} origin
 * @param {GraphNode} destination
 */
Graph.prototype.dfs = function(origin, destination) {
  let toVisit = []
  let visited = new Set()
  let current = origin
  while (current) {
    if (current === destination) {
      return 'found connection :)'
    }
    visited.add(current)
    current.edges.forEach((connection) => {
      if (!visited.has(connection)) {
        toVisit.push(connection)
      }
    })
    current = toVisit.pop()
  }
  return 'no connection found :('
}

const lg = new Graph()
const Celeste = lg.addNode('Celeste')
const Kelcey = lg.addNode('Kelcey')
const Jonathan = lg.addNode('Jonathan')
const Mira = lg.addNode('Mira')
const Sabrin = lg.addNode('Sabrin')
const Patrick = lg.addNode('Patrick')
const James = lg.addNode('James')
const Bonnie = lg.addNode('Bonnie')

const Voldemort = new GraphNode('Voldemort')

lg.addEdge(Jonathan, James)
lg.addEdge(Jonathan, Voldemort)

