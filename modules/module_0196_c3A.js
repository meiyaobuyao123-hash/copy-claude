// Module: c3A
// Params: p3A

Object.defineProperty(p3A, '__esModule', { value: !0 });
var oe2 = I4(),
  u3A = 'Transaction',
  te2 = () => {
    return {
      name: u3A,
      setupOnce() {},
      processEvent(A) {
        let B = A19(A);
        for (let Q = B.length - 1; Q >= 0; Q--) {
          let I = B[Q];
          if (I.in_app === !0) {
            A.transaction = B19(I);
            break;
          }
        }
        return A;
      },
    };
  },
  ee2 = oe2.convertIntegrationFnToClass(u3A, te2);
function A19(A) {
  let B = A.exception && A.exception.values && A.exception.values[0];
  return (B && B.stacktrace && B.stacktrace.frames) || [];
}
function B19(A) {
  return A.module || A.function ? `${A.module || '?'}/${A.function || '?'}` : '<unknown>';
}
p3A.Transaction = ee2;
