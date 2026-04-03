// Module: Pf
// Params: pdA

Object.defineProperty(pdA, '__esModule', { value: !0 });
pdA.getHomeDir = void 0;
var yA4 = D1('os'),
  kA4 = D1('path'),
  ET1 = {},
  xA4 = () => {
    if (process && process.geteuid) return `${process.geteuid()}`;
    return 'DEFAULT';
  },
  fA4 = () => {
    let { HOME: A, USERPROFILE: B, HOMEPATH: Q, HOMEDRIVE: I = `C:${kA4.sep}` } = process.env;
    if (A) return A;
    if (B) return B;
    if (Q) return `${I}${Q}`;
    let G = xA4();
    if (!ET1[G]) ET1[G] = yA4.homedir();
    return ET1[G];
  };
pdA.getHomeDir = fA4;
