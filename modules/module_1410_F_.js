// Module: F_
// Params: eu0

Object.defineProperty(eu0, '__esModule', { value: !0 });
eu0.unregisterGlobal = eu0.getGlobal = eu0.registerGlobal = void 0;
var AE6 = lu0(),
  ih = zp1(),
  BE6 = tu0(),
  QE6 = ih.VERSION.split('.')[0],
  ar = Symbol.for(`opentelemetry.js.api.${QE6}`),
  sr = AE6._globalThis;
function IE6(A, B, Q, I = !1) {
  var G;
  let D = (sr[ar] = (G = sr[ar]) !== null && G !== void 0 ? G : { version: ih.VERSION });
  if (!I && D[A]) {
    let Z = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${A}`);
    return (Q.error(Z.stack || Z.message), !1);
  }
  if (D.version !== ih.VERSION) {
    let Z = new Error(
      `@opentelemetry/api: Registration of version v${D.version} for ${A} does not match previously registered API v${ih.VERSION}`
    );
    return (Q.error(Z.stack || Z.message), !1);
  }
  return (
    (D[A] = B),
    Q.debug(`@opentelemetry/api: Registered a global for ${A} v${ih.VERSION}.`),
    !0
  );
}
eu0.registerGlobal = IE6;
function GE6(A) {
  var B, Q;
  let I = (B = sr[ar]) === null || B === void 0 ? void 0 : B.version;
  if (!I || !BE6.isCompatible(I)) return;
  return (Q = sr[ar]) === null || Q === void 0 ? void 0 : Q[A];
}
eu0.getGlobal = GE6;
function DE6(A, B) {
  B.debug(`@opentelemetry/api: Unregistering a global for ${A} v${ih.VERSION}.`);
  let Q = sr[ar];
  if (Q) delete Q[A];
}
eu0.unregisterGlobal = DE6;
