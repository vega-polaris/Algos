class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let sum = 0;
    const WEIRD_PRIME = 101;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      sum = WEIRD_PRIME * sum + key.charCodeAt(i);
    }
    return sum % (this.keyMap.length + 1);
  }
  // accepts key + val, hashes key, stores key + value (in an array of their own) in nested structure at appropriate spot.
  set(key, val) {
    const storeHere = this._hash(key);
    if (Array.isArray(this.keyMap[storeHere]))
      this.keyMap[storeHere].push([key, val]);
    else this.keyMap[storeHere] = [[key, val]];
  }
  // accepts key, hashes it, goes to its position, loops through the nested array in there to see if the key is there. If yes, return the value
  // if not, return undefined.
  get(key) {
    const keyHash = this._hash(key);
    const targetCell = this.keyMap[keyHash];
    if (!targetCell) return undefined;
    for (const pair of targetCell) {
      if (pair[0] === key) return pair[1];
    }
    return;
  }

  keys() {
    const allKeys = [];
    // loop through array
    this.keyMap.forEach((cell) => {
      if (Array.isArray(cell)) {
        cell.forEach((pair) => {
          allKeys.push(pair[0]);
        });
      }
    });
    // when you actually encounter an element, map that and add it to the all vals array
    return allKeys;
  }

  values() {
    const allVals = [];
    // loop through array
    this.keyMap.forEach((cell) => {
      if (Array.isArray(cell)) {
        cell.forEach((pair) => {
          allVals.push(pair[1]);
        });
      }
    });
    // when you actually encounter an element, map that and add it to the all vals array
    return allVals;
  }
}

const hash = new HashTable();
hash.set('Galadriel', 'Finarfin');
hash.set('Elrond', 'Hador');
hash.set('Beren', 'Beor');
hash.set('Theoden', 'Eorl');
hash.set('Andreth', 'Beor');
hash.set('Boromir', 'Hurin');
hash.set('Denethor', 'Hurin');
console.log(hash.keyMap);
console.log(hash.get('Andreth'));
console.log(hash.get('Boromir'));
console.log(hash.values());
console.log(hash.keys());
