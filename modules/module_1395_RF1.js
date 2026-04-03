// Module: RF1
// Params: mw8,kd0

var dh = jd0(),
  VF = ju1(),
  yd0 = ['keyword', 'gray', 'hex'],
  ou1 = {};
for (let A of Object.keys(VF)) ou1[[...VF[A].labels].sort().join('')] = A;
var LF1 = {};
function CI(A, B) {
  if (!(this instanceof CI)) return new CI(A, B);
  if (B && B in yd0) B = null;
  if (B && !(B in VF)) throw new Error('Unknown model: ' + B);
  let Q, I;
  if (A == null) ((this.model = 'rgb'), (this.color = [0, 0, 0]), (this.valpha = 1));
  else if (A instanceof CI)
    ((this.model = A.model), (this.color = [...A.color]), (this.valpha = A.valpha));
  else if (typeof A === 'string') {
    let G = dh.get(A);
    if (G === null) throw new Error('Unable to parse color from string: ' + A);
    ((this.model = G.model),
      (I = VF[this.model].channels),
      (this.color = G.value.slice(0, I)),
      (this.valpha = typeof G.value[I] === 'number' ? G.value[I] : 1));
  } else if (A.length > 0) {
    ((this.model = B || 'rgb'), (I = VF[this.model].channels));
    let G = Array.prototype.slice.call(A, 0, I);
    ((this.color = tu1(G, I)), (this.valpha = typeof A[I] === 'number' ? A[I] : 1));
  } else if (typeof A === 'number')
    ((this.model = 'rgb'),
      (this.color = [(A >> 16) & 255, (A >> 8) & 255, A & 255]),
      (this.valpha = 1));
  else {
    this.valpha = 1;
    let G = Object.keys(A);
    if ('alpha' in A)
      (G.splice(G.indexOf('alpha'), 1), (this.valpha = typeof A.alpha === 'number' ? A.alpha : 0));
    let D = G.sort().join('');
    if (!(D in ou1)) throw new Error('Unable to parse color from object: ' + JSON.stringify(A));
    this.model = ou1[D];
    let { labels: Z } = VF[this.model],
      Y = [];
    for (Q = 0; Q < Z.length; Q++) Y.push(A[Z[Q]]);
    this.color = tu1(Y);
  }
  if (LF1[this.model]) {
    I = VF[this.model].channels;
    for (Q = 0; Q < I; Q++) {
      let G = LF1[this.model][Q];
      if (G) this.color[Q] = G(this.color[Q]);
    }
  }
  if (((this.valpha = Math.max(0, Math.min(1, this.valpha))), Object.freeze)) Object.freeze(this);
}
CI.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(A) {
    let B = this.model in dh.to ? this : this.rgb();
    B = B.round(typeof A === 'number' ? A : 1);
    let Q = B.valpha === 1 ? B.color : [...B.color, this.valpha];
    return dh.to[B.model](Q);
  },
  percentString(A) {
    let B = this.rgb().round(typeof A === 'number' ? A : 1),
      Q = B.valpha === 1 ? B.color : [...B.color, this.valpha];
    return dh.to.rgb.percent(Q);
  },
  array() {
    return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    let A = {},
      { channels: B } = VF[this.model],
      { labels: Q } = VF[this.model];
    for (let I = 0; I < B; I++) A[Q[I]] = this.color[I];
    if (this.valpha !== 1) A.alpha = this.valpha;
    return A;
  },
  unitArray() {
    let A = this.rgb().color;
    if (((A[0] /= 255), (A[1] /= 255), (A[2] /= 255), this.valpha !== 1)) A.push(this.valpha);
    return A;
  },
  unitObject() {
    let A = this.rgb().object();
    if (((A.r /= 255), (A.g /= 255), (A.b /= 255), this.valpha !== 1)) A.alpha = this.valpha;
    return A;
  },
  round(A) {
    return (
      (A = Math.max(A || 0, 0)),
      new CI([...this.color.map(jH6(A)), this.valpha], this.model)
    );
  },
  alpha(A) {
    if (A !== void 0) return new CI([...this.color, Math.max(0, Math.min(1, A))], this.model);
    return this.valpha;
  },
  red: v3('rgb', 0, P7(255)),
  green: v3('rgb', 1, P7(255)),
  blue: v3('rgb', 2, P7(255)),
  hue: v3(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, (A) => ((A % 360) + 360) % 360),
  saturationl: v3('hsl', 1, P7(100)),
  lightness: v3('hsl', 2, P7(100)),
  saturationv: v3('hsv', 1, P7(100)),
  value: v3('hsv', 2, P7(100)),
  chroma: v3('hcg', 1, P7(100)),
  gray: v3('hcg', 2, P7(100)),
  white: v3('hwb', 1, P7(100)),
  wblack: v3('hwb', 2, P7(100)),
  cyan: v3('cmyk', 0, P7(100)),
  magenta: v3('cmyk', 1, P7(100)),
  yellow: v3('cmyk', 2, P7(100)),
  black: v3('cmyk', 3, P7(100)),
  x: v3('xyz', 0, P7(95.047)),
  y: v3('xyz', 1, P7(100)),
  z: v3('xyz', 2, P7(108.833)),
  l: v3('lab', 0, P7(100)),
  a: v3('lab', 1),
  b: v3('lab', 2),
  keyword(A) {
    if (A !== void 0) return new CI(A);
    return VF[this.model].keyword(this.color);
  },
  hex(A) {
    if (A !== void 0) return new CI(A);
    return dh.to.hex(this.rgb().round().color);
  },
  hexa(A) {
    if (A !== void 0) return new CI(A);
    let B = this.rgb().round().color,
      Q = Math.round(this.valpha * 255)
        .toString(16)
        .toUpperCase();
    if (Q.length === 1) Q = '0' + Q;
    return dh.to.hex(B) + Q;
  },
  rgbNumber() {
    let A = this.rgb().color;
    return ((A[0] & 255) << 16) | ((A[1] & 255) << 8) | (A[2] & 255);
  },
  luminosity() {
    let A = this.rgb().color,
      B = [];
    for (let [Q, I] of A.entries()) {
      let G = I / 255;
      B[Q] = G <= 0.04045 ? G / 12.92 : ((G + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * B[0] + 0.7152 * B[1] + 0.0722 * B[2];
  },
  contrast(A) {
    let B = this.luminosity(),
      Q = A.luminosity();
    if (B > Q) return (B + 0.05) / (Q + 0.05);
    return (Q + 0.05) / (B + 0.05);
  },
  level(A) {
    let B = this.contrast(A);
    if (B >= 7) return 'AAA';
    return B >= 4.5 ? 'AA' : '';
  },
  isDark() {
    let A = this.rgb().color;
    return (A[0] * 2126 + A[1] * 7152 + A[2] * 722) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    let A = this.rgb();
    for (let B = 0; B < 3; B++) A.color[B] = 255 - A.color[B];
    return A;
  },
  lighten(A) {
    let B = this.hsl();
    return ((B.color[2] += B.color[2] * A), B);
  },
  darken(A) {
    let B = this.hsl();
    return ((B.color[2] -= B.color[2] * A), B);
  },
  saturate(A) {
    let B = this.hsl();
    return ((B.color[1] += B.color[1] * A), B);
  },
  desaturate(A) {
    let B = this.hsl();
    return ((B.color[1] -= B.color[1] * A), B);
  },
  whiten(A) {
    let B = this.hwb();
    return ((B.color[1] += B.color[1] * A), B);
  },
  blacken(A) {
    let B = this.hwb();
    return ((B.color[2] += B.color[2] * A), B);
  },
  grayscale() {
    let A = this.rgb().color,
      B = A[0] * 0.3 + A[1] * 0.59 + A[2] * 0.11;
    return CI.rgb(B, B, B);
  },
  fade(A) {
    return this.alpha(this.valpha - this.valpha * A);
  },
  opaquer(A) {
    return this.alpha(this.valpha + this.valpha * A);
  },
  rotate(A) {
    let B = this.hsl(),
      Q = B.color[0];
    return ((Q = (Q + A) % 360), (Q = Q < 0 ? 360 + Q : Q), (B.color[0] = Q), B);
  },
  mix(A, B) {
    if (!A || !A.rgb)
      throw new Error(
        'Argument to "mix" was not a Color instance, but rather an instance of ' + typeof A
      );
    let Q = A.rgb(),
      I = this.rgb(),
      G = B === void 0 ? 0.5 : B,
      D = 2 * G - 1,
      Z = Q.alpha() - I.alpha(),
      Y = ((D * Z === -1 ? D : (D + Z) / (1 + D * Z)) + 1) / 2,
      W = 1 - Y;
    return CI.rgb(
      Y * Q.red() + W * I.red(),
      Y * Q.green() + W * I.green(),
      Y * Q.blue() + W * I.blue(),
      Q.alpha() * G + I.alpha() * (1 - G)
    );
  },
};
for (let A of Object.keys(VF)) {
  if (yd0.includes(A)) continue;
  let { channels: B } = VF[A];
  ((CI.prototype[A] = function (...Q) {
    if (this.model === A) return new CI(this);
    if (Q.length > 0) return new CI(Q, A);
    return new CI([...yH6(VF[this.model][A].raw(this.color)), this.valpha], A);
  }),
    (CI[A] = function (...Q) {
      let I = Q[0];
      if (typeof I === 'number') I = tu1(Q, B);
      return new CI(I, A);
    }));
}
function _H6(A, B) {
  return Number(A.toFixed(B));
}
function jH6(A) {
  return function (B) {
    return _H6(B, A);
  };
}
function v3(A, B, Q) {
  A = Array.isArray(A) ? A : [A];
  for (let I of A) (LF1[I] || (LF1[I] = []))[B] = Q;
  return (
    (A = A[0]),
    function (I) {
      let G;
      if (I !== void 0) {
        if (Q) I = Q(I);
        return ((G = this[A]()), (G.color[B] = I), G);
      }
      if (((G = this[A]().color[B]), Q)) G = Q(G);
      return G;
    }
  );
}
function P7(A) {
  return function (B) {
    return Math.max(0, Math.min(A, B));
  };
}
function yH6(A) {
  return Array.isArray(A) ? A : [A];
}
function tu1(A, B) {
  for (let Q = 0; Q < B; Q++) if (typeof A[Q] !== 'number') A[Q] = 0;
  return A;
}
kd0.exports = CI;
