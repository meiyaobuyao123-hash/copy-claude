// Module: Fw1
// Params: JAA

Object.defineProperty(JAA, '__esModule', { value: !0 });
var ZAA = fG(),
  YAA = 1000;
function WAA() {
  return Date.now() / YAA;
}
function PT2() {
  let { performance: A } = ZAA.GLOBAL_OBJ;
  if (!A || !A.now) return WAA;
  let B = Date.now() - A.now(),
    Q = A.timeOrigin == null ? B : A.timeOrigin;
  return () => {
    return (Q + A.now()) / YAA;
  };
}
var FAA = PT2(),
  ST2 = FAA;
JAA._browserPerformanceTimeOriginMode = void 0;
var _T2 = (() => {
  let { performance: A } = ZAA.GLOBAL_OBJ;
  if (!A || !A.now) {
    JAA._browserPerformanceTimeOriginMode = 'none';
    return;
  }
  let B = 3600000,
    Q = A.now(),
    I = Date.now(),
    G = A.timeOrigin ? Math.abs(A.timeOrigin + Q - I) : B,
    D = G < B,
    Z = A.timing && A.timing.navigationStart,
    W = typeof Z === 'number' ? Math.abs(Z + Q - I) : B,
    F = W < B;
  if (D || F)
    if (G <= W) return ((JAA._browserPerformanceTimeOriginMode = 'timeOrigin'), A.timeOrigin);
    else return ((JAA._browserPerformanceTimeOriginMode = 'navigationStart'), Z);
  return ((JAA._browserPerformanceTimeOriginMode = 'dateNow'), I);
})();
JAA.browserPerformanceTimeOrigin = _T2;
JAA.dateTimestampInSeconds = WAA;
JAA.timestampInSeconds = FAA;
JAA.timestampWithMs = ST2;
