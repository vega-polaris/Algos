class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    // if there's no root, this is the root.
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let curNode = this.root;
      while (true) {
        // we need to figure out where to put this.
        // is the new val greater than or less than the root?
        if (newNode.val > curNode.val) {
          // new node is greater than the root
          // so it should be on the right
          // is there something already there?
          if (curNode.right) {
            // then move to that node and check everything again.
            curNode = curNode.right;
          } else {
            // nothing on the right - you've found your spot
            curNode.right = newNode;
            return this;
          }
        } else {
          // but if cur node's val is equal to (or smaller than) root, do the same on the other side.
          if (curNode.left) {
            curNode = curNode.left;
          } else {
            curNode.left = newNode;
            return this;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let curNode = this.root;
    while (true) {
      if (val === curNode.val) {
        // found it!
        return true;
      } else if (val > curNode.val) {
        // if there's a node in that direction, apply this logic to it too.
        if (curNode.right) curNode = curNode.right;
        // if there's no node in that direction - so our number doesn't exist.
        else return false;
      } else {
        if (curNode.left) curNode = curNode.left;
        else return false;
      }
    }
  }

  bfs() {
    const visited = [];
    const q = [this.root];
    while (q.length) {
      let deq = q.shift();
      if (deq.left) q.push(deq.left);
      if (deq.right) q.push(deq.right);
      visited.push(deq.val);
    }
    return visited;
  }

  dfsPreOrder(node = this.root, visited = []) {
    visited.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, visited);
    if (node.right) this.dfsPreOrder(node.right, visited);
    return visited;
  }

  dfsPostOrder(node = this.root, visited = []) {
    if (node.left) this.dfsPostOrder(node.left, visited);
    if (node.right) this.dfsPostOrder(node.right, visited);
    visited.push(node.val);
    return visited;
  }

  dfsInOrder(node = this.root, visited = []) {
    if (node.left) this.dfsInOrder(node.left, visited);
    visited.push(node.val);
    if (node.right) this.dfsInOrder(node.right, visited);
    return visited;
  }
}

const tree = new BST();
tree.root = new Node(10);
tree.insert(5);
tree.insert(3);
tree.insert(28);
tree.insert(15);
tree.insert(-35);
// tree.find(35);
tree.insert(4);
tree.insert(17);
tree.insert(8);
tree.insert(32);
// console.log(tree.bfs());
console.log(tree.dfsInOrder());
