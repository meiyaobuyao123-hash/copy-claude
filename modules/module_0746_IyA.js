// Module: IyA
// Params: xg5,QyA

var ByA = D1('stream').Stream;
QyA.exports = nm9;
function nm9(A) {
  return { ReadStream: B, WriteStream: Q };
  function B(I, G) {
    if (!(this instanceof B)) return new B(I, G);
    ByA.call(this);
    var D = this;
    ((this.path = I),
      (this.fd = null),
      (this.readable = !0),
      (this.paused = !1),
      (this.flags = 'r'),
      (this.mode = 438),
      (this.bufferSize = 65536),
      (G = G || {}));
    var Z = Object.keys(G);
    for (var Y = 0, W = Z.length; Y < W; Y++) {
      var F = Z[Y];
      this[F] = G[F];
    }
    if (this.encoding) this.setEncoding(this.encoding);
    if (this.start !== void 0) {
      if (typeof this.start !== 'number') throw TypeError('start must be a Number');
      if (this.end === void 0) this.end = 1 / 0;
      else if (typeof this.end !== 'number') throw TypeError('end must be a Number');
      if (this.start > this.end) throw new Error('start must be <= end');
      this.pos = this.start;
    }
    if (this.fd !== null) {
      process.nextTick(function () {
        D._read();
      });
      return;
    }
    A.open(this.path, this.flags, this.mode, function (J, C) {
      if (J) {
        (D.emit('error', J), (D.readable = !1));
        return;
      }
      ((D.fd = C), D.emit('open', C), D._read());
    });
  }
  function Q(I, G) {
    if (!(this instanceof Q)) return new Q(I, G);
    (ByA.call(this),
      (this.path = I),
      (this.fd = null),
      (this.writable = !0),
      (this.flags = 'w'),
      (this.encoding = 'binary'),
      (this.mode = 438),
      (this.bytesWritten = 0),
      (G = G || {}));
    var D = Object.keys(G);
    for (var Z = 0, Y = D.length; Z < Y; Z++) {
      var W = D[Z];
      this[W] = G[W];
    }
    if (this.start !== void 0) {
      if (typeof this.start !== 'number') throw TypeError('start must be a Number');
      if (this.start < 0) throw new Error('start must be >= zero');
      this.pos = this.start;
    }
    if (((this.busy = !1), (this._queue = []), this.fd === null))
      ((this._open = A.open),
        this._queue.push([this._open, this.path, this.flags, this.mode, void 0]),
        this.flush());
  }
}
