// Module: P22
// Params: O22

Object.defineProperty(O22, '__esModule', { value: !0 });
O22.detectResources = void 0;
var rc1 = C4(),
  sc1 = ac1(),
  ix6 = (A = {}) => {
    let B = (A.detectors || []).map((Q) => {
      try {
        let I = sc1.resourceFromDetectedResource(Q.detect(A));
        return (rc1.diag.debug(`${Q.constructor.name} found resource.`, I), I);
      } catch (I) {
        return (rc1.diag.debug(`${Q.constructor.name} failed: ${I.message}`), sc1.emptyResource());
      }
    });
    return (nx6(B), B.reduce((Q, I) => Q.merge(I), sc1.emptyResource()));
  };
O22.detectResources = ix6;
var nx6 = (A) => {
  A.forEach((B) => {
    if (Object.keys(B.attributes).length > 0) {
      let Q = JSON.stringify(B.attributes, null, 4);
      rc1.diag.verbose(Q);
    }
  });
};
