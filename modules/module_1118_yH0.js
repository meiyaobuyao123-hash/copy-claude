// Module: yH0
// Params: vW8,jH0

var { defineProperty: ID1, getOwnPropertyDescriptor: Um4, getOwnPropertyNames: Nm4 } = Object,
  $m4 = Object.prototype.hasOwnProperty,
  vU = (A, B) => ID1(A, 'name', { value: B, configurable: !0 }),
  qm4 = (A, B) => {
    for (var Q in B) ID1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Mm4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Nm4(B))
        if (!$m4.call(A, G) && G !== Q)
          ID1(A, G, { get: () => B[G], enumerable: !(I = Um4(B, G)) || I.enumerable });
    }
    return A;
  },
  Lm4 = (A) => Mm4(ID1({}, '__esModule', { value: !0 }), A),
  NH0 = {};
qm4(NH0, {
  EventStreamCodec: () => bm4,
  HeaderMarshaller: () => MH0,
  Int64: () => QD1,
  MessageDecoderStream: () => gm4,
  MessageEncoderStream: () => hm4,
  SmithyMessageDecoderStream: () => mm4,
  SmithyMessageEncoderStream: () => dm4,
});
jH0.exports = Lm4(NH0);
var Rm4 = AD1(),
  VS = EH0(),
  $H0 = class A {
    constructor(B) {
      if (((this.bytes = B), B.byteLength !== 8))
        throw new Error('Int64 buffers must be exactly 8 bytes');
    }
    static fromNumber(B) {
      if (B > 9223372036854776000 || B < -9223372036854776000)
        throw new Error(`${B} is too large (or, if negative, too small) to represent as an Int64`);
      let Q = new Uint8Array(8);
      for (let I = 7, G = Math.abs(Math.round(B)); I > -1 && G > 0; I--, G /= 256) Q[I] = G;
      if (B < 0) Xv1(Q);
      return new A(Q);
    }
    valueOf() {
      let B = this.bytes.slice(0),
        Q = B[0] & 128;
      if (Q) Xv1(B);
      return parseInt(VS.toHex(B), 16) * (Q ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
vU($H0, 'Int64');
var QD1 = $H0;
function Xv1(A) {
  for (let B = 0; B < 8; B++) A[B] ^= 255;
  for (let B = 7; B > -1; B--) if ((A[B]++, A[B] !== 0)) break;
}
vU(Xv1, 'negate');
var qH0 = class A {
  constructor(B, Q) {
    ((this.toUtf8 = B), (this.fromUtf8 = Q));
  }
  format(B) {
    let Q = [];
    for (let D of Object.keys(B)) {
      let Z = this.fromUtf8(D);
      Q.push(Uint8Array.from([Z.byteLength]), Z, this.formatHeaderValue(B[D]));
    }
    let I = new Uint8Array(Q.reduce((D, Z) => D + Z.byteLength, 0)),
      G = 0;
    for (let D of Q) (I.set(D, G), (G += D.byteLength));
    return I;
  }
  formatHeaderValue(B) {
    switch (B.type) {
      case 'boolean':
        return Uint8Array.from([B.value ? 0 : 1]);
      case 'byte':
        return Uint8Array.from([2, B.value]);
      case 'short':
        let Q = new DataView(new ArrayBuffer(3));
        return (Q.setUint8(0, 3), Q.setInt16(1, B.value, !1), new Uint8Array(Q.buffer));
      case 'integer':
        let I = new DataView(new ArrayBuffer(5));
        return (I.setUint8(0, 4), I.setInt32(1, B.value, !1), new Uint8Array(I.buffer));
      case 'long':
        let G = new Uint8Array(9);
        return ((G[0] = 5), G.set(B.value.bytes, 1), G);
      case 'binary':
        let D = new DataView(new ArrayBuffer(3 + B.value.byteLength));
        (D.setUint8(0, 6), D.setUint16(1, B.value.byteLength, !1));
        let Z = new Uint8Array(D.buffer);
        return (Z.set(B.value, 3), Z);
      case 'string':
        let Y = this.fromUtf8(B.value),
          W = new DataView(new ArrayBuffer(3 + Y.byteLength));
        (W.setUint8(0, 7), W.setUint16(1, Y.byteLength, !1));
        let F = new Uint8Array(W.buffer);
        return (F.set(Y, 3), F);
      case 'timestamp':
        let J = new Uint8Array(9);
        return ((J[0] = 8), J.set(QD1.fromNumber(B.value.valueOf()).bytes, 1), J);
      case 'uuid':
        if (!xm4.test(B.value)) throw new Error(`Invalid UUID received: ${B.value}`);
        let C = new Uint8Array(17);
        return ((C[0] = 9), C.set(VS.fromHex(B.value.replace(/\-/g, '')), 1), C);
    }
  }
  parse(B) {
    let Q = {},
      I = 0;
    while (I < B.byteLength) {
      let G = B.getUint8(I++),
        D = this.toUtf8(new Uint8Array(B.buffer, B.byteOffset + I, G));
      switch (((I += G), B.getUint8(I++))) {
        case 0:
          Q[D] = { type: UH0, value: !0 };
          break;
        case 1:
          Q[D] = { type: UH0, value: !1 };
          break;
        case 2:
          Q[D] = { type: Om4, value: B.getInt8(I++) };
          break;
        case 3:
          ((Q[D] = { type: Tm4, value: B.getInt16(I, !1) }), (I += 2));
          break;
        case 4:
          ((Q[D] = { type: Pm4, value: B.getInt32(I, !1) }), (I += 4));
          break;
        case 5:
          ((Q[D] = { type: Sm4, value: new QD1(new Uint8Array(B.buffer, B.byteOffset + I, 8)) }),
            (I += 8));
          break;
        case 6:
          let Z = B.getUint16(I, !1);
          ((I += 2),
            (Q[D] = { type: _m4, value: new Uint8Array(B.buffer, B.byteOffset + I, Z) }),
            (I += Z));
          break;
        case 7:
          let Y = B.getUint16(I, !1);
          ((I += 2),
            (Q[D] = {
              type: jm4,
              value: this.toUtf8(new Uint8Array(B.buffer, B.byteOffset + I, Y)),
            }),
            (I += Y));
          break;
        case 8:
          ((Q[D] = {
            type: ym4,
            value: new Date(new QD1(new Uint8Array(B.buffer, B.byteOffset + I, 8)).valueOf()),
          }),
            (I += 8));
          break;
        case 9:
          let W = new Uint8Array(B.buffer, B.byteOffset + I, 16);
          ((I += 16),
            (Q[D] = {
              type: km4,
              value: `${VS.toHex(W.subarray(0, 4))}-${VS.toHex(W.subarray(4, 6))}-${VS.toHex(W.subarray(6, 8))}-${VS.toHex(W.subarray(8, 10))}-${VS.toHex(W.subarray(10))}`,
            }));
          break;
        default:
          throw new Error('Unrecognized header type tag');
      }
    }
    return Q;
  }
};
vU(qH0, 'HeaderMarshaller');
var MH0 = qH0,
  UH0 = 'boolean',
  Om4 = 'byte',
  Tm4 = 'short',
  Pm4 = 'integer',
  Sm4 = 'long',
  _m4 = 'binary',
  jm4 = 'string',
  ym4 = 'timestamp',
  km4 = 'uuid',
  xm4 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
  fm4 = AD1(),
  LH0 = 4,
  YL = LH0 * 2,
  KS = 4,
  vm4 = YL + KS * 2;
function RH0({ byteLength: A, byteOffset: B, buffer: Q }) {
  if (A < vm4)
    throw new Error('Provided message too short to accommodate event stream message overhead');
  let I = new DataView(Q, B, A),
    G = I.getUint32(0, !1);
  if (A !== G) throw new Error('Reported message length does not match received message length');
  let D = I.getUint32(LH0, !1),
    Z = I.getUint32(YL, !1),
    Y = I.getUint32(A - KS, !1),
    W = new fm4.Crc32().update(new Uint8Array(Q, B, YL));
  if (Z !== W.digest())
    throw new Error(
      `The prelude checksum specified in the message (${Z}) does not match the calculated CRC32 checksum (${W.digest()})`
    );
  if ((W.update(new Uint8Array(Q, B + YL, A - (YL + KS))), Y !== W.digest()))
    throw new Error(
      `The message checksum (${W.digest()}) did not match the expected value of ${Y}`
    );
  return {
    headers: new DataView(Q, B + YL + KS, D),
    body: new Uint8Array(Q, B + YL + KS + D, G - D - (YL + KS + KS)),
  };
}
vU(RH0, 'splitMessage');
var OH0 = class A {
  constructor(B, Q) {
    ((this.headerMarshaller = new MH0(B, Q)), (this.messageBuffer = []), (this.isEndOfStream = !1));
  }
  feed(B) {
    this.messageBuffer.push(this.decode(B));
  }
  endOfStream() {
    this.isEndOfStream = !0;
  }
  getMessage() {
    let B = this.messageBuffer.pop(),
      Q = this.isEndOfStream;
    return {
      getMessage() {
        return B;
      },
      isEndOfStream() {
        return Q;
      },
    };
  }
  getAvailableMessages() {
    let B = this.messageBuffer;
    this.messageBuffer = [];
    let Q = this.isEndOfStream;
    return {
      getMessages() {
        return B;
      },
      isEndOfStream() {
        return Q;
      },
    };
  }
  encode({ headers: B, body: Q }) {
    let I = this.headerMarshaller.format(B),
      G = I.byteLength + Q.byteLength + 16,
      D = new Uint8Array(G),
      Z = new DataView(D.buffer, D.byteOffset, D.byteLength),
      Y = new Rm4.Crc32();
    return (
      Z.setUint32(0, G, !1),
      Z.setUint32(4, I.byteLength, !1),
      Z.setUint32(8, Y.update(D.subarray(0, 8)).digest(), !1),
      D.set(I, 12),
      D.set(Q, I.byteLength + 12),
      Z.setUint32(G - 4, Y.update(D.subarray(8, G - 4)).digest(), !1),
      D
    );
  }
  decode(B) {
    let { headers: Q, body: I } = RH0(B);
    return { headers: this.headerMarshaller.parse(Q), body: I };
  }
  formatHeaders(B) {
    return this.headerMarshaller.format(B);
  }
};
vU(OH0, 'EventStreamCodec');
var bm4 = OH0,
  TH0 = class A {
    constructor(B) {
      this.options = B;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let B of this.options.inputStream) yield this.options.decoder.decode(B);
    }
  };
vU(TH0, 'MessageDecoderStream');
var gm4 = TH0,
  PH0 = class A {
    constructor(B) {
      this.options = B;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let B of this.options.messageStream) yield this.options.encoder.encode(B);
      if (this.options.includeEndFrame) yield new Uint8Array(0);
    }
  };
vU(PH0, 'MessageEncoderStream');
var hm4 = PH0,
  SH0 = class A {
    constructor(B) {
      this.options = B;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let B of this.options.messageStream) {
        let Q = await this.options.deserializer(B);
        if (Q === void 0) continue;
        yield Q;
      }
    }
  };
vU(SH0, 'SmithyMessageDecoderStream');
var mm4 = SH0,
  _H0 = class A {
    constructor(B) {
      this.options = B;
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let B of this.options.inputStream) yield this.options.serializer(B);
    }
  };
vU(_H0, 'SmithyMessageEncoderStream');
var dm4 = _H0;
