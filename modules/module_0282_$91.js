// Module: $91
// Params: VFA

Object.defineProperty(VFA, '__esModule', { value: !0 });
VFA.observeNotification = VFA.Notification = VFA.NotificationKind = void 0;
var rZ9 = qX(),
  oZ9 = N91(),
  tZ9 = hN1(),
  eZ9 = l5(),
  AY9;
(function (A) {
  ((A.NEXT = 'N'), (A.ERROR = 'E'), (A.COMPLETE = 'C'));
})((AY9 = VFA.NotificationKind || (VFA.NotificationKind = {})));
var BY9 = (function () {
  function A(B, Q, I) {
    ((this.kind = B), (this.value = Q), (this.error = I), (this.hasValue = B === 'N'));
  }
  return (
    (A.prototype.observe = function (B) {
      return XFA(this, B);
    }),
    (A.prototype.do = function (B, Q, I) {
      var G = this,
        D = G.kind,
        Z = G.value,
        Y = G.error;
      return D === 'N'
        ? B === null || B === void 0
          ? void 0
          : B(Z)
        : D === 'E'
          ? Q === null || Q === void 0
            ? void 0
            : Q(Y)
          : I === null || I === void 0
            ? void 0
            : I();
    }),
    (A.prototype.accept = function (B, Q, I) {
      var G;
      return eZ9.isFunction((G = B) === null || G === void 0 ? void 0 : G.next)
        ? this.observe(B)
        : this.do(B, Q, I);
    }),
    (A.prototype.toObservable = function () {
      var B = this,
        Q = B.kind,
        I = B.value,
        G = B.error,
        D =
          Q === 'N'
            ? oZ9.of(I)
            : Q === 'E'
              ? tZ9.throwError(function () {
                  return G;
                })
              : Q === 'C'
                ? rZ9.EMPTY
                : 0;
      if (!D) throw new TypeError('Unexpected notification kind ' + Q);
      return D;
    }),
    (A.createNext = function (B) {
      return new A('N', B);
    }),
    (A.createError = function (B) {
      return new A('E', void 0, B);
    }),
    (A.createComplete = function () {
      return A.completeNotification;
    }),
    (A.completeNotification = new A('C')),
    A
  );
})();
VFA.Notification = BY9;
function XFA(A, B) {
  var Q,
    I,
    G,
    D = A,
    Z = D.kind,
    Y = D.value,
    W = D.error;
  if (typeof Z !== 'string') throw new TypeError('Invalid notification, missing "kind"');
  Z === 'N'
    ? (Q = B.next) === null || Q === void 0 || Q.call(B, Y)
    : Z === 'E'
      ? (I = B.error) === null || I === void 0 || I.call(B, W)
      : (G = B.complete) === null || G === void 0 || G.call(B);
}
VFA.observeNotification = XFA;
