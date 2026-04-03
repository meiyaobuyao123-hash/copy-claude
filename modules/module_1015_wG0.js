// Module: wG0
// Params: e78,zG0

class HG0 {
  constructor() {
    ((this.max = 1000), (this.map = new Map()));
  }
  get(A) {
    let B = this.map.get(A);
    if (B === void 0) return;
    else return (this.map.delete(A), this.map.set(A, B), B);
  }
  delete(A) {
    return this.map.delete(A);
  }
  set(A, B) {
    if (!this.delete(A) && B !== void 0) {
      if (this.map.size >= this.max) {
        let I = this.map.keys().next().value;
        this.delete(I);
      }
      this.map.set(A, B);
    }
    return this;
  }
}
zG0.exports = HG0;
