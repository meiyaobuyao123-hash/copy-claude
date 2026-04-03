// Module: c82
// Params: u82

Object.defineProperty(u82, '__esModule', { value: !0 });
u82.JsonLogsSerializer = void 0;
var Qh6 = ml1();
u82.JsonLogsSerializer = {
  serializeRequest: (A) => {
    let B = Qh6.createExportLogsServiceRequest(A, { useHex: !0, useLongBits: !1 });
    return new TextEncoder().encode(JSON.stringify(B));
  },
  deserializeResponse: (A) => {
    let B = new TextDecoder();
    return JSON.parse(B.decode(A));
  },
};
