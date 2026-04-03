// Module: i50
// Params: ns5,l50

var p50 = Symbol('kDone'),
  Ey1 = Symbol('kRun');
class c50 {
  constructor(A) {
    ((this[p50] = () => {
      (this.pending--, this[Ey1]());
    }),
      (this.concurrency = A || 1 / 0),
      (this.jobs = []),
      (this.pending = 0));
  }
  add(A) {
    (this.jobs.push(A), this[Ey1]());
  }
  [Ey1]() {
    if (this.pending === this.concurrency) return;
    if (this.jobs.length) {
      let A = this.jobs.shift();
      (this.pending++, A(this[p50]));
    }
  }
}
l50.exports = c50;
