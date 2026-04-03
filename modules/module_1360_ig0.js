// Module: ig0
// Params: Hz8,lg0

var yF6 = rW1(),
  kF6 = Cu1(),
  xF6 = pz();
class cg0 extends yF6 {
  constructor(A, B) {
    super(A, B);
    ((this.posTracker = xF6.install(A, kF6)), (this.lastErrOffset = -1));
  }
  _reportError(A) {
    if (this.lastErrOffset !== this.posTracker.offset)
      ((this.lastErrOffset = this.posTracker.offset), super._reportError(A));
  }
}
lg0.exports = cg0;
