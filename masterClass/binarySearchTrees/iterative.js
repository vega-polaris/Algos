class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root) {
    this.root = root;
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
}

let tree = new BST();
tree.root = new Node(10);
tree.insert(5);
tree.insert(3);
tree.insert(28);
tree.insert(15);
tree.insert(-35);
tree.find(35);
