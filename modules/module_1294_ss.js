// Module: ss
// Params: uV8,vk0

var { addAbortListener: _76 } = I6(),
  { RequestAbortedError: j76 } = y5(),
  Qh = Symbol('kListener'),
  hz = Symbol('kSignal');
function xk0(A) {
  if (A.abort) A.abort(A[hz]?.reason);
  else A.reason = A[hz]?.reason ?? new j76();
  fk0(A);
}
function y76(A, B) {
  if (((A.reason = null), (A[hz] = null), (A[Qh] = null), !B)) return;
  if (B.aborted) {
    xk0(A);
    return;
  }
  ((A[hz] = B),
    (A[Qh] = () => {
      xk0(A);
    }),
    _76(A[hz], A[Qh]));
}
function fk0(A) {
  if (!A[hz]) return;
  if ('removeEventListener' in A[hz]) A[hz].removeEventListener('abort', A[Qh]);
  else A[hz].removeListener('abort', A[Qh]);
  ((A[hz] = null), (A[Qh] = null));
}
vk0.exports = { addSignal: y76, removeSignal: fk0 };
