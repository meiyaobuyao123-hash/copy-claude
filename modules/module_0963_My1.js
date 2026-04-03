// Module: My1
// Params: ts5,Z80

var { Duplex: os5 } = D1('stream'),
  { randomFillSync: J$4 } = D1('crypto'),
  G80 = li(),
  { EMPTY_BUFFER: C$4, kWebSocket: X$4, NOOP: V$4 } = wU(),
  { isBlob: hv, isValidStatusCode: K$4 } = gv(),
  { mask: D80, toBuffer: cP } = ui(),
  vJ = Symbol('kByteLength'),
  H$4 = Buffer.alloc(4),
  lP,
  mv = 8192,
  eX = 0,
  z$4 = 1,
  w$4 = 2;
class fM {
  constructor(A, B, Q) {
    if (((this._extensions = B || {}), Q))
      ((this._generateMask = Q), (this._maskBuffer = Buffer.alloc(4)));
    ((this._socket = A),
      (this._firstFragment = !0),
      (this._compress = !1),
      (this._bufferedBytes = 0),
      (this._queue = []),
      (this._state = eX),
      (this.onerror = V$4),
      (this[X$4] = void 0));
  }
  static frame(A, B) {
    let Q,
      I = !1,
      G = 2,
      D = !1;
    if (B.mask) {
      if (((Q = B.maskBuffer || H$4), B.generateMask)) B.generateMask(Q);
      else {
        if (mv === 8192) {
          if (lP === void 0) lP = Buffer.alloc(8192);
          (J$4(lP, 0, 8192), (mv = 0));
        }
        ((Q[0] = lP[mv++]), (Q[1] = lP[mv++]), (Q[2] = lP[mv++]), (Q[3] = lP[mv++]));
      }
      ((D = (Q[0] | Q[1] | Q[2] | Q[3]) === 0), (G = 6));
    }
    let Z;
    if (typeof A === 'string')
      if ((!B.mask || D) && B[vJ] !== void 0) Z = B[vJ];
      else ((A = Buffer.from(A)), (Z = A.length));
    else ((Z = A.length), (I = B.mask && B.readOnly && !D));
    let Y = Z;
    if (Z >= 65536) ((G += 8), (Y = 127));
    else if (Z > 125) ((G += 2), (Y = 126));
    let W = Buffer.allocUnsafe(I ? Z + G : G);
    if (((W[0] = B.fin ? B.opcode | 128 : B.opcode), B.rsv1)) W[0] |= 64;
    if (((W[1] = Y), Y === 126)) W.writeUInt16BE(Z, 2);
    else if (Y === 127) ((W[2] = W[3] = 0), W.writeUIntBE(Z, 4, 6));
    if (!B.mask) return [W, A];
    if (
      ((W[1] |= 128), (W[G - 4] = Q[0]), (W[G - 3] = Q[1]), (W[G - 2] = Q[2]), (W[G - 1] = Q[3]), D)
    )
      return [W, A];
    if (I) return (D80(A, Q, W, G, Z), [W]);
    return (D80(A, Q, A, 0, Z), [W, A]);
  }
  close(A, B, Q, I) {
    let G;
    if (A === void 0) G = C$4;
    else if (typeof A !== 'number' || !K$4(A))
      throw new TypeError('First argument must be a valid error code number');
    else if (B === void 0 || !B.length) ((G = Buffer.allocUnsafe(2)), G.writeUInt16BE(A, 0));
    else {
      let Z = Buffer.byteLength(B);
      if (Z > 123) throw new RangeError('The message must not be greater than 123 bytes');
      if (((G = Buffer.allocUnsafe(2 + Z)), G.writeUInt16BE(A, 0), typeof B === 'string'))
        G.write(B, 2);
      else G.set(B, 2);
    }
    let D = {
      [vJ]: G.length,
      fin: !0,
      generateMask: this._generateMask,
      mask: Q,
      maskBuffer: this._maskBuffer,
      opcode: 8,
      readOnly: !1,
      rsv1: !1,
    };
    if (this._state !== eX) this.enqueue([this.dispatch, G, !1, D, I]);
    else this.sendFrame(fM.frame(G, D), I);
  }
  ping(A, B, Q) {
    let I, G;
    if (typeof A === 'string') ((I = Buffer.byteLength(A)), (G = !1));
    else if (hv(A)) ((I = A.size), (G = !1));
    else ((A = cP(A)), (I = A.length), (G = cP.readOnly));
    if (I > 125) throw new RangeError('The data size must not be greater than 125 bytes');
    let D = {
      [vJ]: I,
      fin: !0,
      generateMask: this._generateMask,
      mask: B,
      maskBuffer: this._maskBuffer,
      opcode: 9,
      readOnly: G,
      rsv1: !1,
    };
    if (hv(A))
      if (this._state !== eX) this.enqueue([this.getBlobData, A, !1, D, Q]);
      else this.getBlobData(A, !1, D, Q);
    else if (this._state !== eX) this.enqueue([this.dispatch, A, !1, D, Q]);
    else this.sendFrame(fM.frame(A, D), Q);
  }
  pong(A, B, Q) {
    let I, G;
    if (typeof A === 'string') ((I = Buffer.byteLength(A)), (G = !1));
    else if (hv(A)) ((I = A.size), (G = !1));
    else ((A = cP(A)), (I = A.length), (G = cP.readOnly));
    if (I > 125) throw new RangeError('The data size must not be greater than 125 bytes');
    let D = {
      [vJ]: I,
      fin: !0,
      generateMask: this._generateMask,
      mask: B,
      maskBuffer: this._maskBuffer,
      opcode: 10,
      readOnly: G,
      rsv1: !1,
    };
    if (hv(A))
      if (this._state !== eX) this.enqueue([this.getBlobData, A, !1, D, Q]);
      else this.getBlobData(A, !1, D, Q);
    else if (this._state !== eX) this.enqueue([this.dispatch, A, !1, D, Q]);
    else this.sendFrame(fM.frame(A, D), Q);
  }
  send(A, B, Q) {
    let I = this._extensions[G80.extensionName],
      G = B.binary ? 2 : 1,
      D = B.compress,
      Z,
      Y;
    if (typeof A === 'string') ((Z = Buffer.byteLength(A)), (Y = !1));
    else if (hv(A)) ((Z = A.size), (Y = !1));
    else ((A = cP(A)), (Z = A.length), (Y = cP.readOnly));
    if (this._firstFragment) {
      if (
        ((this._firstFragment = !1),
        D &&
          I &&
          I.params[I._isServer ? 'server_no_context_takeover' : 'client_no_context_takeover'])
      )
        D = Z >= I._threshold;
      this._compress = D;
    } else ((D = !1), (G = 0));
    if (B.fin) this._firstFragment = !0;
    let W = {
      [vJ]: Z,
      fin: B.fin,
      generateMask: this._generateMask,
      mask: B.mask,
      maskBuffer: this._maskBuffer,
      opcode: G,
      readOnly: Y,
      rsv1: D,
    };
    if (hv(A))
      if (this._state !== eX) this.enqueue([this.getBlobData, A, this._compress, W, Q]);
      else this.getBlobData(A, this._compress, W, Q);
    else if (this._state !== eX) this.enqueue([this.dispatch, A, this._compress, W, Q]);
    else this.dispatch(A, this._compress, W, Q);
  }
  getBlobData(A, B, Q, I) {
    ((this._bufferedBytes += Q[vJ]),
      (this._state = w$4),
      A.arrayBuffer()
        .then((G) => {
          if (this._socket.destroyed) {
            let Z = new Error('The socket was closed while the blob was being read');
            process.nextTick(qy1, this, Z, I);
            return;
          }
          this._bufferedBytes -= Q[vJ];
          let D = cP(G);
          if (!B) ((this._state = eX), this.sendFrame(fM.frame(D, Q), I), this.dequeue());
          else this.dispatch(D, B, Q, I);
        })
        .catch((G) => {
          process.nextTick(E$4, this, G, I);
        }));
  }
  dispatch(A, B, Q, I) {
    if (!B) {
      this.sendFrame(fM.frame(A, Q), I);
      return;
    }
    let G = this._extensions[G80.extensionName];
    ((this._bufferedBytes += Q[vJ]),
      (this._state = z$4),
      G.compress(A, Q.fin, (D, Z) => {
        if (this._socket.destroyed) {
          let Y = new Error('The socket was closed while data was being compressed');
          qy1(this, Y, I);
          return;
        }
        ((this._bufferedBytes -= Q[vJ]),
          (this._state = eX),
          (Q.readOnly = !1),
          this.sendFrame(fM.frame(Z, Q), I),
          this.dequeue());
      }));
  }
  dequeue() {
    while (this._state === eX && this._queue.length) {
      let A = this._queue.shift();
      ((this._bufferedBytes -= A[3][vJ]), Reflect.apply(A[0], this, A.slice(1)));
    }
  }
  enqueue(A) {
    ((this._bufferedBytes += A[3][vJ]), this._queue.push(A));
  }
  sendFrame(A, B) {
    if (A.length === 2)
      (this._socket.cork(),
        this._socket.write(A[0]),
        this._socket.write(A[1], B),
        this._socket.uncork());
    else this._socket.write(A[0], B);
  }
}
Z80.exports = fM;
function qy1(A, B, Q) {
  if (typeof Q === 'function') Q(B);
  for (let I = 0; I < A._queue.length; I++) {
    let G = A._queue[I],
      D = G[G.length - 1];
    if (typeof D === 'function') D(B);
  }
}
function E$4(A, B, Q) {
  (qy1(A, B, Q), A.onerror(B));
}
