class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// best used where insertion and removal are the most common actions. Search is O(N) but adding/removing is O(1)
class Stack {
  constructor() {
    this.size = 0;
    this.top = null;
    this.bottom = null;
  }
  // O(1)
  pop() {
    if (!this.bottom) return null;
    const popped = this.top;
    if (this.size === 1) {
      this.bottom = null;
      this.top = null;
    } else {
      // take off the top
      this.top = this.top.next;
      popped.next = null;
    }
    this.size--;
    return popped.val;
  }
  // O(1)
  push(val) {
    const newNode = new Node(val);
    if (!this.bottom) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;
  }

  print() {
    let curNode = this.top;
    while (curNode) {
      console.log(curNode);
      curNode = curNode.next;
    }
  }
}

const stack = new Stack();
stack.push('elen');
stack.push('sila');
stack.push('lumenn');
stack.push('omentielvo');
// stack.pop();
// stack.pop();
stack.print();
console.log(stack);
