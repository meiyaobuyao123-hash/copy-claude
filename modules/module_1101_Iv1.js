// Module: Iv1
// Params: IK0

Object.defineProperty(IK0, '__esModule', { value: !0 });
IK0.toUtf8 = IK0.fromUtf8 = void 0;
var BK0 = oV0(),
  QK0 = AK0(),
  Th4 = (A) => (typeof TextEncoder === 'function' ? QK0.fromUtf8(A) : BK0.fromUtf8(A));
IK0.fromUtf8 = Th4;
var Ph4 = (A) => (typeof TextDecoder === 'function' ? QK0.toUtf8(A) : BK0.toUtf8(A));
IK0.toUtf8 = Ph4;
