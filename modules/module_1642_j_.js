// Module: j_
// Params: k32

Object.defineProperty(k32, '__esModule', { value: !0 });
k32.createChildChannelControlHelper = md6;
k32.registerLoadBalancerType = dd6;
k32.registerDefaultLoadBalancerType = ud6;
k32.createLoadBalancer = pd6;
k32.isLoadBalancerNameRegistered = cd6;
k32.parseLoadBalancingConfig = y32;
k32.getDefaultConfig = ld6;
k32.selectLbConfigFromList = id6;
var gd6 = r8(),
  hd6 = O6();
function md6(A, B) {
  var Q, I, G, D, Z, Y, W, F, J, C;
  return {
    createSubchannel:
      (I = (Q = B.createSubchannel) === null || Q === void 0 ? void 0 : Q.bind(B)) !== null &&
      I !== void 0
        ? I
        : A.createSubchannel.bind(A),
    updateState:
      (D = (G = B.updateState) === null || G === void 0 ? void 0 : G.bind(B)) !== null &&
      D !== void 0
        ? D
        : A.updateState.bind(A),
    requestReresolution:
      (Y = (Z = B.requestReresolution) === null || Z === void 0 ? void 0 : Z.bind(B)) !== null &&
      Y !== void 0
        ? Y
        : A.requestReresolution.bind(A),
    addChannelzChild:
      (F = (W = B.addChannelzChild) === null || W === void 0 ? void 0 : W.bind(B)) !== null &&
      F !== void 0
        ? F
        : A.addChannelzChild.bind(A),
    removeChannelzChild:
      (C = (J = B.removeChannelzChild) === null || J === void 0 ? void 0 : J.bind(B)) !== null &&
      C !== void 0
        ? C
        : A.removeChannelzChild.bind(A),
  };
}
var wR = {},
  Po = null;
function dd6(A, B, Q) {
  wR[A] = { LoadBalancer: B, LoadBalancingConfig: Q };
}
function ud6(A) {
  Po = A;
}
function pd6(A, B) {
  let Q = A.getLoadBalancerName();
  if (Q in wR) return new wR[Q].LoadBalancer(B);
  else return null;
}
function cd6(A) {
  return A in wR;
}
function y32(A) {
  let B = Object.keys(A);
  if (B.length !== 1)
    throw new Error('Provided load balancing config has multiple conflicting entries');
  let Q = B[0];
  if (Q in wR)
    try {
      return wR[Q].LoadBalancingConfig.createFromJson(A[Q]);
    } catch (I) {
      throw new Error(`${Q}: ${I.message}`);
    }
  else throw new Error(`Unrecognized load balancing config name ${Q}`);
}
function ld6() {
  if (!Po) throw new Error('No default load balancer type registered');
  return new wR[Po].LoadBalancingConfig();
}
function id6(A, B = !1) {
  for (let Q of A)
    try {
      return y32(Q);
    } catch (I) {
      gd6.log(hd6.LogVerbosity.DEBUG, 'Config parsing failed with error', I.message);
      continue;
    }
  if (B)
    if (Po) return new wR[Po].LoadBalancingConfig();
    else return null;
  else return null;
}
