// Module: Ir
// Params: CK8,Fv0

var {
    makeNetworkError: n5,
    makeAppropriateNetworkError: qW1,
    filterResponse: xd1,
    makeResponse: MW1,
    fromInnerResponse: DD6,
  } = Br(),
  { HeadersList: sf0 } = dS(),
  { Request: ZD6, cloneRequest: YD6 } = Jh(),
  bL = D1('node:zlib'),
  {
    bytesMatch: WD6,
    makePolicyContainer: FD6,
    clonePolicyContainer: JD6,
    requestBadPort: CD6,
    TAOCheck: XD6,
    appendRequestOriginHeader: VD6,
    responseLocationURL: KD6,
    requestCurrentURL: dz,
    setRequestReferrerPolicyOnRedirect: HD6,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: zD6,
    createOpaqueTimingInfo: hd1,
    appendFetchMetadata: wD6,
    corsCheck: ED6,
    crossOriginResourcePolicyCheck: UD6,
    determineRequestsReferrer: ND6,
    coarsenedSharedCurrentTime: Qr,
    createDeferredPromise: $D6,
    isBlobLike: qD6,
    sameOrigin: gd1,
    isCancelled: uS,
    isAborted: rf0,
    isErrorLike: MD6,
    fullyReadBody: LD6,
    readableStreamClose: RD6,
    isomorphicEncode: LW1,
    urlIsLocal: OD6,
    urlIsHttpHttpsScheme: md1,
    urlHasHttpsScheme: TD6,
    clampAndCoarsenConnectionTimingInfo: PD6,
    simpleRangeHeaderValue: SD6,
    buildContentRange: _D6,
    createInflate: jD6,
    extractMimeType: yD6,
  } = GF(),
  { kState: Av0, kDispatcher: kD6 } = OL(),
  pS = D1('node:assert'),
  { safelyExtractBody: dd1, extractBody: of0 } = lg(),
  {
    redirectStatusSet: Bv0,
    nullBodyStatus: Qv0,
    safeMethodsSet: xD6,
    requestBodyHeader: fD6,
    subresourceSet: vD6,
  } = $s(),
  bD6 = D1('node:events'),
  { Readable: gD6, pipeline: hD6, finished: mD6 } = D1('node:stream'),
  {
    addAbortListener: dD6,
    isErrored: uD6,
    isReadable: RW1,
    bufferToLowerCasedHeaderName: tf0,
  } = I6(),
  { dataURLProcessor: pD6, serializeAMimeType: cD6, minimizeSupportedMimeType: lD6 } = $Y(),
  { getGlobalDispatcher: iD6 } = WW1(),
  { webidl: nD6 } = WG(),
  { STATUS_CODES: aD6 } = D1('node:http'),
  sD6 = ['GET', 'HEAD'],
  rD6 =
    typeof __UNDICI_IS_NODE__ !== 'undefined' || typeof esbuildDetection !== 'undefined'
      ? 'node'
      : 'undici',
  fd1;
class ud1 extends bD6 {
  constructor(A) {
    super();
    ((this.dispatcher = A), (this.connection = null), (this.dump = !1), (this.state = 'ongoing'));
  }
  terminate(A) {
    if (this.state !== 'ongoing') return;
    ((this.state = 'terminated'), this.connection?.destroy(A), this.emit('terminated', A));
  }
  abort(A) {
    if (this.state !== 'ongoing') return;
    if (((this.state = 'aborted'), !A))
      A = new DOMException('The operation was aborted.', 'AbortError');
    ((this.serializedAbortReason = A), this.connection?.destroy(A), this.emit('terminated', A));
  }
}
function oD6(A) {
  Iv0(A, 'fetch');
}
function tD6(A, B = void 0) {
  nD6.argumentLengthCheck(arguments, 1, 'globalThis.fetch');
  let Q = $D6(),
    I;
  try {
    I = new ZD6(A, B);
  } catch (J) {
    return (Q.reject(J), Q.promise);
  }
  let G = I[Av0];
  if (I.signal.aborted) return (vd1(Q, G, null, I.signal.reason), Q.promise);
  if (G.client.globalObject?.constructor?.name === 'ServiceWorkerGlobalScope')
    G.serviceWorkers = 'none';
  let Z = null,
    Y = !1,
    W = null;
  return (
    dD6(I.signal, () => {
      ((Y = !0), pS(W != null), W.abort(I.signal.reason));
      let J = Z?.deref();
      vd1(Q, G, J, I.signal.reason);
    }),
    (W = Dv0({
      request: G,
      processResponseEndOfBody: oD6,
      processResponse: (J) => {
        if (Y) return;
        if (J.aborted) {
          vd1(Q, G, Z, W.serializedAbortReason);
          return;
        }
        if (J.type === 'error') {
          Q.reject(new TypeError('fetch failed', { cause: J.error }));
          return;
        }
        ((Z = new WeakRef(DD6(J, 'immutable'))), Q.resolve(Z.deref()), (Q = null));
      },
      dispatcher: I[kD6],
    })),
    Q.promise
  );
}
function Iv0(A, B = 'other') {
  if (A.type === 'error' && A.aborted) return;
  if (!A.urlList?.length) return;
  let Q = A.urlList[0],
    I = A.timingInfo,
    G = A.cacheState;
  if (!md1(Q)) return;
  if (I === null) return;
  if (!A.timingAllowPassed) ((I = hd1({ startTime: I.startTime })), (G = ''));
  ((I.endTime = Qr()), (A.timingInfo = I), Gv0(I, Q.href, B, globalThis, G));
}
var Gv0 = performance.markResourceTiming;
function vd1(A, B, Q, I) {
  if (A) A.reject(I);
  if (B.body != null && RW1(B.body?.stream))
    B.body.stream.cancel(I).catch((D) => {
      if (D.code === 'ERR_INVALID_STATE') return;
      throw D;
    });
  if (Q == null) return;
  let G = Q[Av0];
  if (G.body != null && RW1(G.body?.stream))
    G.body.stream.cancel(I).catch((D) => {
      if (D.code === 'ERR_INVALID_STATE') return;
      throw D;
    });
}
function Dv0({
  request: A,
  processRequestBodyChunkLength: B,
  processRequestEndOfBody: Q,
  processResponse: I,
  processResponseEndOfBody: G,
  processResponseConsumeBody: D,
  useParallelQueue: Z = !1,
  dispatcher: Y = iD6(),
}) {
  pS(Y);
  let W = null,
    F = !1;
  if (A.client != null) ((W = A.client.globalObject), (F = A.client.crossOriginIsolatedCapability));
  let J = Qr(F),
    C = hd1({ startTime: J }),
    X = {
      controller: new ud1(Y),
      request: A,
      timingInfo: C,
      processRequestBodyChunkLength: B,
      processRequestEndOfBody: Q,
      processResponse: I,
      processResponseConsumeBody: D,
      processResponseEndOfBody: G,
      taskDestination: W,
      crossOriginIsolatedCapability: F,
    };
  if ((pS(!A.body || A.body.stream), A.window === 'client'))
    A.window = A.client?.globalObject?.constructor?.name === 'Window' ? A.client : 'no-window';
  if (A.origin === 'client') A.origin = A.client.origin;
  if (A.policyContainer === 'client')
    if (A.client != null) A.policyContainer = JD6(A.client.policyContainer);
    else A.policyContainer = FD6();
  if (!A.headersList.contains('accept', !0)) A.headersList.append('accept', '*/*', !0);
  if (!A.headersList.contains('accept-language', !0))
    A.headersList.append('accept-language', '*', !0);
  if (A.priority === null);
  if (vD6.has(A.destination));
  return (
    Zv0(X).catch((V) => {
      X.controller.terminate(V);
    }),
    X.controller
  );
}
async function Zv0(A, B = !1) {
  let Q = A.request,
    I = null;
  if (Q.localURLsOnly && !OD6(dz(Q))) I = n5('local URLs only');
  if ((zD6(Q), CD6(Q) === 'blocked')) I = n5('bad port');
  if (Q.referrerPolicy === '') Q.referrerPolicy = Q.policyContainer.referrerPolicy;
  if (Q.referrer !== 'no-referrer') Q.referrer = ND6(Q);
  if (I === null)
    I = await (async () => {
      let D = dz(Q);
      if (
        (gd1(D, Q.url) && Q.responseTainting === 'basic') ||
        D.protocol === 'data:' ||
        Q.mode === 'navigate' ||
        Q.mode === 'websocket'
      )
        return ((Q.responseTainting = 'basic'), await ef0(A));
      if (Q.mode === 'same-origin') return n5('request mode cannot be "same-origin"');
      if (Q.mode === 'no-cors') {
        if (Q.redirect !== 'follow')
          return n5('redirect mode cannot be "follow" for "no-cors" request');
        return ((Q.responseTainting = 'opaque'), await ef0(A));
      }
      if (!md1(dz(Q))) return n5('URL scheme must be a HTTP(S) scheme');
      return ((Q.responseTainting = 'cors'), await Yv0(A));
    })();
  if (B) return I;
  if (I.status !== 0 && !I.internalResponse) {
    if (Q.responseTainting === 'cors');
    if (Q.responseTainting === 'basic') I = xd1(I, 'basic');
    else if (Q.responseTainting === 'cors') I = xd1(I, 'cors');
    else if (Q.responseTainting === 'opaque') I = xd1(I, 'opaque');
    else pS(!1);
  }
  let G = I.status === 0 ? I : I.internalResponse;
  if (G.urlList.length === 0) G.urlList.push(...Q.urlList);
  if (!Q.timingAllowFailed) I.timingAllowPassed = !0;
  if (
    I.type === 'opaque' &&
    G.status === 206 &&
    G.rangeRequested &&
    !Q.headers.contains('range', !0)
  )
    I = G = n5();
  if (I.status !== 0 && (Q.method === 'HEAD' || Q.method === 'CONNECT' || Qv0.includes(G.status)))
    ((G.body = null), (A.controller.dump = !0));
  if (Q.integrity) {
    let D = (Y) => bd1(A, n5(Y));
    if (Q.responseTainting === 'opaque' || I.body == null) {
      D(I.error);
      return;
    }
    let Z = (Y) => {
      if (!WD6(Y, Q.integrity)) {
        D('integrity mismatch');
        return;
      }
      ((I.body = dd1(Y)[0]), bd1(A, I));
    };
    await LD6(I.body, Z, D);
  } else bd1(A, I);
}
function ef0(A) {
  if (uS(A) && A.request.redirectCount === 0) return Promise.resolve(qW1(A));
  let { request: B } = A,
    { protocol: Q } = dz(B);
  switch (Q) {
    case 'about:':
      return Promise.resolve(n5('about scheme is not supported'));
    case 'blob:': {
      if (!fd1) fd1 = D1('node:buffer').resolveObjectURL;
      let I = dz(B);
      if (I.search.length !== 0)
        return Promise.resolve(n5('NetworkError when attempting to fetch resource.'));
      let G = fd1(I.toString());
      if (B.method !== 'GET' || !qD6(G)) return Promise.resolve(n5('invalid method'));
      let D = MW1(),
        Z = G.size,
        Y = LW1(`${Z}`),
        W = G.type;
      if (!B.headersList.contains('range', !0)) {
        let F = of0(G);
        ((D.statusText = 'OK'),
          (D.body = F[0]),
          D.headersList.set('content-length', Y, !0),
          D.headersList.set('content-type', W, !0));
      } else {
        D.rangeRequested = !0;
        let F = B.headersList.get('range', !0),
          J = SD6(F, !0);
        if (J === 'failure') return Promise.resolve(n5('failed to fetch the data URL'));
        let { rangeStartValue: C, rangeEndValue: X } = J;
        if (C === null) ((C = Z - X), (X = C + X - 1));
        else {
          if (C >= Z) return Promise.resolve(n5("Range start is greater than the blob's size."));
          if (X === null || X >= Z) X = Z - 1;
        }
        let V = G.slice(C, X, W),
          K = of0(V);
        D.body = K[0];
        let U = LW1(`${V.size}`),
          N = _D6(C, X, Z);
        ((D.status = 206),
          (D.statusText = 'Partial Content'),
          D.headersList.set('content-length', U, !0),
          D.headersList.set('content-type', W, !0),
          D.headersList.set('content-range', N, !0));
      }
      return Promise.resolve(D);
    }
    case 'data:': {
      let I = dz(B),
        G = pD6(I);
      if (G === 'failure') return Promise.resolve(n5('failed to fetch the data URL'));
      let D = cD6(G.mimeType);
      return Promise.resolve(
        MW1({
          statusText: 'OK',
          headersList: [['content-type', { name: 'Content-Type', value: D }]],
          body: dd1(G.body)[0],
        })
      );
    }
    case 'file:':
      return Promise.resolve(n5('not implemented... yet...'));
    case 'http:':
    case 'https:':
      return Yv0(A).catch((I) => n5(I));
    default:
      return Promise.resolve(n5('unknown scheme'));
  }
}
function eD6(A, B) {
  if (((A.request.done = !0), A.processResponseDone != null))
    queueMicrotask(() => A.processResponseDone(B));
}
function bd1(A, B) {
  let Q = A.timingInfo,
    I = () => {
      let D = Date.now();
      if (A.request.destination === 'document') A.controller.fullTimingInfo = Q;
      A.controller.reportTimingSteps = () => {
        if (A.request.url.protocol !== 'https:') return;
        Q.endTime = D;
        let { cacheState: Y, bodyInfo: W } = B;
        if (!B.timingAllowPassed) ((Q = hd1(Q)), (Y = ''));
        let F = 0;
        if (A.request.mode !== 'navigator' || !B.hasCrossOriginRedirects) {
          F = B.status;
          let J = yD6(B.headersList);
          if (J !== 'failure') W.contentType = lD6(J);
        }
        if (A.request.initiatorType != null)
          Gv0(Q, A.request.url.href, A.request.initiatorType, globalThis, Y, W, F);
      };
      let Z = () => {
        if (((A.request.done = !0), A.processResponseEndOfBody != null))
          queueMicrotask(() => A.processResponseEndOfBody(B));
        if (A.request.initiatorType != null) A.controller.reportTimingSteps();
      };
      queueMicrotask(() => Z());
    };
  if (A.processResponse != null)
    queueMicrotask(() => {
      (A.processResponse(B), (A.processResponse = null));
    });
  let G = B.type === 'error' ? B : (B.internalResponse ?? B);
  if (G.body == null) I();
  else
    mD6(G.body.stream, () => {
      I();
    });
}
async function Yv0(A) {
  let B = A.request,
    Q = null,
    I = null,
    G = A.timingInfo;
  if (B.serviceWorkers === 'all');
  if (Q === null) {
    if (B.redirect === 'follow') B.serviceWorkers = 'none';
    if (((I = Q = await Wv0(A)), B.responseTainting === 'cors' && ED6(B, Q) === 'failure'))
      return n5('cors failure');
    if (XD6(B, Q) === 'failure') B.timingAllowFailed = !0;
  }
  if (
    (B.responseTainting === 'opaque' || Q.type === 'opaque') &&
    UD6(B.origin, B.client, B.destination, I) === 'blocked'
  )
    return n5('blocked');
  if (Bv0.has(I.status)) {
    if (B.redirect !== 'manual') A.controller.connection.destroy(void 0, !1);
    if (B.redirect === 'error') Q = n5('unexpected redirect');
    else if (B.redirect === 'manual') Q = I;
    else if (B.redirect === 'follow') Q = await AZ6(A, Q);
    else pS(!1);
  }
  return ((Q.timingInfo = G), Q);
}
function AZ6(A, B) {
  let Q = A.request,
    I = B.internalResponse ? B.internalResponse : B,
    G;
  try {
    if (((G = KD6(I, dz(Q).hash)), G == null)) return B;
  } catch (Z) {
    return Promise.resolve(n5(Z));
  }
  if (!md1(G)) return Promise.resolve(n5('URL scheme must be a HTTP(S) scheme'));
  if (Q.redirectCount === 20) return Promise.resolve(n5('redirect count exceeded'));
  if (((Q.redirectCount += 1), Q.mode === 'cors' && (G.username || G.password) && !gd1(Q, G)))
    return Promise.resolve(n5('cross origin not allowed for request mode "cors"'));
  if (Q.responseTainting === 'cors' && (G.username || G.password))
    return Promise.resolve(n5('URL cannot contain credentials for request mode "cors"'));
  if (I.status !== 303 && Q.body != null && Q.body.source == null) return Promise.resolve(n5());
  if (
    ([301, 302].includes(I.status) && Q.method === 'POST') ||
    (I.status === 303 && !sD6.includes(Q.method))
  ) {
    ((Q.method = 'GET'), (Q.body = null));
    for (let Z of fD6) Q.headersList.delete(Z);
  }
  if (!gd1(dz(Q), G))
    (Q.headersList.delete('authorization', !0),
      Q.headersList.delete('proxy-authorization', !0),
      Q.headersList.delete('cookie', !0),
      Q.headersList.delete('host', !0));
  if (Q.body != null) (pS(Q.body.source != null), (Q.body = dd1(Q.body.source)[0]));
  let D = A.timingInfo;
  if (
    ((D.redirectEndTime = D.postRedirectStartTime = Qr(A.crossOriginIsolatedCapability)),
    D.redirectStartTime === 0)
  )
    D.redirectStartTime = D.startTime;
  return (Q.urlList.push(G), HD6(Q, I), Zv0(A, !0));
}
async function Wv0(A, B = !1, Q = !1) {
  let I = A.request,
    G = null,
    D = null,
    Z = null,
    Y = null,
    W = !1;
  if (I.window === 'no-window' && I.redirect === 'error') ((G = A), (D = I));
  else ((D = YD6(I)), (G = { ...A }), (G.request = D));
  let F =
      I.credentials === 'include' ||
      (I.credentials === 'same-origin' && I.responseTainting === 'basic'),
    J = D.body ? D.body.length : null,
    C = null;
  if (D.body == null && ['POST', 'PUT'].includes(D.method)) C = '0';
  if (J != null) C = LW1(`${J}`);
  if (C != null) D.headersList.append('content-length', C, !0);
  if (J != null && D.keepalive);
  if (D.referrer instanceof URL) D.headersList.append('referer', LW1(D.referrer.href), !0);
  if ((VD6(D), wD6(D), !D.headersList.contains('user-agent', !0)))
    D.headersList.append('user-agent', rD6);
  if (
    D.cache === 'default' &&
    (D.headersList.contains('if-modified-since', !0) ||
      D.headersList.contains('if-none-match', !0) ||
      D.headersList.contains('if-unmodified-since', !0) ||
      D.headersList.contains('if-match', !0) ||
      D.headersList.contains('if-range', !0))
  )
    D.cache = 'no-store';
  if (
    D.cache === 'no-cache' &&
    !D.preventNoCacheCacheControlHeaderModification &&
    !D.headersList.contains('cache-control', !0)
  )
    D.headersList.append('cache-control', 'max-age=0', !0);
  if (D.cache === 'no-store' || D.cache === 'reload') {
    if (!D.headersList.contains('pragma', !0)) D.headersList.append('pragma', 'no-cache', !0);
    if (!D.headersList.contains('cache-control', !0))
      D.headersList.append('cache-control', 'no-cache', !0);
  }
  if (D.headersList.contains('range', !0)) D.headersList.append('accept-encoding', 'identity', !0);
  if (!D.headersList.contains('accept-encoding', !0))
    if (TD6(dz(D))) D.headersList.append('accept-encoding', 'br, gzip, deflate', !0);
    else D.headersList.append('accept-encoding', 'gzip, deflate', !0);
  if ((D.headersList.delete('host', !0), Y == null)) D.cache = 'no-store';
  if (D.cache !== 'no-store' && D.cache !== 'reload');
  if (Z == null) {
    if (D.cache === 'only-if-cached') return n5('only if cached');
    let X = await BZ6(G, F, Q);
    if (!xD6.has(D.method) && X.status >= 200 && X.status <= 399);
    if (W && X.status === 304);
    if (Z == null) Z = X;
  }
  if (((Z.urlList = [...D.urlList]), D.headersList.contains('range', !0))) Z.rangeRequested = !0;
  if (((Z.requestIncludesCredentials = F), Z.status === 407)) {
    if (I.window === 'no-window') return n5();
    if (uS(A)) return qW1(A);
    return n5('proxy authentication required');
  }
  if (Z.status === 421 && !Q && (I.body == null || I.body.source != null)) {
    if (uS(A)) return qW1(A);
    (A.controller.connection.destroy(), (Z = await Wv0(A, B, !0)));
  }
  return Z;
}
async function BZ6(A, B = !1, Q = !1) {
  (pS(!A.controller.connection || A.controller.connection.destroyed),
    (A.controller.connection = {
      abort: null,
      destroyed: !1,
      destroy(K, U = !0) {
        if (!this.destroyed) {
          if (((this.destroyed = !0), U))
            this.abort?.(K ?? new DOMException('The operation was aborted.', 'AbortError'));
        }
      },
    }));
  let I = A.request,
    G = null,
    D = A.timingInfo;
  if (!0) I.cache = 'no-store';
  let Y = Q ? 'yes' : 'no';
  if (I.mode === 'websocket');
  let W = null;
  if (I.body == null && A.processRequestEndOfBody)
    queueMicrotask(() => A.processRequestEndOfBody());
  else if (I.body != null) {
    let K = async function* (q) {
        if (uS(A)) return;
        (yield q, A.processRequestBodyChunkLength?.(q.byteLength));
      },
      U = () => {
        if (uS(A)) return;
        if (A.processRequestEndOfBody) A.processRequestEndOfBody();
      },
      N = (q) => {
        if (uS(A)) return;
        if (q.name === 'AbortError') A.controller.abort();
        else A.controller.terminate(q);
      };
    W = (async function* () {
      try {
        for await (let q of I.body.stream) yield* K(q);
        U();
      } catch (q) {
        N(q);
      }
    })();
  }
  try {
    let { body: K, status: U, statusText: N, headersList: q, socket: M } = await V({ body: W });
    if (M) G = MW1({ status: U, statusText: N, headersList: q, socket: M });
    else {
      let R = K[Symbol.asyncIterator]();
      ((A.controller.next = () => R.next()),
        (G = MW1({ status: U, statusText: N, headersList: q })));
    }
  } catch (K) {
    if (K.name === 'AbortError') return (A.controller.connection.destroy(), qW1(A, K));
    return n5(K);
  }
  let F = async () => {
      await A.controller.resume();
    },
    J = (K) => {
      if (!uS(A)) A.controller.abort(K);
    },
    C = new ReadableStream({
      async start(K) {
        A.controller.controller = K;
      },
      async pull(K) {
        await F(K);
      },
      async cancel(K) {
        await J(K);
      },
      type: 'bytes',
    });
  ((G.body = { stream: C, source: null, length: null }),
    (A.controller.onAborted = X),
    A.controller.on('terminated', X),
    (A.controller.resume = async () => {
      while (!0) {
        let K, U;
        try {
          let { done: q, value: M } = await A.controller.next();
          if (rf0(A)) break;
          K = q ? void 0 : M;
        } catch (q) {
          if (A.controller.ended && !D.encodedBodySize) K = void 0;
          else ((K = q), (U = !0));
        }
        if (K === void 0) {
          (RD6(A.controller.controller), eD6(A, G));
          return;
        }
        if (((D.decodedBodySize += K?.byteLength ?? 0), U)) {
          A.controller.terminate(K);
          return;
        }
        let N = new Uint8Array(K);
        if (N.byteLength) A.controller.controller.enqueue(N);
        if (uD6(C)) {
          A.controller.terminate();
          return;
        }
        if (A.controller.controller.desiredSize <= 0) return;
      }
    }));
  function X(K) {
    if (rf0(A)) {
      if (((G.aborted = !0), RW1(C)))
        A.controller.controller.error(A.controller.serializedAbortReason);
    } else if (RW1(C))
      A.controller.controller.error(new TypeError('terminated', { cause: MD6(K) ? K : void 0 }));
    A.controller.connection.destroy();
  }
  return G;
  function V({ body: K }) {
    let U = dz(I),
      N = A.controller.dispatcher;
    return new Promise((q, M) =>
      N.dispatch(
        {
          path: U.pathname + U.search,
          origin: U.origin,
          method: I.method,
          body: N.isMockActive ? I.body && (I.body.source || I.body.stream) : K,
          headers: I.headersList.entries,
          maxRedirections: 0,
          upgrade: I.mode === 'websocket' ? 'websocket' : void 0,
        },
        {
          body: null,
          abort: null,
          onConnect(R) {
            let { connection: T } = A.controller;
            if (
              ((D.finalConnectionTimingInfo = PD6(
                void 0,
                D.postRedirectStartTime,
                A.crossOriginIsolatedCapability
              )),
              T.destroyed)
            )
              R(new DOMException('The operation was aborted.', 'AbortError'));
            else (A.controller.on('terminated', R), (this.abort = T.abort = R));
            D.finalNetworkRequestStartTime = Qr(A.crossOriginIsolatedCapability);
          },
          onResponseStarted() {
            D.finalNetworkResponseStartTime = Qr(A.crossOriginIsolatedCapability);
          },
          onHeaders(R, T, O, S) {
            if (R < 200) return;
            let f = [],
              a = '',
              g = new sf0();
            for (let x = 0; x < T.length; x += 2)
              g.append(tf0(T[x]), T[x + 1].toString('latin1'), !0);
            let Y1 = g.get('content-encoding', !0);
            if (Y1)
              f = Y1.toLowerCase()
                .split(',')
                .map((x) => x.trim());
            ((a = g.get('location', !0)), (this.body = new gD6({ read: O })));
            let r = [],
              w1 = a && I.redirect === 'follow' && Bv0.has(R);
            if (
              f.length !== 0 &&
              I.method !== 'HEAD' &&
              I.method !== 'CONNECT' &&
              !Qv0.includes(R) &&
              !w1
            )
              for (let x = f.length - 1; x >= 0; --x) {
                let F1 = f[x];
                if (F1 === 'x-gzip' || F1 === 'gzip')
                  r.push(
                    bL.createGunzip({
                      flush: bL.constants.Z_SYNC_FLUSH,
                      finishFlush: bL.constants.Z_SYNC_FLUSH,
                    })
                  );
                else if (F1 === 'deflate')
                  r.push(
                    jD6({
                      flush: bL.constants.Z_SYNC_FLUSH,
                      finishFlush: bL.constants.Z_SYNC_FLUSH,
                    })
                  );
                else if (F1 === 'br')
                  r.push(
                    bL.createBrotliDecompress({
                      flush: bL.constants.BROTLI_OPERATION_FLUSH,
                      finishFlush: bL.constants.BROTLI_OPERATION_FLUSH,
                    })
                  );
                else {
                  r.length = 0;
                  break;
                }
              }
            let H1 = this.onError.bind(this);
            return (
              q({
                status: R,
                statusText: S,
                headersList: g,
                body: r.length
                  ? hD6(this.body, ...r, (x) => {
                      if (x) this.onError(x);
                    }).on('error', H1)
                  : this.body.on('error', H1),
              }),
              !0
            );
          },
          onData(R) {
            if (A.controller.dump) return;
            let T = R;
            return ((D.encodedBodySize += T.byteLength), this.body.push(T));
          },
          onComplete() {
            if (this.abort) A.controller.off('terminated', this.abort);
            if (A.controller.onAborted) A.controller.off('terminated', A.controller.onAborted);
            ((A.controller.ended = !0), this.body.push(null));
          },
          onError(R) {
            if (this.abort) A.controller.off('terminated', this.abort);
            (this.body?.destroy(R), A.controller.terminate(R), M(R));
          },
          onUpgrade(R, T, O) {
            if (R !== 101) return;
            let S = new sf0();
            for (let f = 0; f < T.length; f += 2)
              S.append(tf0(T[f]), T[f + 1].toString('latin1'), !0);
            return (q({ status: R, statusText: aD6[R], headersList: S, socket: O }), !0);
          },
        }
      )
    );
  }
}
Fv0.exports = { fetch: tD6, Fetch: ud1, fetching: Dv0, finalizeAndReportTiming: Iv0 };
