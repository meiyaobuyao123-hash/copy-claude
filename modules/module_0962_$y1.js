// Module: $y1
// Params: rs5,I80

var { Writable: I$4 } = D1('stream'),
  e50 = li(),
  { BINARY_TYPES: G$4, EMPTY_BUFFER: A80, kStatusCode: D$4, kWebSocket: Z$4 } = wU(),
  { concat: Ny1, toArrayBuffer: Y$4, unmask: W$4 } = ui(),
  { isValidStatusCode: F$4, isValidUTF8: B80 } = gv(),
  jQ1 = Buffer[Symbol.species];
class Q80 extends I$4 {
  constructor(A = {}) {
    super();
    ((this._allowSynchronousEvents =
      A.allowSynchronousEvents !== void 0 ? A.allowSynchronousEvents : !0),
      (this._binaryType = A.binaryType || G$4[0]),
      (this._extensions = A.extensions || {}),
      (this._isServer = !!A.isServer),
      (this._maxPayload = A.maxPayload | 0),
      (this._skipUTF8Validation = !!A.skipUTF8Validation),
      (this[Z$4] = void 0),
      (this._bufferedBytes = 0),
      (this._buffers = []),
      (this._compressed = !1),
      (this._payloadLength = 0),
      (this._mask = void 0),
      (this._fragmented = 0),
      (this._masked = !1),
      (this._fin = !1),
      (this._opcode = 0),
      (this._totalPayloadLength = 0),
      (this._messageLength = 0),
      (this._fragments = []),
      (this._errored = !1),
      (this._loop = !1),
      (this._state = 0));
  }
  _write(A, B, Q) {
    if (this._opcode === 8 && this._state == 0) return Q();
    ((this._bufferedBytes += A.length), this._buffers.push(A), this.startLoop(Q));
  }
  consume(A) {
    if (((this._bufferedBytes -= A), A === this._buffers[0].length)) return this._buffers.shift();
    if (A < this._buffers[0].length) {
      let Q = this._buffers[0];
      return (
        (this._buffers[0] = new jQ1(Q.buffer, Q.byteOffset + A, Q.length - A)),
        new jQ1(Q.buffer, Q.byteOffset, A)
      );
    }
    let B = Buffer.allocUnsafe(A);
    do {
      let Q = this._buffers[0],
        I = B.length - A;
      if (A >= Q.length) B.set(this._buffers.shift(), I);
      else
        (B.set(new Uint8Array(Q.buffer, Q.byteOffset, A), I),
          (this._buffers[0] = new jQ1(Q.buffer, Q.byteOffset + A, Q.length - A)));
      A -= Q.length;
    } while (A > 0);
    return B;
  }
  startLoop(A) {
    this._loop = !0;
    do
      switch (this._state) {
        case 0:
          this.getInfo(A);
          break;
        case 1:
          this.getPayloadLength16(A);
          break;
        case 2:
          this.getPayloadLength64(A);
          break;
        case 3:
          this.getMask();
          break;
        case 4:
          this.getData(A);
          break;
        case 5:
        case 6:
          this._loop = !1;
          return;
      }
    while (this._loop);
    if (!this._errored) A();
  }
  getInfo(A) {
    if (this._bufferedBytes < 2) {
      this._loop = !1;
      return;
    }
    let B = this.consume(2);
    if ((B[0] & 48) !== 0) {
      let I = this.createError(
        RangeError,
        'RSV2 and RSV3 must be clear',
        !0,
        1002,
        'WS_ERR_UNEXPECTED_RSV_2_3'
      );
      A(I);
      return;
    }
    let Q = (B[0] & 64) === 64;
    if (Q && !this._extensions[e50.extensionName]) {
      let I = this.createError(
        RangeError,
        'RSV1 must be clear',
        !0,
        1002,
        'WS_ERR_UNEXPECTED_RSV_1'
      );
      A(I);
      return;
    }
    if (
      ((this._fin = (B[0] & 128) === 128),
      (this._opcode = B[0] & 15),
      (this._payloadLength = B[1] & 127),
      this._opcode === 0)
    ) {
      if (Q) {
        let I = this.createError(
          RangeError,
          'RSV1 must be clear',
          !0,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
        A(I);
        return;
      }
      if (!this._fragmented) {
        let I = this.createError(RangeError, 'invalid opcode 0', !0, 1002, 'WS_ERR_INVALID_OPCODE');
        A(I);
        return;
      }
      this._opcode = this._fragmented;
    } else if (this._opcode === 1 || this._opcode === 2) {
      if (this._fragmented) {
        let I = this.createError(
          RangeError,
          `invalid opcode ${this._opcode}`,
          !0,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
        A(I);
        return;
      }
      this._compressed = Q;
    } else if (this._opcode > 7 && this._opcode < 11) {
      if (!this._fin) {
        let I = this.createError(RangeError, 'FIN must be set', !0, 1002, 'WS_ERR_EXPECTED_FIN');
        A(I);
        return;
      }
      if (Q) {
        let I = this.createError(
          RangeError,
          'RSV1 must be clear',
          !0,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
        A(I);
        return;
      }
      if (this._payloadLength > 125 || (this._opcode === 8 && this._payloadLength === 1)) {
        let I = this.createError(
          RangeError,
          `invalid payload length ${this._payloadLength}`,
          !0,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
        A(I);
        return;
      }
    } else {
      let I = this.createError(
        RangeError,
        `invalid opcode ${this._opcode}`,
        !0,
        1002,
        'WS_ERR_INVALID_OPCODE'
      );
      A(I);
      return;
    }
    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
    if (((this._masked = (B[1] & 128) === 128), this._isServer)) {
      if (!this._masked) {
        let I = this.createError(RangeError, 'MASK must be set', !0, 1002, 'WS_ERR_EXPECTED_MASK');
        A(I);
        return;
      }
    } else if (this._masked) {
      let I = this.createError(
        RangeError,
        'MASK must be clear',
        !0,
        1002,
        'WS_ERR_UNEXPECTED_MASK'
      );
      A(I);
      return;
    }
    if (this._payloadLength === 126) this._state = 1;
    else if (this._payloadLength === 127) this._state = 2;
    else this.haveLength(A);
  }
  getPayloadLength16(A) {
    if (this._bufferedBytes < 2) {
      this._loop = !1;
      return;
    }
    ((this._payloadLength = this.consume(2).readUInt16BE(0)), this.haveLength(A));
  }
  getPayloadLength64(A) {
    if (this._bufferedBytes < 8) {
      this._loop = !1;
      return;
    }
    let B = this.consume(8),
      Q = B.readUInt32BE(0);
    if (Q > Math.pow(2, 21) - 1) {
      let I = this.createError(
        RangeError,
        'Unsupported WebSocket frame: payload length > 2^53 - 1',
        !1,
        1009,
        'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
      );
      A(I);
      return;
    }
    ((this._payloadLength = Q * Math.pow(2, 32) + B.readUInt32BE(4)), this.haveLength(A));
  }
  haveLength(A) {
    if (this._payloadLength && this._opcode < 8) {
      if (
        ((this._totalPayloadLength += this._payloadLength),
        this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)
      ) {
        let B = this.createError(
          RangeError,
          'Max payload size exceeded',
          !1,
          1009,
          'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
        );
        A(B);
        return;
      }
    }
    if (this._masked) this._state = 3;
    else this._state = 4;
  }
  getMask() {
    if (this._bufferedBytes < 4) {
      this._loop = !1;
      return;
    }
    ((this._mask = this.consume(4)), (this._state = 4));
  }
  getData(A) {
    let B = A80;
    if (this._payloadLength) {
      if (this._bufferedBytes < this._payloadLength) {
        this._loop = !1;
        return;
      }
      if (
        ((B = this.consume(this._payloadLength)),
        this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0)
      )
        W$4(B, this._mask);
    }
    if (this._opcode > 7) {
      this.controlMessage(B, A);
      return;
    }
    if (this._compressed) {
      ((this._state = 5), this.decompress(B, A));
      return;
    }
    if (B.length) ((this._messageLength = this._totalPayloadLength), this._fragments.push(B));
    this.dataMessage(A);
  }
  decompress(A, B) {
    this._extensions[e50.extensionName].decompress(A, this._fin, (I, G) => {
      if (I) return B(I);
      if (G.length) {
        if (
          ((this._messageLength += G.length),
          this._messageLength > this._maxPayload && this._maxPayload > 0)
        ) {
          let D = this.createError(
            RangeError,
            'Max payload size exceeded',
            !1,
            1009,
            'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
          );
          B(D);
          return;
        }
        this._fragments.push(G);
      }
      if ((this.dataMessage(B), this._state === 0)) this.startLoop(B);
    });
  }
  dataMessage(A) {
    if (!this._fin) {
      this._state = 0;
      return;
    }
    let B = this._messageLength,
      Q = this._fragments;
    if (
      ((this._totalPayloadLength = 0),
      (this._messageLength = 0),
      (this._fragmented = 0),
      (this._fragments = []),
      this._opcode === 2)
    ) {
      let I;
      if (this._binaryType === 'nodebuffer') I = Ny1(Q, B);
      else if (this._binaryType === 'arraybuffer') I = Y$4(Ny1(Q, B));
      else if (this._binaryType === 'blob') I = new Blob(Q);
      else I = Q;
      if (this._allowSynchronousEvents) (this.emit('message', I, !0), (this._state = 0));
      else
        ((this._state = 6),
          setImmediate(() => {
            (this.emit('message', I, !0), (this._state = 0), this.startLoop(A));
          }));
    } else {
      let I = Ny1(Q, B);
      if (!this._skipUTF8Validation && !B80(I)) {
        let G = this.createError(Error, 'invalid UTF-8 sequence', !0, 1007, 'WS_ERR_INVALID_UTF8');
        A(G);
        return;
      }
      if (this._state === 5 || this._allowSynchronousEvents)
        (this.emit('message', I, !1), (this._state = 0));
      else
        ((this._state = 6),
          setImmediate(() => {
            (this.emit('message', I, !1), (this._state = 0), this.startLoop(A));
          }));
    }
  }
  controlMessage(A, B) {
    if (this._opcode === 8) {
      if (A.length === 0) ((this._loop = !1), this.emit('conclude', 1005, A80), this.end());
      else {
        let Q = A.readUInt16BE(0);
        if (!F$4(Q)) {
          let G = this.createError(
            RangeError,
            `invalid status code ${Q}`,
            !0,
            1002,
            'WS_ERR_INVALID_CLOSE_CODE'
          );
          B(G);
          return;
        }
        let I = new jQ1(A.buffer, A.byteOffset + 2, A.length - 2);
        if (!this._skipUTF8Validation && !B80(I)) {
          let G = this.createError(
            Error,
            'invalid UTF-8 sequence',
            !0,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
          B(G);
          return;
        }
        ((this._loop = !1), this.emit('conclude', Q, I), this.end());
      }
      this._state = 0;
      return;
    }
    if (this._allowSynchronousEvents)
      (this.emit(this._opcode === 9 ? 'ping' : 'pong', A), (this._state = 0));
    else
      ((this._state = 6),
        setImmediate(() => {
          (this.emit(this._opcode === 9 ? 'ping' : 'pong', A),
            (this._state = 0),
            this.startLoop(B));
        }));
  }
  createError(A, B, Q, I, G) {
    ((this._loop = !1), (this._errored = !0));
    let D = new A(Q ? `Invalid WebSocket frame: ${B}` : B);
    return (Error.captureStackTrace(D, this.createError), (D.code = G), (D[D$4] = I), D);
  }
}
I80.exports = Q80;
