// Module: t82
// Params: r82

Object.defineProperty(r82, '__esModule', { value: !0 });
r82.JsonTraceSerializer = void 0;
var Wh6 = cl1();
r82.JsonTraceSerializer = {
  serializeRequest: (A) => {
    let B = Wh6.createExportTraceServiceRequest(A, { useHex: !0, useLongBits: !1 });
    return new TextEncoder().encode(JSON.stringify(B));
  },
  deserializeResponse: (A) => {
    let B = new TextDecoder();
    return JSON.parse(B.decode(A));
  },
};
