// Module: IJ
// Params: pe1

Object.defineProperty(pe1, '__esModule', { value: !0 });
var yM2 = Mz1(),
  kM2 = aK(),
  zy = QJ(),
  xM2 = CX(),
  be1 = $u();
function fM2(A, B, Q) {
  if (!(B in A)) return;
  let I = A[B],
    G = Q(I);
  if (typeof G === 'function') de1(G, I);
  A[B] = G;
}
function me1(A, B, Q) {
  try {
    Object.defineProperty(A, B, { value: Q, writable: !0, configurable: !0 });
  } catch (I) {
    kM2.DEBUG_BUILD && xM2.logger.log(`Failed to add non-enumerable property "${B}" to object`, A);
  }
}
function de1(A, B) {
  try {
    let Q = B.prototype || {};
    ((A.prototype = B.prototype = Q), me1(A, '__sentry_original__', B));
  } catch (Q) {}
}
function vM2(A) {
  return A.__sentry_original__;
}
function bM2(A) {
  return Object.keys(A)
    .map((B) => `${encodeURIComponent(B)}=${encodeURIComponent(A[B])}`)
    .join('&');
}
function ue1(A) {
  if (zy.isError(A)) return { message: A.message, name: A.name, stack: A.stack, ...he1(A) };
  else if (zy.isEvent(A)) {
    let B = { type: A.type, target: ge1(A.target), currentTarget: ge1(A.currentTarget), ...he1(A) };
    if (typeof CustomEvent !== 'undefined' && zy.isInstanceOf(A, CustomEvent)) B.detail = A.detail;
    return B;
  } else return A;
}
function ge1(A) {
  try {
    return zy.isElement(A) ? yM2.htmlTreeAsString(A) : Object.prototype.toString.call(A);
  } catch (B) {
    return '<unknown>';
  }
}
function he1(A) {
  if (typeof A === 'object' && A !== null) {
    let B = {};
    for (let Q in A) if (Object.prototype.hasOwnProperty.call(A, Q)) B[Q] = A[Q];
    return B;
  } else return {};
}
function gM2(A, B = 40) {
  let Q = Object.keys(ue1(A));
  if ((Q.sort(), !Q.length)) return '[object has no keys]';
  if (Q[0].length >= B) return be1.truncate(Q[0], B);
  for (let I = Q.length; I > 0; I--) {
    let G = Q.slice(0, I).join(', ');
    if (G.length > B) continue;
    if (I === Q.length) return G;
    return be1.truncate(G, B);
  }
  return '';
}
function hM2(A) {
  return Sz1(A, new Map());
}
function Sz1(A, B) {
  if (mM2(A)) {
    let Q = B.get(A);
    if (Q !== void 0) return Q;
    let I = {};
    B.set(A, I);
    for (let G of Object.keys(A)) if (typeof A[G] !== 'undefined') I[G] = Sz1(A[G], B);
    return I;
  }
  if (Array.isArray(A)) {
    let Q = B.get(A);
    if (Q !== void 0) return Q;
    let I = [];
    return (
      B.set(A, I),
      A.forEach((G) => {
        I.push(Sz1(G, B));
      }),
      I
    );
  }
  return A;
}
function mM2(A) {
  if (!zy.isPlainObject(A)) return !1;
  try {
    let B = Object.getPrototypeOf(A).constructor.name;
    return !B || B === 'Object';
  } catch (B) {
    return !0;
  }
}
function dM2(A) {
  let B;
  switch (!0) {
    case A === void 0 || A === null:
      B = new String(A);
      break;
    case typeof A === 'symbol' || typeof A === 'bigint':
      B = Object(A);
      break;
    case zy.isPrimitive(A):
      B = new A.constructor(A);
      break;
    default:
      B = A;
      break;
  }
  return B;
}
pe1.addNonEnumerableProperty = me1;
pe1.convertToPlainObject = ue1;
pe1.dropUndefinedKeys = hM2;
pe1.extractExceptionKeysForMessage = gM2;
pe1.fill = fM2;
pe1.getOriginalFunction = vM2;
pe1.markFunctionWrapped = de1;
pe1.objectify = dM2;
pe1.urlEncode = bM2;
