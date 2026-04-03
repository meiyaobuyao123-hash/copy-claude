// Module: up1
// Params: Cc0

Object.defineProperty(Cc0, '__esModule', { value: !0 });
Cc0.NoopTracer = void 0;
var WU6 = er(),
  Fc0 = hp1(),
  mp1 = sF1(),
  FU6 = rF1(),
  dp1 = WU6.ContextAPI.getInstance();
class Jc0 {
  startSpan(A, B, Q = dp1.active()) {
    if (Boolean(B === null || B === void 0 ? void 0 : B.root)) return new mp1.NonRecordingSpan();
    let G = Q && Fc0.getSpanContext(Q);
    if (JU6(G) && FU6.isSpanContextValid(G)) return new mp1.NonRecordingSpan(G);
    else return new mp1.NonRecordingSpan();
  }
  startActiveSpan(A, B, Q, I) {
    let G, D, Z;
    if (arguments.length < 2) return;
    else if (arguments.length === 2) Z = B;
    else if (arguments.length === 3) ((G = B), (Z = Q));
    else ((G = B), (D = Q), (Z = I));
    let Y = D !== null && D !== void 0 ? D : dp1.active(),
      W = this.startSpan(A, G, Y),
      F = Fc0.setSpan(Y, W);
    return dp1.with(F, Z, void 0, W);
  }
}
Cc0.NoopTracer = Jc0;
function JU6(A) {
  return (
    typeof A === 'object' &&
    typeof A.spanId === 'string' &&
    typeof A.traceId === 'string' &&
    typeof A.traceFlags === 'number'
  );
}
