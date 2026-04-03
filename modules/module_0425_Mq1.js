// Module: Mq1
// Params: wHA

Object.defineProperty(wHA, '__esModule', { value: !0 });
wHA.windowTime = void 0;
var nz9 = iI(),
  az9 = QY(),
  sz9 = _W(),
  rz9 = w2(),
  oz9 = t2(),
  tz9 = gE(),
  ez9 = IY(),
  zHA = hE();
function Aw9(A) {
  var B,
    Q,
    I = [];
  for (var G = 1; G < arguments.length; G++) I[G - 1] = arguments[G];
  var D = (B = ez9.popScheduler(I)) !== null && B !== void 0 ? B : az9.asyncScheduler,
    Z = (Q = I[0]) !== null && Q !== void 0 ? Q : null,
    Y = I[1] || 1 / 0;
  return rz9.operate(function (W, F) {
    var J = [],
      C = !1,
      X = function (N) {
        var { window: q, subs: M } = N;
        (q.complete(), M.unsubscribe(), tz9.arrRemove(J, N), C && V());
      },
      V = function () {
        if (J) {
          var N = new sz9.Subscription();
          F.add(N);
          var q = new nz9.Subject(),
            M = { window: q, subs: N, seen: 0 };
          (J.push(M),
            F.next(q.asObservable()),
            zHA.executeSchedule(
              N,
              D,
              function () {
                return X(M);
              },
              A
            ));
        }
      };
    if (Z !== null && Z >= 0) zHA.executeSchedule(F, D, V, Z, !0);
    else C = !0;
    V();
    var K = function (N) {
        return J.slice().forEach(N);
      },
      U = function (N) {
        (K(function (q) {
          var M = q.window;
          return N(M);
        }),
          N(F),
          F.unsubscribe());
      };
    return (
      W.subscribe(
        oz9.createOperatorSubscriber(
          F,
          function (N) {
            K(function (q) {
              (q.window.next(N), Y <= ++q.seen && X(q));
            });
          },
          function () {
            return U(function (N) {
              return N.complete();
            });
          },
          function (N) {
            return U(function (q) {
              return q.error(N);
            });
          }
        )
      ),
      function () {
        J = null;
      }
    );
  });
}
wHA.windowTime = Aw9;
