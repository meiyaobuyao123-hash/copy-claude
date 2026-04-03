// Module: Tu
// Params: v1A

Object.defineProperty(v1A, '__esModule', { value: !0 });
var Iw1 = QJ(),
  zO2 = Qw1(),
  wO2 = IJ(),
  EO2 = AA1();
function x1A(A, B = 100, Q = 1 / 0) {
  try {
    return KA1('', A, B, Q);
  } catch (I) {
    return { ERROR: `**non-serializable** (${I})` };
  }
}
function f1A(A, B = 3, Q = 102400) {
  let I = x1A(A, B);
  if (qO2(I) > Q) return f1A(A, B - 1, Q);
  return I;
}
function KA1(A, B, Q = 1 / 0, I = 1 / 0, G = zO2.memoBuilder()) {
  let [D, Z] = G;
  if (B == null || (['number', 'boolean', 'string'].includes(typeof B) && !Iw1.isNaN(B))) return B;
  let Y = UO2(A, B);
  if (!Y.startsWith('[object ')) return Y;
  if (B.__sentry_skip_normalization__) return B;
  let W =
    typeof B.__sentry_override_normalization_depth__ === 'number'
      ? B.__sentry_override_normalization_depth__
      : Q;
  if (W === 0) return Y.replace('object ', '');
  if (D(B)) return '[Circular ~]';
  let F = B;
  if (F && typeof F.toJSON === 'function')
    try {
      let V = F.toJSON();
      return KA1('', V, W - 1, I, G);
    } catch (V) {}
  let J = Array.isArray(B) ? [] : {},
    C = 0,
    X = wO2.convertToPlainObject(B);
  for (let V in X) {
    if (!Object.prototype.hasOwnProperty.call(X, V)) continue;
    if (C >= I) {
      J[V] = '[MaxProperties ~]';
      break;
    }
    let K = X[V];
    ((J[V] = KA1(V, K, W - 1, I, G)), C++);
  }
  return (Z(B), J);
}
function UO2(A, B) {
  try {
    if (A === 'domain' && B && typeof B === 'object' && B._events) return '[Domain]';
    if (A === 'domainEmitter') return '[DomainEmitter]';
    if (typeof global !== 'undefined' && B === global) return '[Global]';
    if (typeof window !== 'undefined' && B === window) return '[Window]';
    if (typeof document !== 'undefined' && B === document) return '[Document]';
    if (Iw1.isVueViewModel(B)) return '[VueViewModel]';
    if (Iw1.isSyntheticEvent(B)) return '[SyntheticEvent]';
    if (typeof B === 'number' && B !== B) return '[NaN]';
    if (typeof B === 'function') return `[Function: ${EO2.getFunctionName(B)}]`;
    if (typeof B === 'symbol') return `[${String(B)}]`;
    if (typeof B === 'bigint') return `[BigInt: ${String(B)}]`;
    let Q = NO2(B);
    if (/^HTML(\w*)Element$/.test(Q)) return `[HTMLElement: ${Q}]`;
    return `[object ${Q}]`;
  } catch (Q) {
    return `**non-serializable** (${Q})`;
  }
}
function NO2(A) {
  let B = Object.getPrototypeOf(A);
  return B ? B.constructor.name : 'null prototype';
}
function $O2(A) {
  return ~-encodeURI(A).split(/%..|./).length;
}
function qO2(A) {
  return $O2(JSON.stringify(A));
}
function MO2(A, B) {
  let Q = B.replace(/\\/g, '/').replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
    I = A;
  try {
    I = decodeURI(A);
  } catch (G) {}
  return I.replace(/\\/g, '/')
    .replace(/webpack:\/?/g, '')
    .replace(new RegExp(`(file://)?/*${Q}/*`, 'ig'), 'app:///');
}
v1A.normalize = x1A;
v1A.normalizeToSize = f1A;
v1A.normalizeUrlToBase = MO2;
v1A.walk = KA1;
