// Module: hH0
// Params: bW8,gH0

var { defineProperty: GD1, getOwnPropertyDescriptor: um4, getOwnPropertyNames: pm4 } = Object,
  cm4 = Object.prototype.hasOwnProperty,
  pb = (A, B) => GD1(A, 'name', { value: B, configurable: !0 }),
  lm4 = (A, B) => {
    for (var Q in B) GD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  im4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of pm4(B))
        if (!cm4.call(A, G) && G !== Q)
          GD1(A, G, { get: () => B[G], enumerable: !(I = um4(B, G)) || I.enumerable });
    }
    return A;
  },
  nm4 = (A) => im4(GD1({}, '__esModule', { value: !0 }), A),
  kH0 = {};
lm4(kH0, { EventStreamMarshaller: () => bH0, eventStreamSerdeProvider: () => am4 });
gH0.exports = nm4(kH0);
var Sa = yH0();
function xH0(A) {
  let B = 0,
    Q = 0,
    I = null,
    G = null,
    D = pb((Y) => {
      if (typeof Y !== 'number')
        throw new Error('Attempted to allocate an event message where size was not a number: ' + Y);
      ((B = Y), (Q = 4), (I = new Uint8Array(Y)), new DataView(I.buffer).setUint32(0, Y, !1));
    }, 'allocateMessage'),
    Z = pb(async function* () {
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
pb(xH0, 'getChunkedStream');
function fH0(A, B) {
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
pb(fH0, 'getMessageUnmarshaller');
var vH0 = class A {
  constructor({ utf8Encoder: B, utf8Decoder: Q }) {
    ((this.eventStreamCodec = new Sa.EventStreamCodec(B, Q)), (this.utfEncoder = B));
  }
  deserialize(B, Q) {
    let I = xH0(B);
    return new Sa.SmithyMessageDecoderStream({
      messageStream: new Sa.MessageDecoderStream({
        inputStream: I,
        decoder: this.eventStreamCodec,
      }),
      deserializer: fH0(Q, this.utfEncoder),
    });
  }
  serialize(B, Q) {
    return new Sa.MessageEncoderStream({
      messageStream: new Sa.SmithyMessageEncoderStream({ inputStream: B, serializer: Q }),
      encoder: this.eventStreamCodec,
      includeEndFrame: !0,
    });
  }
};
pb(vH0, 'EventStreamMarshaller');
var bH0 = vH0,
  am4 = pb((A) => new bH0(A), 'eventStreamSerdeProvider');
