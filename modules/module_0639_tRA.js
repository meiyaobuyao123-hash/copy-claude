// Module: tRA
// Params: Ey5,oRA

var rRA = D1('stream').Stream,
  Kx9 = D1('util');
oRA.exports = yX;
function yX() {
  ((this.source = null),
    (this.dataSize = 0),
    (this.maxDataSize = 1048576),
    (this.pauseStream = !0),
    (this._maxDataSizeExceeded = !1),
    (this._released = !1),
    (this._bufferedEvents = []));
}
Kx9.inherits(yX, rRA);
yX.create = function (A, B) {
  var Q = new this();
  B = B || {};
  for (var I in B) Q[I] = B[I];
  Q.source = A;
  var G = A.emit;
  if (
    ((A.emit = function () {
      return (Q._handleEmit(arguments), G.apply(A, arguments));
    }),
    A.on('error', function () {}),
    Q.pauseStream)
  )
    A.pause();
  return Q;
};
Object.defineProperty(yX.prototype, 'readable', {
  configurable: !0,
  enumerable: !0,
  get: function () {
    return this.source.readable;
  },
});
yX.prototype.setEncoding = function () {
  return this.source.setEncoding.apply(this.source, arguments);
};
yX.prototype.resume = function () {
  if (!this._released) this.release();
  this.source.resume();
};
yX.prototype.pause = function () {
  this.source.pause();
};
yX.prototype.release = function () {
  ((this._released = !0),
    this._bufferedEvents.forEach(
      function (A) {
        this.emit.apply(this, A);
      }.bind(this)
    ),
    (this._bufferedEvents = []));
};
yX.prototype.pipe = function () {
  var A = rRA.prototype.pipe.apply(this, arguments);
  return (this.resume(), A);
};
yX.prototype._handleEmit = function (A) {
  if (this._released) {
    this.emit.apply(this, A);
    return;
  }
  if (A[0] === 'data') ((this.dataSize += A[1].length), this._checkIfMaxDataSizeExceeded());
  this._bufferedEvents.push(A);
};
yX.prototype._checkIfMaxDataSizeExceeded = function () {
  if (this._maxDataSizeExceeded) return;
  if (this.dataSize <= this.maxDataSize) return;
  this._maxDataSizeExceeded = !0;
  var A = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this.emit('error', new Error(A));
};
