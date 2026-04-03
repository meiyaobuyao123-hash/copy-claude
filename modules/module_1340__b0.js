// Module: _b0
// Params: yK8,Sb0

var { Writable: gY6 } = D1('node:stream'),
  hY6 = D1('node:assert'),
  { parserStates: OY, opcodes: Uh, states: mY6, emptyBuffer: Ub0, sentCloseFrameState: Nb0 } = iS(),
  { kReadyState: dY6, kSentClose: $b0, kResponse: qb0, kReceivedClose: Mb0 } = Wr(),
  { channels: mW1 } = yg(),
  {
    isValidStatusCode: uY6,
    isValidOpcode: pY6,
    failWebsocketConnection: ZC,
    websocketMessageReceived: Lb0,
    utf8Decode: cY6,
    isControlFrame: Rb0,
    isTextBinaryFrame: Au1,
    isContinuationFrame: lY6,
  } = Cr(),
  { WebsocketFrameSend: Ob0 } = fW1(),
  { closeWebSocketConnection: Tb0 } = ed1(),
  { PerMessageDeflate: iY6 } = Eb0();
class Pb0 extends gY6 {
  #A = [];
  #B = 0;
  #Q = !1;
  #I = OY.INFO;
  #G = {};
  #W = [];
  #D;
  constructor(A, B) {
    super();
    if (((this.ws = A), (this.#D = B == null ? new Map() : B), this.#D.has('permessage-deflate')))
      this.#D.set('permessage-deflate', new iY6(B));
  }
  _write(A, B, Q) {
    (this.#A.push(A), (this.#B += A.length), (this.#Q = !0), this.run(Q));
  }
  run(A) {
    while (this.#Q)
      if (this.#I === OY.INFO) {
        if (this.#B < 2) return A();
        let B = this.consume(2),
          Q = (B[0] & 128) !== 0,
          I = B[0] & 15,
          G = (B[1] & 128) === 128,
          D = !Q && I !== Uh.CONTINUATION,
          Z = B[1] & 127,
          Y = B[0] & 64,
          W = B[0] & 32,
          F = B[0] & 16;
        if (!pY6(I)) return (ZC(this.ws, 'Invalid opcode received'), A());
        if (G) return (ZC(this.ws, 'Frame cannot be masked'), A());
        if (Y !== 0 && !this.#D.has('permessage-deflate')) {
          ZC(this.ws, 'Expected RSV1 to be clear.');
          return;
        }
        if (W !== 0 || F !== 0) {
          ZC(this.ws, 'RSV1, RSV2, RSV3 must be clear');
          return;
        }
        if (D && !Au1(I)) {
          ZC(this.ws, 'Invalid frame type was fragmented.');
          return;
        }
        if (Au1(I) && this.#W.length > 0) {
          ZC(this.ws, 'Expected continuation frame');
          return;
        }
        if (this.#G.fragmented && D) {
          ZC(this.ws, 'Fragmented frame exceeded 125 bytes.');
          return;
        }
        if ((Z > 125 || D) && Rb0(I)) {
          ZC(this.ws, 'Control frame either too large or fragmented');
          return;
        }
        if (lY6(I) && this.#W.length === 0 && !this.#G.compressed) {
          ZC(this.ws, 'Unexpected continuation frame');
          return;
        }
        if (Z <= 125) ((this.#G.payloadLength = Z), (this.#I = OY.READ_DATA));
        else if (Z === 126) this.#I = OY.PAYLOADLENGTH_16;
        else if (Z === 127) this.#I = OY.PAYLOADLENGTH_64;
        if (Au1(I)) ((this.#G.binaryType = I), (this.#G.compressed = Y !== 0));
        ((this.#G.opcode = I), (this.#G.masked = G), (this.#G.fin = Q), (this.#G.fragmented = D));
      } else if (this.#I === OY.PAYLOADLENGTH_16) {
        if (this.#B < 2) return A();
        let B = this.consume(2);
        ((this.#G.payloadLength = B.readUInt16BE(0)), (this.#I = OY.READ_DATA));
      } else if (this.#I === OY.PAYLOADLENGTH_64) {
        if (this.#B < 8) return A();
        let B = this.consume(8),
          Q = B.readUInt32BE(0);
        if (Q > 2147483647) {
          ZC(this.ws, 'Received payload length > 2^31 bytes.');
          return;
        }
        let I = B.readUInt32BE(4);
        ((this.#G.payloadLength = (Q << 8) + I), (this.#I = OY.READ_DATA));
      } else if (this.#I === OY.READ_DATA) {
        if (this.#B < this.#G.payloadLength) return A();
        let B = this.consume(this.#G.payloadLength);
        if (Rb0(this.#G.opcode)) ((this.#Q = this.parseControlFrame(B)), (this.#I = OY.INFO));
        else if (!this.#G.compressed) {
          if ((this.#W.push(B), !this.#G.fragmented && this.#G.fin)) {
            let Q = Buffer.concat(this.#W);
            (Lb0(this.ws, this.#G.binaryType, Q), (this.#W.length = 0));
          }
          this.#I = OY.INFO;
        } else {
          (this.#D.get('permessage-deflate').decompress(B, this.#G.fin, (Q, I) => {
            if (Q) {
              Tb0(this.ws, 1007, Q.message, Q.message.length);
              return;
            }
            if ((this.#W.push(I), !this.#G.fin)) {
              ((this.#I = OY.INFO), (this.#Q = !0), this.run(A));
              return;
            }
            (Lb0(this.ws, this.#G.binaryType, Buffer.concat(this.#W)),
              (this.#Q = !0),
              (this.#I = OY.INFO),
              (this.#W.length = 0),
              this.run(A));
          }),
            (this.#Q = !1));
          break;
        }
      }
  }
  consume(A) {
    if (A > this.#B) throw new Error('Called consume() before buffers satiated.');
    else if (A === 0) return Ub0;
    if (this.#A[0].length === A) return ((this.#B -= this.#A[0].length), this.#A.shift());
    let B = Buffer.allocUnsafe(A),
      Q = 0;
    while (Q !== A) {
      let I = this.#A[0],
        { length: G } = I;
      if (G + Q === A) {
        B.set(this.#A.shift(), Q);
        break;
      } else if (G + Q > A) {
        (B.set(I.subarray(0, A - Q), Q), (this.#A[0] = I.subarray(A - Q)));
        break;
      } else (B.set(this.#A.shift(), Q), (Q += I.length));
    }
    return ((this.#B -= A), B);
  }
  parseCloseBody(A) {
    hY6(A.length !== 1);
    let B;
    if (A.length >= 2) B = A.readUInt16BE(0);
    if (B !== void 0 && !uY6(B)) return { code: 1002, reason: 'Invalid status code', error: !0 };
    let Q = A.subarray(2);
    if (Q[0] === 239 && Q[1] === 187 && Q[2] === 191) Q = Q.subarray(3);
    try {
      Q = cY6(Q);
    } catch {
      return { code: 1007, reason: 'Invalid UTF-8', error: !0 };
    }
    return { code: B, reason: Q, error: !1 };
  }
  parseControlFrame(A) {
    let { opcode: B, payloadLength: Q } = this.#G;
    if (B === Uh.CLOSE) {
      if (Q === 1) return (ZC(this.ws, 'Received close frame with a 1-byte body.'), !1);
      if (((this.#G.closeInfo = this.parseCloseBody(A)), this.#G.closeInfo.error)) {
        let { code: I, reason: G } = this.#G.closeInfo;
        return (Tb0(this.ws, I, G, G.length), ZC(this.ws, G), !1);
      }
      if (this.ws[$b0] !== Nb0.SENT) {
        let I = Ub0;
        if (this.#G.closeInfo.code)
          ((I = Buffer.allocUnsafe(2)), I.writeUInt16BE(this.#G.closeInfo.code, 0));
        let G = new Ob0(I);
        this.ws[qb0].socket.write(G.createFrame(Uh.CLOSE), (D) => {
          if (!D) this.ws[$b0] = Nb0.SENT;
        });
      }
      return ((this.ws[dY6] = mY6.CLOSING), (this.ws[Mb0] = !0), !1);
    } else if (B === Uh.PING) {
      if (!this.ws[Mb0]) {
        let I = new Ob0(A);
        if ((this.ws[qb0].socket.write(I.createFrame(Uh.PONG)), mW1.ping.hasSubscribers))
          mW1.ping.publish({ payload: A });
      }
    } else if (B === Uh.PONG) {
      if (mW1.pong.hasSubscribers) mW1.pong.publish({ payload: A });
    }
    return !0;
  }
  get closingInfo() {
    return this.#G.closeInfo;
  }
}
Sb0.exports = { ByteParser: Pb0 };
