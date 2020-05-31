// this is an UNDIRECTED graph!
class Graph {
  constructor() {
    this.adjList = {};
  }
  // takes name
  // adds key to the adj list with thename of the vertex and set its value to empty array. This is where this vertex's connected vertices will go.
  addVertex(vert) {
    if (!this.adjList[vert]) this.adjList[vert] = [];
    else console.log("Vertex already exists");
  }
  // accept to vertices and create the connection between them
  addEdge(vert1, vert2) {
    // in the adjlist, find the vert1 key and push vert2 into its array
    if (this.adjList[vert1] && this.adjList[vert2]) {
      if (!this.adjList[vert1].includes(vert2)) {
        this.adjList[vert1].push(vert2);
      } else console.log("vertices already connected");
      // also vice versa, since this is an undirected graph
      if (!this.adjList[vert2].includes(vert1)) {
        this.adjList[vert2].push(vert1);
      } else console.log("vertices already connected");

    } else console.log("One or both vertices invalid");
  }
  // accepts two vertices and severs the connection between them
  removeEdge(vert1, vert2) {
    if (this.adjList[vert1] && this.adjList[vert2]) {
      this.adjList[vert1] = this.adjList[vert1].filter(vert => vert !== vert2);
      this.adjList[vert2] = this.adjList[vert2].filter(vert => vert !== vert1);
    } else console.log("one or more edges invalid")
  }
  // remove the vertex and all its edges
  removeVertex(vert) {
    // loop through the vertex's adjList, and removeEdge on each connection.
    this.adjList[vert].forEach(edge => {
      this.removeEdge(vert, edge);
    });
    delete this.adjList[vert];
  }
}

const graph = new Graph;
graph.addVertex("Galadriel");
graph.addVertex("Frodo");
graph.addVertex("Finrod");
graph.addVertex("Beren");
graph.addVertex("Finarfin");
graph.addVertex("Celeborn");
graph.addVertex("Celebrian");
graph.addVertex("Arwen");
graph.addVertex("Aragorn");
graph.addEdge("Finrod", "Beren");
graph.addEdge("Finrod", "Galadriel");
graph.addEdge("Frodo", "Galadriel");
graph.addEdge("Celeborn", "Galadriel");
graph.addEdge("Arwen", "Celebrian");
graph.addEdge("Arwen", "Aragorn");
graph.addEdge("Frodo", "Aragorn");
graph.addEdge("Celebrian", "Galadriel");
graph.addEdge("Celeborn", "Celebrian");
graph.addEdge("Finarfin", "Galadriel");
graph.addEdge("Finarfin", "Finrod");

console.log(graph.adjList);

graph.removeVertex("Celebrian");

console.log(graph.adjList);
