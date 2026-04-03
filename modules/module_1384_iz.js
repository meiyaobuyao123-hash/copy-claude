// Module: iz
// Params: Tw8,mm0

var hm0 = function (A) {
    return typeof A !== 'undefined' && A !== null;
  },
  TK6 = function (A) {
    return typeof A === 'object';
  },
  PK6 = function (A) {
    return Object.prototype.toString.call(A) === '[object Object]';
  },
  SK6 = function (A) {
    return typeof A === 'function';
  },
  _K6 = function (A) {
    return typeof A === 'boolean';
  },
  jK6 = function (A) {
    return A instanceof Buffer;
  },
  yK6 = function (A) {
    if (hm0(A))
      switch (A.constructor) {
        case Uint8Array:
        case Uint8ClampedArray:
        case Int8Array:
        case Uint16Array:
        case Int16Array:
        case Uint32Array:
        case Int32Array:
        case Float32Array:
        case Float64Array:
          return !0;
      }
    return !1;
  },
  kK6 = function (A) {
    return A instanceof ArrayBuffer;
  },
  xK6 = function (A) {
    return typeof A === 'string' && A.length > 0;
  },
  fK6 = function (A) {
    return typeof A === 'number' && !Number.isNaN(A);
  },
  vK6 = function (A) {
    return Number.isInteger(A);
  },
  bK6 = function (A, B, Q) {
    return A >= B && A <= Q;
  },
  gK6 = function (A, B) {
    return B.includes(A);
  },
  hK6 = function (A, B, Q) {
    return new Error(`Expected ${B} for ${A} but received ${Q} of type ${typeof Q}`);
  },
  mK6 = function (A, B) {
    return ((B.message = A.message), B);
  };
mm0.exports = {
  defined: hm0,
  object: TK6,
  plainObject: PK6,
  fn: SK6,
  bool: _K6,
  buffer: jK6,
  typedArray: yK6,
  arrayBuffer: kK6,
  string: xK6,
  number: fK6,
  integer: vK6,
  inRange: bK6,
  inArray: gK6,
  invalidParameterError: hK6,
  nativeError: mK6,
};
