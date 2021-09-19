class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // O(log n)
  insert(val) {
    // add to end
    this.values.push(val);
    let newValIdx = this.values.length - 1;
    // find its parent & compare
    let parentIdx = this.findParentIdx(newValIdx);
    // if it's smaller than parent, it's in the right place.
    while (this.values[newValIdx] > this.values[parentIdx]) {
      // if it's greater than parent, swap them and compare again.
      newValIdx = this.swapValues(newValIdx, parentIdx);
      parentIdx = this.findParentIdx(newValIdx);
    }
    console.log(this.values);
  }

  // remove largest element
  // O(log n)
  extractMax() {
    if (!this.values.length) return false;
    // gets the root out and replaces it with whatever is the last element
    const max = this.values[0];
    if (!this.values.length) return max;
    this.values[0] = this.values.pop();
    // calls sinkDown to move the new (bad) root to its new place
    this.sinkDown();
    return max;
  }

  // iterative option
  // sinkDown() {
  //   // check if the first element is smaller than both its children
  //   let sinkingValIdx = 0;
  //   let sinkingVal = this.values[sinkingValIdx];
  //   let leftChildIdx = this.findLeftChild(0);
  //   let rightChildIdx = this.findRightChild(0);
  //   // if one of the children is larger, swap with that child
  //   // keep looping until no child is larger
  //   while (sinkingVal < this.values[leftChildIdx] || sinkingVal < this.values[rightChildIdx]) {
  //     let swapToIdx = this.values[leftChildIdx] > this.values[rightChildIdx] || !rightChildIdx ? leftChildIdx : rightChildIdx;
  //     sinkingValIdx = this.swapValues(sinkingValIdx, swapToIdx);
  //     leftChildIdx = this.findLeftChild(sinkingValIdx);
  //     rightChildIdx = this.findRightChild(sinkingValIdx);
  //   }
  // }

  sinkDown(sinkingValIdx = 0) {
    let sinkingVal = this.values[sinkingValIdx];
    let leftChildIdx = this.findLeftChild(sinkingValIdx);
    let rightChildIdx = this.findRightChild(sinkingValIdx);
    if (
      sinkingVal < this.values[leftChildIdx] ||
      sinkingVal < this.values[rightChildIdx]
    ) {
      let swapToIdx =
        this.values[leftChildIdx] > this.values[rightChildIdx] || !rightChildIdx
          ? leftChildIdx
          : rightChildIdx;
      sinkingValIdx = this.swapValues(sinkingValIdx, swapToIdx);
      this.sinkDown(sinkingValIdx);
    }
  }

  findParentIdx(idx) {
    const parentIdx = Math.floor((idx - 1) / 2);
    return parentIdx;
  }

  findLeftChild(idx) {
    let leftChildIdx =
      2 * idx + 1 < this.values.length ? 2 * idx + 1 : undefined;
    return leftChildIdx;
  }

  findRightChild(idx) {
    let rightChildIdx =
      2 * idx + 2 < this.values.length ? 2 * idx + 2 : undefined;
    return rightChildIdx;
  }

  swapValues(swapFromThisIdx, swapToThisIdx) {
    let temp = this.values[swapFromThisIdx];
    // put parent instead of newvalidx
    this.values[swapFromThisIdx] = this.values[swapToThisIdx];
    this.values[swapToThisIdx] = temp;
    return swapToThisIdx;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(24);
heap.insert(3);
heap.insert(5);
heap.insert(82);
heap.insert(42);
heap.insert(45);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
