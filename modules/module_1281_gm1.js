// Module: gm1
// Params: SV8,zy0

class bm1 {
  constructor() {
    ((this.bottom = 0), (this.top = 0), (this.list = new Array(2048)), (this.next = null));
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return ((this.top + 1) & 2047) === this.bottom;
  }
  push(A) {
    ((this.list[this.top] = A), (this.top = (this.top + 1) & 2047));
  }
  shift() {
    let A = this.list[this.bottom];
    if (A === void 0) return null;
    return ((this.list[this.bottom] = void 0), (this.bottom = (this.bottom + 1) & 2047), A);
  }
}
zy0.exports = class A {
  constructor() {
    this.head = this.tail = new bm1();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(B) {
    if (this.head.isFull()) this.head = this.head.next = new bm1();
    this.head.push(B);
  }
  shift() {
    let B = this.tail,
      Q = B.shift();
    if (B.isEmpty() && B.next !== null) this.tail = B.next;
    return Q;
  }
};
