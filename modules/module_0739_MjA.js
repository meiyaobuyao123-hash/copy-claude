// Module: MjA
// Params: $jA

Object.defineProperty($jA, '__esModule', { value: !0 });
$jA._resolveDeltasResponse = void 0;
var NjA = cq(),
  Xm9 = 2;
function Vm9(A, B) {
  let Q = NjA._typedJsonParse(B, 'checksum', 'DeltasEvaluationResponse');
  if (!Q) return { hadBadDeltaChecksum: !0 };
  let I = Km9(A, Q),
    G = Hm9(I),
    D = NjA._DJB2Object(
      {
        feature_gates: G.feature_gates,
        dynamic_configs: G.dynamic_configs,
        layer_configs: G.layer_configs,
      },
      Xm9
    );
  if (D !== Q.checksumV2)
    return {
      hadBadDeltaChecksum: !0,
      badChecksum: D,
      badMergedConfigs: G,
      badFullResponse: Q.deltas_full_response,
    };
  return JSON.stringify(G);
}
$jA._resolveDeltasResponse = Vm9;
function Km9(A, B) {
  return Object.assign(Object.assign(Object.assign({}, A), B), {
    feature_gates: Object.assign(Object.assign({}, A.feature_gates), B.feature_gates),
    layer_configs: Object.assign(Object.assign({}, A.layer_configs), B.layer_configs),
    dynamic_configs: Object.assign(Object.assign({}, A.dynamic_configs), B.dynamic_configs),
  });
}
function Hm9(A) {
  let B = A;
  return (
    OR1(A.deleted_gates, B.feature_gates),
    delete B.deleted_gates,
    OR1(A.deleted_configs, B.dynamic_configs),
    delete B.deleted_configs,
    OR1(A.deleted_layers, B.layer_configs),
    delete B.deleted_layers,
    B
  );
}
function OR1(A, B) {
  A === null ||
    A === void 0 ||
    A.forEach((Q) => {
      delete B[Q];
    });
}
