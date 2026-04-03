// Module: xY
// Params: R32

Object.defineProperty(R32, '__esModule', { value: !0 });
R32.parseUri = zd6;
R32.splitHostPort = wd6;
R32.combineHostPort = Ed6;
R32.uriToString = Ud6;
var Hd6 = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
function zd6(A) {
  let B = Hd6.exec(A);
  if (B === null) return null;
  return { scheme: B[1], authority: B[2], path: B[3] };
}
var L32 = /^\d+$/;
function wd6(A) {
  if (A.startsWith('[')) {
    let B = A.indexOf(']');
    if (B === -1) return null;
    let Q = A.substring(1, B);
    if (Q.indexOf(':') === -1) return null;
    if (A.length > B + 1)
      if (A[B + 1] === ':') {
        let I = A.substring(B + 2);
        if (L32.test(I)) return { host: Q, port: +I };
        else return null;
      } else return null;
    else return { host: Q };
  } else {
    let B = A.split(':');
    if (B.length === 2)
      if (L32.test(B[1])) return { host: B[0], port: +B[1] };
      else return null;
    else return { host: A };
  }
}
function Ed6(A) {
  if (A.port === void 0) return A.host;
  else if (A.host.includes(':')) return `[${A.host}]:${A.port}`;
  else return `${A.host}:${A.port}`;
}
function Ud6(A) {
  let B = '';
  if (A.scheme !== void 0) B += A.scheme + ':';
  if (A.authority !== void 0) B += '//' + A.authority + '/';
  return ((B += A.path), B);
}
