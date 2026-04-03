// Module: th0
// Params: hz8,oh0

var nh0 =
    (A, B) =>
    (...Q) => {
      return `\x1B[${A(...Q) + B}m`;
    },
  ah0 =
    (A, B) =>
    (...Q) => {
      let I = A(...Q);
      return `\x1B[${38 + B};5;${I}m`;
    },
  sh0 =
    (A, B) =>
    (...Q) => {
      let I = A(...Q);
      return `\x1B[${38 + B};2;${I[0]};${I[1]};${I[2]}m`;
    },
  DF1 = (A) => A,
  rh0 = (A, B, Q) => [A, B, Q],
  Sh = (A, B, Q) => {
    Object.defineProperty(A, B, {
      get: () => {
        let I = Q();
        return (Object.defineProperty(A, B, { value: I, enumerable: !0, configurable: !0 }), I);
      },
      enumerable: !0,
      configurable: !0,
    });
  },
  yu1,
  _h = (A, B, Q, I) => {
    if (yu1 === void 0) yu1 = ju1();
    let G = I ? 10 : 0,
      D = {};
    for (let [Z, Y] of Object.entries(yu1)) {
      let W = Z === 'ansi16' ? 'ansi' : Z;
      if (Z === B) D[W] = A(Q, G);
      else if (typeof Y === 'object') D[W] = A(Y[B], G);
    }
    return D;
  };
function mV6() {
  let A = new Map(),
    B = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39],
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49],
      },
    };
  ((B.color.gray = B.color.blackBright),
    (B.bgColor.bgGray = B.bgColor.bgBlackBright),
    (B.color.grey = B.color.blackBright),
    (B.bgColor.bgGrey = B.bgColor.bgBlackBright));
  for (let [Q, I] of Object.entries(B)) {
    for (let [G, D] of Object.entries(I))
      ((B[G] = { open: `\x1B[${D[0]}m`, close: `\x1B[${D[1]}m` }),
        (I[G] = B[G]),
        A.set(D[0], D[1]));
    Object.defineProperty(B, Q, { value: I, enumerable: !1 });
  }
  return (
    Object.defineProperty(B, 'codes', { value: A, enumerable: !1 }),
    (B.color.close = '\x1B[39m'),
    (B.bgColor.close = '\x1B[49m'),
    Sh(B.color, 'ansi', () => _h(nh0, 'ansi16', DF1, !1)),
    Sh(B.color, 'ansi256', () => _h(ah0, 'ansi256', DF1, !1)),
    Sh(B.color, 'ansi16m', () => _h(sh0, 'rgb', rh0, !1)),
    Sh(B.bgColor, 'ansi', () => _h(nh0, 'ansi16', DF1, !0)),
    Sh(B.bgColor, 'ansi256', () => _h(ah0, 'ansi256', DF1, !0)),
    Sh(B.bgColor, 'ansi16m', () => _h(sh0, 'rgb', rh0, !0)),
    B
  );
}
Object.defineProperty(oh0, 'exports', { enumerable: !0, get: mV6 });
