// Module: RJA
// Params: nk

var gW9 =
  (nk && nk.__read) ||
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
  };
Object.defineProperty(nk, '__esModule', { value: !0 });
nk.fromEvent = void 0;
var hW9 = j4(),
  mW9 = G8(),
  dW9 = RH(),
  uW9 = E91(),
  OT = l5(),
  pW9 = Jq(),
  cW9 = ['addListener', 'removeListener'],
  lW9 = ['addEventListener', 'removeEventListener'],
  iW9 = ['on', 'off'];
function nN1(A, B, Q, I) {
  if (OT.isFunction(Q)) ((I = Q), (Q = void 0));
  if (I) return nN1(A, B, Q).pipe(pW9.mapOneOrManyArgs(I));
  var G = gW9(
      sW9(A)
        ? lW9.map(function (Y) {
            return function (W) {
              return A[Y](B, W, Q);
            };
          })
        : nW9(A)
          ? cW9.map(LJA(A, B))
          : aW9(A)
            ? iW9.map(LJA(A, B))
            : [],
      2
    ),
    D = G[0],
    Z = G[1];
  if (!D) {
    if (uW9.isArrayLike(A))
      return dW9.mergeMap(function (Y) {
        return nN1(Y, B, Q);
      })(hW9.innerFrom(A));
  }
  if (!D) throw new TypeError('Invalid event target');
  return new mW9.Observable(function (Y) {
    var W = function () {
      var F = [];
      for (var J = 0; J < arguments.length; J++) F[J] = arguments[J];
      return Y.next(1 < F.length ? F : F[0]);
    };
    return (
      D(W),
      function () {
        return Z(W);
      }
    );
  });
}
nk.fromEvent = nN1;
function LJA(A, B) {
  return function (Q) {
    return function (I) {
      return A[Q](B, I);
    };
  };
}
function nW9(A) {
  return OT.isFunction(A.addListener) && OT.isFunction(A.removeListener);
}
function aW9(A) {
  return OT.isFunction(A.on) && OT.isFunction(A.off);
}
function sW9(A) {
  return OT.isFunction(A.addEventListener) && OT.isFunction(A.removeEventListener);
}
