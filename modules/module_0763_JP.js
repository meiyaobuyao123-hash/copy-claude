// Module: JP
// Params: Th5,UkA

var { defineProperty: J51, getOwnPropertyDescriptor: lu9, getOwnPropertyNames: iu9 } = Object,
  nu9 = Object.prototype.hasOwnProperty,
  F51 = (A, B) => J51(A, 'name', { value: B, configurable: !0 }),
  au9 = (A, B) => {
    for (var Q in B) J51(A, Q, { get: B[Q], enumerable: !0 });
  },
  su9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of iu9(B))
        if (!nu9.call(A, G) && G !== Q)
          J51(A, G, { get: () => B[G], enumerable: !(I = lu9(B, G)) || I.enumerable });
    }
    return A;
  },
  ru9 = (A) => su9(J51({}, '__esModule', { value: !0 }), A),
  zkA = {};
au9(zkA, {
  addRecursionDetectionMiddlewareOptions: () => EkA,
  getRecursionDetectionPlugin: () => Ap9,
  recursionDetectionMiddleware: () => wkA,
});
UkA.exports = ru9(zkA);
var ou9 = HkA(),
  AO1 = 'X-Amzn-Trace-Id',
  tu9 = 'AWS_LAMBDA_FUNCTION_NAME',
  eu9 = '_X_AMZN_TRACE_ID',
  wkA = F51(
    (A) => (B) => async (Q) => {
      let { request: I } = Q;
      if (!ou9.HttpRequest.isInstance(I) || A.runtime !== 'node') return B(Q);
      let G =
        Object.keys(I.headers ?? {}).find((W) => W.toLowerCase() === AO1.toLowerCase()) ?? AO1;
      if (I.headers.hasOwnProperty(G)) return B(Q);
      let D = process.env[tu9],
        Z = process.env[eu9],
        Y = F51((W) => typeof W === 'string' && W.length > 0, 'nonEmptyString');
      if (Y(D) && Y(Z)) I.headers[AO1] = Z;
      return B({ ...Q, request: I });
    },
    'recursionDetectionMiddleware'
  ),
  EkA = {
    step: 'build',
    tags: ['RECURSION_DETECTION'],
    name: 'recursionDetectionMiddleware',
    override: !0,
    priority: 'low',
  },
  Ap9 = F51(
    (A) => ({
      applyToStack: F51((B) => {
        B.add(wkA(A), EkA);
      }, 'applyToStack'),
    }),
    'getRecursionDetectionPlugin'
  );
