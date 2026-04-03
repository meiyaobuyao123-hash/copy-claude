// Module: H91
// Params: Sk

var KG9 =
  (Sk && Sk.__extends) ||
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
Object.defineProperty(Sk, '__esModule', { value: !0 });
Sk.ReplaySubject = void 0;
var HG9 = iI(),
  zG9 = K91(),
  wG9 = (function (A) {
    KG9(B, A);
    function B(Q, I, G) {
      if (Q === void 0) Q = 1 / 0;
      if (I === void 0) I = 1 / 0;
      if (G === void 0) G = zG9.dateTimestampProvider;
      var D = A.call(this) || this;
      return (
        (D._bufferSize = Q),
        (D._windowTime = I),
        (D._timestampProvider = G),
        (D._buffer = []),
        (D._infiniteTimeWindow = !0),
        (D._infiniteTimeWindow = I === 1 / 0),
        (D._bufferSize = Math.max(1, Q)),
        (D._windowTime = Math.max(1, I)),
        D
      );
    }
    return (
      (B.prototype.next = function (Q) {
        var I = this,
          G = I.isStopped,
          D = I._buffer,
          Z = I._infiniteTimeWindow,
          Y = I._timestampProvider,
          W = I._windowTime;
        if (!G) (D.push(Q), !Z && D.push(Y.now() + W));
        (this._trimBuffer(), A.prototype.next.call(this, Q));
      }),
      (B.prototype._subscribe = function (Q) {
        (this._throwIfClosed(), this._trimBuffer());
        var I = this._innerSubscribe(Q),
          G = this,
          D = G._infiniteTimeWindow,
          Z = G._buffer,
          Y = Z.slice();
        for (var W = 0; W < Y.length && !Q.closed; W += D ? 1 : 2) Q.next(Y[W]);
        return (this._checkFinalizedStatuses(Q), I);
      }),
      (B.prototype._trimBuffer = function () {
        var Q = this,
          I = Q._bufferSize,
          G = Q._timestampProvider,
          D = Q._buffer,
          Z = Q._infiniteTimeWindow,
          Y = (Z ? 1 : 2) * I;
        if ((I < 1 / 0 && Y < D.length && D.splice(0, D.length - Y), !Z)) {
          var W = G.now(),
            F = 0;
          for (var J = 1; J < D.length && D[J] <= W; J += 2) F = J;
          F && D.splice(0, F + 1);
        }
      }),
      B
    );
  })(HG9.Subject);
Sk.ReplaySubject = wG9;
