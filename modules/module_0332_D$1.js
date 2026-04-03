// Module: D$1
// Params: ok

var TJ9 =
  (ok && ok.__values) ||
  function (A) {
    var B = typeof Symbol === 'function' && Symbol.iterator,
      Q = B && A[B],
      I = 0;
    if (Q) return Q.call(A);
    if (A && typeof A.length === 'number')
      return {
        next: function () {
          if (A && I >= A.length) A = void 0;
          return { value: A && A[I++], done: !A };
        },
      };
    throw new TypeError(B ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  };
Object.defineProperty(ok, '__esModule', { value: !0 });
ok.bufferToggle = void 0;
var PJ9 = _W(),
  SJ9 = w2(),
  _CA = j4(),
  G$1 = t2(),
  jCA = cI(),
  _J9 = gE();
function jJ9(A, B) {
  return SJ9.operate(function (Q, I) {
    var G = [];
    (_CA.innerFrom(A).subscribe(
      G$1.createOperatorSubscriber(
        I,
        function (D) {
          var Z = [];
          G.push(Z);
          var Y = new PJ9.Subscription(),
            W = function () {
              (_J9.arrRemove(G, Z), I.next(Z), Y.unsubscribe());
            };
          Y.add(_CA.innerFrom(B(D)).subscribe(G$1.createOperatorSubscriber(I, W, jCA.noop)));
        },
        jCA.noop
      )
    ),
      Q.subscribe(
        G$1.createOperatorSubscriber(
          I,
          function (D) {
            var Z, Y;
            try {
              for (var W = TJ9(G), F = W.next(); !F.done; F = W.next()) {
                var J = F.value;
                J.push(D);
              }
            } catch (C) {
              Z = { error: C };
            } finally {
              try {
                if (F && !F.done && (Y = W.return)) Y.call(W);
              } finally {
                if (Z) throw Z.error;
              }
            }
          },
          function () {
            while (G.length > 0) I.next(G.shift());
            I.complete();
          }
        )
      ));
  });
}
ok.bufferToggle = jJ9;
