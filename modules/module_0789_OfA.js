// Module: OfA
// Params: Dm5,RfA

var { defineProperty: T51, getOwnPropertyDescriptor: bl9, getOwnPropertyNames: gl9 } = Object,
  hl9 = Object.prototype.hasOwnProperty,
  ml9 = (A, B) => T51(A, 'name', { value: B, configurable: !0 }),
  dl9 = (A, B) => {
    for (var Q in B) T51(A, Q, { get: B[Q], enumerable: !0 });
  },
  ul9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of gl9(B))
        if (!hl9.call(A, G) && G !== Q)
          T51(A, G, { get: () => B[G], enumerable: !(I = bl9(B, G)) || I.enumerable });
    }
    return A;
  },
  pl9 = (A) => ul9(T51({}, '__esModule', { value: !0 }), A),
  MfA = {};
dl9(MfA, { buildQueryString: () => LfA });
RfA.exports = pl9(MfA);
var CO1 = qfA();
function LfA(A) {
  let B = [];
  for (let Q of Object.keys(A).sort()) {
    let I = A[Q];
    if (((Q = CO1.escapeUri(Q)), Array.isArray(I)))
      for (let G = 0, D = I.length; G < D; G++) B.push(`${Q}=${CO1.escapeUri(I[G])}`);
    else {
      let G = Q;
      if (I || typeof I === 'string') G += `=${CO1.escapeUri(I)}`;
      B.push(G);
    }
  }
  return B.join('&');
}
ml9(LfA, 'buildQueryString');
