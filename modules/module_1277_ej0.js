// Module: ej0
// Params: RV8,tj0

var IC = D1('node:assert'),
  { pipeline: sB6 } = D1('node:stream'),
  M6 = I6(),
  {
    RequestContentLengthMismatchError: Pm1,
    RequestAbortedError: ij0,
    SocketError: js,
    InformationalError: Sm1,
  } = y5(),
  {
    kUrl: hY1,
    kReset: dY1,
    kClient: sg,
    kRunning: uY1,
    kPending: rB6,
    kQueue: SL,
    kPendingIdx: _m1,
    kRunningIdx: OV,
    kError: PV,
    kSocket: WI,
    kStrictContentLength: oB6,
    kOnError: jm1,
    kMaxConcurrentStreams: oj0,
    kHTTP2Session: TV,
    kResume: _L,
    kSize: tB6,
    kHTTPContext: eB6,
  } = uB(),
  AN = Symbol('open streams'),
  nj0,
  aj0 = !1,
  mY1;
try {
  mY1 = D1('node:http2');
} catch {
  mY1 = { constants: {} };
}
var {
  constants: {
    HTTP2_HEADER_AUTHORITY: A36,
    HTTP2_HEADER_METHOD: B36,
    HTTP2_HEADER_PATH: Q36,
    HTTP2_HEADER_SCHEME: I36,
    HTTP2_HEADER_CONTENT_LENGTH: G36,
    HTTP2_HEADER_EXPECT: D36,
    HTTP2_HEADER_STATUS: Z36,
  },
} = mY1;
function Y36(A) {
  let B = [];
  for (let [Q, I] of Object.entries(A))
    if (Array.isArray(I)) for (let G of I) B.push(Buffer.from(Q), Buffer.from(G));
    else B.push(Buffer.from(Q), Buffer.from(I));
  return B;
}
async function W36(A, B) {
  if (((A[WI] = B), !aj0))
    ((aj0 = !0),
      process.emitWarning('H2 support is experimental, expect them to change at any time.', {
        code: 'UNDICI-H2',
      }));
  let Q = mY1.connect(A[hY1], { createConnection: () => B, peerMaxConcurrentStreams: A[oj0] });
  ((Q[AN] = 0),
    (Q[sg] = A),
    (Q[WI] = B),
    M6.addListener(Q, 'error', J36),
    M6.addListener(Q, 'frameError', C36),
    M6.addListener(Q, 'end', X36),
    M6.addListener(Q, 'goaway', V36),
    M6.addListener(Q, 'close', function () {
      let { [sg]: G } = this,
        { [WI]: D } = G,
        Z = this[WI][PV] || this[PV] || new js('closed', M6.getSocketInfo(D));
      if (((G[TV] = null), G.destroyed)) {
        IC(G[rB6] === 0);
        let Y = G[SL].splice(G[OV]);
        for (let W = 0; W < Y.length; W++) {
          let F = Y[W];
          M6.errorRequest(G, F, Z);
        }
      }
    }),
    Q.unref(),
    (A[TV] = Q),
    (B[TV] = Q),
    M6.addListener(B, 'error', function (G) {
      (IC(G.code !== 'ERR_TLS_CERT_ALTNAME_INVALID'), (this[PV] = G), this[sg][jm1](G));
    }),
    M6.addListener(B, 'end', function () {
      M6.destroy(this, new js('other side closed', M6.getSocketInfo(this)));
    }),
    M6.addListener(B, 'close', function () {
      let G = this[PV] || new js('closed', M6.getSocketInfo(this));
      if (((A[WI] = null), this[TV] != null)) this[TV].destroy(G);
      ((A[_m1] = A[OV]), IC(A[uY1] === 0), A.emit('disconnect', A[hY1], [A], G), A[_L]());
    }));
  let I = !1;
  return (
    B.on('close', () => {
      I = !0;
    }),
    {
      version: 'h2',
      defaultPipelining: 1 / 0,
      write(...G) {
        return H36(A, ...G);
      },
      resume() {
        F36(A);
      },
      destroy(G, D) {
        if (I) queueMicrotask(D);
        else B.destroy(G).on('close', D);
      },
      get destroyed() {
        return B.destroyed;
      },
      busy() {
        return !1;
      },
    }
  );
}
function F36(A) {
  let B = A[WI];
  if (B?.destroyed === !1)
    if (A[tB6] === 0 && A[oj0] === 0) (B.unref(), A[TV].unref());
    else (B.ref(), A[TV].ref());
}
function J36(A) {
  (IC(A.code !== 'ERR_TLS_CERT_ALTNAME_INVALID'), (this[WI][PV] = A), this[sg][jm1](A));
}
function C36(A, B, Q) {
  if (Q === 0) {
    let I = new Sm1(`HTTP/2: "frameError" received - type ${A}, code ${B}`);
    ((this[WI][PV] = I), this[sg][jm1](I));
  }
}
function X36() {
  let A = new js('other side closed', M6.getSocketInfo(this[WI]));
  (this.destroy(A), M6.destroy(this[WI], A));
}
function V36(A) {
  let B =
      this[PV] || new js(`HTTP/2: "GOAWAY" frame received with code ${A}`, M6.getSocketInfo(this)),
    Q = this[sg];
  if (((Q[WI] = null), (Q[eB6] = null), this[TV] != null)) (this[TV].destroy(B), (this[TV] = null));
  if ((M6.destroy(this[WI], B), Q[OV] < Q[SL].length)) {
    let I = Q[SL][Q[OV]];
    ((Q[SL][Q[OV]++] = null), M6.errorRequest(Q, I, B), (Q[_m1] = Q[OV]));
  }
  (IC(Q[uY1] === 0), Q.emit('disconnect', Q[hY1], [Q], B), Q[_L]());
}
function K36(A) {
  return A !== 'GET' && A !== 'HEAD' && A !== 'OPTIONS' && A !== 'TRACE' && A !== 'CONNECT';
}
function H36(A, B) {
  let Q = A[TV],
    { method: I, path: G, host: D, upgrade: Z, expectContinue: Y, signal: W, headers: F } = B,
    { body: J } = B;
  if (Z) return (M6.errorRequest(A, B, new Error('Upgrade not supported for H2')), !1);
  let C = {};
  for (let T = 0; T < F.length; T += 2) {
    let O = F[T + 0],
      S = F[T + 1];
    if (Array.isArray(S))
      for (let f = 0; f < S.length; f++)
        if (C[O]) C[O] += `,${S[f]}`;
        else C[O] = S[f];
    else C[O] = S;
  }
  let X,
    { hostname: V, port: K } = A[hY1];
  ((C[A36] = D || `${V}${K ? `:${K}` : ''}`), (C[B36] = I));
  let U = (T) => {
    if (B.aborted || B.completed) return;
    if (((T = T || new ij0()), M6.errorRequest(A, B, T), X != null)) M6.destroy(X, T);
    (M6.destroy(J, T), (A[SL][A[OV]++] = null), A[_L]());
  };
  try {
    B.onConnect(U);
  } catch (T) {
    M6.errorRequest(A, B, T);
  }
  if (B.aborted) return !1;
  if (I === 'CONNECT') {
    if ((Q.ref(), (X = Q.request(C, { endStream: !1, signal: W })), X.id && !X.pending))
      (B.onUpgrade(null, null, X), ++Q[AN], (A[SL][A[OV]++] = null));
    else
      X.once('ready', () => {
        (B.onUpgrade(null, null, X), ++Q[AN], (A[SL][A[OV]++] = null));
      });
    return (
      X.once('close', () => {
        if (((Q[AN] -= 1), Q[AN] === 0)) Q.unref();
      }),
      !0
    );
  }
  ((C[Q36] = G), (C[I36] = 'https'));
  let N = I === 'PUT' || I === 'POST' || I === 'PATCH';
  if (J && typeof J.read === 'function') J.read(0);
  let q = M6.bodyLength(J);
  if (M6.isFormDataLike(J)) {
    nj0 ??= lg().extractBody;
    let [T, O] = nj0(J);
    ((C['content-type'] = O), (J = T.stream), (q = T.length));
  }
  if (q == null) q = B.contentLength;
  if (q === 0 || !N) q = null;
  if (K36(I) && q > 0 && B.contentLength != null && B.contentLength !== q) {
    if (A[oB6]) return (M6.errorRequest(A, B, new Pm1()), !1);
    process.emitWarning(new Pm1());
  }
  if (q != null) (IC(J, 'no body must not have content length'), (C[G36] = `${q}`));
  Q.ref();
  let M = I === 'GET' || I === 'HEAD' || J === null;
  if (Y)
    ((C[D36] = '100-continue'),
      (X = Q.request(C, { endStream: M, signal: W })),
      X.once('continue', R));
  else ((X = Q.request(C, { endStream: M, signal: W })), R());
  return (
    ++Q[AN],
    X.once('response', (T) => {
      let { [Z36]: O, ...S } = T;
      if ((B.onResponseStarted(), B.aborted)) {
        let f = new ij0();
        (M6.errorRequest(A, B, f), M6.destroy(X, f));
        return;
      }
      if (B.onHeaders(Number(O), Y36(S), X.resume.bind(X), '') === !1) X.pause();
      X.on('data', (f) => {
        if (B.onData(f) === !1) X.pause();
      });
    }),
    X.once('end', () => {
      if (X.state?.state == null || X.state.state < 6) B.onComplete([]);
      if (Q[AN] === 0) Q.unref();
      (U(new Sm1('HTTP/2: stream half-closed (remote)')),
        (A[SL][A[OV]++] = null),
        (A[_m1] = A[OV]),
        A[_L]());
    }),
    X.once('close', () => {
      if (((Q[AN] -= 1), Q[AN] === 0)) Q.unref();
    }),
    X.once('error', function (T) {
      U(T);
    }),
    X.once('frameError', (T, O) => {
      U(new Sm1(`HTTP/2: "frameError" received - type ${T}, code ${O}`));
    }),
    !0
  );
  function R() {
    if (!J || q === 0) sj0(U, X, null, A, B, A[WI], q, N);
    else if (M6.isBuffer(J)) sj0(U, X, J, A, B, A[WI], q, N);
    else if (M6.isBlobLike(J))
      if (typeof J.stream === 'function') rj0(U, X, J.stream(), A, B, A[WI], q, N);
      else w36(U, X, J, A, B, A[WI], q, N);
    else if (M6.isStream(J)) z36(U, A[WI], N, X, J, A, B, q);
    else if (M6.isIterable(J)) rj0(U, X, J, A, B, A[WI], q, N);
    else IC(!1);
  }
}
function sj0(A, B, Q, I, G, D, Z, Y) {
  try {
    if (Q != null && M6.isBuffer(Q))
      (IC(Z === Q.byteLength, 'buffer body must have content length'),
        B.cork(),
        B.write(Q),
        B.uncork(),
        B.end(),
        G.onBodySent(Q));
    if (!Y) D[dY1] = !0;
    (G.onRequestSent(), I[_L]());
  } catch (W) {
    A(W);
  }
}
function z36(A, B, Q, I, G, D, Z, Y) {
  IC(Y !== 0 || D[uY1] === 0, 'stream body cannot be pipelined');
  let W = sB6(G, I, (J) => {
    if (J) (M6.destroy(W, J), A(J));
    else {
      if ((M6.removeAllListeners(W), Z.onRequestSent(), !Q)) B[dY1] = !0;
      D[_L]();
    }
  });
  M6.addListener(W, 'data', F);
  function F(J) {
    Z.onBodySent(J);
  }
}
async function w36(A, B, Q, I, G, D, Z, Y) {
  IC(Z === Q.size, 'blob body must have content length');
  try {
    if (Z != null && Z !== Q.size) throw new Pm1();
    let W = Buffer.from(await Q.arrayBuffer());
    if ((B.cork(), B.write(W), B.uncork(), B.end(), G.onBodySent(W), G.onRequestSent(), !Y))
      D[dY1] = !0;
    I[_L]();
  } catch (W) {
    A(W);
  }
}
async function rj0(A, B, Q, I, G, D, Z, Y) {
  IC(Z !== 0 || I[uY1] === 0, 'iterator body cannot be pipelined');
  let W = null;
  function F() {
    if (W) {
      let C = W;
      ((W = null), C());
    }
  }
  let J = () =>
    new Promise((C, X) => {
      if ((IC(W === null), D[PV])) X(D[PV]);
      else W = C;
    });
  B.on('close', F).on('drain', F);
  try {
    for await (let C of Q) {
      if (D[PV]) throw D[PV];
      let X = B.write(C);
      if ((G.onBodySent(C), !X)) await J();
    }
    if ((B.end(), G.onRequestSent(), !Y)) D[dY1] = !0;
    I[_L]();
  } catch (C) {
    A(C);
  } finally {
    B.off('close', F).off('drain', F);
  }
}
tj0.exports = W36;
