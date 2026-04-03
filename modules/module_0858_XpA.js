// Module: XpA
// Params: JpA

Object.defineProperty(JpA, '__esModule', { value: !0 });
JpA.default = void 0;
var I94 = D94(ST1()),
  G94 = _l();
function D94(A) {
  return A && A.__esModule ? A : { default: A };
}
var FpA,
  _T1,
  jT1 = 0,
  yT1 = 0;
function Z94(A, B, Q) {
  let I = (B && Q) || 0,
    G = B || new Array(16);
  A = A || {};
  let D = A.node || FpA,
    Z = A.clockseq !== void 0 ? A.clockseq : _T1;
  if (D == null || Z == null) {
    let X = A.random || (A.rng || I94.default)();
    if (D == null) D = FpA = [X[0] | 1, X[1], X[2], X[3], X[4], X[5]];
    if (Z == null) Z = _T1 = ((X[6] << 8) | X[7]) & 16383;
  }
  let Y = A.msecs !== void 0 ? A.msecs : Date.now(),
    W = A.nsecs !== void 0 ? A.nsecs : yT1 + 1,
    F = Y - jT1 + (W - yT1) / 1e4;
  if (F < 0 && A.clockseq === void 0) Z = (Z + 1) & 16383;
  if ((F < 0 || Y > jT1) && A.nsecs === void 0) W = 0;
  if (W >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  ((jT1 = Y), (yT1 = W), (_T1 = Z), (Y += 12219292800000));
  let J = ((Y & 268435455) * 1e4 + W) % 4294967296;
  ((G[I++] = (J >>> 24) & 255),
    (G[I++] = (J >>> 16) & 255),
    (G[I++] = (J >>> 8) & 255),
    (G[I++] = J & 255));
  let C = ((Y / 4294967296) * 1e4) & 268435455;
  ((G[I++] = (C >>> 8) & 255),
    (G[I++] = C & 255),
    (G[I++] = ((C >>> 24) & 15) | 16),
    (G[I++] = (C >>> 16) & 255),
    (G[I++] = (Z >>> 8) | 128),
    (G[I++] = Z & 255));
  for (let X = 0; X < 6; ++X) G[I + X] = D[X];
  return B || G94.unsafeStringify(G);
}
var Y94 = Z94;
JpA.default = Y94;
