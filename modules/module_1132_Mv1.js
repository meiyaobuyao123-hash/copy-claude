// Module: Mv1
// Params: rW8,gz0

var { defineProperty: wD1, getOwnPropertyDescriptor: Lu4, getOwnPropertyNames: Ru4 } = Object,
  Ou4 = Object.prototype.hasOwnProperty,
  vz0 = (A, B) => wD1(A, 'name', { value: B, configurable: !0 }),
  Tu4 = (A, B) => {
    for (var Q in B) wD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Pu4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Ru4(B))
        if (!Ou4.call(A, G) && G !== Q)
          wD1(A, G, { get: () => B[G], enumerable: !(I = Lu4(B, G)) || I.enumerable });
    }
    return A;
  },
  Su4 = (A) => Pu4(wD1({}, '__esModule', { value: !0 }), A),
  bz0 = {};
Tu4(bz0, { fromArrayBuffer: () => ju4, fromString: () => yu4 });
gz0.exports = Su4(bz0);
var _u4 = fz0(),
  qv1 = D1('buffer'),
  ju4 = vz0((A, B = 0, Q = A.byteLength - B) => {
    if (!_u4.isArrayBuffer(A))
      throw new TypeError(
        `The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`
      );
    return qv1.Buffer.from(A, B, Q);
  }, 'fromArrayBuffer'),
  yu4 = vz0((A, B) => {
    if (typeof A !== 'string')
      throw new TypeError(
        `The "input" argument must be of type string. Received type ${typeof A} (${A})`
      );
    return B ? qv1.Buffer.from(A, B) : qv1.Buffer.from(A);
  }, 'fromString');
