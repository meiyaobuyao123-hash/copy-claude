// Module: QOA
// Params: Uy5,BOA

var Hx9 = D1('util'),
  AOA = D1('stream').Stream,
  eRA = tRA();
BOA.exports = O3;
function O3() {
  ((this.writable = !1),
    (this.readable = !0),
    (this.dataSize = 0),
    (this.maxDataSize = 2097152),
    (this.pauseStreams = !0),
    (this._released = !1),
    (this._streams = []),
    (this._currentStream = null),
    (this._insideLoop = !1),
    (this._pendingNext = !1));
}
Hx9.inherits(O3, AOA);
O3.create = function (A) {
  var B = new this();
  A = A || {};
  for (var Q in A) B[Q] = A[Q];
  return B;
};
O3.isStreamLike = function (A) {
  return (
    typeof A !== 'function' &&
    typeof A !== 'string' &&
    typeof A !== 'boolean' &&
    typeof A !== 'number' &&
    !Buffer.isBuffer(A)
  );
};
O3.prototype.append = function (A) {
  var B = O3.isStreamLike(A);
  if (B) {
    if (!(A instanceof eRA)) {
      var Q = eRA.create(A, { maxDataSize: 1 / 0, pauseStream: this.pauseStreams });
      (A.on('data', this._checkDataSize.bind(this)), (A = Q));
    }
    if ((this._handleErrors(A), this.pauseStreams)) A.pause();
  }
  return (this._streams.push(A), this);
};
O3.prototype.pipe = function (A, B) {
  return (AOA.prototype.pipe.call(this, A, B), this.resume(), A);
};
O3.prototype._getNext = function () {
  if (((this._currentStream = null), this._insideLoop)) {
    this._pendingNext = !0;
    return;
  }
  this._insideLoop = !0;
  try {
    do ((this._pendingNext = !1), this._realGetNext());
    while (this._pendingNext);
  } finally {
    this._insideLoop = !1;
  }
};
O3.prototype._realGetNext = function () {
  var A = this._streams.shift();
  if (typeof A == 'undefined') {
    this.end();
    return;
  }
  if (typeof A !== 'function') {
    this._pipeNext(A);
    return;
  }
  var B = A;
  B(
    function (Q) {
      var I = O3.isStreamLike(Q);
      if (I) (Q.on('data', this._checkDataSize.bind(this)), this._handleErrors(Q));
      this._pipeNext(Q);
    }.bind(this)
  );
};
O3.prototype._pipeNext = function (A) {
  this._currentStream = A;
  var B = O3.isStreamLike(A);
  if (B) {
    (A.on('end', this._getNext.bind(this)), A.pipe(this, { end: !1 }));
    return;
  }
  var Q = A;
  (this.write(Q), this._getNext());
};
O3.prototype._handleErrors = function (A) {
  var B = this;
  A.on('error', function (Q) {
    B._emitError(Q);
  });
};
O3.prototype.write = function (A) {
  this.emit('data', A);
};
O3.prototype.pause = function () {
  if (!this.pauseStreams) return;
  if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function')
    this._currentStream.pause();
  this.emit('pause');
};
O3.prototype.resume = function () {
  if (!this._released) ((this._released = !0), (this.writable = !0), this._getNext());
  if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function')
    this._currentStream.resume();
  this.emit('resume');
};
O3.prototype.end = function () {
  (this._reset(), this.emit('end'));
};
O3.prototype.destroy = function () {
  (this._reset(), this.emit('close'));
};
O3.prototype._reset = function () {
  ((this.writable = !1), (this._streams = []), (this._currentStream = null));
};
O3.prototype._checkDataSize = function () {
  if ((this._updateDataSize(), this.dataSize <= this.maxDataSize)) return;
  var A = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(A));
};
O3.prototype._updateDataSize = function () {
  this.dataSize = 0;
  var A = this;
  if (
    (this._streams.forEach(function (B) {
      if (!B.dataSize) return;
      A.dataSize += B.dataSize;
    }),
    this._currentStream && this._currentStream.dataSize)
  )
    this.dataSize += this._currentStream.dataSize;
};
O3.prototype._emitError = function (A) {
  (this._reset(), this.emit('error', A));
};
