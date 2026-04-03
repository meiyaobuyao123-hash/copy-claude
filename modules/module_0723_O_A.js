// Module: O_A
// Params: pq

var N_A =
  (pq && pq.__awaiter) ||
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
Object.defineProperty(pq, '__esModule', { value: !0 });
pq._isDomainFailure = pq.NetworkFallbackResolver = void 0;
var Dh9 = U_A(),
  Zh9 = If(),
  Yh9 = pG(),
  UR1 = tE(),
  $_A = 604800000,
  Wh9 = 14400000;
class M_A {
  constructor(A) {
    var B;
    ((this._fallbackInfo = null),
      (this._errorBoundary = null),
      (this._dnsQueryCooldowns = {}),
      (this._networkOverrideFunc =
        (B = A.networkConfig) === null || B === void 0 ? void 0 : B.networkOverrideFunc));
  }
  setErrorBoundary(A) {
    this._errorBoundary = A;
  }
  tryBumpExpiryTime(A, B) {
    var Q;
    let I = (Q = this._fallbackInfo) === null || Q === void 0 ? void 0 : Q[B.endpoint];
    if (!I) return;
    ((I.expiryTime = Date.now() + $_A),
      ER1(A, Object.assign(Object.assign({}, this._fallbackInfo), { [B.endpoint]: I })));
  }
  getActiveFallbackUrl(A, B) {
    var Q, I;
    let G = this._fallbackInfo;
    if (G == null) ((G = (Q = Fh9(A)) !== null && Q !== void 0 ? Q : {}), (this._fallbackInfo = G));
    let D = G[B.endpoint];
    if (!D || Date.now() > ((I = D.expiryTime) !== null && I !== void 0 ? I : 0))
      return (delete G[B.endpoint], (this._fallbackInfo = G), ER1(A, this._fallbackInfo), null);
    if (D.url) return D.url;
    return null;
  }
  getFallbackFromProvided(A) {
    let B = q_A(A);
    if (B) return A.replace(B, '');
    return null;
  }
  tryFetchUpdatedFallbackInfo(A, B, Q, I) {
    var G, D;
    return N_A(this, void 0, void 0, function* () {
      try {
        if (!L_A(Q, I)) return !1;
        let Y =
            B.customUrl == null && B.fallbackUrls == null
              ? yield this._tryFetchFallbackUrlsFromNetwork(B)
              : B.fallbackUrls,
          W = this._pickNewFallbackUrl(
            (G = this._fallbackInfo) === null || G === void 0 ? void 0 : G[B.endpoint],
            Y
          );
        if (!W) return !1;
        return (this._updateFallbackInfoWithNewUrl(A, B.endpoint, W), !0);
      } catch (Z) {
        return (
          (D = this._errorBoundary) === null ||
            D === void 0 ||
            D.logError('tryFetchUpdatedFallbackInfo', Z),
          !1
        );
      }
    });
  }
  _updateFallbackInfoWithNewUrl(A, B, Q) {
    var I, G, D;
    let Z = { url: Q, expiryTime: Date.now() + $_A, previous: [] },
      Y = (I = this._fallbackInfo) === null || I === void 0 ? void 0 : I[B];
    if (Y) Z.previous.push(...Y.previous);
    if (Z.previous.length > 10) Z.previous = [];
    let W =
      (D = (G = this._fallbackInfo) === null || G === void 0 ? void 0 : G[B]) === null ||
      D === void 0
        ? void 0
        : D.url;
    if (W != null) Z.previous.push(W);
    ((this._fallbackInfo = Object.assign(Object.assign({}, this._fallbackInfo), { [B]: Z })),
      ER1(A, this._fallbackInfo));
  }
  _tryFetchFallbackUrlsFromNetwork(A) {
    var B;
    return N_A(this, void 0, void 0, function* () {
      let Q = this._dnsQueryCooldowns[A.endpoint];
      if (Q && Date.now() < Q) return null;
      this._dnsQueryCooldowns[A.endpoint] = Date.now() + Wh9;
      let I = [],
        G = yield Dh9._fetchTxtRecords(
          (B = this._networkOverrideFunc) !== null && B !== void 0 ? B : fetch
        ),
        D = q_A(A.defaultUrl);
      for (let Z of G) {
        if (!Z.startsWith(A.endpointDnsKey + '=')) continue;
        let Y = Z.split('=');
        if (Y.length > 1) {
          let W = Y[1];
          if (W.endsWith('/')) W = W.slice(0, -1);
          I.push(`https://${W}${D}`);
        }
      }
      return I;
    });
  }
  _pickNewFallbackUrl(A, B) {
    var Q;
    if (B == null) return null;
    let I = new Set(
        (Q = A === null || A === void 0 ? void 0 : A.previous) !== null && Q !== void 0 ? Q : []
      ),
      G = A === null || A === void 0 ? void 0 : A.url,
      D = null;
    for (let Z of B) {
      let Y = Z.endsWith('/') ? Z.slice(0, -1) : Z;
      if (!I.has(Z) && Y !== G) {
        D = Y;
        break;
      }
    }
    return D;
  }
}
pq.NetworkFallbackResolver = M_A;
function L_A(A, B) {
  var Q;
  let I =
    (Q = A === null || A === void 0 ? void 0 : A.toLowerCase()) !== null && Q !== void 0 ? Q : '';
  return (
    B ||
    I.includes('uncaught exception') ||
    I.includes('failed to fetch') ||
    I.includes('networkerror when attempting to fetch resource')
  );
}
pq._isDomainFailure = L_A;
function R_A(A) {
  return `statsig.network_fallback.${Zh9._DJB2(A)}`;
}
function ER1(A, B) {
  let Q = R_A(A);
  if (!B || Object.keys(B).length === 0) {
    UR1.Storage.removeItem(Q);
    return;
  }
  UR1.Storage.setItem(Q, JSON.stringify(B));
}
function Fh9(A) {
  let B = R_A(A),
    Q = UR1.Storage.getItem(B);
  if (!Q) return null;
  try {
    return JSON.parse(Q);
  } catch (I) {
    return (Yh9.Log.error('Failed to parse FallbackInfo'), null);
  }
}
function q_A(A) {
  try {
    return new URL(A).pathname;
  } catch (B) {
    return null;
  }
}
