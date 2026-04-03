// Module: q52
// Params: $52

var $l1 = $52;
$l1.length = function A(B) {
  var Q = 0,
    I = 0;
  for (var G = 0; G < B.length; ++G)
    if (((I = B.charCodeAt(G)), I < 128)) Q += 1;
    else if (I < 2048) Q += 2;
    else if ((I & 64512) === 55296 && (B.charCodeAt(G + 1) & 64512) === 56320) (++G, (Q += 4));
    else Q += 3;
  return Q;
};
$l1.read = function A(B, Q, I) {
  var G = I - Q;
  if (G < 1) return '';
  var D = null,
    Z = [],
    Y = 0,
    W;
  while (Q < I) {
    if (((W = B[Q++]), W < 128)) Z[Y++] = W;
    else if (W > 191 && W < 224) Z[Y++] = ((W & 31) << 6) | (B[Q++] & 63);
    else if (W > 239 && W < 365)
      ((W =
        (((W & 7) << 18) | ((B[Q++] & 63) << 12) | ((B[Q++] & 63) << 6) | (B[Q++] & 63)) - 65536),
        (Z[Y++] = 55296 + (W >> 10)),
        (Z[Y++] = 56320 + (W & 1023)));
    else Z[Y++] = ((W & 15) << 12) | ((B[Q++] & 63) << 6) | (B[Q++] & 63);
    if (Y > 8191) ((D || (D = [])).push(String.fromCharCode.apply(String, Z)), (Y = 0));
  }
  if (D) {
    if (Y) D.push(String.fromCharCode.apply(String, Z.slice(0, Y)));
    return D.join('');
  }
  return String.fromCharCode.apply(String, Z.slice(0, Y));
};
$l1.write = function A(B, Q, I) {
  var G = I,
    D,
    Z;
  for (var Y = 0; Y < B.length; ++Y)
    if (((D = B.charCodeAt(Y)), D < 128)) Q[I++] = D;
    else if (D < 2048) ((Q[I++] = (D >> 6) | 192), (Q[I++] = (D & 63) | 128));
    else if ((D & 64512) === 55296 && ((Z = B.charCodeAt(Y + 1)) & 64512) === 56320)
      ((D = 65536 + ((D & 1023) << 10) + (Z & 1023)),
        ++Y,
        (Q[I++] = (D >> 18) | 240),
        (Q[I++] = ((D >> 12) & 63) | 128),
        (Q[I++] = ((D >> 6) & 63) | 128),
        (Q[I++] = (D & 63) | 128));
    else ((Q[I++] = (D >> 12) | 224), (Q[I++] = ((D >> 6) & 63) | 128), (Q[I++] = (D & 63) | 128));
  return I - G;
};
