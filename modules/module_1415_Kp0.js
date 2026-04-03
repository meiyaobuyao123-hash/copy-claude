// Module: Kp0
// Params: Xp0

Object.defineProperty(Xp0, '__esModule', { value: !0 });
Xp0.BaggageImpl = void 0;
class nh {
  constructor(A) {
    this._entries = A ? new Map(A) : new Map();
  }
  getEntry(A) {
    let B = this._entries.get(A);
    if (!B) return;
    return Object.assign({}, B);
  }
  getAllEntries() {
    return Array.from(this._entries.entries()).map(([A, B]) => [A, B]);
  }
  setEntry(A, B) {
    let Q = new nh(this._entries);
    return (Q._entries.set(A, B), Q);
  }
  removeEntry(A) {
    let B = new nh(this._entries);
    return (B._entries.delete(A), B);
  }
  removeEntries(...A) {
    let B = new nh(this._entries);
    for (let Q of A) B._entries.delete(Q);
    return B;
  }
  clear() {
    return new nh();
  }
}
Xp0.BaggageImpl = nh;
