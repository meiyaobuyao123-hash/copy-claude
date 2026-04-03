// Module: fn1
// Params: dG2

Object.defineProperty(dG2, '__esModule', { value: !0 });
dG2.FilterStackFactory = dG2.FilterStack = void 0;
class kn1 {
  constructor(A) {
    this.filters = A;
  }
  sendMetadata(A) {
    let B = A;
    for (let Q = 0; Q < this.filters.length; Q++) B = this.filters[Q].sendMetadata(B);
    return B;
  }
  receiveMetadata(A) {
    let B = A;
    for (let Q = this.filters.length - 1; Q >= 0; Q--) B = this.filters[Q].receiveMetadata(B);
    return B;
  }
  sendMessage(A) {
    let B = A;
    for (let Q = 0; Q < this.filters.length; Q++) B = this.filters[Q].sendMessage(B);
    return B;
  }
  receiveMessage(A) {
    let B = A;
    for (let Q = this.filters.length - 1; Q >= 0; Q--) B = this.filters[Q].receiveMessage(B);
    return B;
  }
  receiveTrailers(A) {
    let B = A;
    for (let Q = this.filters.length - 1; Q >= 0; Q--) B = this.filters[Q].receiveTrailers(B);
    return B;
  }
  push(A) {
    this.filters.unshift(...A);
  }
  getFilters() {
    return this.filters;
  }
}
dG2.FilterStack = kn1;
class xn1 {
  constructor(A) {
    this.factories = A;
  }
  push(A) {
    this.factories.unshift(...A);
  }
  clone() {
    return new xn1([...this.factories]);
  }
  createFilter() {
    return new kn1(this.factories.map((A) => A.createFilter()));
  }
}
dG2.FilterStackFactory = xn1;
