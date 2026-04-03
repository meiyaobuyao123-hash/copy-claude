// Module: lj0
// Params: LV8,cj0

var d9 = D1('node:assert'),
  J4 = I6(),
  { channels: xj0 } = yg(),
  Um1 = eh1(),
  {
    RequestContentLengthMismatchError: jS,
    ResponseContentLengthMismatchError: qB6,
    RequestAbortedError: mj0,
    HeadersTimeoutError: MB6,
    HeadersOverflowError: LB6,
    SocketError: bY1,
    InformationalError: ig,
    BodyTimeoutError: RB6,
    HTTPParserError: OB6,
    ResponseExceededMaxSizeError: TB6,
  } = y5(),
  {
    kUrl: dj0,
    kReset: qY,
    kClient: Mm1,
    kParser: y3,
    kBlocking: _s,
    kRunning: DD,
    kPending: PB6,
    kSize: fj0,
    kWriting: PL,
    kQueue: RV,
    kNoRef: Ps,
    kKeepAliveDefaultTimeout: SB6,
    kHostHeader: _B6,
    kPendingIdx: jB6,
    kRunningIdx: BC,
    kError: QC,
    kPipelining: fY1,
    kSocket: ng,
    kKeepAliveTimeoutValue: gY1,
    kMaxHeadersSize: Nm1,
    kKeepAliveMaxTimeout: yB6,
    kKeepAliveTimeoutThreshold: kB6,
    kHeadersTimeout: xB6,
    kBodyTimeout: fB6,
    kStrictContentLength: Lm1,
    kMaxRequests: vj0,
    kCounter: vB6,
    kMaxResponseSize: bB6,
    kOnError: gB6,
    kResume: TL,
    kHTTPContext: uj0,
  } = uB(),
  xz = S_0(),
  hB6 = Buffer.alloc(0),
  yY1 = Buffer[Symbol.species],
  kY1 = J4.addListener,
  mB6 = J4.removeAllListeners,
  $m1;
async function dB6() {
  let A = process.env.JEST_WORKER_ID ? Dm1() : void 0,
    B;
  try {
    B = await WebAssembly.compile(y_0());
  } catch (Q) {
    B = await WebAssembly.compile(A || Dm1());
  }
  return await WebAssembly.instantiate(B, {
    env: {
      wasm_on_url: (Q, I, G) => {
        return 0;
      },
      wasm_on_status: (Q, I, G) => {
        d9(O7.ptr === Q);
        let D = I - vz + fz.byteOffset;
        return O7.onStatus(new yY1(fz.buffer, D, G)) || 0;
      },
      wasm_on_message_begin: (Q) => {
        return (d9(O7.ptr === Q), O7.onMessageBegin() || 0);
      },
      wasm_on_header_field: (Q, I, G) => {
        d9(O7.ptr === Q);
        let D = I - vz + fz.byteOffset;
        return O7.onHeaderField(new yY1(fz.buffer, D, G)) || 0;
      },
      wasm_on_header_value: (Q, I, G) => {
        d9(O7.ptr === Q);
        let D = I - vz + fz.byteOffset;
        return O7.onHeaderValue(new yY1(fz.buffer, D, G)) || 0;
      },
      wasm_on_headers_complete: (Q, I, G, D) => {
        return (d9(O7.ptr === Q), O7.onHeadersComplete(I, Boolean(G), Boolean(D)) || 0);
      },
      wasm_on_body: (Q, I, G) => {
        d9(O7.ptr === Q);
        let D = I - vz + fz.byteOffset;
        return O7.onBody(new yY1(fz.buffer, D, G)) || 0;
      },
      wasm_on_message_complete: (Q) => {
        return (d9(O7.ptr === Q), O7.onMessageComplete() || 0);
      },
    },
  });
}
var qm1 = null,
  Rm1 = dB6();
Rm1.catch();
var O7 = null,
  fz = null,
  xY1 = 0,
  vz = null,
  uB6 = 0,
  Ss = 1,
  ag = 2 | Ss,
  vY1 = 4 | Ss,
  Om1 = 8 | uB6;
class pj0 {
  constructor(A, B, { exports: Q }) {
    (d9(Number.isFinite(A[Nm1]) && A[Nm1] > 0),
      (this.llhttp = Q),
      (this.ptr = this.llhttp.llhttp_alloc(xz.TYPE.RESPONSE)),
      (this.client = A),
      (this.socket = B),
      (this.timeout = null),
      (this.timeoutValue = null),
      (this.timeoutType = null),
      (this.statusCode = null),
      (this.statusText = ''),
      (this.upgrade = !1),
      (this.headers = []),
      (this.headersSize = 0),
      (this.headersMaxSize = A[Nm1]),
      (this.shouldKeepAlive = !1),
      (this.paused = !1),
      (this.resume = this.resume.bind(this)),
      (this.bytesRead = 0),
      (this.keepAlive = ''),
      (this.contentLength = ''),
      (this.connection = ''),
      (this.maxResponseSize = A[bB6]));
  }
  setTimeout(A, B) {
    if (A !== this.timeoutValue || (B & Ss) ^ (this.timeoutType & Ss)) {
      if (this.timeout) (Um1.clearTimeout(this.timeout), (this.timeout = null));
      if (A)
        if (B & Ss) this.timeout = Um1.setFastTimeout(bj0, A, new WeakRef(this));
        else ((this.timeout = setTimeout(bj0, A, new WeakRef(this))), this.timeout.unref());
      this.timeoutValue = A;
    } else if (this.timeout) {
      if (this.timeout.refresh) this.timeout.refresh();
    }
    this.timeoutType = B;
  }
  resume() {
    if (this.socket.destroyed || !this.paused) return;
    if (
      (d9(this.ptr != null),
      d9(O7 == null),
      this.llhttp.llhttp_resume(this.ptr),
      d9(this.timeoutType === vY1),
      this.timeout)
    ) {
      if (this.timeout.refresh) this.timeout.refresh();
    }
    ((this.paused = !1), this.execute(this.socket.read() || hB6), this.readMore());
  }
  readMore() {
    while (!this.paused && this.ptr) {
      let A = this.socket.read();
      if (A === null) break;
      this.execute(A);
    }
  }
  execute(A) {
    (d9(this.ptr != null), d9(O7 == null), d9(!this.paused));
    let { socket: B, llhttp: Q } = this;
    if (A.length > xY1) {
      if (vz) Q.free(vz);
      ((xY1 = Math.ceil(A.length / 4096) * 4096), (vz = Q.malloc(xY1)));
    }
    new Uint8Array(Q.memory.buffer, vz, xY1).set(A);
    try {
      let I;
      try {
        ((fz = A), (O7 = this), (I = Q.llhttp_execute(this.ptr, vz, A.length)));
      } catch (D) {
        throw D;
      } finally {
        ((O7 = null), (fz = null));
      }
      let G = Q.llhttp_get_error_pos(this.ptr) - vz;
      if (I === xz.ERROR.PAUSED_UPGRADE) this.onUpgrade(A.slice(G));
      else if (I === xz.ERROR.PAUSED) ((this.paused = !0), B.unshift(A.slice(G)));
      else if (I !== xz.ERROR.OK) {
        let D = Q.llhttp_get_error_reason(this.ptr),
          Z = '';
        if (D) {
          let Y = new Uint8Array(Q.memory.buffer, D).indexOf(0);
          Z =
            'Response does not match the HTTP/1.1 protocol (' +
            Buffer.from(Q.memory.buffer, D, Y).toString() +
            ')';
        }
        throw new OB6(Z, xz.ERROR[I], A.slice(G));
      }
    } catch (I) {
      J4.destroy(B, I);
    }
  }
  destroy() {
    (d9(this.ptr != null),
      d9(O7 == null),
      this.llhttp.llhttp_free(this.ptr),
      (this.ptr = null),
      this.timeout && Um1.clearTimeout(this.timeout),
      (this.timeout = null),
      (this.timeoutValue = null),
      (this.timeoutType = null),
      (this.paused = !1));
  }
  onStatus(A) {
    this.statusText = A.toString();
  }
  onMessageBegin() {
    let { socket: A, client: B } = this;
    if (A.destroyed) return -1;
    let Q = B[RV][B[BC]];
    if (!Q) return -1;
    Q.onResponseStarted();
  }
  onHeaderField(A) {
    let B = this.headers.length;
    if ((B & 1) === 0) this.headers.push(A);
    else this.headers[B - 1] = Buffer.concat([this.headers[B - 1], A]);
    this.trackHeader(A.length);
  }
  onHeaderValue(A) {
    let B = this.headers.length;
    if ((B & 1) === 1) (this.headers.push(A), (B += 1));
    else this.headers[B - 1] = Buffer.concat([this.headers[B - 1], A]);
    let Q = this.headers[B - 2];
    if (Q.length === 10) {
      let I = J4.bufferToLowerCasedHeaderName(Q);
      if (I === 'keep-alive') this.keepAlive += A.toString();
      else if (I === 'connection') this.connection += A.toString();
    } else if (Q.length === 14 && J4.bufferToLowerCasedHeaderName(Q) === 'content-length')
      this.contentLength += A.toString();
    this.trackHeader(A.length);
  }
  trackHeader(A) {
    if (((this.headersSize += A), this.headersSize >= this.headersMaxSize))
      J4.destroy(this.socket, new LB6());
  }
  onUpgrade(A) {
    let { upgrade: B, client: Q, socket: I, headers: G, statusCode: D } = this;
    (d9(B), d9(Q[ng] === I), d9(!I.destroyed), d9(!this.paused), d9((G.length & 1) === 0));
    let Z = Q[RV][Q[BC]];
    (d9(Z),
      d9(Z.upgrade || Z.method === 'CONNECT'),
      (this.statusCode = null),
      (this.statusText = ''),
      (this.shouldKeepAlive = null),
      (this.headers = []),
      (this.headersSize = 0),
      I.unshift(A),
      I[y3].destroy(),
      (I[y3] = null),
      (I[Mm1] = null),
      (I[QC] = null),
      mB6(I),
      (Q[ng] = null),
      (Q[uj0] = null),
      (Q[RV][Q[BC]++] = null),
      Q.emit('disconnect', Q[dj0], [Q], new ig('upgrade')));
    try {
      Z.onUpgrade(D, G, I);
    } catch (Y) {
      J4.destroy(I, Y);
    }
    Q[TL]();
  }
  onHeadersComplete(A, B, Q) {
    let { client: I, socket: G, headers: D, statusText: Z } = this;
    if (G.destroyed) return -1;
    let Y = I[RV][I[BC]];
    if (!Y) return -1;
    if ((d9(!this.upgrade), d9(this.statusCode < 200), A === 100))
      return (J4.destroy(G, new bY1('bad response', J4.getSocketInfo(G))), -1);
    if (B && !Y.upgrade) return (J4.destroy(G, new bY1('bad upgrade', J4.getSocketInfo(G))), -1);
    if (
      (d9(this.timeoutType === ag),
      (this.statusCode = A),
      (this.shouldKeepAlive =
        Q || (Y.method === 'HEAD' && !G[qY] && this.connection.toLowerCase() === 'keep-alive')),
      this.statusCode >= 200)
    ) {
      let F = Y.bodyTimeout != null ? Y.bodyTimeout : I[fB6];
      this.setTimeout(F, vY1);
    } else if (this.timeout) {
      if (this.timeout.refresh) this.timeout.refresh();
    }
    if (Y.method === 'CONNECT') return (d9(I[DD] === 1), (this.upgrade = !0), 2);
    if (B) return (d9(I[DD] === 1), (this.upgrade = !0), 2);
    if (
      (d9((this.headers.length & 1) === 0),
      (this.headers = []),
      (this.headersSize = 0),
      this.shouldKeepAlive && I[fY1])
    ) {
      let F = this.keepAlive ? J4.parseKeepAliveTimeout(this.keepAlive) : null;
      if (F != null) {
        let J = Math.min(F - I[kB6], I[yB6]);
        if (J <= 0) G[qY] = !0;
        else I[gY1] = J;
      } else I[gY1] = I[SB6];
    } else G[qY] = !0;
    let W = Y.onHeaders(A, D, this.resume, Z) === !1;
    if (Y.aborted) return -1;
    if (Y.method === 'HEAD') return 1;
    if (A < 200) return 1;
    if (G[_s]) ((G[_s] = !1), I[TL]());
    return W ? xz.ERROR.PAUSED : 0;
  }
  onBody(A) {
    let { client: B, socket: Q, statusCode: I, maxResponseSize: G } = this;
    if (Q.destroyed) return -1;
    let D = B[RV][B[BC]];
    if ((d9(D), d9(this.timeoutType === vY1), this.timeout)) {
      if (this.timeout.refresh) this.timeout.refresh();
    }
    if ((d9(I >= 200), G > -1 && this.bytesRead + A.length > G))
      return (J4.destroy(Q, new TB6()), -1);
    if (((this.bytesRead += A.length), D.onData(A) === !1)) return xz.ERROR.PAUSED;
  }
  onMessageComplete() {
    let {
      client: A,
      socket: B,
      statusCode: Q,
      upgrade: I,
      headers: G,
      contentLength: D,
      bytesRead: Z,
      shouldKeepAlive: Y,
    } = this;
    if (B.destroyed && (!Q || Y)) return -1;
    if (I) return;
    (d9(Q >= 100), d9((this.headers.length & 1) === 0));
    let W = A[RV][A[BC]];
    if (
      (d9(W),
      (this.statusCode = null),
      (this.statusText = ''),
      (this.bytesRead = 0),
      (this.contentLength = ''),
      (this.keepAlive = ''),
      (this.connection = ''),
      (this.headers = []),
      (this.headersSize = 0),
      Q < 200)
    )
      return;
    if (W.method !== 'HEAD' && D && Z !== parseInt(D, 10)) return (J4.destroy(B, new qB6()), -1);
    if ((W.onComplete(G), (A[RV][A[BC]++] = null), B[PL]))
      return (d9(A[DD] === 0), J4.destroy(B, new ig('reset')), xz.ERROR.PAUSED);
    else if (!Y) return (J4.destroy(B, new ig('reset')), xz.ERROR.PAUSED);
    else if (B[qY] && A[DD] === 0) return (J4.destroy(B, new ig('reset')), xz.ERROR.PAUSED);
    else if (A[fY1] == null || A[fY1] === 1) setImmediate(() => A[TL]());
    else A[TL]();
  }
}
function bj0(A) {
  let { socket: B, timeoutType: Q, client: I, paused: G } = A.deref();
  if (Q === ag) {
    if (!B[PL] || B.writableNeedDrain || I[DD] > 1)
      (d9(!G, 'cannot be paused while waiting for headers'), J4.destroy(B, new MB6()));
  } else if (Q === vY1) {
    if (!G) J4.destroy(B, new RB6());
  } else if (Q === Om1) (d9(I[DD] === 0 && I[gY1]), J4.destroy(B, new ig('socket idle timeout')));
}
async function pB6(A, B) {
  if (((A[ng] = B), !qm1)) ((qm1 = await Rm1), (Rm1 = null));
  ((B[Ps] = !1),
    (B[PL] = !1),
    (B[qY] = !1),
    (B[_s] = !1),
    (B[y3] = new pj0(A, B, qm1)),
    kY1(B, 'error', function (I) {
      d9(I.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
      let G = this[y3];
      if (I.code === 'ECONNRESET' && G.statusCode && !G.shouldKeepAlive) {
        G.onMessageComplete();
        return;
      }
      ((this[QC] = I), this[Mm1][gB6](I));
    }),
    kY1(B, 'readable', function () {
      let I = this[y3];
      if (I) I.readMore();
    }),
    kY1(B, 'end', function () {
      let I = this[y3];
      if (I.statusCode && !I.shouldKeepAlive) {
        I.onMessageComplete();
        return;
      }
      J4.destroy(this, new bY1('other side closed', J4.getSocketInfo(this)));
    }),
    kY1(B, 'close', function () {
      let I = this[Mm1],
        G = this[y3];
      if (G) {
        if (!this[QC] && G.statusCode && !G.shouldKeepAlive) G.onMessageComplete();
        (this[y3].destroy(), (this[y3] = null));
      }
      let D = this[QC] || new bY1('closed', J4.getSocketInfo(this));
      if (((I[ng] = null), (I[uj0] = null), I.destroyed)) {
        d9(I[PB6] === 0);
        let Z = I[RV].splice(I[BC]);
        for (let Y = 0; Y < Z.length; Y++) {
          let W = Z[Y];
          J4.errorRequest(I, W, D);
        }
      } else if (I[DD] > 0 && D.code !== 'UND_ERR_INFO') {
        let Z = I[RV][I[BC]];
        ((I[RV][I[BC]++] = null), J4.errorRequest(I, Z, D));
      }
      ((I[jB6] = I[BC]), d9(I[DD] === 0), I.emit('disconnect', I[dj0], [I], D), I[TL]());
    }));
  let Q = !1;
  return (
    B.on('close', () => {
      Q = !0;
    }),
    {
      version: 'h1',
      defaultPipelining: 1,
      write(...I) {
        return iB6(A, ...I);
      },
      resume() {
        cB6(A);
      },
      destroy(I, G) {
        if (Q) queueMicrotask(G);
        else B.destroy(I).on('close', G);
      },
      get destroyed() {
        return B.destroyed;
      },
      busy(I) {
        if (B[PL] || B[qY] || B[_s]) return !0;
        if (I) {
          if (A[DD] > 0 && !I.idempotent) return !0;
          if (A[DD] > 0 && (I.upgrade || I.method === 'CONNECT')) return !0;
          if (
            A[DD] > 0 &&
            J4.bodyLength(I.body) !== 0 &&
            (J4.isStream(I.body) || J4.isAsyncIterable(I.body) || J4.isFormDataLike(I.body))
          )
            return !0;
        }
        return !1;
      },
    }
  );
}
function cB6(A) {
  let B = A[ng];
  if (B && !B.destroyed) {
    if (A[fj0] === 0) {
      if (!B[Ps] && B.unref) (B.unref(), (B[Ps] = !0));
    } else if (B[Ps] && B.ref) (B.ref(), (B[Ps] = !1));
    if (A[fj0] === 0) {
      if (B[y3].timeoutType !== Om1) B[y3].setTimeout(A[gY1], Om1);
    } else if (A[DD] > 0 && B[y3].statusCode < 200) {
      if (B[y3].timeoutType !== ag) {
        let Q = A[RV][A[BC]],
          I = Q.headersTimeout != null ? Q.headersTimeout : A[xB6];
        B[y3].setTimeout(I, ag);
      }
    }
  }
}
function lB6(A) {
  return A !== 'GET' && A !== 'HEAD' && A !== 'OPTIONS' && A !== 'TRACE' && A !== 'CONNECT';
}
function iB6(A, B) {
  let { method: Q, path: I, host: G, upgrade: D, blocking: Z, reset: Y } = B,
    { body: W, headers: F, contentLength: J } = B,
    C =
      Q === 'PUT' ||
      Q === 'POST' ||
      Q === 'PATCH' ||
      Q === 'QUERY' ||
      Q === 'PROPFIND' ||
      Q === 'PROPPATCH';
  if (J4.isFormDataLike(W)) {
    if (!$m1) $m1 = lg().extractBody;
    let [N, q] = $m1(W);
    if (B.contentType == null) F.push('content-type', q);
    ((W = N.stream), (J = N.length));
  } else if (J4.isBlobLike(W) && B.contentType == null && W.type) F.push('content-type', W.type);
  if (W && typeof W.read === 'function') W.read(0);
  let X = J4.bodyLength(W);
  if (((J = X ?? J), J === null)) J = B.contentLength;
  if (J === 0 && !C) J = null;
  if (lB6(Q) && J > 0 && B.contentLength !== null && B.contentLength !== J) {
    if (A[Lm1]) return (J4.errorRequest(A, B, new jS()), !1);
    process.emitWarning(new jS());
  }
  let V = A[ng],
    K = (N) => {
      if (B.aborted || B.completed) return;
      (J4.errorRequest(A, B, N || new mj0()), J4.destroy(W), J4.destroy(V, new ig('aborted')));
    };
  try {
    B.onConnect(K);
  } catch (N) {
    J4.errorRequest(A, B, N);
  }
  if (B.aborted) return !1;
  if (Q === 'HEAD') V[qY] = !0;
  if (D || Q === 'CONNECT') V[qY] = !0;
  if (Y != null) V[qY] = Y;
  if (A[vj0] && V[vB6]++ >= A[vj0]) V[qY] = !0;
  if (Z) V[_s] = !0;
  let U = `${Q} ${I} HTTP/1.1\r
`;
  if (typeof G === 'string')
    U += `host: ${G}\r
`;
  else U += A[_B6];
  if (D)
    U += `connection: upgrade\r
upgrade: ${D}\r
`;
  else if (A[fY1] && !V[qY])
    U += `connection: keep-alive\r
`;
  else
    U += `connection: close\r
`;
  if (Array.isArray(F))
    for (let N = 0; N < F.length; N += 2) {
      let q = F[N + 0],
        M = F[N + 1];
      if (Array.isArray(M))
        for (let R = 0; R < M.length; R++)
          U += `${q}: ${M[R]}\r
`;
      else
        U += `${q}: ${M}\r
`;
    }
  if (xj0.sendHeaders.hasSubscribers)
    xj0.sendHeaders.publish({ request: B, headers: U, socket: V });
  if (!W || X === 0) gj0(K, null, A, B, V, J, U, C);
  else if (J4.isBuffer(W)) gj0(K, W, A, B, V, J, U, C);
  else if (J4.isBlobLike(W))
    if (typeof W.stream === 'function') hj0(K, W.stream(), A, B, V, J, U, C);
    else aB6(K, W, A, B, V, J, U, C);
  else if (J4.isStream(W)) nB6(K, W, A, B, V, J, U, C);
  else if (J4.isIterable(W)) hj0(K, W, A, B, V, J, U, C);
  else d9(!1);
  return !0;
}
function nB6(A, B, Q, I, G, D, Z, Y) {
  d9(D !== 0 || Q[DD] === 0, 'stream body cannot be pipelined');
  let W = !1,
    F = new Tm1({
      abort: A,
      socket: G,
      request: I,
      contentLength: D,
      client: Q,
      expectsPayload: Y,
      header: Z,
    }),
    J = function (K) {
      if (W) return;
      try {
        if (!F.write(K) && this.pause) this.pause();
      } catch (U) {
        J4.destroy(this, U);
      }
    },
    C = function () {
      if (W) return;
      if (B.resume) B.resume();
    },
    X = function () {
      if (
        (queueMicrotask(() => {
          B.removeListener('error', V);
        }),
        !W)
      ) {
        let K = new mj0();
        queueMicrotask(() => V(K));
      }
    },
    V = function (K) {
      if (W) return;
      if (
        ((W = !0),
        d9(G.destroyed || (G[PL] && Q[DD] <= 1)),
        G.off('drain', C).off('error', V),
        B.removeListener('data', J).removeListener('end', V).removeListener('close', X),
        !K)
      )
        try {
          F.end();
        } catch (U) {
          K = U;
        }
      if ((F.destroy(K), K && (K.code !== 'UND_ERR_INFO' || K.message !== 'reset')))
        J4.destroy(B, K);
      else J4.destroy(B);
    };
  if ((B.on('data', J).on('end', V).on('error', V).on('close', X), B.resume)) B.resume();
  if ((G.on('drain', C).on('error', V), B.errorEmitted ?? B.errored))
    setImmediate(() => V(B.errored));
  else if (B.endEmitted ?? B.readableEnded) setImmediate(() => V(null));
  if (B.closeEmitted ?? B.closed) setImmediate(X);
}
function gj0(A, B, Q, I, G, D, Z, Y) {
  try {
    if (!B)
      if (D === 0)
        G.write(
          `${Z}content-length: 0\r
\r
`,
          'latin1'
        );
      else
        (d9(D === null, 'no body must not have content length'),
          G.write(
            `${Z}\r
`,
            'latin1'
          ));
    else if (J4.isBuffer(B)) {
      if (
        (d9(D === B.byteLength, 'buffer body must have content length'),
        G.cork(),
        G.write(
          `${Z}content-length: ${D}\r
\r
`,
          'latin1'
        ),
        G.write(B),
        G.uncork(),
        I.onBodySent(B),
        !Y && I.reset !== !1)
      )
        G[qY] = !0;
    }
    (I.onRequestSent(), Q[TL]());
  } catch (W) {
    A(W);
  }
}
async function aB6(A, B, Q, I, G, D, Z, Y) {
  d9(D === B.size, 'blob body must have content length');
  try {
    if (D != null && D !== B.size) throw new jS();
    let W = Buffer.from(await B.arrayBuffer());
    if (
      (G.cork(),
      G.write(
        `${Z}content-length: ${D}\r
\r
`,
        'latin1'
      ),
      G.write(W),
      G.uncork(),
      I.onBodySent(W),
      I.onRequestSent(),
      !Y && I.reset !== !1)
    )
      G[qY] = !0;
    Q[TL]();
  } catch (W) {
    A(W);
  }
}
async function hj0(A, B, Q, I, G, D, Z, Y) {
  d9(D !== 0 || Q[DD] === 0, 'iterator body cannot be pipelined');
  let W = null;
  function F() {
    if (W) {
      let X = W;
      ((W = null), X());
    }
  }
  let J = () =>
    new Promise((X, V) => {
      if ((d9(W === null), G[QC])) V(G[QC]);
      else W = X;
    });
  G.on('close', F).on('drain', F);
  let C = new Tm1({
    abort: A,
    socket: G,
    request: I,
    contentLength: D,
    client: Q,
    expectsPayload: Y,
    header: Z,
  });
  try {
    for await (let X of B) {
      if (G[QC]) throw G[QC];
      if (!C.write(X)) await J();
    }
    C.end();
  } catch (X) {
    C.destroy(X);
  } finally {
    G.off('close', F).off('drain', F);
  }
}
class Tm1 {
  constructor({
    abort: A,
    socket: B,
    request: Q,
    contentLength: I,
    client: G,
    expectsPayload: D,
    header: Z,
  }) {
    ((this.socket = B),
      (this.request = Q),
      (this.contentLength = I),
      (this.client = G),
      (this.bytesWritten = 0),
      (this.expectsPayload = D),
      (this.header = Z),
      (this.abort = A),
      (B[PL] = !0));
  }
  write(A) {
    let {
      socket: B,
      request: Q,
      contentLength: I,
      client: G,
      bytesWritten: D,
      expectsPayload: Z,
      header: Y,
    } = this;
    if (B[QC]) throw B[QC];
    if (B.destroyed) return !1;
    let W = Buffer.byteLength(A);
    if (!W) return !0;
    if (I !== null && D + W > I) {
      if (G[Lm1]) throw new jS();
      process.emitWarning(new jS());
    }
    if ((B.cork(), D === 0)) {
      if (!Z && Q.reset !== !1) B[qY] = !0;
      if (I === null)
        B.write(
          `${Y}transfer-encoding: chunked\r
`,
          'latin1'
        );
      else
        B.write(
          `${Y}content-length: ${I}\r
\r
`,
          'latin1'
        );
    }
    if (I === null)
      B.write(
        `\r
${W.toString(16)}\r
`,
        'latin1'
      );
    this.bytesWritten += W;
    let F = B.write(A);
    if ((B.uncork(), Q.onBodySent(A), !F)) {
      if (B[y3].timeout && B[y3].timeoutType === ag) {
        if (B[y3].timeout.refresh) B[y3].timeout.refresh();
      }
    }
    return F;
  }
  end() {
    let {
      socket: A,
      contentLength: B,
      client: Q,
      bytesWritten: I,
      expectsPayload: G,
      header: D,
      request: Z,
    } = this;
    if ((Z.onRequestSent(), (A[PL] = !1), A[QC])) throw A[QC];
    if (A.destroyed) return;
    if (I === 0)
      if (G)
        A.write(
          `${D}content-length: 0\r
\r
`,
          'latin1'
        );
      else
        A.write(
          `${D}\r
`,
          'latin1'
        );
    else if (B === null)
      A.write(
        `\r
0\r
\r
`,
        'latin1'
      );
    if (B !== null && I !== B)
      if (Q[Lm1]) throw new jS();
      else process.emitWarning(new jS());
    if (A[y3].timeout && A[y3].timeoutType === ag) {
      if (A[y3].timeout.refresh) A[y3].timeout.refresh();
    }
    Q[TL]();
  }
  destroy(A) {
    let { socket: B, client: Q, abort: I } = this;
    if (((B[PL] = !1), A)) (d9(Q[DD] <= 1, 'pipeline should only contain this request'), I(A));
  }
}
cj0.exports = pB6;
