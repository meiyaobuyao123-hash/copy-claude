// Module: Oe1
// Params: Re1

Object.defineProperty(Re1, '__esModule', { value: !0 });
var Nz1 = QJ(),
  lq2 = $u();
function iq2(A, B, Q = 250, I, G, D, Z) {
  if (!D.exception || !D.exception.values || !Z || !Nz1.isInstanceOf(Z.originalException, Error))
    return;
  let Y =
    D.exception.values.length > 0 ? D.exception.values[D.exception.values.length - 1] : void 0;
  if (Y)
    D.exception.values = nq2($z1(A, B, G, Z.originalException, I, D.exception.values, Y, 0), Q);
}
function $z1(A, B, Q, I, G, D, Z, Y) {
  if (D.length >= Q + 1) return D;
  let W = [...D];
  if (Nz1.isInstanceOf(I[G], Error)) {
    Me1(Z, Y);
    let F = A(B, I[G]),
      J = W.length;
    (Le1(F, G, J, Y), (W = $z1(A, B, Q, I[G], G, [F, ...W], F, J)));
  }
  if (Array.isArray(I.errors))
    I.errors.forEach((F, J) => {
      if (Nz1.isInstanceOf(F, Error)) {
        Me1(Z, Y);
        let C = A(B, F),
          X = W.length;
        (Le1(C, `errors[${J}]`, X, Y), (W = $z1(A, B, Q, F, G, [C, ...W], C, X)));
      }
    });
  return W;
}
function Me1(A, B) {
  ((A.mechanism = A.mechanism || { type: 'generic', handled: !0 }),
    (A.mechanism = {
      ...A.mechanism,
      ...(A.type === 'AggregateError' && { is_exception_group: !0 }),
      exception_id: B,
    }));
}
function Le1(A, B, Q, I) {
  ((A.mechanism = A.mechanism || { type: 'generic', handled: !0 }),
    (A.mechanism = { ...A.mechanism, type: 'chained', source: B, exception_id: Q, parent_id: I }));
}
function nq2(A, B) {
  return A.map((Q) => {
    if (Q.value) Q.value = lq2.truncate(Q.value, B);
    return Q;
  });
}
Re1.applyAggregateErrorsToEvent = iq2;
