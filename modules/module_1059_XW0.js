// Module: XW0
// Params: dZ8,CW0

var { defineProperty: HG1, getOwnPropertyDescriptor: Yk4, getOwnPropertyNames: Wk4 } = Object,
  Fk4 = Object.prototype.hasOwnProperty,
  ZW0 = (A, B) => HG1(A, 'name', { value: B, configurable: !0 }),
  Jk4 = (A, B) => {
    for (var Q in B) HG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ck4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Wk4(B))
        if (!Fk4.call(A, G) && G !== Q)
          HG1(A, G, { get: () => B[G], enumerable: !(I = Yk4(B, G)) || I.enumerable });
    }
    return A;
  },
  Xk4 = (A) => Ck4(HG1({}, '__esModule', { value: !0 }), A),
  YW0 = {};
Jk4(YW0, { fromHex: () => FW0, toHex: () => JW0 });
CW0.exports = Xk4(YW0);
var WW0 = {},
  Vf1 = {};
for (let A = 0; A < 256; A++) {
  let B = A.toString(16).toLowerCase();
  if (B.length === 1) B = `0${B}`;
  ((WW0[A] = B), (Vf1[B] = A));
}
function FW0(A) {
  if (A.length % 2 !== 0) throw new Error('Hex encoded strings must have an even number length');
  let B = new Uint8Array(A.length / 2);
  for (let Q = 0; Q < A.length; Q += 2) {
    let I = A.slice(Q, Q + 2).toLowerCase();
    if (I in Vf1) B[Q / 2] = Vf1[I];
    else throw new Error(`Cannot decode unrecognized sequence ${I} as hexadecimal`);
  }
  return B;
}
ZW0(FW0, 'fromHex');
function JW0(A) {
  let B = '';
  for (let Q = 0; Q < A.byteLength; Q++) B += WW0[A[Q]];
  return B;
}
ZW0(JW0, 'toHex');
