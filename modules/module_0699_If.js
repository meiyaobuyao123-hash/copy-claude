// Module: If
// Params: JSA

Object.defineProperty(JSA, '__esModule', { value: !0 });
JSA._getSortedObject = JSA._DJB2Object = JSA._DJB2 = void 0;
var xb9 = X61(),
  fb9 = (A) => {
    let B = 0;
    for (let Q = 0; Q < A.length; Q++) {
      let I = A.charCodeAt(Q);
      ((B = (B << 5) - B + I), (B = B & B));
    }
    return String(B >>> 0);
  };
JSA._DJB2 = fb9;
var vb9 = (A, B) => {
  return JSA._DJB2(JSON.stringify(JSA._getSortedObject(A, B)));
};
JSA._DJB2Object = vb9;
var bb9 = (A, B) => {
  if (A == null) return null;
  let Q = Object.keys(A).sort(),
    I = {};
  return (
    Q.forEach((G) => {
      let D = A[G];
      if (B === 0 || xb9._typeOf(D) !== 'object') {
        I[G] = D;
        return;
      }
      I[G] = JSA._getSortedObject(D, B != null ? B - 1 : B);
    }),
    I
  );
};
JSA._getSortedObject = bb9;
