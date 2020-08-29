/* implement an algo to find the kth to last element of a singly linked list. */

class LinkedList {
  constructor() {
    this.head = null;
  }
  addNode(newVal) {
    let newNode = new Node(newVal);
    if (!this.head) this.head = newNode;
    else {
      let curNode = this.head;
      // find the node that doesn't have a next - that's the current last one
      while (curNode.next) {
        curNode = curNode.next;
      }
      // then attach the new node
      curNode.next = newNode;
    }
    return this;
  }
  removeDupesLinearTime() {
    // keep track of values while looping
    const values = {};
    let curNode = this.head;
    let prevNode = null;
    while (curNode) {
      let tempStorage = curNode.next;
      // if val is new, add it to values
      if (!values[curNode.val]) values[curNode.val] = true;
      // if it isn't, remove current node
      else {
        this.removeNode(curNode, prevNode);
      }
      curNode = tempStorage;
    }
    return this;
  }

  removeDupesLinearSpace() {
    let slowPointer = this.head;
    let fastPointer = this.head.next;
    while (slowPointer) {
      // is there still a next or is the fast pointer out of bounds?
      if (!fastPointer) {
        slowPointer = slowPointer.next;
        if (!slowPointer) break;
        fastPointer = slowPointer.next;
      }
      if (!fastPointer) continue;
      let tempStorage = fastPointer.next ? fastPointer.next : null;
      if (fastPointer.val === slowPointer.val) {
        this.removeNode(fastPointer);
      }
      fastPointer = tempStorage;
    }
  }
  // no control for removing head because for this implementation head will never be removed, only dupes
  removeNode(node) {
    let curNode = this.head;
    let prevNode = null;
    while (curNode !== node && curNode) {
      prevNode = curNode;
      curNode = curNode.next;
    }
    prevNode.next = curNode.next;
    node.next = null;
    return this;
  }

  printList() {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode);
      curNode = curNode.next;
    }
  }

  removeKthFromEnd(k) {
    // two pointers - slow and fast
    // slow starts at head
    // fast moves k + 1 times forward
    // if k + 1 doesn't exist, remove node k
    let curNode = this.head;
    let fastPointer = this.head;
    while (curNode) {
      let counter = k - 1;
      while (counter) {
        fastPointer = fastPointer.next;
        counter--;
      }
      if (fastPointer.next) {
        curNode = curNode.next;
        fastPointer = curNode;
      } else {
        this.removeNode(curNode);
        break;
      }
    }
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const list = new LinkedList();
list.addNode('one');
list.addNode('ring');
list.addNode('to');
list.addNode('rule');
list.addNode('one');
list.addNode('ring');
list.addNode('to');
list.addNode('find');
list.addNode('one');
list.addNode('ring');
list.addNode('to');
list.addNode('bring');
list.removeKthFromEnd(4);
list.printList();
