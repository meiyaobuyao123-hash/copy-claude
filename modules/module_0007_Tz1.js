// Module: Tz1
// Params: xe1

Object.defineProperty(xe1, '__esModule', { value: !0 });
var qM2 = aK(),
  qu = CX(),
  MM2 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function LM2(A) {
  return A === 'http' || A === 'https';
}
function RM2(A, B = !1) {
  let { host: Q, path: I, pass: G, port: D, projectId: Z, protocol: Y, publicKey: W } = A;
  return `${Y}://${W}${B && G ? `:${G}` : ''}@${Q}${D ? `:${D}` : ''}/${I ? `${I}/` : I}${Z}`;
}
function ye1(A) {
  let B = MM2.exec(A);
  if (!B) {
    qu.consoleSandbox(() => {
      console.error(`Invalid Sentry Dsn: ${A}`);
    });
    return;
  }
  let [Q, I, G = '', D, Z = '', Y] = B.slice(1),
    W = '',
    F = Y,
    J = F.split('/');
  if (J.length > 1) ((W = J.slice(0, -1).join('/')), (F = J.pop()));
  if (F) {
    let C = F.match(/^\d+/);
    if (C) F = C[0];
  }
  return ke1({ host: D, pass: G, path: W, projectId: F, port: Z, protocol: Q, publicKey: I });
}
function ke1(A) {
  return {
    protocol: A.protocol,
    publicKey: A.publicKey || '',
    pass: A.pass || '',
    host: A.host,
    port: A.port || '',
    path: A.path || '',
    projectId: A.projectId,
  };
}
function OM2(A) {
  if (!qM2.DEBUG_BUILD) return !0;
  let { port: B, projectId: Q, protocol: I } = A;
  if (
    ['protocol', 'publicKey', 'host', 'projectId'].find((Z) => {
      if (!A[Z]) return (qu.logger.error(`Invalid Sentry Dsn: ${Z} missing`), !0);
      return !1;
    })
  )
    return !1;
  if (!Q.match(/^\d+$/)) return (qu.logger.error(`Invalid Sentry Dsn: Invalid projectId ${Q}`), !1);
  if (!LM2(I)) return (qu.logger.error(`Invalid Sentry Dsn: Invalid protocol ${I}`), !1);
  if (B && isNaN(parseInt(B, 10)))
    return (qu.logger.error(`Invalid Sentry Dsn: Invalid port ${B}`), !1);
  return !0;
}
function TM2(A) {
  let B = typeof A === 'string' ? ye1(A) : ke1(A);
  if (!B || !OM2(B)) return;
  return B;
}
xe1.dsnFromString = ye1;
xe1.dsnToString = RM2;
xe1.makeDsn = TM2;
