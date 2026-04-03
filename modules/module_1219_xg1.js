// Module: xg1
// Params: yO0

Object.defineProperty(yO0, '__esModule', { value: !0 });
yO0.GCPEnv = void 0;
yO0.clear = _06;
yO0.getEnv = j06;
var jO0 = Is(),
  iU;
(function (A) {
  ((A.APP_ENGINE = 'APP_ENGINE'),
    (A.KUBERNETES_ENGINE = 'KUBERNETES_ENGINE'),
    (A.CLOUD_FUNCTIONS = 'CLOUD_FUNCTIONS'),
    (A.COMPUTE_ENGINE = 'COMPUTE_ENGINE'),
    (A.CLOUD_RUN = 'CLOUD_RUN'),
    (A.NONE = 'NONE'));
})(iU || (yO0.GCPEnv = iU = {}));
var Ys;
function _06() {
  Ys = void 0;
}
async function j06() {
  if (Ys) return Ys;
  return ((Ys = y06()), Ys);
}
async function y06() {
  let A = iU.NONE;
  if (k06()) A = iU.APP_ENGINE;
  else if (x06()) A = iU.CLOUD_FUNCTIONS;
  else if (await b06())
    if (await v06()) A = iU.KUBERNETES_ENGINE;
    else if (f06()) A = iU.CLOUD_RUN;
    else A = iU.COMPUTE_ENGINE;
  else A = iU.NONE;
  return A;
}
function k06() {
  return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
}
function x06() {
  return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
}
function f06() {
  return !!process.env.K_CONFIGURATION;
}
async function v06() {
  try {
    return (await jO0.instance('attributes/cluster-name'), !0);
  } catch (A) {
    return !1;
  }
}
async function b06() {
  return jO0.isAvailable();
}
