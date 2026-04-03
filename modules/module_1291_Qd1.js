// Module: Qd1
// Params: hV8,Rk0

var Nk0 = D1('node:assert'),
  { Readable: z76 } = D1('node:stream'),
  {
    RequestAbortedError: $k0,
    NotSupportedError: w76,
    InvalidArgumentError: E76,
    AbortError: tm1,
  } = y5(),
  qk0 = I6(),
  { ReadableStreamFrom: U76 } = I6(),
  DF = Symbol('kConsume'),
  ns = Symbol('kReading'),
  vL = Symbol('kBody'),
  zk0 = Symbol('kAbort'),
  Mk0 = Symbol('kContentType'),
  wk0 = Symbol('kContentLength'),
  N76 = () => {};
class Lk0 extends z76 {
  constructor({
    resume: A,
    abort: B,
    contentType: Q = '',
    contentLength: I,
    highWaterMark: G = 65536,
  }) {
    super({ autoDestroy: !0, read: A, highWaterMark: G });
    ((this._readableState.dataEmitted = !1),
      (this[zk0] = B),
      (this[DF] = null),
      (this[vL] = null),
      (this[Mk0] = Q),
      (this[wk0] = I),
      (this[ns] = !1));
  }
  destroy(A) {
    if (!A && !this._readableState.endEmitted) A = new $k0();
    if (A) this[zk0]();
    return super.destroy(A);
  }
  _destroy(A, B) {
    if (!this[ns])
      setImmediate(() => {
        B(A);
      });
    else B(A);
  }
  on(A, ...B) {
    if (A === 'data' || A === 'readable') this[ns] = !0;
    return super.on(A, ...B);
  }
  addListener(A, ...B) {
    return this.on(A, ...B);
  }
  off(A, ...B) {
    let Q = super.off(A, ...B);
    if (A === 'data' || A === 'readable')
      this[ns] = this.listenerCount('data') > 0 || this.listenerCount('readable') > 0;
    return Q;
  }
  removeListener(A, ...B) {
    return this.off(A, ...B);
  }
  push(A) {
    if (this[DF] && A !== null) return (Ad1(this[DF], A), this[ns] ? super.push(A) : !0);
    return super.push(A);
  }
  async text() {
    return as(this, 'text');
  }
  async json() {
    return as(this, 'json');
  }
  async blob() {
    return as(this, 'blob');
  }
  async bytes() {
    return as(this, 'bytes');
  }
  async arrayBuffer() {
    return as(this, 'arrayBuffer');
  }
  async formData() {
    throw new w76();
  }
  get bodyUsed() {
    return qk0.isDisturbed(this);
  }
  get body() {
    if (!this[vL]) {
      if (((this[vL] = U76(this)), this[DF])) (this[vL].getReader(), Nk0(this[vL].locked));
    }
    return this[vL];
  }
  async dump(A) {
    let B = Number.isFinite(A?.limit) ? A.limit : 131072,
      Q = A?.signal;
    if (Q != null && (typeof Q !== 'object' || !('aborted' in Q)))
      throw new E76('signal must be an AbortSignal');
    if ((Q?.throwIfAborted(), this._readableState.closeEmitted)) return null;
    return await new Promise((I, G) => {
      if (this[wk0] > B) this.destroy(new tm1());
      let D = () => {
        this.destroy(Q.reason ?? new tm1());
      };
      (Q?.addEventListener('abort', D),
        this.on('close', function () {
          if ((Q?.removeEventListener('abort', D), Q?.aborted)) G(Q.reason ?? new tm1());
          else I(null);
        })
          .on('error', N76)
          .on('data', function (Z) {
            if (((B -= Z.length), B <= 0)) this.destroy();
          })
          .resume());
    });
  }
}
function $76(A) {
  return (A[vL] && A[vL].locked === !0) || A[DF];
}
function q76(A) {
  return qk0.isDisturbed(A) || $76(A);
}
async function as(A, B) {
  return (
    Nk0(!A[DF]),
    new Promise((Q, I) => {
      if (q76(A)) {
        let G = A._readableState;
        if (G.destroyed && G.closeEmitted === !1)
          A.on('error', (D) => {
            I(D);
          }).on('close', () => {
            I(new TypeError('unusable'));
          });
        else I(G.errored ?? new TypeError('unusable'));
      } else
        queueMicrotask(() => {
          ((A[DF] = { type: B, stream: A, resolve: Q, reject: I, length: 0, body: [] }),
            A.on('error', function (G) {
              Bd1(this[DF], G);
            }).on('close', function () {
              if (this[DF].body !== null) Bd1(this[DF], new $k0());
            }),
            M76(A[DF]));
        });
    })
  );
}
function M76(A) {
  if (A.body === null) return;
  let { _readableState: B } = A.stream;
  if (B.bufferIndex) {
    let Q = B.bufferIndex,
      I = B.buffer.length;
    for (let G = Q; G < I; G++) Ad1(A, B.buffer[G]);
  } else for (let Q of B.buffer) Ad1(A, Q);
  if (B.endEmitted) Uk0(this[DF]);
  else
    A.stream.on('end', function () {
      Uk0(this[DF]);
    });
  A.stream.resume();
  while (A.stream.read() != null);
}
function em1(A, B) {
  if (A.length === 0 || B === 0) return '';
  let Q = A.length === 1 ? A[0] : Buffer.concat(A, B),
    I = Q.length,
    G = I > 2 && Q[0] === 239 && Q[1] === 187 && Q[2] === 191 ? 3 : 0;
  return Q.utf8Slice(G, I);
}
function Ek0(A, B) {
  if (A.length === 0 || B === 0) return new Uint8Array(0);
  if (A.length === 1) return new Uint8Array(A[0]);
  let Q = new Uint8Array(Buffer.allocUnsafeSlow(B).buffer),
    I = 0;
  for (let G = 0; G < A.length; ++G) {
    let D = A[G];
    (Q.set(D, I), (I += D.length));
  }
  return Q;
}
function Uk0(A) {
  let { type: B, body: Q, resolve: I, stream: G, length: D } = A;
  try {
    if (B === 'text') I(em1(Q, D));
    else if (B === 'json') I(JSON.parse(em1(Q, D)));
    else if (B === 'arrayBuffer') I(Ek0(Q, D).buffer);
    else if (B === 'blob') I(new Blob(Q, { type: G[Mk0] }));
    else if (B === 'bytes') I(Ek0(Q, D));
    Bd1(A);
  } catch (Z) {
    G.destroy(Z);
  }
}
function Ad1(A, B) {
  ((A.length += B.length), A.body.push(B));
}
function Bd1(A, B) {
  if (A.body === null) return;
  if (B) A.reject(B);
  else A.resolve();
  ((A.type = null),
    (A.stream = null),
    (A.resolve = null),
    (A.reject = null),
    (A.length = 0),
    (A.body = null));
}
Rk0.exports = { Readable: Lk0, chunksDecode: em1 };
