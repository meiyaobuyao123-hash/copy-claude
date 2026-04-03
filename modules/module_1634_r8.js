// Module: r8
// Params: V32

var Bi1, Qi1, Ii1, Gi1;
Object.defineProperty(V32, '__esModule', { value: !0 });
V32.log = V32.setLoggerVerbosity = V32.setLogger = V32.getLogger = void 0;
V32.trace = im6;
V32.isTracerEnabled = X32;
var zR = O6(),
  vm6 = D1('process'),
  bm6 = Ai1().version,
  gm6 = {
    error: (A, ...B) => {
      console.error('E ' + A, ...B);
    },
    info: (A, ...B) => {
      console.error('I ' + A, ...B);
    },
    debug: (A, ...B) => {
      console.error('D ' + A, ...B);
    },
  },
  __ = gm6,
  Fm = zR.LogVerbosity.ERROR,
  hm6 =
    (Qi1 =
      (Bi1 = process.env.GRPC_NODE_VERBOSITY) !== null && Bi1 !== void 0
        ? Bi1
        : process.env.GRPC_VERBOSITY) !== null && Qi1 !== void 0
      ? Qi1
      : '';
switch (hm6.toUpperCase()) {
  case 'DEBUG':
    Fm = zR.LogVerbosity.DEBUG;
    break;
  case 'INFO':
    Fm = zR.LogVerbosity.INFO;
    break;
  case 'ERROR':
    Fm = zR.LogVerbosity.ERROR;
    break;
  case 'NONE':
    Fm = zR.LogVerbosity.NONE;
    break;
  default:
}
var mm6 = () => {
  return __;
};
V32.getLogger = mm6;
var dm6 = (A) => {
  __ = A;
};
V32.setLogger = dm6;
var um6 = (A) => {
  Fm = A;
};
V32.setLoggerVerbosity = um6;
var pm6 = (A, ...B) => {
  let Q;
  if (A >= Fm) {
    switch (A) {
      case zR.LogVerbosity.DEBUG:
        Q = __.debug;
        break;
      case zR.LogVerbosity.INFO:
        Q = __.info;
        break;
      case zR.LogVerbosity.ERROR:
        Q = __.error;
        break;
    }
    if (!Q) Q = __.error;
    if (Q) Q.bind(__)(...B);
  }
};
V32.log = pm6;
var cm6 =
    (Gi1 =
      (Ii1 = process.env.GRPC_NODE_TRACE) !== null && Ii1 !== void 0
        ? Ii1
        : process.env.GRPC_TRACE) !== null && Gi1 !== void 0
      ? Gi1
      : '',
  Di1 = new Set(),
  C32 = new Set();
for (let A of cm6.split(','))
  if (A.startsWith('-')) C32.add(A.substring(1));
  else Di1.add(A);
var lm6 = Di1.has('all');
function im6(A, B, Q) {
  if (X32(B))
    V32.log(A, new Date().toISOString() + ' | v' + bm6 + ' ' + vm6.pid + ' | ' + B + ' | ' + Q);
}
function X32(A) {
  return !C32.has(A) && (lm6 || Di1.has(A));
}
