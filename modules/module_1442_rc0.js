// Module: rc0
// Params: ac0

Object.defineProperty(ac0, '__esModule', { value: !0 });
ac0.NOOP_METER_PROVIDER = ac0.NoopMeterProvider = void 0;
var kU6 = Sp1();
class rp1 {
  getMeter(A, B, Q) {
    return kU6.NOOP_METER;
  }
}
ac0.NoopMeterProvider = rp1;
ac0.NOOP_METER_PROVIDER = new rp1();
