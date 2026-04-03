// Module: CX
// Params: je1

Object.defineProperty(je1, '__esModule', { value: !0 });
var KM2 = aK(),
  Lz1 = fG(),
  HM2 = 'Sentry Logger ',
  Rz1 = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'],
  Oz1 = {};
function _e1(A) {
  if (!('console' in Lz1.GLOBAL_OBJ)) return A();
  let B = Lz1.GLOBAL_OBJ.console,
    Q = {},
    I = Object.keys(Oz1);
  I.forEach((G) => {
    let D = Oz1[G];
    ((Q[G] = B[G]), (B[G] = D));
  });
  try {
    return A();
  } finally {
    I.forEach((G) => {
      B[G] = Q[G];
    });
  }
}
function zM2() {
  let A = !1,
    B = {
      enable: () => {
        A = !0;
      },
      disable: () => {
        A = !1;
      },
      isEnabled: () => A,
    };
  if (KM2.DEBUG_BUILD)
    Rz1.forEach((Q) => {
      B[Q] = (...I) => {
        if (A)
          _e1(() => {
            Lz1.GLOBAL_OBJ.console[Q](`${HM2}[${Q}]:`, ...I);
          });
      };
    });
  else
    Rz1.forEach((Q) => {
      B[Q] = () => {
        return;
      };
    });
  return B;
}
var wM2 = zM2();
je1.CONSOLE_LEVELS = Rz1;
je1.consoleSandbox = _e1;
je1.logger = wM2;
je1.originalConsoleMethods = Oz1;
