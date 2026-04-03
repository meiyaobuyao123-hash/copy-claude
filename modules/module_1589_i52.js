// Module: i52
// Params: VR8,l52

l52.exports = $o;
var jl1 = Bw();
($o.prototype = Object.create(jl1.EventEmitter.prototype)).constructor = $o;
function $o(A, B, Q) {
  if (typeof A !== 'function') throw TypeError('rpcImpl must be a function');
  (jl1.EventEmitter.call(this),
    (this.rpcImpl = A),
    (this.requestDelimited = Boolean(B)),
    (this.responseDelimited = Boolean(Q)));
}
$o.prototype.rpcCall = function A(B, Q, I, G, D) {
  if (!G) throw TypeError('request must be specified');
  var Z = this;
  if (!D) return jl1.asPromise(A, Z, B, Q, I, G);
  if (!Z.rpcImpl) {
    setTimeout(function () {
      D(Error('already ended'));
    }, 0);
    return;
  }
  try {
    return Z.rpcImpl(
      B,
      Q[Z.requestDelimited ? 'encodeDelimited' : 'encode'](G).finish(),
      function Y(W, F) {
        if (W) return (Z.emit('error', W, B), D(W));
        if (F === null) {
          Z.end(!0);
          return;
        }
        if (!(F instanceof I))
          try {
            F = I[Z.responseDelimited ? 'decodeDelimited' : 'decode'](F);
          } catch (J) {
            return (Z.emit('error', J, B), D(J));
          }
        return (Z.emit('data', F, B), D(null, F));
      }
    );
  } catch (Y) {
    (Z.emit('error', Y, B),
      setTimeout(function () {
        D(Y);
      }, 0));
    return;
  }
};
$o.prototype.end = function A(B) {
  if (this.rpcImpl) {
    if (!B) this.rpcImpl(null, null, null);
    ((this.rpcImpl = null), this.emit('end').off());
  }
  return this;
};
