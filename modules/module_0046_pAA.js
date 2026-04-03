// Module: pAA
// Params: uAA

Object.defineProperty(uAA, '__esModule', { value: !0 });
class dAA {
  constructor(A) {
    ((this._maxSize = A), (this._cache = new Map()));
  }
  get size() {
    return this._cache.size;
  }
  get(A) {
    let B = this._cache.get(A);
    if (B === void 0) return;
    return (this._cache.delete(A), this._cache.set(A, B), B);
  }
  set(A, B) {
    if (this._cache.size >= this._maxSize) this._cache.delete(this._cache.keys().next().value);
    this._cache.set(A, B);
  }
  remove(A) {
    let B = this._cache.get(A);
    if (B) this._cache.delete(A);
    return B;
  }
  clear() {
    this._cache.clear();
  }
  keys() {
    return Array.from(this._cache.keys());
  }
  values() {
    let A = [];
    return (this._cache.forEach((B) => A.push(B)), A);
  }
}
uAA.LRUMap = dAA;
