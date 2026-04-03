// Module: LZ0
// Params: UG8,MZ0

var F_4 = D1('path'),
  $Z0 = VZ0(),
  qZ0 = KZ0(),
  J_4 = NZ0(),
  C_4 = process.platform === 'win32',
  X_4 = /\.(?:com|exe)$/i,
  V_4 = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function K_4(A) {
  A.file = $Z0(A);
  let B = A.file && J_4(A.file);
  if (B) return (A.args.unshift(A.file), (A.command = B), $Z0(A));
  return A.file;
}
function H_4(A) {
  if (!C_4) return A;
  let B = K_4(A),
    Q = !X_4.test(B);
  if (A.options.forceShell || Q) {
    let I = V_4.test(B);
    ((A.command = F_4.normalize(A.command)),
      (A.command = qZ0.command(A.command)),
      (A.args = A.args.map((D) => qZ0.argument(D, I))));
    let G = [A.command].concat(A.args).join(' ');
    ((A.args = ['/d', '/s', '/c', `"${G}"`]),
      (A.command = process.env.comspec || 'cmd.exe'),
      (A.options.windowsVerbatimArguments = !0));
  }
  return A;
}
function z_4(A, B, Q) {
  if (B && !Array.isArray(B)) ((Q = B), (B = null));
  ((B = B ? B.slice(0) : []), (Q = Object.assign({}, Q)));
  let I = { command: A, args: B, options: Q, file: void 0, original: { command: A, args: B } };
  return Q.shell ? I : H_4(I);
}
MZ0.exports = z_4;
