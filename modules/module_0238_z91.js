// Module: z91
// Params: _k

var EG9 =
  (_k && _k.__extends) ||
  (function () {
    var A = function (B, Q) {
      return (
        (A =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (I, G) {
              I.__proto__ = G;
            }) ||
          function (I, G) {
            for (var D in G) if (Object.prototype.hasOwnProperty.call(G, D)) I[D] = G[D];
          }),
        A(B, Q)
      );
    };
    return function (B, Q) {
      if (typeof Q !== 'function' && Q !== null)
        throw new TypeError('Class extends value ' + String(Q) + ' is not a constructor or null');
      A(B, Q);
      function I() {
        this.constructor = B;
      }
      B.prototype = Q === null ? Object.create(Q) : ((I.prototype = Q.prototype), new I());
    };
  })();
Object.defineProperty(_k, '__esModule', { value: !0 });
_k.AsyncSubject = void 0;
var UG9 = iI(),
  NG9 = (function (A) {
    EG9(B, A);
    function B() {
      var Q = (A !== null && A.apply(this, arguments)) || this;
      return ((Q._value = null), (Q._hasValue = !1), (Q._isComplete = !1), Q);
    }
    return (
      (B.prototype._checkFinalizedStatuses = function (Q) {
        var I = this,
          G = I.hasError,
          D = I._hasValue,
          Z = I._value,
          Y = I.thrownError,
          W = I.isStopped,
          F = I._isComplete;
        if (G) Q.error(Y);
        else if (W || F) (D && Q.next(Z), Q.complete());
      }),
      (B.prototype.next = function (Q) {
        if (!this.isStopped) ((this._value = Q), (this._hasValue = !0));
      }),
      (B.prototype.complete = function () {
        var Q = this,
          I = Q._hasValue,
          G = Q._value,
          D = Q._isComplete;
        if (!D)
          ((this._isComplete = !0),
            I && A.prototype.next.call(this, G),
            A.prototype.complete.call(this));
      }),
      B
    );
  })(UG9.Subject);
_k.AsyncSubject = NG9;
