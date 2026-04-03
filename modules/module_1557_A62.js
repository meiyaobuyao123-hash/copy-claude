// Module: A62
// Params: t42

Object.defineProperty(t42, '__esModule', { value: !0 });
t42.MeterProviderSharedState = void 0;
var pv6 = hV(),
  cv6 = j92(),
  lv6 = r42(),
  iv6 = Jo();
class o42 {
  resource;
  viewRegistry = new cv6.ViewRegistry();
  metricCollectors = [];
  meterSharedStates = new Map();
  constructor(A) {
    this.resource = A;
  }
  getMeterSharedState(A) {
    let B = pv6.instrumentationScopeId(A),
      Q = this.meterSharedStates.get(B);
    if (Q == null) ((Q = new lv6.MeterSharedState(this, A)), this.meterSharedStates.set(B, Q));
    return Q;
  }
  selectAggregations(A) {
    let B = [];
    for (let Q of this.metricCollectors) B.push([Q, iv6.toAggregation(Q.selectAggregation(A))]);
    return B;
  }
}
t42.MeterProviderSharedState = o42;
