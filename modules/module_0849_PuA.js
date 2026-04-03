// Module: PuA
// Params: pd5,TuA

var { defineProperty: f81, getOwnPropertyDescriptor: m04, getOwnPropertyNames: d04 } = Object,
  u04 = Object.prototype.hasOwnProperty,
  p04 = (A, B) => f81(A, 'name', { value: B, configurable: !0 }),
  c04 = (A, B) => {
    for (var Q in B) f81(A, Q, { get: B[Q], enumerable: !0 });
  },
  l04 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of d04(B))
        if (!u04.call(A, G) && G !== Q)
          f81(A, G, { get: () => B[G], enumerable: !(I = m04(B, G)) || I.enumerable });
    }
    return A;
  },
  i04 = (A) => l04(f81({}, '__esModule', { value: !0 }), A),
  RuA = {};
c04(RuA, { parseQueryString: () => OuA });
TuA.exports = i04(RuA);
function OuA(A) {
  let B = {};
  if (((A = A.replace(/^\?/, '')), A))
    for (let Q of A.split('&')) {
      let [I, G = null] = Q.split('=');
      if (((I = decodeURIComponent(I)), G)) G = decodeURIComponent(G);
      if (!(I in B)) B[I] = G;
      else if (Array.isArray(B[I])) B[I].push(G);
      else B[I] = [B[I], G];
    }
  return B;
}
p04(OuA, 'parseQueryString');
