// Module: xT1
// Params: wpA

Object.defineProperty(wpA, '__esModule', { value: !0 });
wpA.URL = wpA.DNS = void 0;
wpA.default = z94;
var X94 = _l(),
  V94 = K94(kT1());
function K94(A) {
  return A && A.__esModule ? A : { default: A };
}
function H94(A) {
  A = unescape(encodeURIComponent(A));
  let B = [];
  for (let Q = 0; Q < A.length; ++Q) B.push(A.charCodeAt(Q));
  return B;
}
var HpA = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
wpA.DNS = HpA;
var zpA = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
wpA.URL = zpA;
function z94(A, B, Q) {
  function I(G, D, Z, Y) {
    var W;
    if (typeof G === 'string') G = H94(G);
    if (typeof D === 'string') D = V94.default(D);
    if (((W = D) === null || W === void 0 ? void 0 : W.length) !== 16)
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    let F = new Uint8Array(16 + G.length);
    if (
      (F.set(D),
      F.set(G, D.length),
      (F = Q(F)),
      (F[6] = (F[6] & 15) | B),
      (F[8] = (F[8] & 63) | 128),
      Z)
    ) {
      Y = Y || 0;
      for (let J = 0; J < 16; ++J) Z[Y + J] = F[J];
      return Z;
    }
    return X94.unsafeStringify(F);
  }
  try {
    I.name = A;
  } catch (G) {}
  return ((I.DNS = HpA), (I.URL = zpA), I);
}
