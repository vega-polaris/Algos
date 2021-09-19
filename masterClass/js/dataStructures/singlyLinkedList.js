// Nodes store a piece of data and a pointer to the next value.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// linked lists contain many nodes
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  // create a new node and add it at the end of the list. If the list is empty, it's also the head.
  // time complexity: O(1)
  push(data) {
    this.length++;
    let newNode = new Node(data);
    // if there's no head assigned, then this is the first node. Assign it both head and tail.
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      // if there is a tail, it isn't the first node. Assign the tail to its next and reassign tail to point at it.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
  // remove from the end of the list
  // time complexity: O(N)
  pop() {
    // if there are no nodes, return undefined.
    if (!this.head) return;
    // traverse list and pick the penultimate to assign it as tail.
    let curNode = this.head;
    let penultimate = null;
    while (curNode.next) {
      penultimate = curNode;
      // console.log('cur becomes prev: ', prevNode)
      curNode = curNode.next;
      // console.log('cur becomes next: ')
    }
    this.tail = penultimate;
    this.length--;
    if (!this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail.next = null;
    }
    return curNode;
  }
  // remove current head
  // time complexity: O(1)
  shift() {
    // if there are no nodes, return undefined
    if (!this.head) return;
    this.length--;
    // store current head in a var
    let headToRemove = this.head;
    // set the head to curHead's next property
    if (headToRemove.next) {
      this.head = headToRemove.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    // decrement length
    // return the removed node
    return headToRemove;
  }
  // add a node to the beginning of the list
  // time complexity: O(1)
  unshift(data) {
    let newNode = new Node(data);
    this.length++;
    newNode.next = this.head;
    this.head = newNode;
    if (!newNode.next) this.tail = newNode;
    return this;
  }
  // retrive a node by its position in the list
  // time complexity: O(N)
  get(idx) {
    // if idx is less than zero or greater than or equal to the length of the list, return null
    if (idx < 0 || idx >= this.length) return null;
    // starting from the head, step forward for as many steps as the idx
    let curNode = this.head;
    while (idx > 0) {
      curNode = curNode.next;
      idx--;
    }
    return curNode;
  }
  // change the value of the node in the input index to the input value
  // time complexity: O(N)
  set(idx, newData) {
    let nodeToSet = this.get(idx);
    if (!nodeToSet) return false;
    nodeToSet.data = newData;
    return true;
  }
  // add node in a specified position
  // time complexity: O(1)
  insert(idx, data) {
    // if idx is more than length or less than zero, return false
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(data);
    if (idx === 0) return !!this.unshift(data);

    const newNode = new Node(data);
    this.length++;
    const precedingNode = this.get(idx - 1);
    const followingNode = precedingNode.next;
    newNode.next = followingNode;
    precedingNode.next = newNode;
    return true;
  }
  // remove node at an index
  // time complexity: O(N) - because we could be using this.pop
  remove(idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length - 1) return !!this.pop();
    if (idx === 0) return !!this.shift();

    this.length--;
    const precedingNode = this.get(idx - 1);
    const removedNode = precedingNode.next;
    const followingNode = removedNode.next;
    precedingNode.next = followingNode;
    removedNode.next = null;
    return removedNode;
  }
  // print whole list - for dev purposes
  print() {
    let curNode = this.head;
    while (curNode) {
      console.log(curNode);
      curNode = curNode.next;
    }
  }

  reverse() {
    // create a var called node and init it to the head
    // swap head and tail
    let curNode = this.head;
    this.head = this.tail;
    this.tail = curNode;

    // create a var called next
    let next = null;
    // create a var called prev
    let prev = null;

    // loop through list
    while (curNode) {
      // set next to be the next property on node
      next = curNode.next;
      // set the next prop on the node to be whatever prev is
      curNode.next = prev;
      // set prev to be the val of the node var
      prev = curNode;
      // set the node to the value of next var
      curNode = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('is this working?');
list.push('I think it is');
list.push('I really think so');
list.push('come on please work');
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.unshift("This is definitely working");
// list.set(1, 'Emma-wa tensai-desu!');
// list.get(1);
// list.insert(3, 'sou desu yo!');
// list.insert(0, 'this is all my Japanese');
// list.print();
// list.remove(2)
// list.print();
list.reverse();
list.print();
