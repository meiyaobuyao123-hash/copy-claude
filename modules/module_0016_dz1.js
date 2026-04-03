// Module: dz1
// Params: W1A

Object.defineProperty(W1A, '__esModule', { value: !0 });
var tL2 = aK(),
  eL2 = CX(),
  AR2 = fG(),
  IA1 = AR2.getGlobalObject();
function BR2() {
  try {
    return (new ErrorEvent(''), !0);
  } catch (A) {
    return !1;
  }
}
function QR2() {
  try {
    return (new DOMError(''), !0);
  } catch (A) {
    return !1;
  }
}
function IR2() {
  try {
    return (new DOMException(''), !0);
  } catch (A) {
    return !1;
  }
}
function mz1() {
  if (!('fetch' in IA1)) return !1;
  try {
    return (new Request('http://www.example.com'), !0);
  } catch (A) {
    return !1;
  }
}
function hz1(A) {
  return A && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(A.toString());
}
function GR2() {
  if (typeof EdgeRuntime === 'string') return !0;
  if (!mz1()) return !1;
  if (hz1(IA1.fetch)) return !0;
  let A = !1,
    B = IA1.document;
  if (B && typeof B.createElement === 'function')
    try {
      let Q = B.createElement('iframe');
      if (((Q.hidden = !0), B.head.appendChild(Q), Q.contentWindow && Q.contentWindow.fetch))
        A = hz1(Q.contentWindow.fetch);
      B.head.removeChild(Q);
    } catch (Q) {
      tL2.DEBUG_BUILD &&
        eL2.logger.warn(
          'Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ',
          Q
        );
    }
  return A;
}
function DR2() {
  return 'ReportingObserver' in IA1;
}
function ZR2() {
  if (!mz1()) return !1;
  try {
    return (new Request('_', { referrerPolicy: 'origin' }), !0);
  } catch (A) {
    return !1;
  }
}
W1A.isNativeFetch = hz1;
W1A.supportsDOMError = QR2;
W1A.supportsDOMException = IR2;
W1A.supportsErrorEvent = BR2;
W1A.supportsFetch = mz1;
W1A.supportsNativeFetch = GR2;
W1A.supportsReferrerPolicy = ZR2;
W1A.supportsReportingObserver = DR2;
