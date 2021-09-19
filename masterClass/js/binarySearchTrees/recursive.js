/* There is more than one way to make a tree. The first method in this file is what's taught at Colt Steele's JavaScript Algorithms and Data Structires Masterclass Udemy course. The one underneath is what's taught at Fullstack Academy and is my preferred method because it's consistent with my perception of the tree structure as persisting for every node, i.e. every node is the root of its own tree. */

class BST {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }

  insert(val) {
    // fractal system - every node in the tree is a tree - so create new tree instance with given value. For every tree, check if it has a tree on its left branch. If yes, call this method on the tree there again. When you find a tree that doesn't have a branch on its left, put yourself there. Then do the same on right for equal/greater.
    if (val < this.val) {
      // then the new node should be on the left of the current node. Is there anything already there?
      if (this.left) {
        // let's go to the node on the left and see from there.
        this.left.insert(val);
      } else {
        // there's nothing on the left - this is the base case. Stop re-calling the func and drop the new node here.
        this.left = new BST(val);
      }
    } else {
      // same happens on the right, if val is greater than or equal to current node's val
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = new BST(val);
      }
    }
    return this;
  }

  find(val) {
    if (this.val === val) return true;
    if (val < this.val) {
      if (this.left) return this.left.find(val);
      else return false;
    } else {
      if (this.right) return this.right.find(val);
      else return false;
    }
  }

  bfs() {
    const q = [this];
    const visited = [];
    while (q.length) {
      // let deq = q.shift();
      let deq = q.shift();
      visited.push(deq.val);
      if (deq.left) q.push(deq.left);
      if (deq.right) q.push(deq.right);
    }
    return visited;
  }

  dfsPreOrder(visited = []) {
    visited.push(this.val);
    if (this.left) this.left.dfsPreOrder(visited);
    if (this.right) this.right.dfsPreOrder(visited);
    return visited;
  }

  dfsPostOrder(visited = []) {
    if (this.left) this.left.dfsPostOrder(visited);
    if (this.right) this.right.dfsPostOrder(visited);
    visited.push(this.val);
    return visited;
  }

  dfsInOrder(visited = []) {
    if (this.left) this.left.dfsInOrder(visited);
    visited.push(this.val);
    if (this.right) this.right.dfsInOrder(visited);
    return visited;
  }
}

const tree = new BST(17);
tree.insert(7);
tree.insert(-3);
tree.insert(10);
tree.insert(83);
tree.insert(25);
tree.insert(28);
tree.insert(5);
tree.insert(94);
tree.insert(20);

tree.find(0);
console.log(tree.dfsInOrder());
