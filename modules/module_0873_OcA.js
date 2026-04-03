// Module: OcA
// Params: LcA

Object.defineProperty(LcA, '__esModule', { value: !0 });
LcA.isStreamingPayload = void 0;
var d64 = D1('stream'),
  u64 = (A) =>
    (A === null || A === void 0 ? void 0 : A.body) instanceof d64.Readable ||
    (typeof ReadableStream !== 'undefined' &&
      (A === null || A === void 0 ? void 0 : A.body) instanceof ReadableStream);
LcA.isStreamingPayload = u64;
