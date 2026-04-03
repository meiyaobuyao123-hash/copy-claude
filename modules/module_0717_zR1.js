// Module: zR1
// Params: eE

var ug9 =
  (eE && eE.__awaiter) ||
  function (A, B, Q, I) {
    function G(D) {
      return D instanceof Q
        ? D
        : new Q(function (Z) {
            Z(D);
          });
    }
    return new (Q || (Q = Promise))(function (D, Z) {
      function Y(J) {
        try {
          F(I.next(J));
        } catch (C) {
          Z(C);
        }
      }
      function W(J) {
        try {
          F(I.throw(J));
        } catch (C) {
          Z(C);
        }
      }
      function F(J) {
        J.done ? D(J.value) : G(J.value).then(Y, W);
      }
      F((I = I.apply(A, B || [])).next());
    });
  };
Object.defineProperty(eE, '__esModule', { value: !0 });
eE.ErrorBoundary = eE.EXCEPTION_ENDPOINT = void 0;
var pg9 = pG(),
  cg9 = _61(),
  lg9 = Dl();
eE.EXCEPTION_ENDPOINT = 'https://statsigapi.net/v1/sdk_exception';
var F_A = '[Statsig] UnknownError';
class J_A {
  constructor(A, B, Q, I) {
    ((this._sdkKey = A),
      (this._options = B),
      (this._emitter = Q),
      (this._lastSeenError = I),
      (this._seen = new Set()));
  }
  wrap(A) {
    try {
      let B = A;
      ng9(B).forEach((Q) => {
        let I = B[Q];
        if ('$EB' in I) return;
        ((B[Q] = (...G) => {
          return this._capture(Q, () => I.apply(A, G));
        }),
          (B[Q].$EB = !0));
      });
    } catch (B) {
      this._onError('eb:wrap', B);
    }
  }
  logError(A, B) {
    this._onError(A, B);
  }
  getLastSeenErrorAndReset() {
    let A = this._lastSeenError;
    return ((this._lastSeenError = void 0), A !== null && A !== void 0 ? A : null);
  }
  attachErrorIfNoneExists(A) {
    if (this._lastSeenError) return;
    this._lastSeenError = W_A(A);
  }
  _capture(A, B) {
    try {
      let Q = B();
      if (Q && Q instanceof Promise) return Q.catch((I) => this._onError(A, I));
      return Q;
    } catch (Q) {
      return (this._onError(A, Q), null);
    }
  }
  _onError(A, B) {
    try {
      (pg9.Log.warn(`Caught error in ${A}`, { error: B }),
        (() =>
          ug9(this, void 0, void 0, function* () {
            var I, G, D, Z, Y, W, F;
            let J = B ? B : Error(F_A),
              C = J instanceof Error,
              X = C ? J.name : 'No Name',
              V = W_A(J);
            if (((this._lastSeenError = V), this._seen.has(X))) return;
            if (
              (this._seen.add(X),
              (G = (I = this._options) === null || I === void 0 ? void 0 : I.networkConfig) ===
                null || G === void 0
                ? void 0
                : G.preventAllNetworkTraffic)
            ) {
              (D = this._emitter) === null ||
                D === void 0 ||
                D.call(this, { name: 'error', error: B, tag: A });
              return;
            }
            let K = cg9.SDKType._get(this._sdkKey),
              U = lg9.StatsigMetadataProvider.get(),
              N = C ? J.stack : ig9(J),
              q = JSON.stringify(
                Object.assign(
                  { tag: A, exception: X, info: N },
                  Object.assign(Object.assign({}, U), { sdkType: K })
                )
              );
            (yield (
              (W =
                (Y = (Z = this._options) === null || Z === void 0 ? void 0 : Z.networkConfig) ===
                  null || Y === void 0
                  ? void 0
                  : Y.networkOverrideFunc) !== null && W !== void 0
                ? W
                : fetch
            )(eE.EXCEPTION_ENDPOINT, {
              method: 'POST',
              headers: {
                'STATSIG-API-KEY': this._sdkKey,
                'STATSIG-SDK-TYPE': String(K),
                'STATSIG-SDK-VERSION': String(U.sdkVersion),
                'Content-Type': 'application/json',
              },
              body: q,
            }),
              (F = this._emitter) === null ||
                F === void 0 ||
                F.call(this, { name: 'error', error: B, tag: A }));
          }))()
          .then(() => {})
          .catch(() => {}));
    } catch (Q) {}
  }
}
eE.ErrorBoundary = J_A;
function W_A(A) {
  if (A instanceof Error) return A;
  else if (typeof A === 'string') return new Error(A);
  else return new Error('An unknown error occurred.');
}
function ig9(A) {
  try {
    return JSON.stringify(A);
  } catch (B) {
    return F_A;
  }
}
function ng9(A) {
  let B = new Set(),
    Q = Object.getPrototypeOf(A);
  while (Q && Q !== Object.prototype)
    (Object.getOwnPropertyNames(Q)
      .filter((I) => typeof (Q === null || Q === void 0 ? void 0 : Q[I]) === 'function')
      .forEach((I) => B.add(I)),
      (Q = Object.getPrototypeOf(Q)));
  return Array.from(B);
}
