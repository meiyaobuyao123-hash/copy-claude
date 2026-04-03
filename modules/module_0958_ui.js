// Module: ui
// Params: is5,OQ1

var { EMPTY_BUFFER: lN4 } = wU(),
  zy1 = Buffer[Symbol.species];
function iN4(A, B) {
  if (A.length === 0) return lN4;
  if (A.length === 1) return A[0];
  let Q = Buffer.allocUnsafe(B),
    I = 0;
  for (let G = 0; G < A.length; G++) {
    let D = A[G];
    (Q.set(D, I), (I += D.length));
  }
  if (I < B) return new zy1(Q.buffer, Q.byteOffset, I);
  return Q;
}
function d50(A, B, Q, I, G) {
  for (let D = 0; D < G; D++) Q[I + D] = A[D] ^ B[D & 3];
}
function u50(A, B) {
  for (let Q = 0; Q < A.length; Q++) A[Q] ^= B[Q & 3];
}
function nN4(A) {
  if (A.length === A.buffer.byteLength) return A.buffer;
  return A.buffer.slice(A.byteOffset, A.byteOffset + A.length);
}
function wy1(A) {
  if (((wy1.readOnly = !0), Buffer.isBuffer(A))) return A;
  let B;
  if (A instanceof ArrayBuffer) B = new zy1(A);
  else if (ArrayBuffer.isView(A)) B = new zy1(A.buffer, A.byteOffset, A.byteLength);
  else ((B = Buffer.from(A)), (wy1.readOnly = !1));
  return B;
}
OQ1.exports = { concat: iN4, mask: d50, toArrayBuffer: nN4, toBuffer: wy1, unmask: u50 };
if (!process.env.WS_NO_BUFFER_UTIL)
  try {
    let A = (() => {
      throw new Error('Cannot require module ' + 'bufferutil');
    })();
    ((OQ1.exports.mask = function (B, Q, I, G, D) {
      if (D < 48) d50(B, Q, I, G, D);
      else A.mask(B, Q, I, G, D);
    }),
      (OQ1.exports.unmask = function (B, Q) {
        if (B.length < 32) u50(B, Q);
        else A.unmask(B, Q);
      }));
  } catch (A) {}
