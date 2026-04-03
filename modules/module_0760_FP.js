// Module: FP
// Params: $h5,eyA

var { defineProperty: D51, getOwnPropertyDescriptor: Hu9, getOwnPropertyNames: zu9 } = Object,
  wu9 = Object.prototype.hasOwnProperty,
  eR1 = (A, B) => D51(A, 'name', { value: B, configurable: !0 }),
  Eu9 = (A, B) => {
    for (var Q in B) D51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Uu9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of zu9(B))
        if (!wu9.call(A, G) && G !== Q)
          D51(A, G, { get: () => B[G], enumerable: !(I = Hu9(B, G)) || I.enumerable });
    }
    return A;
  },
  Nu9 = (A) => Uu9(D51({}, '__esModule', { value: !0 }), A),
  ryA = {};
Eu9(ryA, {
  getLoggerPlugin: () => $u9,
  loggerMiddleware: () => oyA,
  loggerMiddlewareOptions: () => tyA,
});
eyA.exports = Nu9(ryA);
var oyA = eR1(
    () => (A, B) => async (Q) => {
      try {
        let I = await A(Q),
          { clientName: G, commandName: D, logger: Z, dynamoDbDocumentClientOptions: Y = {} } = B,
          { overrideInputFilterSensitiveLog: W, overrideOutputFilterSensitiveLog: F } = Y,
          J = W ?? B.inputFilterSensitiveLog,
          C = F ?? B.outputFilterSensitiveLog,
          { $metadata: X, ...V } = I.output;
        return (
          Z?.info?.({
            clientName: G,
            commandName: D,
            input: J(Q.input),
            output: C(V),
            metadata: X,
          }),
          I
        );
      } catch (I) {
        let { clientName: G, commandName: D, logger: Z, dynamoDbDocumentClientOptions: Y = {} } = B,
          { overrideInputFilterSensitiveLog: W } = Y,
          F = W ?? B.inputFilterSensitiveLog;
        throw (
          Z?.error?.({
            clientName: G,
            commandName: D,
            input: F(Q.input),
            error: I,
            metadata: I.$metadata,
          }),
          I
        );
      }
    },
    'loggerMiddleware'
  ),
  tyA = { name: 'loggerMiddleware', tags: ['LOGGER'], step: 'initialize', override: !0 },
  $u9 = eR1(
    (A) => ({
      applyToStack: eR1((B) => {
        B.add(oyA(), tyA);
      }, 'applyToStack'),
    }),
    'getLoggerPlugin'
  );
