class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add node to end
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove last item
  pop() {
    if (!this.head) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  // remove the node from the beginning
  shift() {
    if (!this.head) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  // add node to the beginning
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // access a node at an index
  // Time complexity: O(N)
  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let distanceFromEnd = this.length - 1 - idx;
    // use length to determine where to start iterating
    if (idx > distanceFromEnd) {
      // idx is closer to the end - start from the tail
      let curNode = this.tail;
      while (distanceFromEnd) {
        curNode = curNode.prev;
        distanceFromEnd--;
      }
      return curNode;
    } else {
      let curNode = this.head;
      while (idx) {
        curNode = curNode.next;
        idx--;
      }
      return curNode;
    }
  }

  // update node at given index with new data
  set(idx, val) {
    const nodeToUpdate = this.get(idx);
    if (!nodeToUpdate) return false;
    nodeToUpdate.val = val;
    return true;
  }

  // insert a node in a specific position
  // Time complexity: O(1)
  insert(idx, val) {
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const precedingNode = this.get(idx - 1);
    if (!precedingNode) return false;
    const newNode = new Node(val);
    const followingNode = precedingNode.next;
    precedingNode.next = newNode;
    newNode.prev = precedingNode;
    newNode.next = followingNode;
    followingNode.prev = newNode;
    this.length++;
    return true;
  }

  // remove node from given index
  // Time complexity: O(1)
  remove(idx) {
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removedNode = this.get(idx);
    if (!removedNode) return false;
    const precedingNode = removedNode.prev;
    const followingNode = removedNode.next;
    precedingNode.next = followingNode;
    followingNode.prev = precedingNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    if (!this.head) return undefined;
    // for each node, whatever was previous is now next and vice versa
    let curNode = this.head;
    while (curNode) {
      let temp = curNode.next;
      curNode.next = curNode.prev;
      curNode.prev = temp;
      curNode = temp;
    }
    let newHead = this.tail;
    this.tail = this.head;
    this.head = newHead;
    return this;
  }

  // for dev purposes
  print() {
    let curNode = this.head;
    while (curNode) {
      console.log({ curNode });
      curNode = curNode.next;
    }
  }
}

const list = new DoublyLinkedList();
list.push('first');
list.push('second');
list.push('third');
list.push('khajit');
list.push('nord');
list.push('dunmer');
list.push('altmer');
// list.pop();
// list.shift();
// list.unshift("fourth");
// list.insert(7, "hobbit");
// list.remove(0);
// list.remove(0);
// list.remove(2);
// list.reverse();
list.print();
