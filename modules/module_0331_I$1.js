// Module: I$1
// Params: rk

var UJ9 =
  (rk && rk.__values) ||
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
Object.defineProperty(rk, '__esModule', { value: !0 });
rk.bufferTime = void 0;
var NJ9 = _W(),
  $J9 = w2(),
  qJ9 = t2(),
  MJ9 = gE(),
  LJ9 = QY(),
  RJ9 = IY(),
  SCA = hE();
function OJ9(A) {
  var B,
    Q,
    I = [];
  for (var G = 1; G < arguments.length; G++) I[G - 1] = arguments[G];
  var D = (B = RJ9.popScheduler(I)) !== null && B !== void 0 ? B : LJ9.asyncScheduler,
    Z = (Q = I[0]) !== null && Q !== void 0 ? Q : null,
    Y = I[1] || 1 / 0;
  return $J9.operate(function (W, F) {
    var J = [],
      C = !1,
      X = function (U) {
        var { buffer: N, subs: q } = U;
        (q.unsubscribe(), MJ9.arrRemove(J, U), F.next(N), C && V());
      },
      V = function () {
        if (J) {
          var U = new NJ9.Subscription();
          F.add(U);
          var N = [],
            q = { buffer: N, subs: U };
          (J.push(q),
            SCA.executeSchedule(
              U,
              D,
              function () {
                return X(q);
              },
              A
            ));
        }
      };
    if (Z !== null && Z >= 0) SCA.executeSchedule(F, D, V, Z, !0);
    else C = !0;
    V();
    var K = qJ9.createOperatorSubscriber(
      F,
      function (U) {
        var N,
          q,
          M = J.slice();
        try {
          for (var R = UJ9(M), T = R.next(); !T.done; T = R.next()) {
            var O = T.value,
              S = O.buffer;
            (S.push(U), Y <= S.length && X(O));
          }
        } catch (f) {
          N = { error: f };
        } finally {
          try {
            if (T && !T.done && (q = R.return)) q.call(R);
          } finally {
            if (N) throw N.error;
          }
        }
      },
      function () {
        while (J === null || J === void 0 ? void 0 : J.length) F.next(J.shift().buffer);
        (K === null || K === void 0 || K.unsubscribe(), F.complete(), F.unsubscribe());
      },
      void 0,
      function () {
        return (J = null);
      }
    );
    W.subscribe(K);
  });
}
rk.bufferTime = OJ9;
