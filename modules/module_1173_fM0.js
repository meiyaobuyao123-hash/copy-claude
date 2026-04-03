// Module: fM0
// Params: aJ8,xM0

var P3 = {};
xM0.exports = P3;
function kM0(A) {
  return A < 0 ? -1 : 1;
}
function dt4(A) {
  if (A % 1 === 0.5 && (A & 1) === 0) return Math.floor(A);
  else return Math.round(A);
}
function VL(A, B) {
  if (!B.unsigned) --A;
  let Q = B.unsigned ? 0 : -Math.pow(2, A),
    I = Math.pow(2, A) - 1,
    G = B.moduloBitLength ? Math.pow(2, B.moduloBitLength) : Math.pow(2, A),
    D = B.moduloBitLength ? Math.pow(2, B.moduloBitLength - 1) : Math.pow(2, A - 1);
  return function (Z, Y) {
    if (!Y) Y = {};
    let W = +Z;
    if (Y.enforceRange) {
      if (!Number.isFinite(W)) throw new TypeError('Argument is not a finite number');
      if (((W = kM0(W) * Math.floor(Math.abs(W))), W < Q || W > I))
        throw new TypeError('Argument is not in byte range');
      return W;
    }
    if (!isNaN(W) && Y.clamp) {
      if (((W = dt4(W)), W < Q)) W = Q;
      if (W > I) W = I;
      return W;
    }
    if (!Number.isFinite(W) || W === 0) return 0;
    if (((W = kM0(W) * Math.floor(Math.abs(W))), (W = W % G), !B.unsigned && W >= D)) return W - G;
    else if (B.unsigned) {
      if (W < 0) W += G;
      else if (W === -0) return 0;
    }
    return W;
  };
}
P3.void = function () {
  return;
};
P3.boolean = function (A) {
  return !!A;
};
P3.byte = VL(8, { unsigned: !1 });
P3.octet = VL(8, { unsigned: !0 });
P3.short = VL(16, { unsigned: !1 });
P3['unsigned short'] = VL(16, { unsigned: !0 });
P3.long = VL(32, { unsigned: !1 });
P3['unsigned long'] = VL(32, { unsigned: !0 });
P3['long long'] = VL(32, { unsigned: !1, moduloBitLength: 64 });
P3['unsigned long long'] = VL(32, { unsigned: !0, moduloBitLength: 64 });
P3.double = function (A) {
  let B = +A;
  if (!Number.isFinite(B)) throw new TypeError('Argument is not a finite floating-point value');
  return B;
};
P3['unrestricted double'] = function (A) {
  let B = +A;
  if (isNaN(B)) throw new TypeError('Argument is NaN');
  return B;
};
P3.float = P3.double;
P3['unrestricted float'] = P3['unrestricted double'];
P3.DOMString = function (A, B) {
  if (!B) B = {};
  if (B.treatNullAsEmptyString && A === null) return '';
  return String(A);
};
P3.ByteString = function (A, B) {
  let Q = String(A),
    I = void 0;
  for (let G = 0; (I = Q.codePointAt(G)) !== void 0; ++G)
    if (I > 255) throw new TypeError('Argument is not a valid bytestring');
  return Q;
};
P3.USVString = function (A) {
  let B = String(A),
    Q = B.length,
    I = [];
  for (let G = 0; G < Q; ++G) {
    let D = B.charCodeAt(G);
    if (D < 55296 || D > 57343) I.push(String.fromCodePoint(D));
    else if (56320 <= D && D <= 57343) I.push(String.fromCodePoint(65533));
    else if (G === Q - 1) I.push(String.fromCodePoint(65533));
    else {
      let Z = B.charCodeAt(G + 1);
      if (56320 <= Z && Z <= 57343) {
        let Y = D & 1023,
          W = Z & 1023;
        (I.push(String.fromCodePoint(65536 + 1024 * Y + W)), ++G);
      } else I.push(String.fromCodePoint(65533));
    }
  }
  return I.join('');
};
P3.Date = function (A, B) {
  if (!(A instanceof Date)) throw new TypeError('Argument is not a Date object');
  if (isNaN(A)) return;
  return A;
};
P3.RegExp = function (A, B) {
  if (!(A instanceof RegExp)) A = new RegExp(A);
  return A;
};
