// Module: kf0
// Params: FK8,yf0

var { kConnected: Pf0, kSize: Sf0 } = uB();
class _f0 {
  constructor(A) {
    this.value = A;
  }
  deref() {
    return this.value[Pf0] === 0 && this.value[Sf0] === 0 ? void 0 : this.value;
  }
}
class jf0 {
  constructor(A) {
    this.finalizer = A;
  }
  register(A, B) {
    if (A.on)
      A.on('disconnect', () => {
        if (A[Pf0] === 0 && A[Sf0] === 0) this.finalizer(B);
      });
  }
  unregister(A) {}
}
yf0.exports = function () {
  if (process.env.NODE_V8_COVERAGE && process.version.startsWith('v18'))
    return (
      process._rawDebug('Using compatibility WeakRef and FinalizationRegistry'),
      { WeakRef: _f0, FinalizationRegistry: jf0 }
    );
  return { WeakRef, FinalizationRegistry };
};
