// Module: Wd
// Params: dc8,$V2

$V2.exports = Ij;
Ij.CAPTURING_PHASE = 1;
Ij.AT_TARGET = 2;
Ij.BUBBLING_PHASE = 3;
function Ij(A, B) {
  if (
    ((this.type = ''),
    (this.target = null),
    (this.currentTarget = null),
    (this.eventPhase = Ij.AT_TARGET),
    (this.bubbles = !1),
    (this.cancelable = !1),
    (this.isTrusted = !1),
    (this.defaultPrevented = !1),
    (this.timeStamp = Date.now()),
    (this._propagationStopped = !1),
    (this._immediatePropagationStopped = !1),
    (this._initialized = !0),
    (this._dispatching = !1),
    A)
  )
    this.type = A;
  if (B) for (var Q in B) this[Q] = B[Q];
}
Ij.prototype = Object.create(Object.prototype, {
  constructor: { value: Ij },
  stopPropagation: {
    value: function A() {
      this._propagationStopped = !0;
    },
  },
  stopImmediatePropagation: {
    value: function A() {
      ((this._propagationStopped = !0), (this._immediatePropagationStopped = !0));
    },
  },
  preventDefault: {
    value: function A() {
      if (this.cancelable) this.defaultPrevented = !0;
    },
  },
  initEvent: {
    value: function A(B, Q, I) {
      if (((this._initialized = !0), this._dispatching)) return;
      ((this._propagationStopped = !1),
        (this._immediatePropagationStopped = !1),
        (this.defaultPrevented = !1),
        (this.isTrusted = !1),
        (this.target = null),
        (this.type = B),
        (this.bubbles = Q),
        (this.cancelable = I));
    },
  },
});
