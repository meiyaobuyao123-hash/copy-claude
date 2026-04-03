// Module: JvA
// Params: zm5,FvA

var { defineProperty: y51, getOwnPropertyDescriptor: ui9, getOwnPropertyNames: pi9 } = Object,
  ci9 = Object.prototype.hasOwnProperty,
  li9 = (A, B) => y51(A, 'name', { value: B, configurable: !0 }),
  ii9 = (A, B) => {
    for (var Q in B) y51(A, Q, { get: B[Q], enumerable: !0 });
  },
  ni9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of pi9(B))
        if (!ci9.call(A, G) && G !== Q)
          y51(A, G, { get: () => B[G], enumerable: !(I = ui9(B, G)) || I.enumerable });
    }
    return A;
  },
  ai9 = (A) => ni9(y51({}, '__esModule', { value: !0 }), A),
  YvA = {};
ii9(YvA, { buildQueryString: () => WvA });
FvA.exports = ai9(YvA);
var zO1 = ZvA();
function WvA(A) {
  let B = [];
  for (let Q of Object.keys(A).sort()) {
    let I = A[Q];
    if (((Q = zO1.escapeUri(Q)), Array.isArray(I)))
      for (let G = 0, D = I.length; G < D; G++) B.push(`${Q}=${zO1.escapeUri(I[G])}`);
    else {
      let G = Q;
      if (I || typeof I === 'string') G += `=${zO1.escapeUri(I)}`;
      B.push(G);
    }
  }
  return B.join('&');
}
li9(WvA, 'buildQueryString');
