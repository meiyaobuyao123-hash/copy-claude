// Module: zP
// Params: kd5,udA

var { defineProperty: P81, getOwnPropertyDescriptor: LA4, getOwnPropertyNames: RA4 } = Object,
  OA4 = Object.prototype.hasOwnProperty,
  hdA = (A, B) => P81(A, 'name', { value: B, configurable: !0 }),
  TA4 = (A, B) => {
    for (var Q in B) P81(A, Q, { get: B[Q], enumerable: !0 });
  },
  PA4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of RA4(B))
        if (!OA4.call(A, G) && G !== Q)
          P81(A, G, { get: () => B[G], enumerable: !(I = LA4(B, G)) || I.enumerable });
    }
    return A;
  },
  SA4 = (A) => PA4(P81({}, '__esModule', { value: !0 }), A),
  mdA = {};
TA4(mdA, {
  contentLengthMiddleware: () => wT1,
  contentLengthMiddlewareOptions: () => ddA,
  getContentLengthPlugin: () => jA4,
});
udA.exports = SA4(mdA);
var _A4 = bdA(),
  gdA = 'content-length';
function wT1(A) {
  return (B) => async (Q) => {
    let I = Q.request;
    if (_A4.HttpRequest.isInstance(I)) {
      let { body: G, headers: D } = I;
      if (
        G &&
        Object.keys(D)
          .map((Z) => Z.toLowerCase())
          .indexOf(gdA) === -1
      )
        try {
          let Z = A(G);
          I.headers = { ...I.headers, [gdA]: String(Z) };
        } catch (Z) {}
    }
    return B({ ...Q, request: I });
  };
}
hdA(wT1, 'contentLengthMiddleware');
var ddA = {
    step: 'build',
    tags: ['SET_CONTENT_LENGTH', 'CONTENT_LENGTH'],
    name: 'contentLengthMiddleware',
    override: !0,
  },
  jA4 = hdA(
    (A) => ({
      applyToStack: (B) => {
        B.add(wT1(A.bodyLengthChecker), ddA);
      },
    }),
    'getContentLengthPlugin'
  );
