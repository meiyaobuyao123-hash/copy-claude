// Module: ZC1
// Params: UQ2

Object.defineProperty(UQ2, '__esModule', { value: !0 });
UQ2.registerAdminService = Ip6;
UQ2.addAdminServicesToServer = Gp6;
var EQ2 = [];
function Ip6(A, B) {
  EQ2.push({ getServiceDefinition: A, getHandlers: B });
}
function Gp6(A) {
  for (let { getServiceDefinition: B, getHandlers: Q } of EQ2) A.addService(B(), Q());
}
