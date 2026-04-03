// Module: gA2
// Params: vA2

Object.defineProperty(vA2, '__esModule', { value: !0 });
vA2.getRPCMetadata = vA2.deleteRPCMetadata = vA2.setRPCMetadata = vA2.RPCType = void 0;
var Nk6 = C4(),
  yc1 = Nk6.createContextKey('OpenTelemetry SDK Context Key RPC_METADATA'),
  $k6;
(function (A) {
  A.HTTP = 'http';
})(($k6 = vA2.RPCType || (vA2.RPCType = {})));
function qk6(A, B) {
  return A.setValue(yc1, B);
}
vA2.setRPCMetadata = qk6;
function Mk6(A) {
  return A.deleteValue(yc1);
}
vA2.deleteRPCMetadata = Mk6;
function Lk6(A) {
  return A.getValue(yc1);
}
vA2.getRPCMetadata = Lk6;
