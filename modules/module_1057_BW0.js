// Module: BW0
// Params: hZ8,AW0

var { defineProperty: VG1, getOwnPropertyDescriptor: cy4, getOwnPropertyNames: ly4 } = Object,
  iy4 = Object.prototype.hasOwnProperty,
  tY0 = (A, B) => VG1(A, 'name', { value: B, configurable: !0 }),
  ny4 = (A, B) => {
    for (var Q in B) VG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  ay4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of ly4(B))
        if (!iy4.call(A, G) && G !== Q)
          VG1(A, G, { get: () => B[G], enumerable: !(I = cy4(B, G)) || I.enumerable });
    }
    return A;
  },
  sy4 = (A) => ay4(VG1({}, '__esModule', { value: !0 }), A),
  eY0 = {};
ny4(eY0, { fromArrayBuffer: () => oy4, fromString: () => ty4 });
AW0.exports = sy4(eY0);
var ry4 = Jf1(),
  Cf1 = D1('buffer'),
  oy4 = tY0((A, B = 0, Q = A.byteLength - B) => {
    if (!ry4.isArrayBuffer(A))
      throw new TypeError(
        `The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`
      );
    return Cf1.Buffer.from(A, B, Q);
  }, 'fromArrayBuffer'),
  ty4 = tY0((A, B) => {
    if (typeof A !== 'string')
      throw new TypeError(
        `The "input" argument must be of type string. Received type ${typeof A} (${A})`
      );
    return B ? Cf1.Buffer.from(A, B) : Cf1.Buffer.from(A);
  }, 'fromString');
