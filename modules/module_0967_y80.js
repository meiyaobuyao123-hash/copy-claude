// Module: y80
// Params: Dr5,j80

var Gr5 = bQ1(),
  { Duplex: s$4 } = D1('stream');
function S80(A) {
  A.emit('close');
}
function r$4() {
  if (!this.destroyed && this._writableState.finished) this.destroy();
}
function _80(A) {
  if ((this.removeListener('error', _80), this.destroy(), this.listenerCount('error') === 0))
    this.emit('error', A);
}
function o$4(A, B) {
  let Q = !0,
    I = new s$4({ ...B, autoDestroy: !1, emitClose: !1, objectMode: !1, writableObjectMode: !1 });
  return (
    A.on('message', function G(D, Z) {
      let Y = !Z && I._readableState.objectMode ? D.toString() : D;
      if (!I.push(Y)) A.pause();
    }),
    A.once('error', function G(D) {
      if (I.destroyed) return;
      ((Q = !1), I.destroy(D));
    }),
    A.once('close', function G() {
      if (I.destroyed) return;
      I.push(null);
    }),
    (I._destroy = function (G, D) {
      if (A.readyState === A.CLOSED) {
        (D(G), process.nextTick(S80, I));
        return;
      }
      let Z = !1;
      if (
        (A.once('error', function Y(W) {
          ((Z = !0), D(W));
        }),
        A.once('close', function Y() {
          if (!Z) D(G);
          process.nextTick(S80, I);
        }),
        Q)
      )
        A.terminate();
    }),
    (I._final = function (G) {
      if (A.readyState === A.CONNECTING) {
        A.once('open', function D() {
          I._final(G);
        });
        return;
      }
      if (A._socket === null) return;
      if (A._socket._writableState.finished) {
        if ((G(), I._readableState.endEmitted)) I.destroy();
      } else
        (A._socket.once('finish', function D() {
          G();
        }),
          A.close());
    }),
    (I._read = function () {
      if (A.isPaused) A.resume();
    }),
    (I._write = function (G, D, Z) {
      if (A.readyState === A.CONNECTING) {
        A.once('open', function Y() {
          I._write(G, D, Z);
        });
        return;
      }
      A.send(G, Z);
    }),
    I.on('end', r$4),
    I.on('error', _80),
    I
  );
}
j80.exports = o$4;
