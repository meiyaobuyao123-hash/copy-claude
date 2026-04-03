// Module: EH0
// Params: fW8,wH0

var { defineProperty: BD1, getOwnPropertyDescriptor: Vm4, getOwnPropertyNames: Km4 } = Object,
  Hm4 = Object.prototype.hasOwnProperty,
  XH0 = (A, B) => BD1(A, 'name', { value: B, configurable: !0 }),
  zm4 = (A, B) => {
    for (var Q in B) BD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  wm4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Km4(B))
        if (!Hm4.call(A, G) && G !== Q)
          BD1(A, G, { get: () => B[G], enumerable: !(I = Vm4(B, G)) || I.enumerable });
    }
    return A;
  },
  Em4 = (A) => wm4(BD1({}, '__esModule', { value: !0 }), A),
  VH0 = {};
zm4(VH0, { fromHex: () => HH0, toHex: () => zH0 });
wH0.exports = Em4(VH0);
var KH0 = {},
  Cv1 = {};
for (let A = 0; A < 256; A++) {
  let B = A.toString(16).toLowerCase();
  if (B.length === 1) B = `0${B}`;
  ((KH0[A] = B), (Cv1[B] = A));
}
function HH0(A) {
  if (A.length % 2 !== 0) throw new Error('Hex encoded strings must have an even number length');
  let B = new Uint8Array(A.length / 2);
  for (let Q = 0; Q < A.length; Q += 2) {
    let I = A.slice(Q, Q + 2).toLowerCase();
    if (I in Cv1) B[Q / 2] = Cv1[I];
    else throw new Error(`Cannot decode unrecognized sequence ${I} as hexadecimal`);
  }
  return B;
}
XH0(HH0, 'fromHex');
function zH0(A) {
  let B = '';
  for (let Q = 0; Q < A.byteLength; Q++) B += KH0[A[Q]];
  return B;
}
XH0(zH0, 'toHex');
