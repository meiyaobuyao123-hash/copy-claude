// Module: zm0
// Params: pz8,Hm0

var kr = th0(),
  { stdout: vu1, stderr: bu1 } = Bm0(),
  { stringReplaceAll: oV6, stringEncaseCRLFWithFirstIndex: tV6 } = Im0(),
  { isArray: ZF1 } = Array,
  Jm0 = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
  jh = Object.create(null),
  eV6 = (A, B = {}) => {
    if (B.level && !(Number.isInteger(B.level) && B.level >= 0 && B.level <= 3))
      throw new Error('The `level` option should be an integer from 0 to 3');
    let Q = vu1 ? vu1.level : 0;
    A.level = B.level === void 0 ? Q : B.level;
  };
class Cm0 {
  constructor(A) {
    return Xm0(A);
  }
}
var Xm0 = (A) => {
  let B = {};
  return (
    eV6(B, A),
    (B.template = (...Q) => Km0(B.template, ...Q)),
    Object.setPrototypeOf(B, YF1.prototype),
    Object.setPrototypeOf(B.template, B),
    (B.template.constructor = () => {
      throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
    }),
    (B.template.Instance = Cm0),
    B.template
  );
};
function YF1(A) {
  return Xm0(A);
}
for (let [A, B] of Object.entries(kr))
  jh[A] = {
    get() {
      let Q = WF1(this, gu1(B.open, B.close, this._styler), this._isEmpty);
      return (Object.defineProperty(this, A, { value: Q }), Q);
    },
  };
jh.visible = {
  get() {
    let A = WF1(this, this._styler, !0);
    return (Object.defineProperty(this, 'visible', { value: A }), A);
  },
};
var Vm0 = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];
for (let A of Vm0)
  jh[A] = {
    get() {
      let { level: B } = this;
      return function (...Q) {
        let I = gu1(kr.color[Jm0[B]][A](...Q), kr.color.close, this._styler);
        return WF1(this, I, this._isEmpty);
      };
    },
  };
for (let A of Vm0) {
  let B = 'bg' + A[0].toUpperCase() + A.slice(1);
  jh[B] = {
    get() {
      let { level: Q } = this;
      return function (...I) {
        let G = gu1(kr.bgColor[Jm0[Q]][A](...I), kr.bgColor.close, this._styler);
        return WF1(this, G, this._isEmpty);
      };
    },
  };
}
var AK6 = Object.defineProperties(() => {}, {
    ...jh,
    level: {
      enumerable: !0,
      get() {
        return this._generator.level;
      },
      set(A) {
        this._generator.level = A;
      },
    },
  }),
  gu1 = (A, B, Q) => {
    let I, G;
    if (Q === void 0) ((I = A), (G = B));
    else ((I = Q.openAll + A), (G = B + Q.closeAll));
    return { open: A, close: B, openAll: I, closeAll: G, parent: Q };
  },
  WF1 = (A, B, Q) => {
    let I = (...G) => {
      if (ZF1(G[0]) && ZF1(G[0].raw)) return Fm0(I, Km0(I, ...G));
      return Fm0(I, G.length === 1 ? '' + G[0] : G.join(' '));
    };
    return (
      Object.setPrototypeOf(I, AK6),
      (I._generator = A),
      (I._styler = B),
      (I._isEmpty = Q),
      I
    );
  },
  Fm0 = (A, B) => {
    if (A.level <= 0 || !B) return A._isEmpty ? '' : B;
    let Q = A._styler;
    if (Q === void 0) return B;
    let { openAll: I, closeAll: G } = Q;
    if (B.indexOf('\x1B') !== -1)
      while (Q !== void 0) ((B = oV6(B, Q.close, Q.open)), (Q = Q.parent));
    let D = B.indexOf(`
`);
    if (D !== -1) B = tV6(B, G, I, D);
    return I + B + G;
  },
  fu1,
  Km0 = (A, ...B) => {
    let [Q] = B;
    if (!ZF1(Q) || !ZF1(Q.raw)) return B.join(' ');
    let I = B.slice(1),
      G = [Q.raw[0]];
    for (let D = 1; D < Q.length; D++)
      G.push(String(I[D - 1]).replace(/[{}\\]/g, '\\$&'), String(Q.raw[D]));
    if (fu1 === void 0) fu1 = Wm0();
    return fu1(A, G.join(''));
  };
Object.defineProperties(YF1.prototype, jh);
var FF1 = YF1();
FF1.supportsColor = vu1;
FF1.stderr = YF1({ level: bu1 ? bu1.level : 0 });
FF1.stderr.supportsColor = bu1;
Hm0.exports = FF1;
