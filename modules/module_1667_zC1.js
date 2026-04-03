// Module: zC1
// Params: rO8,v72

v72.exports = f_;
var mi1 = x_();
((f_.prototype = Object.create(mi1.prototype)).constructor = f_).className = 'Method';
var qm = VI();
function f_(A, B, Q, I, G, D, Z, Y, W) {
  if (qm.isObject(G)) ((Z = G), (G = D = void 0));
  else if (qm.isObject(D)) ((Z = D), (D = void 0));
  if (!(B === void 0 || qm.isString(B))) throw TypeError('type must be a string');
  if (!qm.isString(Q)) throw TypeError('requestType must be a string');
  if (!qm.isString(I)) throw TypeError('responseType must be a string');
  (mi1.call(this, A, Z),
    (this.type = B || 'rpc'),
    (this.requestType = Q),
    (this.requestStream = G ? !0 : void 0),
    (this.responseType = I),
    (this.responseStream = D ? !0 : void 0),
    (this.resolvedRequestType = null),
    (this.resolvedResponseType = null),
    (this.comment = Y),
    (this.parsedOptions = W));
}
f_.fromJSON = function A(B, Q) {
  return new f_(
    B,
    Q.type,
    Q.requestType,
    Q.responseType,
    Q.requestStream,
    Q.responseStream,
    Q.options,
    Q.comment,
    Q.parsedOptions
  );
};
f_.prototype.toJSON = function A(B) {
  var Q = B ? Boolean(B.keepComments) : !1;
  return qm.toObject([
    'type',
    (this.type !== 'rpc' && this.type) || void 0,
    'requestType',
    this.requestType,
    'requestStream',
    this.requestStream,
    'responseType',
    this.responseType,
    'responseStream',
    this.responseStream,
    'options',
    this.options,
    'comment',
    Q ? this.comment : void 0,
    'parsedOptions',
    this.parsedOptions,
  ]);
};
f_.prototype.resolve = function A() {
  if (this.resolved) return this;
  return (
    (this.resolvedRequestType = this.parent.lookupType(this.requestType)),
    (this.resolvedResponseType = this.parent.lookupType(this.responseType)),
    mi1.prototype.resolve.call(this)
  );
};
