// Module: VY2
// Params: CY2

Object.defineProperty(CY2, '__esModule', { value: !0 });
CY2.createServiceClientConstructor = void 0;
var Ho6 = Wt();
function zo6(A, B) {
  let Q = {
    export: {
      path: A,
      requestStream: !1,
      responseStream: !1,
      requestSerialize: (I) => {
        return I;
      },
      requestDeserialize: (I) => {
        return I;
      },
      responseSerialize: (I) => {
        return I;
      },
      responseDeserialize: (I) => {
        return I;
      },
    },
  };
  return Ho6.makeGenericClientConstructor(Q, B);
}
CY2.createServiceClientConstructor = zo6;
