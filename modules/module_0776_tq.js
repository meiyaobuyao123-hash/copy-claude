// Module: tq
// Params: qxA

Object.defineProperty(qxA, '__esModule', { value: !0 });
qxA.isBlob = qxA.isReadableStream = void 0;
var yc9 = (A) => {
  var B;
  return (
    typeof ReadableStream === 'function' &&
    (((B = A === null || A === void 0 ? void 0 : A.constructor) === null || B === void 0
      ? void 0
      : B.name) === ReadableStream.name ||
      A instanceof ReadableStream)
  );
};
qxA.isReadableStream = yc9;
var kc9 = (A) => {
  var B;
  return (
    typeof Blob === 'function' &&
    (((B = A === null || A === void 0 ? void 0 : A.constructor) === null || B === void 0
      ? void 0
      : B.name) === Blob.name ||
      A instanceof Blob)
  );
};
qxA.isBlob = kc9;
