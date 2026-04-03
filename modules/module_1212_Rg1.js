// Module: Rg1
// Params: PC8,FO0

var iZ1 = zg().Buffer,
  DO0 = IO0(),
  nZ1 = 128,
  ZO0 = 0,
  J06 = 32,
  C06 = 16,
  X06 = 2,
  YO0 = C06 | J06 | (ZO0 << 6),
  aZ1 = X06 | (ZO0 << 6);
function V06(A) {
  return A.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function WO0(A) {
  if (iZ1.isBuffer(A)) return A;
  else if (typeof A === 'string') return iZ1.from(A, 'base64');
  throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}
function K06(A, B) {
  A = WO0(A);
  var Q = DO0(B),
    I = Q + 1,
    G = A.length,
    D = 0;
  if (A[D++] !== YO0) throw new Error('Could not find expected "seq"');
  var Z = A[D++];
  if (Z === (nZ1 | 1)) Z = A[D++];
  if (G - D < Z)
    throw new Error('"seq" specified length of "' + Z + '", only "' + (G - D) + '" remaining');
  if (A[D++] !== aZ1) throw new Error('Could not find expected "int" for "r"');
  var Y = A[D++];
  if (G - D - 2 < Y)
    throw new Error('"r" specified length of "' + Y + '", only "' + (G - D - 2) + '" available');
  if (I < Y)
    throw new Error('"r" specified length of "' + Y + '", max of "' + I + '" is acceptable');
  var W = D;
  if (((D += Y), A[D++] !== aZ1)) throw new Error('Could not find expected "int" for "s"');
  var F = A[D++];
  if (G - D !== F)
    throw new Error('"s" specified length of "' + F + '", expected "' + (G - D) + '"');
  if (I < F)
    throw new Error('"s" specified length of "' + F + '", max of "' + I + '" is acceptable');
  var J = D;
  if (((D += F), D !== G))
    throw new Error('Expected to consume entire buffer, but "' + (G - D) + '" bytes remain');
  var C = Q - Y,
    X = Q - F,
    V = iZ1.allocUnsafe(C + Y + X + F);
  for (D = 0; D < C; ++D) V[D] = 0;
  (A.copy(V, D, W + Math.max(-C, 0), W + Y), (D = Q));
  for (var K = D; D < K + X; ++D) V[D] = 0;
  return (A.copy(V, D, J + Math.max(-X, 0), J + F), (V = V.toString('base64')), (V = V06(V)), V);
}
function GO0(A, B, Q) {
  var I = 0;
  while (B + I < Q && A[B + I] === 0) ++I;
  var G = A[B + I] >= nZ1;
  if (G) --I;
  return I;
}
function H06(A, B) {
  A = WO0(A);
  var Q = DO0(B),
    I = A.length;
  if (I !== Q * 2)
    throw new TypeError('"' + B + '" signatures must be "' + Q * 2 + '" bytes, saw "' + I + '"');
  var G = GO0(A, 0, Q),
    D = GO0(A, Q, A.length),
    Z = Q - G,
    Y = Q - D,
    W = 2 + Z + 1 + 1 + Y,
    F = W < nZ1,
    J = iZ1.allocUnsafe((F ? 2 : 3) + W),
    C = 0;
  if (((J[C++] = YO0), F)) J[C++] = W;
  else ((J[C++] = nZ1 | 1), (J[C++] = W & 255));
  if (((J[C++] = aZ1), (J[C++] = Z), G < 0)) ((J[C++] = 0), (C += A.copy(J, C, 0, Q)));
  else C += A.copy(J, C, G, Q);
  if (((J[C++] = aZ1), (J[C++] = Y), D < 0)) ((J[C++] = 0), A.copy(J, C, Q));
  else A.copy(J, C, Q + D);
  return J;
}
FO0.exports = { derToJose: K06, joseToDer: H06 };
