// Module: X52
// Params: IR8,C52

C52.exports = jJ1;
function jJ1() {
  this._listeners = {};
}
jJ1.prototype.on = function A(B, Q, I) {
  return ((this._listeners[B] || (this._listeners[B] = [])).push({ fn: Q, ctx: I || this }), this);
};
jJ1.prototype.off = function A(B, Q) {
  if (B === void 0) this._listeners = {};
  else if (Q === void 0) this._listeners[B] = [];
  else {
    var I = this._listeners[B];
    for (var G = 0; G < I.length; )
      if (I[G].fn === Q) I.splice(G, 1);
      else ++G;
  }
  return this;
};
jJ1.prototype.emit = function A(B) {
  var Q = this._listeners[B];
  if (Q) {
    var I = [],
      G = 1;
    for (; G < arguments.length; ) I.push(arguments[G++]);
    for (G = 0; G < Q.length; ) Q[G].fn.apply(Q[G++].ctx, I);
  }
  return this;
};
