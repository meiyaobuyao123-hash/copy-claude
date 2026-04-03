// Module: TZ0
// Params: NG8,OZ0

var xx1 = process.platform === 'win32';
function fx1(A, B) {
  return Object.assign(new Error(`${B} ${A.command} ENOENT`), {
    code: 'ENOENT',
    errno: 'ENOENT',
    syscall: `${B} ${A.command}`,
    path: A.command,
    spawnargs: A.args,
  });
}
function w_4(A, B) {
  if (!xx1) return;
  let Q = A.emit;
  A.emit = function (I, G) {
    if (I === 'exit') {
      let D = RZ0(G, B);
      if (D) return Q.call(A, 'error', D);
    }
    return Q.apply(A, arguments);
  };
}
function RZ0(A, B) {
  if (xx1 && A === 1 && !B.file) return fx1(B.original, 'spawn');
  return null;
}
function E_4(A, B) {
  if (xx1 && A === 1 && !B.file) return fx1(B.original, 'spawnSync');
  return null;
}
OZ0.exports = {
  hookChildProcess: w_4,
  verifyENOENT: RZ0,
  verifyENOENTSync: E_4,
  notFoundError: fx1,
};
