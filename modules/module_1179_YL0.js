// Module: YL0
// Params: oJ8,sa

var nJ = fM0(),
  ZL0 = gM0(),
  DL0 = GL0(),
  y8 = ZL0.implSymbol;
function GI(A) {
  if (!this || this[y8] || !(this instanceof GI))
    throw new TypeError(
      "Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function."
    );
  if (arguments.length < 1)
    throw new TypeError(
      "Failed to construct 'URL': 1 argument required, but only " + arguments.length + ' present.'
    );
  let B = [];
  for (let Q = 0; Q < arguments.length && Q < 2; ++Q) B[Q] = arguments[Q];
  if (((B[0] = nJ.USVString(B[0])), B[1] !== void 0)) B[1] = nJ.USVString(B[1]);
  sa.exports.setup(this, B);
}
GI.prototype.toJSON = function A() {
  if (!this || !sa.exports.is(this)) throw new TypeError('Illegal invocation');
  let B = [];
  for (let Q = 0; Q < arguments.length && Q < 0; ++Q) B[Q] = arguments[Q];
  return this[y8].toJSON.apply(this[y8], B);
};
Object.defineProperty(GI.prototype, 'href', {
  get() {
    return this[y8].href;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].href = A));
  },
  enumerable: !0,
  configurable: !0,
});
GI.prototype.toString = function () {
  if (!this || !sa.exports.is(this)) throw new TypeError('Illegal invocation');
  return this.href;
};
Object.defineProperty(GI.prototype, 'origin', {
  get() {
    return this[y8].origin;
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'protocol', {
  get() {
    return this[y8].protocol;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].protocol = A));
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'username', {
  get() {
    return this[y8].username;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].username = A));
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'password', {
  get() {
    return this[y8].password;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].password = A));
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'host', {
  get() {
    return this[y8].host;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].host = A));
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'hostname', {
  get() {
    return this[y8].hostname;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].hostname = A));
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'port', {
  get() {
    return this[y8].port;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].port = A));
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'pathname', {
  get() {
    return this[y8].pathname;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].pathname = A));
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'search', {
  get() {
    return this[y8].search;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].search = A));
  },
  enumerable: !0,
  configurable: !0,
});
Object.defineProperty(GI.prototype, 'hash', {
  get() {
    return this[y8].hash;
  },
  set(A) {
    ((A = nJ.USVString(A)), (this[y8].hash = A));
  },
  enumerable: !0,
  configurable: !0,
});
sa.exports = {
  is(A) {
    return !!A && A[y8] instanceof DL0.implementation;
  },
  create(A, B) {
    let Q = Object.create(GI.prototype);
    return (this.setup(Q, A, B), Q);
  },
  setup(A, B, Q) {
    if (!Q) Q = {};
    ((Q.wrapper = A), (A[y8] = new DL0.implementation(B, Q)), (A[y8][ZL0.wrapperSymbol] = A));
  },
  interface: GI,
  expose: { Window: { URL: GI }, Worker: { URL: GI } },
};
