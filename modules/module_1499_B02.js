// Module: B02
// Params: eA2

Object.defineProperty(eA2, '__esModule', { value: !0 });
eA2.callWithTimeout = eA2.TimeoutError = void 0;
class CJ1 extends Error {
  constructor(A) {
    super(A);
    Object.setPrototypeOf(this, CJ1.prototype);
  }
}
eA2.TimeoutError = CJ1;
function dk6(A, B) {
  let Q,
    I = new Promise(function G(D, Z) {
      Q = setTimeout(function Y() {
        Z(new CJ1('Operation timed out.'));
      }, B);
    });
  return Promise.race([A, I]).then(
    (G) => {
      return (clearTimeout(Q), G);
    },
    (G) => {
      throw (clearTimeout(Q), G);
    }
  );
}
eA2.callWithTimeout = dk6;
