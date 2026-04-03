// Module: a82
// Params: i82

Object.defineProperty(i82, '__esModule', { value: !0 });
i82.JsonMetricsSerializer = void 0;
var Dh6 = ul1();
i82.JsonMetricsSerializer = {
  serializeRequest: (A) => {
    let B = Dh6.createExportMetricsServiceRequest([A], { useLongBits: !1 });
    return new TextEncoder().encode(JSON.stringify(B));
  },
  deserializeResponse: (A) => {
    let B = new TextDecoder();
    return JSON.parse(B.decode(A));
  },
};
