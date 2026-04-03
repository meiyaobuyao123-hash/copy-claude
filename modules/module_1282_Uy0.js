// Module: Uy0
// Params: _V8,Ey0

var { kFree: BQ6, kConnected: QQ6, kPending: IQ6, kQueued: GQ6, kRunning: DQ6, kSize: ZQ6 } = uB(),
  xS = Symbol('pool');
class wy0 {
  constructor(A) {
    this[xS] = A;
  }
  get connected() {
    return this[xS][QQ6];
  }
  get free() {
    return this[xS][BQ6];
  }
  get pending() {
    return this[xS][IQ6];
  }
  get queued() {
    return this[xS][GQ6];
  }
  get running() {
    return this[xS][DQ6];
  }
  get size() {
    return this[xS][ZQ6];
  }
}
Ey0.exports = wy0;
