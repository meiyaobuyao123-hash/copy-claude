// Module: WU
// Params: cd5,juA

var { defineProperty: v81, getOwnPropertyDescriptor: n04, getOwnPropertyNames: a04 } = Object,
  s04 = Object.prototype.hasOwnProperty,
  r04 = (A, B) => v81(A, 'name', { value: B, configurable: !0 }),
  o04 = (A, B) => {
    for (var Q in B) v81(A, Q, { get: B[Q], enumerable: !0 });
  },
  t04 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of a04(B))
        if (!s04.call(A, G) && G !== Q)
          v81(A, G, { get: () => B[G], enumerable: !(I = n04(B, G)) || I.enumerable });
    }
    return A;
  },
  e04 = (A) => t04(v81({}, '__esModule', { value: !0 }), A),
  SuA = {};
o04(SuA, { parseUrl: () => _uA });
juA.exports = e04(SuA);
var A24 = PuA(),
  _uA = r04((A) => {
    if (typeof A === 'string') return _uA(new URL(A));
    let { hostname: B, pathname: Q, port: I, protocol: G, search: D } = A,
      Z;
    if (D) Z = A24.parseQueryString(D);
    return { hostname: B, port: I ? parseInt(I) : void 0, protocol: G, path: Q, query: Z };
  }, 'parseUrl');
