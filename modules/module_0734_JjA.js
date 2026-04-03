// Module: JjA
// Params: WjA

Object.defineProperty(WjA, '__esModule', { value: !0 });
WjA._makeTypedGet =
  WjA._mergeOverride =
  WjA._makeLayer =
  WjA._makeExperiment =
  WjA._makeDynamicConfig =
  WjA._makeFeatureGate =
    void 0;
var ih9 = pG(),
  nh9 = X61(),
  ah9 = 'default';
function RR1(A, B, Q, I) {
  var G;
  return {
    name: A,
    details: B,
    ruleID:
      (G = Q === null || Q === void 0 ? void 0 : Q.rule_id) !== null && G !== void 0 ? G : ah9,
    __evaluation: Q,
    value: I,
  };
}
function sh9(A, B, Q) {
  return RR1(A, B, Q, (Q === null || Q === void 0 ? void 0 : Q.value) === !0);
}
WjA._makeFeatureGate = sh9;
function YjA(A, B, Q) {
  var I;
  let G = (I = Q === null || Q === void 0 ? void 0 : Q.value) !== null && I !== void 0 ? I : {};
  return Object.assign(Object.assign({}, RR1(A, B, Q, G)), {
    get: x61(A, Q === null || Q === void 0 ? void 0 : Q.value),
  });
}
WjA._makeDynamicConfig = YjA;
function rh9(A, B, Q) {
  var I;
  let G = YjA(A, B, Q);
  return Object.assign(Object.assign({}, G), {
    groupName:
      (I = Q === null || Q === void 0 ? void 0 : Q.group_name) !== null && I !== void 0 ? I : null,
  });
}
WjA._makeExperiment = rh9;
function oh9(A, B, Q, I) {
  var G, D;
  return Object.assign(Object.assign({}, RR1(A, B, Q, void 0)), {
    get: x61(A, Q === null || Q === void 0 ? void 0 : Q.value, I),
    groupName:
      (G = Q === null || Q === void 0 ? void 0 : Q.group_name) !== null && G !== void 0 ? G : null,
    __value: (D = Q === null || Q === void 0 ? void 0 : Q.value) !== null && D !== void 0 ? D : {},
  });
}
WjA._makeLayer = oh9;
function th9(A, B, Q, I) {
  return Object.assign(Object.assign(Object.assign({}, A), B), { get: x61(A.name, Q, I) });
}
WjA._mergeOverride = th9;
function x61(A, B, Q) {
  return (I, G) => {
    var D;
    let Z = (D = B === null || B === void 0 ? void 0 : B[I]) !== null && D !== void 0 ? D : null;
    if (Z == null) return G !== null && G !== void 0 ? G : null;
    if (G != null && !nh9._isTypeMatch(Z, G))
      return (
        ih9.Log.warn(
          `Parameter type mismatch. '${A}.${I}' was found to be type '${typeof Z}' but fallback/return type is '${typeof G}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`
        ),
        G !== null && G !== void 0 ? G : null
      );
    return (Q === null || Q === void 0 || Q(I), Z);
  };
}
WjA._makeTypedGet = x61;
