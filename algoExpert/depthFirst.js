class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    if (this.children.length > 0) {
      for (let child of this.children) {
        child.depthFirstSearch(array);
      }
    }
    return array;
  }
}

const test1 = new Node('A');
test1.addChild('B').addChild('C');
test1.children[0].addChild('D');

console.log(test1.depthFirstSearch([]));
