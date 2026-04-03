// Module: Jf1
// Params: gZ8,oY0

var { defineProperty: XG1, getOwnPropertyDescriptor: vy4, getOwnPropertyNames: by4 } = Object,
  gy4 = Object.prototype.hasOwnProperty,
  hy4 = (A, B) => XG1(A, 'name', { value: B, configurable: !0 }),
  my4 = (A, B) => {
    for (var Q in B) XG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  dy4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of by4(B))
        if (!gy4.call(A, G) && G !== Q)
          XG1(A, G, { get: () => B[G], enumerable: !(I = vy4(B, G)) || I.enumerable });
    }
    return A;
  },
  uy4 = (A) => dy4(XG1({}, '__esModule', { value: !0 }), A),
  rY0 = {};
my4(rY0, { isArrayBuffer: () => py4 });
oY0.exports = uy4(rY0);
var py4 = hy4(
  (A) =>
    (typeof ArrayBuffer === 'function' && A instanceof ArrayBuffer) ||
    Object.prototype.toString.call(A) === '[object ArrayBuffer]',
  'isArrayBuffer'
);
