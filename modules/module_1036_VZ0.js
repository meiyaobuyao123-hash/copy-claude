// Module: VZ0
// Params: HG8,XZ0

var JZ0 = D1('path'),
  tS4 = YZ0(),
  eS4 = FZ0();
function CZ0(A, B) {
  let Q = A.options.env || process.env,
    I = process.cwd(),
    G = A.options.cwd != null,
    D = G && process.chdir !== void 0 && !process.chdir.disabled;
  if (D)
    try {
      process.chdir(A.options.cwd);
    } catch (Y) {}
  let Z;
  try {
    Z = tS4.sync(A.command, { path: Q[eS4({ env: Q })], pathExt: B ? JZ0.delimiter : void 0 });
  } catch (Y) {
  } finally {
    if (D) process.chdir(I);
  }
  if (Z) Z = JZ0.resolve(G ? A.options.cwd : '', Z);
  return Z;
}
function A_4(A) {
  return CZ0(A) || CZ0(A, !0);
}
XZ0.exports = A_4;
