// Module: Nv1
// Params: iW8,wz0

var { defineProperty: VD1, getOwnPropertyDescriptor: nd4, getOwnPropertyNames: ad4 } = Object,
  sd4 = Object.prototype.hasOwnProperty,
  rd4 = (A, B) => VD1(A, 'name', { value: B, configurable: !0 }),
  od4 = (A, B) => {
    for (var Q in B) VD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  td4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of ad4(B))
        if (!sd4.call(A, G) && G !== Q)
          VD1(A, G, { get: () => B[G], enumerable: !(I = nd4(B, G)) || I.enumerable });
    }
    return A;
  },
  ed4 = (A) => td4(VD1({}, '__esModule', { value: !0 }), A),
  Hz0 = {};
od4(Hz0, { buildQueryString: () => zz0 });
wz0.exports = ed4(Hz0);
var Uv1 = Kz0();
function zz0(A) {
  let B = [];
  for (let Q of Object.keys(A).sort()) {
    let I = A[Q];
    if (((Q = Uv1.escapeUri(Q)), Array.isArray(I)))
      for (let G = 0, D = I.length; G < D; G++) B.push(`${Q}=${Uv1.escapeUri(I[G])}`);
    else {
      let G = Q;
      if (I || typeof I === 'string') G += `=${Uv1.escapeUri(I)}`;
      B.push(G);
    }
  }
  return B.join('&');
}
rd4(zz0, 'buildQueryString');
