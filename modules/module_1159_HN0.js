// Module: HN0
// Params: gF8,KN0

var { defineProperty: iD1, getOwnPropertyDescriptor: ii4, getOwnPropertyNames: ni4 } = Object,
  ai4 = Object.prototype.hasOwnProperty,
  ob = (A, B) => iD1(A, 'name', { value: B, configurable: !0 }),
  si4 = (A, B) => {
    for (var Q in B) iD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  ri4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of ni4(B))
        if (!ai4.call(A, G) && G !== Q)
          iD1(A, G, { get: () => B[G], enumerable: !(I = ii4(B, G)) || I.enumerable });
    }
    return A;
  },
  oi4 = (A) => ri4(iD1({}, '__esModule', { value: !0 }), A),
  JN0 = {};
si4(JN0, { EventStreamMarshaller: () => VN0, eventStreamSerdeProvider: () => ti4 });
KN0.exports = oi4(JN0);
var ba = Bb1();
function CN0(A) {
  let B = 0,
    Q = 0,
    I = null,
    G = null,
    D = ob((Y) => {
      if (typeof Y !== 'number')
        throw new Error('Attempted to allocate an event message where size was not a number: ' + Y);
      ((B = Y), (Q = 4), (I = new Uint8Array(Y)), new DataView(I.buffer).setUint32(0, Y, !1));
    }, 'allocateMessage'),
    Z = ob(async function* () {
      let Y = A[Symbol.asyncIterator]();
      while (!0) {
        let { value: W, done: F } = await Y.next();
        if (F) {
          if (!B) return;
          else if (B === Q) yield I;
          else throw new Error('Truncated event message received.');
          return;
        }
        let J = W.length,
          C = 0;
        while (C < J) {
          if (!I) {
            let V = J - C;
            if (!G) G = new Uint8Array(4);
            let K = Math.min(4 - Q, V);
            if ((G.set(W.slice(C, C + K), Q), (Q += K), (C += K), Q < 4)) break;
            (D(new DataView(G.buffer).getUint32(0, !1)), (G = null));
          }
          let X = Math.min(B - Q, J - C);
          if ((I.set(W.slice(C, C + X), Q), (Q += X), (C += X), B && B === Q))
            (yield I, (I = null), (B = 0), (Q = 0));
        }
      }
    }, 'iterator');
  return { [Symbol.asyncIterator]: Z };
}
ob(CN0, 'getChunkedStream');
function XN0(A, B) {
  return async function (Q) {
    let { value: I } = Q.headers[':message-type'];
    if (I === 'error') {
      let G = new Error(Q.headers[':error-message'].value || 'UnknownError');
      throw ((G.name = Q.headers[':error-code'].value), G);
    } else if (I === 'exception') {
      let G = Q.headers[':exception-type'].value,
        D = { [G]: Q },
        Z = await A(D);
      if (Z.$unknown) {
        let Y = new Error(B(Q.body));
        throw ((Y.name = G), Y);
      }
      throw Z[G];
    } else if (I === 'event') {
      let G = { [Q.headers[':event-type'].value]: Q },
        D = await A(G);
      if (D.$unknown) return;
      return D;
    } else throw Error(`Unrecognizable event type: ${Q.headers[':event-type'].value}`);
  };
}
ob(XN0, 'getMessageUnmarshaller');
var VN0 = class {
    static {
      ob(this, 'EventStreamMarshaller');
    }
    constructor({ utf8Encoder: A, utf8Decoder: B }) {
      ((this.eventStreamCodec = new ba.EventStreamCodec(A, B)), (this.utfEncoder = A));
    }
    deserialize(A, B) {
      let Q = CN0(A);
      return new ba.SmithyMessageDecoderStream({
        messageStream: new ba.MessageDecoderStream({
          inputStream: Q,
          decoder: this.eventStreamCodec,
        }),
        deserializer: XN0(B, this.utfEncoder),
      });
    }
    serialize(A, B) {
      return new ba.MessageEncoderStream({
        messageStream: new ba.SmithyMessageEncoderStream({ inputStream: A, serializer: B }),
        encoder: this.eventStreamCodec,
        includeEndFrame: !0,
      });
    }
  },
  ti4 = ob((A) => new VN0(A), 'eventStreamSerdeProvider');
