// Module: v51
// Params: Em5,LvA

var { defineProperty: f51, getOwnPropertyDescriptor: Dn9, getOwnPropertyNames: Zn9 } = Object,
  Yn9 = Object.prototype.hasOwnProperty,
  UvA = (A, B) => f51(A, 'name', { value: B, configurable: !0 }),
  Wn9 = (A, B) => {
    for (var Q in B) f51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Fn9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Zn9(B))
        if (!Yn9.call(A, G) && G !== Q)
          f51(A, G, { get: () => B[G], enumerable: !(I = Dn9(B, G)) || I.enumerable });
    }
    return A;
  },
  Jn9 = (A) => Fn9(f51({}, '__esModule', { value: !0 }), A),
  NvA = {};
Wn9(NvA, { fromHex: () => qvA, toHex: () => MvA });
LvA.exports = Jn9(NvA);
var $vA = {},
  EO1 = {};
for (let A = 0; A < 256; A++) {
  let B = A.toString(16).toLowerCase();
  if (B.length === 1) B = `0${B}`;
  (($vA[A] = B), (EO1[B] = A));
}
function qvA(A) {
  if (A.length % 2 !== 0) throw new Error('Hex encoded strings must have an even number length');
  let B = new Uint8Array(A.length / 2);
  for (let Q = 0; Q < A.length; Q += 2) {
    let I = A.slice(Q, Q + 2).toLowerCase();
    if (I in EO1) B[Q / 2] = EO1[I];
    else throw new Error(`Cannot decode unrecognized sequence ${I} as hexadecimal`);
  }
  return B;
}
UvA(qvA, 'fromHex');
function MvA(A) {
  let B = '';
  for (let Q = 0; Q < A.byteLength; Q++) B += $vA[A[Q]];
  return B;
}
UvA(MvA, 'toHex');
