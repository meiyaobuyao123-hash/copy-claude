// Module: sY0
// Params: bZ8,aY0

var { defineProperty: CG1, getOwnPropertyDescriptor: Py4, getOwnPropertyNames: Sy4 } = Object,
  _y4 = Object.prototype.hasOwnProperty,
  iY0 = (A, B) => CG1(A, 'name', { value: B, configurable: !0 }),
  jy4 = (A, B) => {
    for (var Q in B) CG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  yy4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Sy4(B))
        if (!_y4.call(A, G) && G !== Q)
          CG1(A, G, { get: () => B[G], enumerable: !(I = Py4(B, G)) || I.enumerable });
    }
    return A;
  },
  ky4 = (A) => yy4(CG1({}, '__esModule', { value: !0 }), A),
  nY0 = {};
jy4(nY0, { getSmithyContext: () => xy4, normalizeProvider: () => fy4 });
aY0.exports = ky4(nY0);
var lY0 = cY0(),
  xy4 = iY0(
    (A) => A[lY0.SMITHY_CONTEXT_KEY] || (A[lY0.SMITHY_CONTEXT_KEY] = {}),
    'getSmithyContext'
  ),
  fy4 = iY0((A) => {
    if (typeof A === 'function') return A;
    let B = Promise.resolve(A);
    return () => B;
  }, 'normalizeProvider');
