// Module: Bb1
// Params: PF8,DN0

var { defineProperty: uD1, getOwnPropertyDescriptor: Vi4, getOwnPropertyNames: Ki4 } = Object,
  Hi4 = Object.prototype.hasOwnProperty,
  bU = (A, B) => uD1(A, 'name', { value: B, configurable: !0 }),
  zi4 = (A, B) => {
    for (var Q in B) uD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  wi4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Ki4(B))
        if (!Hi4.call(A, G) && G !== Q)
          uD1(A, G, { get: () => B[G], enumerable: !(I = Vi4(B, G)) || I.enumerable });
    }
    return A;
  },
  Ei4 = (A) => wi4(uD1({}, '__esModule', { value: !0 }), A),
  BN0 = {};
zi4(BN0, {
  EventStreamCodec: () => ji4,
  HeaderMarshaller: () => QN0,
  Int64: () => dD1,
  MessageDecoderStream: () => yi4,
  MessageEncoderStream: () => ki4,
  SmithyMessageDecoderStream: () => xi4,
  SmithyMessageEncoderStream: () => fi4,
});
DN0.exports = Ei4(BN0);
var Ui4 = mD1(),
  zS = v51(),
  dD1 = class A {
    constructor(B) {
      if (((this.bytes = B), B.byteLength !== 8))
        throw new Error('Int64 buffers must be exactly 8 bytes');
    }
    static {
      bU(this, 'Int64');
    }
    static fromNumber(B) {
      if (B > 9223372036854776000 || B < -9223372036854776000)
        throw new Error(`${B} is too large (or, if negative, too small) to represent as an Int64`);
      let Q = new Uint8Array(8);
      for (let I = 7, G = Math.abs(Math.round(B)); I > -1 && G > 0; I--, G /= 256) Q[I] = G;
      if (B < 0) Ab1(Q);
      return new A(Q);
    }
    valueOf() {
      let B = this.bytes.slice(0),
        Q = B[0] & 128;
      if (Q) Ab1(B);
      return parseInt(zS.toHex(B), 16) * (Q ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  };
function Ab1(A) {
  for (let B = 0; B < 8; B++) A[B] ^= 255;
  for (let B = 7; B > -1; B--) if ((A[B]++, A[B] !== 0)) break;
}
bU(Ab1, 'negate');
var QN0 = class {
    constructor(A, B) {
      ((this.toUtf8 = A), (this.fromUtf8 = B));
    }
    static {
      bU(this, 'HeaderMarshaller');
    }
    format(A) {
      let B = [];
      for (let G of Object.keys(A)) {
        let D = this.fromUtf8(G);
        B.push(Uint8Array.from([D.byteLength]), D, this.formatHeaderValue(A[G]));
      }
      let Q = new Uint8Array(B.reduce((G, D) => G + D.byteLength, 0)),
        I = 0;
      for (let G of B) (Q.set(G, I), (I += G.byteLength));
      return Q;
    }
    formatHeaderValue(A) {
      switch (A.type) {
        case 'boolean':
          return Uint8Array.from([A.value ? 0 : 1]);
        case 'byte':
          return Uint8Array.from([2, A.value]);
        case 'short':
          let B = new DataView(new ArrayBuffer(3));
          return (B.setUint8(0, 3), B.setInt16(1, A.value, !1), new Uint8Array(B.buffer));
        case 'integer':
          let Q = new DataView(new ArrayBuffer(5));
          return (Q.setUint8(0, 4), Q.setInt32(1, A.value, !1), new Uint8Array(Q.buffer));
        case 'long':
          let I = new Uint8Array(9);
          return ((I[0] = 5), I.set(A.value.bytes, 1), I);
        case 'binary':
          let G = new DataView(new ArrayBuffer(3 + A.value.byteLength));
          (G.setUint8(0, 6), G.setUint16(1, A.value.byteLength, !1));
          let D = new Uint8Array(G.buffer);
          return (D.set(A.value, 3), D);
        case 'string':
          let Z = this.fromUtf8(A.value),
            Y = new DataView(new ArrayBuffer(3 + Z.byteLength));
          (Y.setUint8(0, 7), Y.setUint16(1, Z.byteLength, !1));
          let W = new Uint8Array(Y.buffer);
          return (W.set(Z, 3), W);
        case 'timestamp':
          let F = new Uint8Array(9);
          return ((F[0] = 8), F.set(dD1.fromNumber(A.value.valueOf()).bytes, 1), F);
        case 'uuid':
          if (!Pi4.test(A.value)) throw new Error(`Invalid UUID received: ${A.value}`);
          let J = new Uint8Array(17);
          return ((J[0] = 9), J.set(zS.fromHex(A.value.replace(/\-/g, '')), 1), J);
      }
    }
    parse(A) {
      let B = {},
        Q = 0;
      while (Q < A.byteLength) {
        let I = A.getUint8(Q++),
          G = this.toUtf8(new Uint8Array(A.buffer, A.byteOffset + Q, I));
        switch (((Q += I), A.getUint8(Q++))) {
          case 0:
            B[G] = { type: AN0, value: !0 };
            break;
          case 1:
            B[G] = { type: AN0, value: !1 };
            break;
          case 2:
            B[G] = { type: Ni4, value: A.getInt8(Q++) };
            break;
          case 3:
            ((B[G] = { type: $i4, value: A.getInt16(Q, !1) }), (Q += 2));
            break;
          case 4:
            ((B[G] = { type: qi4, value: A.getInt32(Q, !1) }), (Q += 4));
            break;
          case 5:
            ((B[G] = { type: Mi4, value: new dD1(new Uint8Array(A.buffer, A.byteOffset + Q, 8)) }),
              (Q += 8));
            break;
          case 6:
            let D = A.getUint16(Q, !1);
            ((Q += 2),
              (B[G] = { type: Li4, value: new Uint8Array(A.buffer, A.byteOffset + Q, D) }),
              (Q += D));
            break;
          case 7:
            let Z = A.getUint16(Q, !1);
            ((Q += 2),
              (B[G] = {
                type: Ri4,
                value: this.toUtf8(new Uint8Array(A.buffer, A.byteOffset + Q, Z)),
              }),
              (Q += Z));
            break;
          case 8:
            ((B[G] = {
              type: Oi4,
              value: new Date(new dD1(new Uint8Array(A.buffer, A.byteOffset + Q, 8)).valueOf()),
            }),
              (Q += 8));
            break;
          case 9:
            let Y = new Uint8Array(A.buffer, A.byteOffset + Q, 16);
            ((Q += 16),
              (B[G] = {
                type: Ti4,
                value: `${zS.toHex(Y.subarray(0, 4))}-${zS.toHex(Y.subarray(4, 6))}-${zS.toHex(Y.subarray(6, 8))}-${zS.toHex(Y.subarray(8, 10))}-${zS.toHex(Y.subarray(10))}`,
              }));
            break;
          default:
            throw new Error('Unrecognized header type tag');
        }
      }
      return B;
    }
  },
  AN0 = 'boolean',
  Ni4 = 'byte',
  $i4 = 'short',
  qi4 = 'integer',
  Mi4 = 'long',
  Li4 = 'binary',
  Ri4 = 'string',
  Oi4 = 'timestamp',
  Ti4 = 'uuid',
  Pi4 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
  Si4 = mD1(),
  IN0 = 4,
  JL = IN0 * 2,
  wS = 4,
  _i4 = JL + wS * 2;
function GN0({ byteLength: A, byteOffset: B, buffer: Q }) {
  if (A < _i4)
    throw new Error('Provided message too short to accommodate event stream message overhead');
  let I = new DataView(Q, B, A),
    G = I.getUint32(0, !1);
  if (A !== G) throw new Error('Reported message length does not match received message length');
  let D = I.getUint32(IN0, !1),
    Z = I.getUint32(JL, !1),
    Y = I.getUint32(A - wS, !1),
    W = new Si4.Crc32().update(new Uint8Array(Q, B, JL));
  if (Z !== W.digest())
    throw new Error(
      `The prelude checksum specified in the message (${Z}) does not match the calculated CRC32 checksum (${W.digest()})`
    );
  if ((W.update(new Uint8Array(Q, B + JL, A - (JL + wS))), Y !== W.digest()))
    throw new Error(
      `The message checksum (${W.digest()}) did not match the expected value of ${Y}`
    );
  return {
    headers: new DataView(Q, B + JL + wS, D),
    body: new Uint8Array(Q, B + JL + wS + D, G - D - (JL + wS + wS)),
  };
}
bU(GN0, 'splitMessage');
var ji4 = class {
    static {
      bU(this, 'EventStreamCodec');
    }
    constructor(A, B) {
      ((this.headerMarshaller = new QN0(A, B)),
        (this.messageBuffer = []),
        (this.isEndOfStream = !1));
    }
    feed(A) {
      this.messageBuffer.push(this.decode(A));
    }
    endOfStream() {
      this.isEndOfStream = !0;
    }
    getMessage() {
      let A = this.messageBuffer.pop(),
        B = this.isEndOfStream;
      return {
        getMessage() {
          return A;
        },
        isEndOfStream() {
          return B;
        },
      };
    }
    getAvailableMessages() {
      let A = this.messageBuffer;
      this.messageBuffer = [];
      let B = this.isEndOfStream;
      return {
        getMessages() {
          return A;
        },
        isEndOfStream() {
          return B;
        },
      };
    }
    encode({ headers: A, body: B }) {
      let Q = this.headerMarshaller.format(A),
        I = Q.byteLength + B.byteLength + 16,
        G = new Uint8Array(I),
        D = new DataView(G.buffer, G.byteOffset, G.byteLength),
        Z = new Ui4.Crc32();
      return (
        D.setUint32(0, I, !1),
        D.setUint32(4, Q.byteLength, !1),
        D.setUint32(8, Z.update(G.subarray(0, 8)).digest(), !1),
        G.set(Q, 12),
        G.set(B, Q.byteLength + 12),
        D.setUint32(I - 4, Z.update(G.subarray(8, I - 4)).digest(), !1),
        G
      );
    }
    decode(A) {
      let { headers: B, body: Q } = GN0(A);
      return { headers: this.headerMarshaller.parse(B), body: Q };
    }
    formatHeaders(A) {
      return this.headerMarshaller.format(A);
    }
  },
  yi4 = class {
    constructor(A) {
      this.options = A;
    }
    static {
      bU(this, 'MessageDecoderStream');
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let A of this.options.inputStream) yield this.options.decoder.decode(A);
    }
  },
  ki4 = class {
    constructor(A) {
      this.options = A;
    }
    static {
      bU(this, 'MessageEncoderStream');
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let A of this.options.messageStream) yield this.options.encoder.encode(A);
      if (this.options.includeEndFrame) yield new Uint8Array(0);
    }
  },
  xi4 = class {
    constructor(A) {
      this.options = A;
    }
    static {
      bU(this, 'SmithyMessageDecoderStream');
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let A of this.options.messageStream) {
        let B = await this.options.deserializer(A);
        if (B === void 0) continue;
        yield B;
      }
    }
  },
  fi4 = class {
    constructor(A) {
      this.options = A;
    }
    static {
      bU(this, 'SmithyMessageEncoderStream');
    }
    [Symbol.asyncIterator]() {
      return this.asyncIterator();
    }
    async *asyncIterator() {
      for await (let A of this.options.inputStream) yield this.options.serializer(A);
    }
  };
