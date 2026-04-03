// Module: wE1
// Params: i9A

Object.defineProperty(i9A, '__esModule', { value: !0 });
var u9A = tA(),
  p9A = qE(),
  Em2 = 'cause',
  Um2 = 5,
  c9A = 'LinkedErrors',
  Nm2 = (A = {}) => {
    let B = A.limit || Um2,
      Q = A.key || Em2;
    return {
      name: c9A,
      setupOnce() {},
      preprocessEvent(I, G, D) {
        let Z = D.getOptions();
        u9A.applyAggregateErrorsToEvent(
          u9A.exceptionFromError,
          Z.stackParser,
          Z.maxValueLength,
          Q,
          B,
          I,
          G
        );
      },
    };
  },
  l9A = p9A.defineIntegration(Nm2),
  $m2 = p9A.convertIntegrationFnToClass(c9A, l9A);
i9A.LinkedErrors = $m2;
i9A.linkedErrorsIntegration = l9A;
