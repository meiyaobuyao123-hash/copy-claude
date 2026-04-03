// Module: li
// Params: as5,o50

var pi = D1('zlib'),
  n50 = ui(),
  aN4 = i50(),
  { kStatusCode: a50 } = wU(),
  sN4 = Buffer[Symbol.species],
  rN4 = Buffer.from([0, 0, 255, 255]),
  SQ1 = Symbol('permessage-deflate'),
  EU = Symbol('total-length'),
  ci = Symbol('callback'),
  xM = Symbol('buffers'),
  PQ1 = Symbol('error'),
  TQ1;
class s50 {
  constructor(A, B, Q) {
    if (
      ((this._maxPayload = Q | 0),
      (this._options = A || {}),
      (this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024),
      (this._isServer = !!B),
      (this._deflate = null),
      (this._inflate = null),
      (this.params = null),
      !TQ1)
    ) {
      let I = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
      TQ1 = new aN4(I);
    }
  }
  static get extensionName() {
    return 'permessage-deflate';
  }
  offer() {
    let A = {};
    if (this._options.serverNoContextTakeover) A.server_no_context_takeover = !0;
    if (this._options.clientNoContextTakeover) A.client_no_context_takeover = !0;
    if (this._options.serverMaxWindowBits)
      A.server_max_window_bits = this._options.serverMaxWindowBits;
    if (this._options.clientMaxWindowBits)
      A.client_max_window_bits = this._options.clientMaxWindowBits;
    else if (this._options.clientMaxWindowBits == null) A.client_max_window_bits = !0;
    return A;
  }
  accept(A) {
    return (
      (A = this.normalizeParams(A)),
      (this.params = this._isServer ? this.acceptAsServer(A) : this.acceptAsClient(A)),
      this.params
    );
  }
  cleanup() {
    if (this._inflate) (this._inflate.close(), (this._inflate = null));
    if (this._deflate) {
      let A = this._deflate[ci];
      if ((this._deflate.close(), (this._deflate = null), A))
        A(new Error('The deflate stream was closed while data was being processed'));
    }
  }
  acceptAsServer(A) {
    let B = this._options,
      Q = A.find((I) => {
        if (
          (B.serverNoContextTakeover === !1 && I.server_no_context_takeover) ||
          (I.server_max_window_bits &&
            (B.serverMaxWindowBits === !1 ||
              (typeof B.serverMaxWindowBits === 'number' &&
                B.serverMaxWindowBits > I.server_max_window_bits))) ||
          (typeof B.clientMaxWindowBits === 'number' && !I.client_max_window_bits)
        )
          return !1;
        return !0;
      });
    if (!Q) throw new Error('None of the extension offers can be accepted');
    if (B.serverNoContextTakeover) Q.server_no_context_takeover = !0;
    if (B.clientNoContextTakeover) Q.client_no_context_takeover = !0;
    if (typeof B.serverMaxWindowBits === 'number') Q.server_max_window_bits = B.serverMaxWindowBits;
    if (typeof B.clientMaxWindowBits === 'number') Q.client_max_window_bits = B.clientMaxWindowBits;
    else if (Q.client_max_window_bits === !0 || B.clientMaxWindowBits === !1)
      delete Q.client_max_window_bits;
    return Q;
  }
  acceptAsClient(A) {
    let B = A[0];
    if (this._options.clientNoContextTakeover === !1 && B.client_no_context_takeover)
      throw new Error('Unexpected parameter "client_no_context_takeover"');
    if (!B.client_max_window_bits) {
      if (typeof this._options.clientMaxWindowBits === 'number')
        B.client_max_window_bits = this._options.clientMaxWindowBits;
    } else if (
      this._options.clientMaxWindowBits === !1 ||
      (typeof this._options.clientMaxWindowBits === 'number' &&
        B.client_max_window_bits > this._options.clientMaxWindowBits)
    )
      throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
    return B;
  }
  normalizeParams(A) {
    return (
      A.forEach((B) => {
        Object.keys(B).forEach((Q) => {
          let I = B[Q];
          if (I.length > 1) throw new Error(`Parameter "${Q}" must have only a single value`);
          if (((I = I[0]), Q === 'client_max_window_bits')) {
            if (I !== !0) {
              let G = +I;
              if (!Number.isInteger(G) || G < 8 || G > 15)
                throw new TypeError(`Invalid value for parameter "${Q}": ${I}`);
              I = G;
            } else if (!this._isServer)
              throw new TypeError(`Invalid value for parameter "${Q}": ${I}`);
          } else if (Q === 'server_max_window_bits') {
            let G = +I;
            if (!Number.isInteger(G) || G < 8 || G > 15)
              throw new TypeError(`Invalid value for parameter "${Q}": ${I}`);
            I = G;
          } else if (Q === 'client_no_context_takeover' || Q === 'server_no_context_takeover') {
            if (I !== !0) throw new TypeError(`Invalid value for parameter "${Q}": ${I}`);
          } else throw new Error(`Unknown parameter "${Q}"`);
          B[Q] = I;
        });
      }),
      A
    );
  }
  decompress(A, B, Q) {
    TQ1.add((I) => {
      this._decompress(A, B, (G, D) => {
        (I(), Q(G, D));
      });
    });
  }
  compress(A, B, Q) {
    TQ1.add((I) => {
      this._compress(A, B, (G, D) => {
        (I(), Q(G, D));
      });
    });
  }
  _decompress(A, B, Q) {
    let I = this._isServer ? 'client' : 'server';
    if (!this._inflate) {
      let G = `${I}_max_window_bits`,
        D = typeof this.params[G] !== 'number' ? pi.Z_DEFAULT_WINDOWBITS : this.params[G];
      ((this._inflate = pi.createInflateRaw({
        ...this._options.zlibInflateOptions,
        windowBits: D,
      })),
        (this._inflate[SQ1] = this),
        (this._inflate[EU] = 0),
        (this._inflate[xM] = []),
        this._inflate.on('error', tN4),
        this._inflate.on('data', r50));
    }
    if (((this._inflate[ci] = Q), this._inflate.write(A), B)) this._inflate.write(rN4);
    this._inflate.flush(() => {
      let G = this._inflate[PQ1];
      if (G) {
        (this._inflate.close(), (this._inflate = null), Q(G));
        return;
      }
      let D = n50.concat(this._inflate[xM], this._inflate[EU]);
      if (this._inflate._readableState.endEmitted) (this._inflate.close(), (this._inflate = null));
      else if (
        ((this._inflate[EU] = 0),
        (this._inflate[xM] = []),
        B && this.params[`${I}_no_context_takeover`])
      )
        this._inflate.reset();
      Q(null, D);
    });
  }
  _compress(A, B, Q) {
    let I = this._isServer ? 'server' : 'client';
    if (!this._deflate) {
      let G = `${I}_max_window_bits`,
        D = typeof this.params[G] !== 'number' ? pi.Z_DEFAULT_WINDOWBITS : this.params[G];
      ((this._deflate = pi.createDeflateRaw({
        ...this._options.zlibDeflateOptions,
        windowBits: D,
      })),
        (this._deflate[EU] = 0),
        (this._deflate[xM] = []),
        this._deflate.on('data', oN4));
    }
    ((this._deflate[ci] = Q),
      this._deflate.write(A),
      this._deflate.flush(pi.Z_SYNC_FLUSH, () => {
        if (!this._deflate) return;
        let G = n50.concat(this._deflate[xM], this._deflate[EU]);
        if (B) G = new sN4(G.buffer, G.byteOffset, G.length - 4);
        if (
          ((this._deflate[ci] = null),
          (this._deflate[EU] = 0),
          (this._deflate[xM] = []),
          B && this.params[`${I}_no_context_takeover`])
        )
          this._deflate.reset();
        Q(null, G);
      }));
  }
}
o50.exports = s50;
function oN4(A) {
  (this[xM].push(A), (this[EU] += A.length));
}
function r50(A) {
  if (((this[EU] += A.length), this[SQ1]._maxPayload < 1 || this[EU] <= this[SQ1]._maxPayload)) {
    this[xM].push(A);
    return;
  }
  ((this[PQ1] = new RangeError('Max payload size exceeded')),
    (this[PQ1].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'),
    (this[PQ1][a50] = 1009),
    this.removeListener('data', r50),
    this.reset());
}
function tN4(A) {
  ((this[SQ1]._inflate = null), (A[a50] = 1007), this[ci](A));
}
