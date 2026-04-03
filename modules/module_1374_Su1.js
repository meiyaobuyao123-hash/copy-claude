// Module: Su1
// Params: vz8,ph0

var yr = Pu1(),
  uh0 = {};
for (let A of Object.keys(yr)) uh0[yr[A]] = A;
var a2 = {
  rgb: { channels: 3, labels: 'rgb' },
  hsl: { channels: 3, labels: 'hsl' },
  hsv: { channels: 3, labels: 'hsv' },
  hwb: { channels: 3, labels: 'hwb' },
  cmyk: { channels: 4, labels: 'cmyk' },
  xyz: { channels: 3, labels: 'xyz' },
  lab: { channels: 3, labels: 'lab' },
  lch: { channels: 3, labels: 'lch' },
  hex: { channels: 1, labels: ['hex'] },
  keyword: { channels: 1, labels: ['keyword'] },
  ansi16: { channels: 1, labels: ['ansi16'] },
  ansi256: { channels: 1, labels: ['ansi256'] },
  hcg: { channels: 3, labels: ['h', 'c', 'g'] },
  apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
  gray: { channels: 1, labels: ['gray'] },
};
ph0.exports = a2;
for (let A of Object.keys(a2)) {
  if (!('channels' in a2[A])) throw new Error('missing channels property: ' + A);
  if (!('labels' in a2[A])) throw new Error('missing channel labels property: ' + A);
  if (a2[A].labels.length !== a2[A].channels)
    throw new Error('channel and label counts mismatch: ' + A);
  let { channels: B, labels: Q } = a2[A];
  (delete a2[A].channels,
    delete a2[A].labels,
    Object.defineProperty(a2[A], 'channels', { value: B }),
    Object.defineProperty(a2[A], 'labels', { value: Q }));
}
a2.rgb.hsl = function (A) {
  let B = A[0] / 255,
    Q = A[1] / 255,
    I = A[2] / 255,
    G = Math.min(B, Q, I),
    D = Math.max(B, Q, I),
    Z = D - G,
    Y,
    W;
  if (D === G) Y = 0;
  else if (B === D) Y = (Q - I) / Z;
  else if (Q === D) Y = 2 + (I - B) / Z;
  else if (I === D) Y = 4 + (B - Q) / Z;
  if (((Y = Math.min(Y * 60, 360)), Y < 0)) Y += 360;
  let F = (G + D) / 2;
  if (D === G) W = 0;
  else if (F <= 0.5) W = Z / (D + G);
  else W = Z / (2 - D - G);
  return [Y, W * 100, F * 100];
};
a2.rgb.hsv = function (A) {
  let B,
    Q,
    I,
    G,
    D,
    Z = A[0] / 255,
    Y = A[1] / 255,
    W = A[2] / 255,
    F = Math.max(Z, Y, W),
    J = F - Math.min(Z, Y, W),
    C = function (X) {
      return (F - X) / 6 / J + 0.5;
    };
  if (J === 0) ((G = 0), (D = 0));
  else {
    if (((D = J / F), (B = C(Z)), (Q = C(Y)), (I = C(W)), Z === F)) G = I - Q;
    else if (Y === F) G = 0.3333333333333333 + B - I;
    else if (W === F) G = 0.6666666666666666 + Q - B;
    if (G < 0) G += 1;
    else if (G > 1) G -= 1;
  }
  return [G * 360, D * 100, F * 100];
};
a2.rgb.hwb = function (A) {
  let B = A[0],
    Q = A[1],
    I = A[2],
    G = a2.rgb.hsl(A)[0],
    D = 0.00392156862745098 * Math.min(B, Math.min(Q, I));
  return ((I = 1 - 0.00392156862745098 * Math.max(B, Math.max(Q, I))), [G, D * 100, I * 100]);
};
a2.rgb.cmyk = function (A) {
  let B = A[0] / 255,
    Q = A[1] / 255,
    I = A[2] / 255,
    G = Math.min(1 - B, 1 - Q, 1 - I),
    D = (1 - B - G) / (1 - G) || 0,
    Z = (1 - Q - G) / (1 - G) || 0,
    Y = (1 - I - G) / (1 - G) || 0;
  return [D * 100, Z * 100, Y * 100, G * 100];
};
function jV6(A, B) {
  return (A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2 + (A[2] - B[2]) ** 2;
}
a2.rgb.keyword = function (A) {
  let B = uh0[A];
  if (B) return B;
  let Q = 1 / 0,
    I;
  for (let G of Object.keys(yr)) {
    let D = yr[G],
      Z = jV6(A, D);
    if (Z < Q) ((Q = Z), (I = G));
  }
  return I;
};
a2.keyword.rgb = function (A) {
  return yr[A];
};
a2.rgb.xyz = function (A) {
  let B = A[0] / 255,
    Q = A[1] / 255,
    I = A[2] / 255;
  ((B = B > 0.04045 ? ((B + 0.055) / 1.055) ** 2.4 : B / 12.92),
    (Q = Q > 0.04045 ? ((Q + 0.055) / 1.055) ** 2.4 : Q / 12.92),
    (I = I > 0.04045 ? ((I + 0.055) / 1.055) ** 2.4 : I / 12.92));
  let G = B * 0.4124 + Q * 0.3576 + I * 0.1805,
    D = B * 0.2126 + Q * 0.7152 + I * 0.0722,
    Z = B * 0.0193 + Q * 0.1192 + I * 0.9505;
  return [G * 100, D * 100, Z * 100];
};
a2.rgb.lab = function (A) {
  let B = a2.rgb.xyz(A),
    Q = B[0],
    I = B[1],
    G = B[2];
  ((Q /= 95.047),
    (I /= 100),
    (G /= 108.883),
    (Q = Q > 0.008856 ? Q ** 0.3333333333333333 : 7.787 * Q + 0.13793103448275862),
    (I = I > 0.008856 ? I ** 0.3333333333333333 : 7.787 * I + 0.13793103448275862),
    (G = G > 0.008856 ? G ** 0.3333333333333333 : 7.787 * G + 0.13793103448275862));
  let D = 116 * I - 16,
    Z = 500 * (Q - I),
    Y = 200 * (I - G);
  return [D, Z, Y];
};
a2.hsl.rgb = function (A) {
  let B = A[0] / 360,
    Q = A[1] / 100,
    I = A[2] / 100,
    G,
    D,
    Z;
  if (Q === 0) return ((Z = I * 255), [Z, Z, Z]);
  if (I < 0.5) G = I * (1 + Q);
  else G = I + Q - I * Q;
  let Y = 2 * I - G,
    W = [0, 0, 0];
  for (let F = 0; F < 3; F++) {
    if (((D = B + 0.3333333333333333 * -(F - 1)), D < 0)) D++;
    if (D > 1) D--;
    if (6 * D < 1) Z = Y + (G - Y) * 6 * D;
    else if (2 * D < 1) Z = G;
    else if (3 * D < 2) Z = Y + (G - Y) * (0.6666666666666666 - D) * 6;
    else Z = Y;
    W[F] = Z * 255;
  }
  return W;
};
a2.hsl.hsv = function (A) {
  let B = A[0],
    Q = A[1] / 100,
    I = A[2] / 100,
    G = Q,
    D = Math.max(I, 0.01);
  ((I *= 2), (Q *= I <= 1 ? I : 2 - I), (G *= D <= 1 ? D : 2 - D));
  let Z = (I + Q) / 2,
    Y = I === 0 ? (2 * G) / (D + G) : (2 * Q) / (I + Q);
  return [B, Y * 100, Z * 100];
};
a2.hsv.rgb = function (A) {
  let B = A[0] / 60,
    Q = A[1] / 100,
    I = A[2] / 100,
    G = Math.floor(B) % 6,
    D = B - Math.floor(B),
    Z = 255 * I * (1 - Q),
    Y = 255 * I * (1 - Q * D),
    W = 255 * I * (1 - Q * (1 - D));
  switch (((I *= 255), G)) {
    case 0:
      return [I, W, Z];
    case 1:
      return [Y, I, Z];
    case 2:
      return [Z, I, W];
    case 3:
      return [Z, Y, I];
    case 4:
      return [W, Z, I];
    case 5:
      return [I, Z, Y];
  }
};
a2.hsv.hsl = function (A) {
  let B = A[0],
    Q = A[1] / 100,
    I = A[2] / 100,
    G = Math.max(I, 0.01),
    D,
    Z;
  Z = (2 - Q) * I;
  let Y = (2 - Q) * G;
  return ((D = Q * G), (D /= Y <= 1 ? Y : 2 - Y), (D = D || 0), (Z /= 2), [B, D * 100, Z * 100]);
};
a2.hwb.rgb = function (A) {
  let B = A[0] / 360,
    Q = A[1] / 100,
    I = A[2] / 100,
    G = Q + I,
    D;
  if (G > 1) ((Q /= G), (I /= G));
  let Z = Math.floor(6 * B),
    Y = 1 - I;
  if (((D = 6 * B - Z), (Z & 1) !== 0)) D = 1 - D;
  let W = Q + D * (Y - Q),
    F,
    J,
    C;
  switch (Z) {
    default:
    case 6:
    case 0:
      ((F = Y), (J = W), (C = Q));
      break;
    case 1:
      ((F = W), (J = Y), (C = Q));
      break;
    case 2:
      ((F = Q), (J = Y), (C = W));
      break;
    case 3:
      ((F = Q), (J = W), (C = Y));
      break;
    case 4:
      ((F = W), (J = Q), (C = Y));
      break;
    case 5:
      ((F = Y), (J = Q), (C = W));
      break;
  }
  return [F * 255, J * 255, C * 255];
};
a2.cmyk.rgb = function (A) {
  let B = A[0] / 100,
    Q = A[1] / 100,
    I = A[2] / 100,
    G = A[3] / 100,
    D = 1 - Math.min(1, B * (1 - G) + G),
    Z = 1 - Math.min(1, Q * (1 - G) + G),
    Y = 1 - Math.min(1, I * (1 - G) + G);
  return [D * 255, Z * 255, Y * 255];
};
a2.xyz.rgb = function (A) {
  let B = A[0] / 100,
    Q = A[1] / 100,
    I = A[2] / 100,
    G,
    D,
    Z;
  return (
    (G = B * 3.2406 + Q * -1.5372 + I * -0.4986),
    (D = B * -0.9689 + Q * 1.8758 + I * 0.0415),
    (Z = B * 0.0557 + Q * -0.204 + I * 1.057),
    (G = G > 0.0031308 ? 1.055 * G ** 0.4166666666666667 - 0.055 : G * 12.92),
    (D = D > 0.0031308 ? 1.055 * D ** 0.4166666666666667 - 0.055 : D * 12.92),
    (Z = Z > 0.0031308 ? 1.055 * Z ** 0.4166666666666667 - 0.055 : Z * 12.92),
    (G = Math.min(Math.max(0, G), 1)),
    (D = Math.min(Math.max(0, D), 1)),
    (Z = Math.min(Math.max(0, Z), 1)),
    [G * 255, D * 255, Z * 255]
  );
};
a2.xyz.lab = function (A) {
  let B = A[0],
    Q = A[1],
    I = A[2];
  ((B /= 95.047),
    (Q /= 100),
    (I /= 108.883),
    (B = B > 0.008856 ? B ** 0.3333333333333333 : 7.787 * B + 0.13793103448275862),
    (Q = Q > 0.008856 ? Q ** 0.3333333333333333 : 7.787 * Q + 0.13793103448275862),
    (I = I > 0.008856 ? I ** 0.3333333333333333 : 7.787 * I + 0.13793103448275862));
  let G = 116 * Q - 16,
    D = 500 * (B - Q),
    Z = 200 * (Q - I);
  return [G, D, Z];
};
a2.lab.xyz = function (A) {
  let B = A[0],
    Q = A[1],
    I = A[2],
    G,
    D,
    Z;
  ((D = (B + 16) / 116), (G = Q / 500 + D), (Z = D - I / 200));
  let Y = D ** 3,
    W = G ** 3,
    F = Z ** 3;
  return (
    (D = Y > 0.008856 ? Y : (D - 0.13793103448275862) / 7.787),
    (G = W > 0.008856 ? W : (G - 0.13793103448275862) / 7.787),
    (Z = F > 0.008856 ? F : (Z - 0.13793103448275862) / 7.787),
    (G *= 95.047),
    (D *= 100),
    (Z *= 108.883),
    [G, D, Z]
  );
};
a2.lab.lch = function (A) {
  let B = A[0],
    Q = A[1],
    I = A[2],
    G;
  if (((G = (Math.atan2(I, Q) * 360) / 2 / Math.PI), G < 0)) G += 360;
  let Z = Math.sqrt(Q * Q + I * I);
  return [B, Z, G];
};
a2.lch.lab = function (A) {
  let B = A[0],
    Q = A[1],
    G = (A[2] / 360) * 2 * Math.PI,
    D = Q * Math.cos(G),
    Z = Q * Math.sin(G);
  return [B, D, Z];
};
a2.rgb.ansi16 = function (A, B = null) {
  let [Q, I, G] = A,
    D = B === null ? a2.rgb.hsv(A)[2] : B;
  if (((D = Math.round(D / 50)), D === 0)) return 30;
  let Z = 30 + ((Math.round(G / 255) << 2) | (Math.round(I / 255) << 1) | Math.round(Q / 255));
  if (D === 2) Z += 60;
  return Z;
};
a2.hsv.ansi16 = function (A) {
  return a2.rgb.ansi16(a2.hsv.rgb(A), A[2]);
};
a2.rgb.ansi256 = function (A) {
  let B = A[0],
    Q = A[1],
    I = A[2];
  if (B === Q && Q === I) {
    if (B < 8) return 16;
    if (B > 248) return 231;
    return Math.round(((B - 8) / 247) * 24) + 232;
  }
  return (
    16 + 36 * Math.round((B / 255) * 5) + 6 * Math.round((Q / 255) * 5) + Math.round((I / 255) * 5)
  );
};
a2.ansi16.rgb = function (A) {
  let B = A % 10;
  if (B === 0 || B === 7) {
    if (A > 50) B += 3.5;
    return ((B = (B / 10.5) * 255), [B, B, B]);
  }
  let Q = (~~(A > 50) + 1) * 0.5,
    I = (B & 1) * Q * 255,
    G = ((B >> 1) & 1) * Q * 255,
    D = ((B >> 2) & 1) * Q * 255;
  return [I, G, D];
};
a2.ansi256.rgb = function (A) {
  if (A >= 232) {
    let D = (A - 232) * 10 + 8;
    return [D, D, D];
  }
  A -= 16;
  let B,
    Q = (Math.floor(A / 36) / 5) * 255,
    I = (Math.floor((B = A % 36) / 6) / 5) * 255,
    G = ((B % 6) / 5) * 255;
  return [Q, I, G];
};
a2.rgb.hex = function (A) {
  let Q = (
    ((Math.round(A[0]) & 255) << 16) +
    ((Math.round(A[1]) & 255) << 8) +
    (Math.round(A[2]) & 255)
  )
    .toString(16)
    .toUpperCase();
  return '000000'.substring(Q.length) + Q;
};
a2.hex.rgb = function (A) {
  let B = A.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!B) return [0, 0, 0];
  let Q = B[0];
  if (B[0].length === 3)
    Q = Q.split('')
      .map((Y) => {
        return Y + Y;
      })
      .join('');
  let I = parseInt(Q, 16),
    G = (I >> 16) & 255,
    D = (I >> 8) & 255,
    Z = I & 255;
  return [G, D, Z];
};
a2.rgb.hcg = function (A) {
  let B = A[0] / 255,
    Q = A[1] / 255,
    I = A[2] / 255,
    G = Math.max(Math.max(B, Q), I),
    D = Math.min(Math.min(B, Q), I),
    Z = G - D,
    Y,
    W;
  if (Z < 1) Y = D / (1 - Z);
  else Y = 0;
  if (Z <= 0) W = 0;
  else if (G === B) W = ((Q - I) / Z) % 6;
  else if (G === Q) W = 2 + (I - B) / Z;
  else W = 4 + (B - Q) / Z;
  return ((W /= 6), (W %= 1), [W * 360, Z * 100, Y * 100]);
};
a2.hsl.hcg = function (A) {
  let B = A[1] / 100,
    Q = A[2] / 100,
    I = Q < 0.5 ? 2 * B * Q : 2 * B * (1 - Q),
    G = 0;
  if (I < 1) G = (Q - 0.5 * I) / (1 - I);
  return [A[0], I * 100, G * 100];
};
a2.hsv.hcg = function (A) {
  let B = A[1] / 100,
    Q = A[2] / 100,
    I = B * Q,
    G = 0;
  if (I < 1) G = (Q - I) / (1 - I);
  return [A[0], I * 100, G * 100];
};
a2.hcg.rgb = function (A) {
  let B = A[0] / 360,
    Q = A[1] / 100,
    I = A[2] / 100;
  if (Q === 0) return [I * 255, I * 255, I * 255];
  let G = [0, 0, 0],
    D = (B % 1) * 6,
    Z = D % 1,
    Y = 1 - Z,
    W = 0;
  switch (Math.floor(D)) {
    case 0:
      ((G[0] = 1), (G[1] = Z), (G[2] = 0));
      break;
    case 1:
      ((G[0] = Y), (G[1] = 1), (G[2] = 0));
      break;
    case 2:
      ((G[0] = 0), (G[1] = 1), (G[2] = Z));
      break;
    case 3:
      ((G[0] = 0), (G[1] = Y), (G[2] = 1));
      break;
    case 4:
      ((G[0] = Z), (G[1] = 0), (G[2] = 1));
      break;
    default:
      ((G[0] = 1), (G[1] = 0), (G[2] = Y));
  }
  return ((W = (1 - Q) * I), [(Q * G[0] + W) * 255, (Q * G[1] + W) * 255, (Q * G[2] + W) * 255]);
};
a2.hcg.hsv = function (A) {
  let B = A[1] / 100,
    Q = A[2] / 100,
    I = B + Q * (1 - B),
    G = 0;
  if (I > 0) G = B / I;
  return [A[0], G * 100, I * 100];
};
a2.hcg.hsl = function (A) {
  let B = A[1] / 100,
    I = (A[2] / 100) * (1 - B) + 0.5 * B,
    G = 0;
  if (I > 0 && I < 0.5) G = B / (2 * I);
  else if (I >= 0.5 && I < 1) G = B / (2 * (1 - I));
  return [A[0], G * 100, I * 100];
};
a2.hcg.hwb = function (A) {
  let B = A[1] / 100,
    Q = A[2] / 100,
    I = B + Q * (1 - B);
  return [A[0], (I - B) * 100, (1 - I) * 100];
};
a2.hwb.hcg = function (A) {
  let B = A[1] / 100,
    I = 1 - A[2] / 100,
    G = I - B,
    D = 0;
  if (G < 1) D = (I - G) / (1 - G);
  return [A[0], G * 100, D * 100];
};
a2.apple.rgb = function (A) {
  return [(A[0] / 65535) * 255, (A[1] / 65535) * 255, (A[2] / 65535) * 255];
};
a2.rgb.apple = function (A) {
  return [(A[0] / 255) * 65535, (A[1] / 255) * 65535, (A[2] / 255) * 65535];
};
a2.gray.rgb = function (A) {
  return [(A[0] / 100) * 255, (A[0] / 100) * 255, (A[0] / 100) * 255];
};
a2.gray.hsl = function (A) {
  return [0, 0, A[0]];
};
a2.gray.hsv = a2.gray.hsl;
a2.gray.hwb = function (A) {
  return [0, 100, A[0]];
};
a2.gray.cmyk = function (A) {
  return [0, 0, 0, A[0]];
};
a2.gray.lab = function (A) {
  return [A[0], 0, 0];
};
a2.gray.hex = function (A) {
  let B = Math.round((A[0] / 100) * 255) & 255,
    I = ((B << 16) + (B << 8) + B).toString(16).toUpperCase();
  return '000000'.substring(I.length) + I;
};
a2.rgb.gray = function (A) {
  return [((A[0] + A[1] + A[2]) / 3 / 255) * 100];
};
