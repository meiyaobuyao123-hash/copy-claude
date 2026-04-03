// Module: jd0
// Params: hw8,_d0

var br = Pu1(),
  gr = Td0(),
  Pd0 = Object.hasOwnProperty,
  Sd0 = Object.create(null);
for (vr in br) if (Pd0.call(br, vr)) Sd0[br[vr]] = vr;
var vr,
  XF = (_d0.exports = { to: {}, get: {} });
XF.get = function (A) {
  var B = A.substring(0, 3).toLowerCase(),
    Q,
    I;
  switch (B) {
    case 'hsl':
      ((Q = XF.get.hsl(A)), (I = 'hsl'));
      break;
    case 'hwb':
      ((Q = XF.get.hwb(A)), (I = 'hwb'));
      break;
    default:
      ((Q = XF.get.rgb(A)), (I = 'rgb'));
      break;
  }
  if (!Q) return null;
  return { model: I, value: Q };
};
XF.get.rgb = function (A) {
  if (!A) return null;
  var B = /^#([a-f0-9]{3,4})$/i,
    Q = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
    I =
      /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
    G =
      /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,
    D = /^(\w+)$/,
    Z = [0, 0, 0, 1],
    Y,
    W,
    F;
  if ((Y = A.match(Q))) {
    ((F = Y[2]), (Y = Y[1]));
    for (W = 0; W < 3; W++) {
      var J = W * 2;
      Z[W] = parseInt(Y.slice(J, J + 2), 16);
    }
    if (F) Z[3] = parseInt(F, 16) / 255;
  } else if ((Y = A.match(B))) {
    ((Y = Y[1]), (F = Y[3]));
    for (W = 0; W < 3; W++) Z[W] = parseInt(Y[W] + Y[W], 16);
    if (F) Z[3] = parseInt(F + F, 16) / 255;
  } else if ((Y = A.match(I))) {
    for (W = 0; W < 3; W++) Z[W] = parseInt(Y[W + 1], 0);
    if (Y[4])
      if (Y[5]) Z[3] = parseFloat(Y[4]) * 0.01;
      else Z[3] = parseFloat(Y[4]);
  } else if ((Y = A.match(G))) {
    for (W = 0; W < 3; W++) Z[W] = Math.round(parseFloat(Y[W + 1]) * 2.55);
    if (Y[4])
      if (Y[5]) Z[3] = parseFloat(Y[4]) * 0.01;
      else Z[3] = parseFloat(Y[4]);
  } else if ((Y = A.match(D))) {
    if (Y[1] === 'transparent') return [0, 0, 0, 0];
    if (!Pd0.call(br, Y[1])) return null;
    return ((Z = br[Y[1]]), (Z[3] = 1), Z);
  } else return null;
  for (W = 0; W < 3; W++) Z[W] = BR(Z[W], 0, 255);
  return ((Z[3] = BR(Z[3], 0, 1)), Z);
};
XF.get.hsl = function (A) {
  if (!A) return null;
  var B =
      /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
    Q = A.match(B);
  if (Q) {
    var I = parseFloat(Q[4]),
      G = ((parseFloat(Q[1]) % 360) + 360) % 360,
      D = BR(parseFloat(Q[2]), 0, 100),
      Z = BR(parseFloat(Q[3]), 0, 100),
      Y = BR(isNaN(I) ? 1 : I, 0, 1);
    return [G, D, Z, Y];
  }
  return null;
};
XF.get.hwb = function (A) {
  if (!A) return null;
  var B =
      /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,
    Q = A.match(B);
  if (Q) {
    var I = parseFloat(Q[4]),
      G = ((parseFloat(Q[1]) % 360) + 360) % 360,
      D = BR(parseFloat(Q[2]), 0, 100),
      Z = BR(parseFloat(Q[3]), 0, 100),
      Y = BR(isNaN(I) ? 1 : I, 0, 1);
    return [G, D, Z, Y];
  }
  return null;
};
XF.to.hex = function () {
  var A = gr(arguments);
  return '#' + MF1(A[0]) + MF1(A[1]) + MF1(A[2]) + (A[3] < 1 ? MF1(Math.round(A[3] * 255)) : '');
};
XF.to.rgb = function () {
  var A = gr(arguments);
  return A.length < 4 || A[3] === 1
    ? 'rgb(' + Math.round(A[0]) + ', ' + Math.round(A[1]) + ', ' + Math.round(A[2]) + ')'
    : 'rgba(' +
        Math.round(A[0]) +
        ', ' +
        Math.round(A[1]) +
        ', ' +
        Math.round(A[2]) +
        ', ' +
        A[3] +
        ')';
};
XF.to.rgb.percent = function () {
  var A = gr(arguments),
    B = Math.round((A[0] / 255) * 100),
    Q = Math.round((A[1] / 255) * 100),
    I = Math.round((A[2] / 255) * 100);
  return A.length < 4 || A[3] === 1
    ? 'rgb(' + B + '%, ' + Q + '%, ' + I + '%)'
    : 'rgba(' + B + '%, ' + Q + '%, ' + I + '%, ' + A[3] + ')';
};
XF.to.hsl = function () {
  var A = gr(arguments);
  return A.length < 4 || A[3] === 1
    ? 'hsl(' + A[0] + ', ' + A[1] + '%, ' + A[2] + '%)'
    : 'hsla(' + A[0] + ', ' + A[1] + '%, ' + A[2] + '%, ' + A[3] + ')';
};
XF.to.hwb = function () {
  var A = gr(arguments),
    B = '';
  if (A.length >= 4 && A[3] !== 1) B = ', ' + A[3];
  return 'hwb(' + A[0] + ', ' + A[1] + '%, ' + A[2] + '%' + B + ')';
};
XF.to.keyword = function (A) {
  return Sd0[A.slice(0, 3)];
};
function BR(A, B, Q) {
  return Math.min(Math.max(B, A), Q);
}
function MF1(A) {
  var B = Math.round(A).toString(16).toUpperCase();
  return B.length < 2 ? '0' + B : B;
}
