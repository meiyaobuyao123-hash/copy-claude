// Module: WD1
// Params: mW8,oH0

var { defineProperty: YD1, getOwnPropertyDescriptor: Xd4, getOwnPropertyNames: Vd4 } = Object,
  Kd4 = Object.prototype.hasOwnProperty,
  sH0 = (A, B) => YD1(A, 'name', { value: B, configurable: !0 }),
  Hd4 = (A, B) => {
    for (var Q in B) YD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  zd4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Vd4(B))
        if (!Kd4.call(A, G) && G !== Q)
          YD1(A, G, { get: () => B[G], enumerable: !(I = Xd4(B, G)) || I.enumerable });
    }
    return A;
  },
  wd4 = (A) => zd4(YD1({}, '__esModule', { value: !0 }), A),
  rH0 = {};
Hd4(rH0, { fromArrayBuffer: () => Ud4, fromString: () => Nd4 });
oH0.exports = wd4(rH0);
var Ed4 = aH0(),
  Kv1 = D1('buffer'),
  Ud4 = sH0((A, B = 0, Q = A.byteLength - B) => {
    if (!Ed4.isArrayBuffer(A))
      throw new TypeError(
        `The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`
      );
    return Kv1.Buffer.from(A, B, Q);
  }, 'fromArrayBuffer'),
  Nd4 = sH0((A, B) => {
    if (typeof A !== 'string')
      throw new TypeError(
        `The "input" argument must be of type string. Received type ${typeof A} (${A})`
      );
    return B ? Kv1.Buffer.from(A, B) : Kv1.Buffer.from(A);
  }, 'fromString');
