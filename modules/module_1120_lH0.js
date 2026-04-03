// Module: lH0
// Params: gW8,cH0

var { defineProperty: DD1, getOwnPropertyDescriptor: sm4, getOwnPropertyNames: rm4 } = Object,
  om4 = Object.prototype.hasOwnProperty,
  Vv1 = (A, B) => DD1(A, 'name', { value: B, configurable: !0 }),
  tm4 = (A, B) => {
    for (var Q in B) DD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  em4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of rm4(B))
        if (!om4.call(A, G) && G !== Q)
          DD1(A, G, { get: () => B[G], enumerable: !(I = sm4(B, G)) || I.enumerable });
    }
    return A;
  },
  Ad4 = (A) => em4(DD1({}, '__esModule', { value: !0 }), A),
  mH0 = {};
tm4(mH0, { EventStreamMarshaller: () => pH0, eventStreamSerdeProvider: () => Id4 });
cH0.exports = Ad4(mH0);
var Bd4 = hH0(),
  Qd4 = D1('stream');
async function* dH0(A) {
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
Vv1(dH0, 'readabletoIterable');
var uH0 = class A {
  constructor({ utf8Encoder: B, utf8Decoder: Q }) {
    this.universalMarshaller = new Bd4.EventStreamMarshaller({ utf8Decoder: Q, utf8Encoder: B });
  }
  deserialize(B, Q) {
    let I = typeof B[Symbol.asyncIterator] === 'function' ? B : dH0(B);
    return this.universalMarshaller.deserialize(I, Q);
  }
  serialize(B, Q) {
    return Qd4.Readable.from(this.universalMarshaller.serialize(B, Q));
  }
};
Vv1(uH0, 'EventStreamMarshaller');
var pH0 = uH0,
  Id4 = Vv1((A) => new pH0(A), 'eventStreamSerdeProvider');
