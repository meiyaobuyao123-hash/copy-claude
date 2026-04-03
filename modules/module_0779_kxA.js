// Module: kxA
// Params: jxA

Object.defineProperty(jxA, '__esModule', { value: !0 });
jxA.createChecksumStream = void 0;
var mc9 = tq(),
  dc9 = WO1(),
  uc9 = _xA();
function pc9(A) {
  if (typeof ReadableStream === 'function' && mc9.isReadableStream(A.source))
    return uc9.createChecksumStream(A);
  return new dc9.ChecksumStream(A);
}
jxA.createChecksumStream = pc9;
