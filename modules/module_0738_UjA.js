// Module: UjA
// Params: EjA

Object.defineProperty(EjA, '__esModule', { value: !0 });
var rT = cq();
class wjA {
  constructor(A) {
    ((this._sdkKey = A),
      (this._rawValues = null),
      (this._values = null),
      (this._source = 'Uninitialized'),
      (this._lcut = 0),
      (this._receivedAt = 0),
      (this._bootstrapMetadata = null),
      (this._warnings = new Set()));
  }
  reset() {
    ((this._values = null),
      (this._rawValues = null),
      (this._source = 'Loading'),
      (this._lcut = 0),
      (this._receivedAt = 0),
      (this._bootstrapMetadata = null));
  }
  finalize() {
    if (this._values) return;
    this._source = 'NoValues';
  }
  getValues() {
    return this._rawValues
      ? rT._typedJsonParse(this._rawValues, 'has_updates', 'EvaluationStoreValues')
      : null;
  }
  setValues(A, B) {
    var Q;
    if (!A) return !1;
    let I = rT._typedJsonParse(A.data, 'has_updates', 'EvaluationResponse');
    if (I == null) return !1;
    if (((this._source = A.source), (I === null || I === void 0 ? void 0 : I.has_updates) !== !0))
      return !0;
    if (
      ((this._rawValues = A.data),
      (this._lcut = I.time),
      (this._receivedAt = A.receivedAt),
      (this._values = I),
      (this._bootstrapMetadata = this._extractBootstrapMetadata(A.source, I)),
      A.source && I.user)
    )
      this._setWarningState(B, I);
    return (
      rT.SDKFlags.setFlags(this._sdkKey, (Q = I.sdk_flags) !== null && Q !== void 0 ? Q : {}),
      !0
    );
  }
  getWarnings() {
    if (this._warnings.size === 0) return;
    return Array.from(this._warnings);
  }
  getGate(A) {
    var B;
    return this._getDetailedStoreResult(
      (B = this._values) === null || B === void 0 ? void 0 : B.feature_gates,
      A
    );
  }
  getConfig(A) {
    var B;
    return this._getDetailedStoreResult(
      (B = this._values) === null || B === void 0 ? void 0 : B.dynamic_configs,
      A
    );
  }
  getLayer(A) {
    var B;
    return this._getDetailedStoreResult(
      (B = this._values) === null || B === void 0 ? void 0 : B.layer_configs,
      A
    );
  }
  getParamStore(A) {
    var B;
    return this._getDetailedStoreResult(
      (B = this._values) === null || B === void 0 ? void 0 : B.param_stores,
      A
    );
  }
  getSource() {
    return this._source;
  }
  getExposureMapping() {
    var A;
    return (A = this._values) === null || A === void 0 ? void 0 : A.exposures;
  }
  _extractBootstrapMetadata(A, B) {
    if (A !== 'Bootstrap') return null;
    let Q = {};
    if (B.user) Q.user = B.user;
    if (B.sdkInfo) Q.generatorSDKInfo = B.sdkInfo;
    return ((Q.lcut = B.time), Q);
  }
  _getDetailedStoreResult(A, B) {
    let Q = null;
    if (A) Q = A[B] ? A[B] : A[rT._DJB2(B)];
    return { result: Q, details: this._getDetails(Q == null) };
  }
  _setWarningState(A, B) {
    var Q;
    let I = rT.StableID.get(this._sdkKey);
    if (((Q = A.customIDs) === null || Q === void 0 ? void 0 : Q.stableID) !== I) {
      this._warnings.add('StableIDMismatch');
      return;
    }
    if ('user' in B) {
      let G = B.user;
      if (rT._getFullUserHash(A) !== rT._getFullUserHash(G)) this._warnings.add('PartialUserMatch');
    }
  }
  getCurrentSourceDetails() {
    if (this._source === 'Uninitialized' || this._source === 'NoValues')
      return { reason: this._source };
    let A = { reason: this._source, lcut: this._lcut, receivedAt: this._receivedAt };
    if (this._warnings.size > 0) A.warnings = Array.from(this._warnings);
    return A;
  }
  _getDetails(A) {
    var B, Q;
    let I = this.getCurrentSourceDetails(),
      G = I.reason,
      D = (B = I.warnings) !== null && B !== void 0 ? B : [];
    if (this._source === 'Bootstrap' && D.length > 0) G = G + D[0];
    if (G !== 'Uninitialized' && G !== 'NoValues') G = `${G}:${A ? 'Unrecognized' : 'Recognized'}`;
    let Z =
      this._source === 'Bootstrap'
        ? (Q = this._bootstrapMetadata) !== null && Q !== void 0
          ? Q
          : void 0
        : void 0;
    if (Z) I.bootstrapMetadata = Z;
    return Object.assign(Object.assign({}, I), { reason: G });
  }
}
EjA.default = wjA;
