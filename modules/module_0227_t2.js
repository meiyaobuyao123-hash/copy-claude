// Module: t2
// Params: Zq

var cI9 =
  (Zq && Zq.__extends) ||
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
Object.defineProperty(Zq, '__esModule', { value: !0 });
Zq.OperatorSubscriber = Zq.createOperatorSubscriber = void 0;
var lI9 = Ok();
function iI9(A, B, Q, I, G) {
  return new eZA(A, B, Q, I, G);
}
Zq.createOperatorSubscriber = iI9;
var eZA = (function (A) {
  cI9(B, A);
  function B(Q, I, G, D, Z, Y) {
    var W = A.call(this, Q) || this;
    return (
      (W.onFinalize = Z),
      (W.shouldUnsubscribe = Y),
      (W._next = I
        ? function (F) {
            try {
              I(F);
            } catch (J) {
              Q.error(J);
            }
          }
        : A.prototype._next),
      (W._error = D
        ? function (F) {
            try {
              D(F);
            } catch (J) {
              Q.error(J);
            } finally {
              this.unsubscribe();
            }
          }
        : A.prototype._error),
      (W._complete = G
        ? function () {
            try {
              G();
            } catch (F) {
              Q.error(F);
            } finally {
              this.unsubscribe();
            }
          }
        : A.prototype._complete),
      W
    );
  }
  return (
    (B.prototype.unsubscribe = function () {
      var Q;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var I = this.closed;
        (A.prototype.unsubscribe.call(this),
          !I && ((Q = this.onFinalize) === null || Q === void 0 || Q.call(this)));
      }
    }),
    B
  );
})(lI9.Subscriber);
Zq.OperatorSubscriber = eZA;
