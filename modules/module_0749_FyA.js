// Module: FyA
// Params: bg5,WyA

function $J(A, B) {
  if (typeof B === 'boolean') B = { forever: B };
  if (
    ((this._originalTimeouts = JSON.parse(JSON.stringify(A))),
    (this._timeouts = A),
    (this._options = B || {}),
    (this._maxRetryTime = (B && B.maxRetryTime) || 1 / 0),
    (this._fn = null),
    (this._errors = []),
    (this._attempts = 1),
    (this._operationTimeout = null),
    (this._operationTimeoutCb = null),
    (this._timeout = null),
    (this._operationStart = null),
    this._options.forever)
  )
    this._cachedTimeouts = this._timeouts.slice(0);
}
WyA.exports = $J;
$J.prototype.reset = function () {
  ((this._attempts = 1), (this._timeouts = this._originalTimeouts));
};
$J.prototype.stop = function () {
  if (this._timeout) clearTimeout(this._timeout);
  ((this._timeouts = []), (this._cachedTimeouts = null));
};
$J.prototype.retry = function (A) {
  if (this._timeout) clearTimeout(this._timeout);
  if (!A) return !1;
  var B = new Date().getTime();
  if (A && B - this._operationStart >= this._maxRetryTime)
    return (this._errors.unshift(new Error('RetryOperation timeout occurred')), !1);
  this._errors.push(A);
  var Q = this._timeouts.shift();
  if (Q === void 0)
    if (this._cachedTimeouts)
      (this._errors.splice(this._errors.length - 1, this._errors.length),
        (this._timeouts = this._cachedTimeouts.slice(0)),
        (Q = this._timeouts.shift()));
    else return !1;
  var I = this,
    G = setTimeout(function () {
      if ((I._attempts++, I._operationTimeoutCb)) {
        if (
          ((I._timeout = setTimeout(function () {
            I._operationTimeoutCb(I._attempts);
          }, I._operationTimeout)),
          I._options.unref)
        )
          I._timeout.unref();
      }
      I._fn(I._attempts);
    }, Q);
  if (this._options.unref) G.unref();
  return !0;
};
$J.prototype.attempt = function (A, B) {
  if (((this._fn = A), B)) {
    if (B.timeout) this._operationTimeout = B.timeout;
    if (B.cb) this._operationTimeoutCb = B.cb;
  }
  var Q = this;
  if (this._operationTimeoutCb)
    this._timeout = setTimeout(function () {
      Q._operationTimeoutCb();
    }, Q._operationTimeout);
  ((this._operationStart = new Date().getTime()), this._fn(this._attempts));
};
$J.prototype.try = function (A) {
  (console.log('Using RetryOperation.try() is deprecated'), this.attempt(A));
};
$J.prototype.start = function (A) {
  (console.log('Using RetryOperation.start() is deprecated'), this.attempt(A));
};
$J.prototype.start = $J.prototype.try;
$J.prototype.errors = function () {
  return this._errors;
};
$J.prototype.attempts = function () {
  return this._attempts;
};
$J.prototype.mainError = function () {
  if (this._errors.length === 0) return null;
  var A = {},
    B = null,
    Q = 0;
  for (var I = 0; I < this._errors.length; I++) {
    var G = this._errors[I],
      D = G.message,
      Z = (A[D] || 0) + 1;
    if (((A[D] = Z), Z >= Q)) ((B = G), (Q = Z));
  }
  return B;
};
