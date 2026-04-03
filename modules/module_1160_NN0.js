// Module: NN0
// Params: mF8,UN0

var { defineProperty: nD1, getOwnPropertyDescriptor: ei4, getOwnPropertyNames: An4 } = Object,
  Bn4 = Object.prototype.hasOwnProperty,
  Qb1 = (A, B) => nD1(A, 'name', { value: B, configurable: !0 }),
  Qn4 = (A, B) => {
    for (var Q in B) nD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  In4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of An4(B))
        if (!Bn4.call(A, G) && G !== Q)
          nD1(A, G, { get: () => B[G], enumerable: !(I = ei4(B, G)) || I.enumerable });
    }
    return A;
  },
  Gn4 = (A) => In4(nD1({}, '__esModule', { value: !0 }), A),
  zN0 = {};
Qn4(zN0, { EventStreamMarshaller: () => EN0, eventStreamSerdeProvider: () => Yn4 });
UN0.exports = Gn4(zN0);
var Dn4 = HN0(),
  Zn4 = D1('stream');
async function* wN0(A) {
  let B = !1,
    Q = !1,
    I = new Array();
  (A.on('error', (G) => {
    if (!B) B = !0;
    if (G) throw G;
  }),
    A.on('data', (G) => {
      I.push(G);
    }),
    A.on('end', () => {
      B = !0;
    }));
  while (!Q) {
    let G = await new Promise((D) => setTimeout(() => D(I.shift()), 0));
    if (G) yield G;
    Q = B && I.length === 0;
  }
}
Qb1(wN0, 'readabletoIterable');
var EN0 = class {
    static {
      Qb1(this, 'EventStreamMarshaller');
    }
    constructor({ utf8Encoder: A, utf8Decoder: B }) {
      this.universalMarshaller = new Dn4.EventStreamMarshaller({ utf8Decoder: B, utf8Encoder: A });
    }
    deserialize(A, B) {
      let Q = typeof A[Symbol.asyncIterator] === 'function' ? A : wN0(A);
      return this.universalMarshaller.deserialize(Q, B);
    }
    serialize(A, B) {
      return Zn4.Readable.from(this.universalMarshaller.serialize(A, B));
    }
  },
  Yn4 = Qb1((A) => new EN0(A), 'eventStreamSerdeProvider');
