// naive, inefficient implementation of priority queue - will be upgraded later
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   nq(val, priority) {
//     this.values.push({ val, priority });
//     this.sort();
//   }
//   dq() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

import PriorityQueue from './maxBinaryHeap';

// this is an UNDIRECTED graph!
class WeightedGraph {
  constructor() {
    this.adjList = {};
  }
  // takes name
  // adds key to the adj list with thename of the vertex and set its value to empty array. This is where this vertex's connected vertices will go.
  addVertex(vert) {
    if (!this.adjList[vert]) this.adjList[vert] = [];
    else console.log('Vertex already exists');
  }
  // accept to vertices and create the connection between them
  addEdge(val1, val2, weight) {
    // in the adjlist, find the val1 key and push vert2 into its array
    if (this.adjList[val1] && this.adjList[val2]) {
      this.adjList[val1].push({ val: val2, weight });
      // also vice versa, since this is an undirected graph
      this.adjList[val2].push({ val: val1, weight });
    }
  }
  dijkstra(originVal, targetVal) {
    // a list of all vertices and their distances from origin
    // initialized to infinity, aside from origin which defaults to 0
    const distances = this.createDict(originVal, 'distances');
    // put all the vertices except the origin in a priority queue - this is where we'll be choosing which vertex to go to.
    // initialized to infinity
    const priorityQ = new PriorityQueue();
    Object.entries(distances).forEach((vertDistancePair) => {
      priorityQ.insert(...vertDistancePair);
    });
    const previous = this.createDict(originVal);
    while (priorityQ.values.length) {
      // deq vertex from priority
      let smallest = priorityQ.dq().val;
      // if this is the same as target vertex, we are done (?)
      if (smallest === targetVal) {
        return this.createReturnRoute(smallest, previous);
      }

      if (smallest !== targetVal) {
        // otherwise, loop through adj list values of that vert
        this.adjList[smallest].forEach((adjVert) => {
          // calc distance to j vertex from starting vertex
          let distance =
            distances[smallest] === Infinity
              ? adjVert.weight
              : distances[smallest] + adjVert.weight;
          // if this is less than what's currently stored in distances for this object...
          if (distance < distances[adjVert.val]) {
            // update the distance object with new lowest val
            distances[adjVert.val] = distance;
            // update previous object to contain the i vertex
            previous[adjVert.val] = smallest;
            // enq the vertex with the total distance from start node
            priorityQ.nq(adjVert.val, distance);
          }
        });
      }
    }
  }

  createDict(originVal, type) {
    const dict = {};
    Object.keys(this.adjList).forEach((vert) => {
      if (type === 'distances') {
        if (vert === originVal) dict[vert] = 0;
        else dict[vert] = Infinity;
      } else {
        dict[vert] = null;
      }
    });
    return dict;
  }

  createReturnRoute(smallest, previous) {
    const path = [];
    while (previous[smallest]) {
      path.unshift(smallest);
      smallest = previous[smallest];
    }

    return path;
  }
}

const graph = new WeightedGraph();
graph.addVertex('Beren');
graph.addVertex('Finrod');
graph.addEdge('Beren', 'Finrod', 4);
graph.addVertex('Finarfin');
graph.addEdge('Finarfin', 'Finrod', 1);
graph.addVertex('Celebrian');
graph.addEdge('Finarfin', 'Celebrian', 5);
graph.addVertex('Arwen');
graph.addEdge('Arwen', 'Celebrian', 1);
graph.addVertex('Aragorn');
graph.addEdge('Arwen', 'Aragorn', 3);
graph.addVertex('Frodo');
graph.addEdge('Frodo', 'Aragorn', 5);
graph.addVertex('Galadriel');
graph.addEdge('Frodo', 'Galadriel', 6);
graph.addEdge('Finrod', 'Galadriel', 2);
graph.addEdge('Finarfin', 'Galadriel', 1);
graph.addEdge('Celebrian', 'Galadriel', 1);
graph.addVertex('Celeborn');
graph.addEdge('Celebrian', 'Celeborn', 1);
graph.addEdge('Galadriel', 'Celeborn', 3);
graph.addEdge('Aragorn', 'Galadriel', 6);
console.log(graph.dijkstra('Arwen', 'Finarfin'));
