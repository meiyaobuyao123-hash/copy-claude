// Module: xA2
// Params: yA2

Object.defineProperty(yA2, '__esModule', { value: !0 });
yA2.W3CTraceContextPropagator =
  yA2.parseTraceParent =
  yA2.TRACE_STATE_HEADER =
  yA2.TRACE_PARENT_HEADER =
    void 0;
var ZJ1 = C4(),
  Ck6 = Io(),
  Xk6 = jc1();
yA2.TRACE_PARENT_HEADER = 'traceparent';
yA2.TRACE_STATE_HEADER = 'tracestate';
var Vk6 = '00',
  Kk6 = '(?!ff)[\\da-f]{2}',
  Hk6 = '(?![0]{32})[\\da-f]{32}',
  zk6 = '(?![0]{16})[\\da-f]{16}',
  wk6 = '[\\da-f]{2}',
  Ek6 = new RegExp(`^\\s?(${Kk6})-(${Hk6})-(${zk6})-(${wk6})(-.*)?\\s?$`);
function _A2(A) {
  let B = Ek6.exec(A);
  if (!B) return null;
  if (B[1] === '00' && B[5]) return null;
  return { traceId: B[2], spanId: B[3], traceFlags: parseInt(B[4], 16) };
}
yA2.parseTraceParent = _A2;
class jA2 {
  inject(A, B, Q) {
    let I = ZJ1.trace.getSpanContext(A);
    if (!I || Ck6.isTracingSuppressed(A) || !ZJ1.isSpanContextValid(I)) return;
    let G = `${Vk6}-${I.traceId}-${I.spanId}-0${Number(I.traceFlags || ZJ1.TraceFlags.NONE).toString(16)}`;
    if ((Q.set(B, yA2.TRACE_PARENT_HEADER, G), I.traceState))
      Q.set(B, yA2.TRACE_STATE_HEADER, I.traceState.serialize());
  }
  extract(A, B, Q) {
    let I = Q.get(B, yA2.TRACE_PARENT_HEADER);
    if (!I) return A;
    let G = Array.isArray(I) ? I[0] : I;
    if (typeof G !== 'string') return A;
    let D = _A2(G);
    if (!D) return A;
    D.isRemote = !0;
    let Z = Q.get(B, yA2.TRACE_STATE_HEADER);
    if (Z) {
      let Y = Array.isArray(Z) ? Z.join(',') : Z;
      D.traceState = new Xk6.TraceState(typeof Y === 'string' ? Y : void 0);
    }
    return ZJ1.trace.setSpanContext(A, D);
  }
  fields() {
    return [yA2.TRACE_PARENT_HEADER, yA2.TRACE_STATE_HEADER];
  }
}
yA2.W3CTraceContextPropagator = jA2;
