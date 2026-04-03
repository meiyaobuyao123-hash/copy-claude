// Module: SjA
// Params: TjA

Object.defineProperty(TjA, '__esModule', { value: !0 });
TjA._makeParamStoreGetter = void 0;
var OjA = cq(),
  v61 = { disableExposureLog: !0 };
function b61(A) {
  return A == null || A.disableExposureLog === !1;
}
function PR1(A, B) {
  return B != null && !OjA._isTypeMatch(A, B);
}
function wm9(A, B) {
  return A.value;
}
function Em9(A, B, Q) {
  if (A.getFeatureGate(B.gate_name, b61(Q) ? void 0 : v61).value) return B.pass_value;
  return B.fail_value;
}
function Um9(A, B, Q, I) {
  let D = A.getDynamicConfig(B.config_name, v61).get(B.param_name);
  if (PR1(D, Q)) return Q;
  if (b61(I)) A.getDynamicConfig(B.config_name);
  return D;
}
function Nm9(A, B, Q, I) {
  let D = A.getExperiment(B.experiment_name, v61).get(B.param_name);
  if (PR1(D, Q)) return Q;
  if (b61(I)) A.getExperiment(B.experiment_name);
  return D;
}
function $m9(A, B, Q, I) {
  let D = A.getLayer(B.layer_name, v61).get(B.param_name);
  if (PR1(D, Q)) return Q;
  if (b61(I)) A.getLayer(B.layer_name).get(B.param_name);
  return D;
}
function qm9(A, B, Q) {
  return (I, G) => {
    if (B == null) return G;
    let D = B[I];
    if (D == null || (G != null && OjA._typeOf(G) !== D.param_type)) return G;
    switch (D.ref_type) {
      case 'static':
        return wm9(D, Q);
      case 'gate':
        return Em9(A, D, Q);
      case 'dynamic_config':
        return Um9(A, D, G, Q);
      case 'experiment':
        return Nm9(A, D, G, Q);
      case 'layer':
        return $m9(A, D, G, Q);
      default:
        return G;
    }
  };
}
TjA._makeParamStoreGetter = qm9;
