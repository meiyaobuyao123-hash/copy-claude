// Module: J52
// Params: F52

var _J1 = F52;
_J1.length = function A(B) {
  var Q = B.length;
  if (!Q) return 0;
  var I = 0;
  while (--Q % 4 > 1 && B.charAt(Q) === '=') ++I;
  return Math.ceil(B.length * 3) / 4 - I;
};
var Ym = new Array(64),
  W52 = new Array(123);
for (UC = 0; UC < 64; )
  W52[(Ym[UC] = UC < 26 ? UC + 65 : UC < 52 ? UC + 71 : UC < 62 ? UC - 4 : (UC - 59) | 43)] = UC++;
var UC;
_J1.encode = function A(B, Q, I) {
  var G = null,
    D = [],
    Z = 0,
    Y = 0,
    W;
  while (Q < I) {
    var F = B[Q++];
    switch (Y) {
      case 0:
        ((D[Z++] = Ym[F >> 2]), (W = (F & 3) << 4), (Y = 1));
        break;
      case 1:
        ((D[Z++] = Ym[W | (F >> 4)]), (W = (F & 15) << 2), (Y = 2));
        break;
      case 2:
        ((D[Z++] = Ym[W | (F >> 6)]), (D[Z++] = Ym[F & 63]), (Y = 0));
        break;
    }
    if (Z > 8191) ((G || (G = [])).push(String.fromCharCode.apply(String, D)), (Z = 0));
  }
  if (Y) {
    if (((D[Z++] = Ym[W]), (D[Z++] = 61), Y === 1)) D[Z++] = 61;
  }
  if (G) {
    if (Z) G.push(String.fromCharCode.apply(String, D.slice(0, Z)));
    return G.join('');
  }
  return String.fromCharCode.apply(String, D.slice(0, Z));
};
var Y52 = 'invalid encoding';
_J1.decode = function A(B, Q, I) {
  var G = I,
    D = 0,
    Z;
  for (var Y = 0; Y < B.length; ) {
    var W = B.charCodeAt(Y++);
    if (W === 61 && D > 1) break;
    if ((W = W52[W]) === void 0) throw Error(Y52);
    switch (D) {
      case 0:
        ((Z = W), (D = 1));
        break;
      case 1:
        ((Q[I++] = (Z << 2) | ((W & 48) >> 4)), (Z = W), (D = 2));
        break;
      case 2:
        ((Q[I++] = ((Z & 15) << 4) | ((W & 60) >> 2)), (Z = W), (D = 3));
        break;
      case 3:
        ((Q[I++] = ((Z & 3) << 6) | W), (D = 0));
        break;
    }
  }
  if (D === 1) throw Error(Y52);
  return I - G;
};
_J1.test = function A(B) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(B);
};
