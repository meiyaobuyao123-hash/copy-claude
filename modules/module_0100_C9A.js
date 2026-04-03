// Module: C9A
// Params: J9A

Object.defineProperty(J9A, '__esModule', { value: !0 });
function Sh2(A, ...B) {
  let Q = new String(String.raw(A, ...B));
  return (
    (Q.__sentry_template_string__ = A.join('\x00').replace(/%/g, '%%').replace(/\0/g, '%s')),
    (Q.__sentry_template_values__ = B),
    Q
  );
}
J9A.parameterize = Sh2;
