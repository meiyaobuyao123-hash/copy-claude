// Module: Qq1
// Params: wKA

Object.defineProperty(wKA, '__esModule', { value: !0 });
wKA.sequenceEqual = void 0;
var zH9 = w2(),
  wH9 = t2(),
  EH9 = j4();
function UH9(A, B) {
  if (B === void 0)
    B = function (Q, I) {
      return Q === I;
    };
  return zH9.operate(function (Q, I) {
    var G = zKA(),
      D = zKA(),
      Z = function (W) {
        (I.next(W), I.complete());
      },
      Y = function (W, F) {
        var J = wH9.createOperatorSubscriber(
          I,
          function (C) {
            var { buffer: X, complete: V } = F;
            if (X.length === 0) V ? Z(!1) : W.buffer.push(C);
            else !B(C, X.shift()) && Z(!1);
          },
          function () {
            W.complete = !0;
            var { complete: C, buffer: X } = F;
            (C && Z(X.length === 0), J === null || J === void 0 || J.unsubscribe());
          }
        );
        return J;
      };
    (Q.subscribe(Y(G, D)), EH9.innerFrom(A).subscribe(Y(D, G)));
  });
}
wKA.sequenceEqual = UH9;
function zKA() {
  return { buffer: [], complete: !1 };
}
