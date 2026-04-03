// Module: IR1
// Params: MSA

Object.defineProperty(MSA, '__esModule', { value: !0 });
MSA._createLayerParameterExposure =
  MSA._createConfigExposure =
  MSA._mapExposures =
  MSA._createGateExposure =
  MSA._isExposureEvent =
    void 0;
var NSA = 'statsig::config_exposure',
  $SA = 'statsig::gate_exposure',
  qSA = 'statsig::layer_exposure',
  QR1 = (A, B, Q, I, G) => {
    if (Q.bootstrapMetadata) I.bootstrapMetadata = Q.bootstrapMetadata;
    return {
      eventName: A,
      user: B,
      value: null,
      metadata: Bg9(Q, I),
      secondaryExposures: G,
      time: Date.now(),
    };
  },
  ob9 = ({ eventName: A }) => {
    return A === $SA || A === NSA || A === qSA;
  };
MSA._isExposureEvent = ob9;
var tb9 = (A, B, Q) => {
  var I, G, D;
  let Z = { gate: B.name, gateValue: String(B.value), ruleID: B.ruleID };
  if (((I = B.__evaluation) === null || I === void 0 ? void 0 : I.version) != null)
    Z.configVersion = B.__evaluation.version;
  return QR1(
    $SA,
    A,
    B.details,
    Z,
    z61(
      (D = (G = B.__evaluation) === null || G === void 0 ? void 0 : G.secondary_exposures) !==
        null && D !== void 0
        ? D
        : [],
      Q
    )
  );
};
MSA._createGateExposure = tb9;
function z61(A, B) {
  return A.map((Q) => {
    if (typeof Q === 'string') return (B !== null && B !== void 0 ? B : {})[Q];
    return Q;
  }).filter((Q) => Q != null);
}
MSA._mapExposures = z61;
var eb9 = (A, B, Q) => {
  var I, G, D, Z;
  let Y = { config: B.name, ruleID: B.ruleID };
  if (((I = B.__evaluation) === null || I === void 0 ? void 0 : I.version) != null)
    Y.configVersion = B.__evaluation.version;
  if (((G = B.__evaluation) === null || G === void 0 ? void 0 : G.passed) != null)
    Y.rulePassed = String(B.__evaluation.passed);
  return QR1(
    NSA,
    A,
    B.details,
    Y,
    z61(
      (Z = (D = B.__evaluation) === null || D === void 0 ? void 0 : D.secondary_exposures) !==
        null && Z !== void 0
        ? Z
        : [],
      Q
    )
  );
};
MSA._createConfigExposure = eb9;
var Ag9 = (A, B, Q, I) => {
  var G, D, Z, Y;
  let W = B.__evaluation,
    F =
      ((G = W === null || W === void 0 ? void 0 : W.explicit_parameters) === null || G === void 0
        ? void 0
        : G.includes(Q)) === !0,
    J = '',
    C =
      (D = W === null || W === void 0 ? void 0 : W.undelegated_secondary_exposures) !== null &&
      D !== void 0
        ? D
        : [];
  if (F)
    ((J = (Z = W.allocated_experiment_name) !== null && Z !== void 0 ? Z : ''),
      (C = W.secondary_exposures));
  let X = {
    config: B.name,
    parameterName: Q,
    ruleID: B.ruleID,
    allocatedExperiment: J,
    isExplicitParameter: String(F),
  };
  if (((Y = B.__evaluation) === null || Y === void 0 ? void 0 : Y.version) != null)
    X.configVersion = B.__evaluation.version;
  return QR1(qSA, A, B.details, X, z61(C, I));
};
MSA._createLayerParameterExposure = Ag9;
var Bg9 = (A, B) => {
  if (((B.reason = A.reason), A.lcut)) B.lcut = String(A.lcut);
  if (A.receivedAt) B.receivedAt = String(A.receivedAt);
  return B;
};
