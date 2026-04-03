// Module: qN1
// Params: Pk

var CG9 =
  (Pk && Pk.__extends) ||
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
Object.defineProperty(Pk, '__esModule', { value: !0 });
Pk.BehaviorSubject = void 0;
var XG9 = iI(),
  VG9 = (function (A) {
    CG9(B, A);
    function B(Q) {
      var I = A.call(this) || this;
      return ((I._value = Q), I);
    }
    return (
      Object.defineProperty(B.prototype, 'value', {
        get: function () {
          return this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      }),
      (B.prototype._subscribe = function (Q) {
        var I = A.prototype._subscribe.call(this, Q);
        return (!I.closed && Q.next(this._value), I);
      }),
      (B.prototype.getValue = function () {
        var Q = this,
          I = Q.hasError,
          G = Q.thrownError,
          D = Q._value;
        if (I) throw G;
        return (this._throwIfClosed(), D);
      }),
      (B.prototype.next = function (Q) {
        A.prototype.next.call(this, (this._value = Q));
      }),
      B
    );
  })(XG9.Subject);
Pk.BehaviorSubject = VG9;
