// Module: FN0
// Params: fF8,WN0

var { defineProperty: cD1, getOwnPropertyDescriptor: vi4, getOwnPropertyNames: bi4 } = Object,
  gi4 = Object.prototype.hasOwnProperty,
  lD1 = (A, B) => cD1(A, 'name', { value: B, configurable: !0 }),
  hi4 = (A, B) => {
    for (var Q in B) cD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  mi4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of bi4(B))
        if (!gi4.call(A, G) && G !== Q)
          cD1(A, G, { get: () => B[G], enumerable: !(I = vi4(B, G)) || I.enumerable });
    }
    return A;
  },
  di4 = (A) => mi4(cD1({}, '__esModule', { value: !0 }), A),
  ZN0 = {};
hi4(ZN0, { eventStreamPayloadHandlerProvider: () => li4 });
WN0.exports = di4(ZN0);
var ui4 = Bb1(),
  pD1 = D1('stream'),
  pi4 = class extends pD1.Transform {
    static {
      lD1(this, 'EventSigningStream');
    }
    priorSignature;
    messageSigner;
    eventStreamCodec;
    systemClockOffsetProvider;
    constructor(A) {
      super({ autoDestroy: !0, readableObjectMode: !0, writableObjectMode: !0, ...A });
      ((this.priorSignature = A.priorSignature),
        (this.eventStreamCodec = A.eventStreamCodec),
        (this.messageSigner = A.messageSigner),
        (this.systemClockOffsetProvider = A.systemClockOffsetProvider));
    }
    async _transform(A, B, Q) {
      try {
        let I = new Date(Date.now() + (await this.systemClockOffsetProvider())),
          G = { ':date': { type: 'timestamp', value: I } },
          D = await this.messageSigner.sign(
            { message: { body: A, headers: G }, priorSignature: this.priorSignature },
            { signingDate: I }
          );
        this.priorSignature = D.signature;
        let Z = this.eventStreamCodec.encode({
          headers: { ...G, ':chunk-signature': { type: 'binary', value: YN0(D.signature) } },
          body: A,
        });
        return (this.push(Z), Q());
      } catch (I) {
        Q(I);
      }
    }
  };
function YN0(A) {
  let B = Buffer.from(A, 'hex');
  return new Uint8Array(B.buffer, B.byteOffset, B.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
lD1(YN0, 'getSignatureBinary');
var ci4 = class {
    static {
      lD1(this, 'EventStreamPayloadHandler');
    }
    messageSigner;
    eventStreamCodec;
    systemClockOffsetProvider;
    constructor(A) {
      ((this.messageSigner = A.messageSigner),
        (this.eventStreamCodec = new ui4.EventStreamCodec(A.utf8Encoder, A.utf8Decoder)),
        (this.systemClockOffsetProvider = async () => A.systemClockOffset ?? 0));
    }
    async handle(A, B, Q = {}) {
      let I = B.request,
        { body: G, query: D } = I;
      if (!(G instanceof pD1.Readable))
        throw new Error('Eventstream payload must be a Readable stream.');
      let Z = G;
      I.body = new pD1.PassThrough({ objectMode: !0 });
      let W =
          I.headers?.authorization?.match(/Signature=([\w]+)$/)?.[1] ??
          D?.['X-Amz-Signature'] ??
          '',
        F = new pi4({
          priorSignature: W,
          eventStreamCodec: this.eventStreamCodec,
          messageSigner: await this.messageSigner(),
          systemClockOffsetProvider: this.systemClockOffsetProvider,
        });
      pD1.pipeline(Z, F, I.body, (C) => {
        if (C) throw C;
      });
      let J;
      try {
        J = await A(B);
      } catch (C) {
        throw (I.body.end(), C);
      }
      return J;
    }
  },
  li4 = lD1((A) => new ci4(A), 'eventStreamPayloadHandlerProvider');
