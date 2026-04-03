// Module: os
// Params: sV8,$x0

var { MockNotMatchedError: gS } = Jd1(),
  {
    kDispatches: AW1,
    kMockAgent: YI6,
    kOriginalDispatch: WI6,
    kOrigin: FI6,
    kGetNetConnect: JI6,
  } = Zh(),
  { buildURL: CI6 } = I6(),
  { STATUS_CODES: XI6 } = D1('node:http'),
  {
    types: { isPromise: VI6 },
  } = D1('node:util');
function IN(A, B) {
  if (typeof A === 'string') return A === B;
  if (A instanceof RegExp) return A.test(B);
  if (typeof A === 'function') return A(B) === !0;
  return !1;
}
function Xx0(A) {
  return Object.fromEntries(
    Object.entries(A).map(([B, Q]) => {
      return [B.toLocaleLowerCase(), Q];
    })
  );
}
function Vx0(A, B) {
  if (Array.isArray(A)) {
    for (let Q = 0; Q < A.length; Q += 2)
      if (A[Q].toLocaleLowerCase() === B.toLocaleLowerCase()) return A[Q + 1];
    return;
  } else if (typeof A.get === 'function') return A.get(B);
  else return Xx0(A)[B.toLocaleLowerCase()];
}
function Vd1(A) {
  let B = A.slice(),
    Q = [];
  for (let I = 0; I < B.length; I += 2) Q.push([B[I], B[I + 1]]);
  return Object.fromEntries(Q);
}
function Kx0(A, B) {
  if (typeof A.headers === 'function') {
    if (Array.isArray(B)) B = Vd1(B);
    return A.headers(B ? Xx0(B) : {});
  }
  if (typeof A.headers === 'undefined') return !0;
  if (typeof B !== 'object' || typeof A.headers !== 'object') return !1;
  for (let [Q, I] of Object.entries(A.headers)) {
    let G = Vx0(B, Q);
    if (!IN(I, G)) return !1;
  }
  return !0;
}
function Cx0(A) {
  if (typeof A !== 'string') return A;
  let B = A.split('?');
  if (B.length !== 2) return A;
  let Q = new URLSearchParams(B.pop());
  return (Q.sort(), [...B, Q.toString()].join('?'));
}
function KI6(A, { path: B, method: Q, body: I, headers: G }) {
  let D = IN(A.path, B),
    Z = IN(A.method, Q),
    Y = typeof A.body !== 'undefined' ? IN(A.body, I) : !0,
    W = Kx0(A, G);
  return D && Z && Y && W;
}
function Hx0(A) {
  if (Buffer.isBuffer(A)) return A;
  else if (A instanceof Uint8Array) return A;
  else if (A instanceof ArrayBuffer) return A;
  else if (typeof A === 'object') return JSON.stringify(A);
  else return A.toString();
}
function zx0(A, B) {
  let Q = B.query ? CI6(B.path, B.query) : B.path,
    I = typeof Q === 'string' ? Cx0(Q) : Q,
    G = A.filter(({ consumed: D }) => !D).filter(({ path: D }) => IN(Cx0(D), I));
  if (G.length === 0) throw new gS(`Mock dispatch not matched for path '${I}'`);
  if (((G = G.filter(({ method: D }) => IN(D, B.method))), G.length === 0))
    throw new gS(`Mock dispatch not matched for method '${B.method}' on path '${I}'`);
  if (
    ((G = G.filter(({ body: D }) => (typeof D !== 'undefined' ? IN(D, B.body) : !0))),
    G.length === 0)
  )
    throw new gS(`Mock dispatch not matched for body '${B.body}' on path '${I}'`);
  if (((G = G.filter((D) => Kx0(D, B.headers))), G.length === 0)) {
    let D = typeof B.headers === 'object' ? JSON.stringify(B.headers) : B.headers;
    throw new gS(`Mock dispatch not matched for headers '${D}' on path '${I}'`);
  }
  return G[0];
}
function HI6(A, B, Q) {
  let I = { timesInvoked: 0, times: 1, persist: !1, consumed: !1 },
    G = typeof Q === 'function' ? { callback: Q } : { ...Q },
    D = { ...I, ...B, pending: !0, data: { error: null, ...G } };
  return (A.push(D), D);
}
function Cd1(A, B) {
  let Q = A.findIndex((I) => {
    if (!I.consumed) return !1;
    return KI6(I, B);
  });
  if (Q !== -1) A.splice(Q, 1);
}
function wx0(A) {
  let { path: B, method: Q, body: I, headers: G, query: D } = A;
  return { path: B, method: Q, body: I, headers: G, query: D };
}
function Xd1(A) {
  let B = Object.keys(A),
    Q = [];
  for (let I = 0; I < B.length; ++I) {
    let G = B[I],
      D = A[G],
      Z = Buffer.from(`${G}`);
    if (Array.isArray(D)) for (let Y = 0; Y < D.length; ++Y) Q.push(Z, Buffer.from(`${D[Y]}`));
    else Q.push(Z, Buffer.from(`${D}`));
  }
  return Q;
}
function Ex0(A) {
  return XI6[A] || 'unknown';
}
async function zI6(A) {
  let B = [];
  for await (let Q of A) B.push(Q);
  return Buffer.concat(B).toString('utf8');
}
function Ux0(A, B) {
  let Q = wx0(A),
    I = zx0(this[AW1], Q);
  if ((I.timesInvoked++, I.data.callback)) I.data = { ...I.data, ...I.data.callback(A) };
  let {
      data: { statusCode: G, data: D, headers: Z, trailers: Y, error: W },
      delay: F,
      persist: J,
    } = I,
    { timesInvoked: C, times: X } = I;
  if (((I.consumed = !J && C >= X), (I.pending = C < X), W !== null))
    return (Cd1(this[AW1], Q), B.onError(W), !0);
  if (typeof F === 'number' && F > 0)
    setTimeout(() => {
      V(this[AW1]);
    }, F);
  else V(this[AW1]);
  function V(U, N = D) {
    let q = Array.isArray(A.headers) ? Vd1(A.headers) : A.headers,
      M = typeof N === 'function' ? N({ ...A, headers: q }) : N;
    if (VI6(M)) {
      M.then((S) => V(U, S));
      return;
    }
    let R = Hx0(M),
      T = Xd1(Z),
      O = Xd1(Y);
    (B.onConnect?.((S) => B.onError(S), null),
      B.onHeaders?.(G, T, K, Ex0(G)),
      B.onData?.(Buffer.from(R)),
      B.onComplete?.(O),
      Cd1(U, Q));
  }
  function K() {}
  return !0;
}
function wI6() {
  let A = this[YI6],
    B = this[FI6],
    Q = this[WI6];
  return function I(G, D) {
    if (A.isMockActive)
      try {
        Ux0.call(this, G, D);
      } catch (Z) {
        if (Z instanceof gS) {
          let Y = A[JI6]();
          if (Y === !1)
            throw new gS(
              `${Z.message}: subsequent request to origin ${B} was not allowed (net.connect disabled)`
            );
          if (Nx0(Y, B)) Q.call(this, G, D);
          else
            throw new gS(
              `${Z.message}: subsequent request to origin ${B} was not allowed (net.connect is not enabled for this origin)`
            );
        } else throw Z;
      }
    else Q.call(this, G, D);
  };
}
function Nx0(A, B) {
  let Q = new URL(B);
  if (A === !0) return !0;
  else if (Array.isArray(A) && A.some((I) => IN(I, Q.host))) return !0;
  return !1;
}
function EI6(A) {
  if (A) {
    let { agent: B, ...Q } = A;
    return Q;
  }
}
$x0.exports = {
  getResponseData: Hx0,
  getMockDispatch: zx0,
  addMockDispatch: HI6,
  deleteMockDispatch: Cd1,
  buildKey: wx0,
  generateKeyValues: Xd1,
  matchValue: IN,
  getResponse: zI6,
  getStatusText: Ex0,
  mockDispatch: Ux0,
  buildMockDispatch: wI6,
  checkNetConnect: Nx0,
  buildMockOptions: EI6,
  getHeaderByName: Vx0,
  buildHeadersFromArray: Vd1,
};
