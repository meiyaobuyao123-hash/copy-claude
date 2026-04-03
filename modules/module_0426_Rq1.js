// Module: Rq1
// Params: Gx

var Bw9 =
  (Gx && Gx.__values) ||
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
Object.defineProperty(Gx, '__esModule', { value: !0 });
Gx.windowToggle = void 0;
var Qw9 = iI(),
  Iw9 = _W(),
  Gw9 = w2(),
  UHA = j4(),
  Lq1 = t2(),
  NHA = cI(),
  Dw9 = gE();
function Zw9(A, B) {
  return Gw9.operate(function (Q, I) {
    var G = [],
      D = function (Z) {
        while (0 < G.length) G.shift().error(Z);
        I.error(Z);
      };
    (UHA.innerFrom(A).subscribe(
      Lq1.createOperatorSubscriber(
        I,
        function (Z) {
          var Y = new Qw9.Subject();
          G.push(Y);
          var W = new Iw9.Subscription(),
            F = function () {
              (Dw9.arrRemove(G, Y), Y.complete(), W.unsubscribe());
            },
            J;
          try {
            J = UHA.innerFrom(B(Z));
          } catch (C) {
            D(C);
            return;
          }
          (I.next(Y.asObservable()),
            W.add(J.subscribe(Lq1.createOperatorSubscriber(I, F, NHA.noop, D))));
        },
        NHA.noop
      )
    ),
      Q.subscribe(
        Lq1.createOperatorSubscriber(
          I,
          function (Z) {
            var Y,
              W,
              F = G.slice();
            try {
              for (var J = Bw9(F), C = J.next(); !C.done; C = J.next()) {
                var X = C.value;
                X.next(Z);
              }
            } catch (V) {
              Y = { error: V };
            } finally {
              try {
                if (C && !C.done && (W = J.return)) W.call(J);
              } finally {
                if (Y) throw Y.error;
              }
            }
          },
          function () {
            while (0 < G.length) G.shift().complete();
            I.complete();
          },
          D,
          function () {
            while (0 < G.length) G.shift().unsubscribe();
          }
        )
      ));
  });
}
Gx.windowToggle = Zw9;
