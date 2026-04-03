// Module: m91
// Params: qq

var NH9 =
    (qq && qq.__read) ||
    function (A, B) {
      var Q = typeof Symbol === 'function' && A[Symbol.iterator];
      if (!Q) return A;
      var I = Q.call(A),
        G,
        D = [],
        Z;
      try {
        while ((B === void 0 || B-- > 0) && !(G = I.next()).done) D.push(G.value);
      } catch (Y) {
        Z = { error: Y };
      } finally {
        try {
          if (G && !G.done && (Q = I.return)) Q.call(I);
        } finally {
          if (Z) throw Z.error;
        }
      }
      return D;
    },
  $H9 =
    (qq && qq.__spreadArray) ||
    function (A, B) {
      for (var Q = 0, I = B.length, G = A.length; Q < I; Q++, G++) A[G] = B[Q];
      return A;
    };
Object.defineProperty(qq, '__esModule', { value: !0 });
qq.share = void 0;
var UKA = j4(),
  qH9 = iI(),
  NKA = Ok(),
  MH9 = w2();
function LH9(A) {
  if (A === void 0) A = {};
  var B = A.connector,
    Q =
      B === void 0
        ? function () {
            return new qH9.Subject();
          }
        : B,
    I = A.resetOnError,
    G = I === void 0 ? !0 : I,
    D = A.resetOnComplete,
    Z = D === void 0 ? !0 : D,
    Y = A.resetOnRefCountZero,
    W = Y === void 0 ? !0 : Y;
  return function (F) {
    var J,
      C,
      X,
      V = 0,
      K = !1,
      U = !1,
      N = function () {
        (C === null || C === void 0 || C.unsubscribe(), (C = void 0));
      },
      q = function () {
        (N(), (J = X = void 0), (K = U = !1));
      },
      M = function () {
        var R = J;
        (q(), R === null || R === void 0 || R.unsubscribe());
      };
    return MH9.operate(function (R, T) {
      if ((V++, !U && !K)) N();
      var O = (X = X !== null && X !== void 0 ? X : Q());
      if (
        (T.add(function () {
          if ((V--, V === 0 && !U && !K)) C = Iq1(M, W);
        }),
        O.subscribe(T),
        !J && V > 0)
      )
        ((J = new NKA.SafeSubscriber({
          next: function (S) {
            return O.next(S);
          },
          error: function (S) {
            ((U = !0), N(), (C = Iq1(q, G, S)), O.error(S));
          },
          complete: function () {
            ((K = !0), N(), (C = Iq1(q, Z)), O.complete());
          },
        })),
          UKA.innerFrom(R).subscribe(J));
    })(F);
  };
}
qq.share = LH9;
function Iq1(A, B) {
  var Q = [];
  for (var I = 2; I < arguments.length; I++) Q[I - 2] = arguments[I];
  if (B === !0) {
    A();
    return;
  }
  if (B === !1) return;
  var G = new NKA.SafeSubscriber({
    next: function () {
      (G.unsubscribe(), A());
    },
  });
  return UKA.innerFrom(B.apply(void 0, $H9([], NH9(Q)))).subscribe(G);
}
