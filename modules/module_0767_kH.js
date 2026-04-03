// Module: kH
// Params: jh5,skA

var { defineProperty: z51, getOwnPropertyDescriptor: jp9, getOwnPropertyNames: yp9 } = Object,
  kp9 = Object.prototype.hasOwnProperty,
  QO1 = (A, B) => z51(A, 'name', { value: B, configurable: !0 }),
  xp9 = (A, B) => {
    for (var Q in B) z51(A, Q, { get: B[Q], enumerable: !0 });
  },
  fp9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of yp9(B))
        if (!kp9.call(A, G) && G !== Q)
          z51(A, G, { get: () => B[G], enumerable: !(I = jp9(B, G)) || I.enumerable });
    }
    return A;
  },
  vp9 = (A) => fp9(z51({}, '__esModule', { value: !0 }), A),
  pkA = {};
xp9(pkA, {
  deserializerMiddleware: () => ckA,
  deserializerMiddlewareOption: () => ikA,
  getSerdePlugin: () => akA,
  serializerMiddleware: () => lkA,
  serializerMiddlewareOption: () => nkA,
});
skA.exports = vp9(pkA);
var ckA = QO1(
    (A, B) => (Q, I) => async (G) => {
      let { response: D } = await Q(G);
      try {
        let Z = await B(D, A);
        return { response: D, output: Z };
      } catch (Z) {
        if ((Object.defineProperty(Z, '$response', { value: D }), !('$metadata' in Z))) {
          try {
            Z.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          } catch (W) {
            if (!I.logger || I.logger?.constructor?.name === 'NoOpLogger')
              console.warn(
                'Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.'
              );
            else
              I.logger?.warn?.(
                'Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.'
              );
          }
          if (typeof Z.$responseBodyText !== 'undefined') {
            if (Z.$response) Z.$response.body = Z.$responseBodyText;
          }
        }
        throw Z;
      }
    },
    'deserializerMiddleware'
  ),
  lkA = QO1(
    (A, B) => (Q, I) => async (G) => {
      let D =
        I.endpointV2?.url && A.urlParser ? async () => A.urlParser(I.endpointV2.url) : A.endpoint;
      if (!D) throw new Error('No valid endpoint provider available.');
      let Z = await B(G.input, { ...A, endpoint: D });
      return Q({ ...G, request: Z });
    },
    'serializerMiddleware'
  ),
  ikA = {
    name: 'deserializerMiddleware',
    step: 'deserialize',
    tags: ['DESERIALIZER'],
    override: !0,
  },
  nkA = { name: 'serializerMiddleware', step: 'serialize', tags: ['SERIALIZER'], override: !0 };
function akA(A, B, Q) {
  return {
    applyToStack: (I) => {
      (I.add(ckA(A, Q), ikA), I.add(lkA(A, B), nkA));
    },
  };
}
QO1(akA, 'getSerdePlugin');
