// Module: OT1
// Params: MuA

Object.defineProperty(MuA, '__esModule', { value: !0 });
MuA.getEndpointFromConfig = void 0;
var b04 = hX(),
  g04 = quA(),
  h04 = async (A) =>
    b04.loadConfig(g04.getEndpointUrlConfig(A !== null && A !== void 0 ? A : ''))();
MuA.getEndpointFromConfig = h04;
