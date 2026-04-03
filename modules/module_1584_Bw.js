// Module: Bw
// Params: ql1

var V9 = ql1;
V9.asPromise = El1();
V9.base64 = J52();
V9.EventEmitter = X52();
V9.float = U52();
V9.inquire = Nl1();
V9.utf8 = q52();
V9.pool = L52();
V9.LongBits = O52();
V9.isNode = Boolean(
  typeof global !== 'undefined' &&
  global &&
  global.process &&
  global.process.versions &&
  global.process.versions.node
);
V9.global =
  (V9.isNode && global) ||
  (typeof window !== 'undefined' && window) ||
  (typeof self !== 'undefined' && self) ||
  ql1;
V9.emptyArray = Object.freeze ? Object.freeze([]) : [];
V9.emptyObject = Object.freeze ? Object.freeze({}) : {};
V9.isInteger =
  Number.isInteger ||
  function A(B) {
    return typeof B === 'number' && isFinite(B) && Math.floor(B) === B;
  };
V9.isString = function A(B) {
  return typeof B === 'string' || B instanceof String;
};
V9.isObject = function A(B) {
  return B && typeof B === 'object';
};
V9.isset = V9.isSet = function A(B, Q) {
  var I = B[Q];
  if (I != null && B.hasOwnProperty(Q))
    return typeof I !== 'object' || (Array.isArray(I) ? I.length : Object.keys(I).length) > 0;
  return !1;
};
V9.Buffer = (function () {
  try {
    var A = V9.inquire('buffer').Buffer;
    return A.prototype.utf8Write ? A : null;
  } catch (B) {
    return null;
  }
})();
V9._Buffer_from = null;
V9._Buffer_allocUnsafe = null;
V9.newBuffer = function A(B) {
  return typeof B === 'number'
    ? V9.Buffer
      ? V9._Buffer_allocUnsafe(B)
      : new V9.Array(B)
    : V9.Buffer
      ? V9._Buffer_from(B)
      : typeof Uint8Array === 'undefined'
        ? B
        : new Uint8Array(B);
};
V9.Array = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
V9.Long = (V9.global.dcodeIO && V9.global.dcodeIO.Long) || V9.global.Long || V9.inquire('long');
V9.key2Re = /^true|false|0|1$/;
V9.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
V9.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
V9.longToHash = function A(B) {
  return B ? V9.LongBits.from(B).toHash() : V9.LongBits.zeroHash;
};
V9.longFromHash = function A(B, Q) {
  var I = V9.LongBits.fromHash(B);
  if (V9.Long) return V9.Long.fromBits(I.lo, I.hi, Q);
  return I.toNumber(Boolean(Q));
};
function T52(A, B, Q) {
  for (var I = Object.keys(B), G = 0; G < I.length; ++G)
    if (A[I[G]] === void 0 || !Q) A[I[G]] = B[I[G]];
  return A;
}
V9.merge = T52;
V9.lcFirst = function A(B) {
  return B.charAt(0).toLowerCase() + B.substring(1);
};
function P52(A) {
  function B(Q, I) {
    if (!(this instanceof B)) return new B(Q, I);
    if (
      (Object.defineProperty(this, 'message', {
        get: function () {
          return Q;
        },
      }),
      Error.captureStackTrace)
    )
      Error.captureStackTrace(this, B);
    else Object.defineProperty(this, 'stack', { value: new Error().stack || '' });
    if (I) T52(this, I);
  }
  return (
    (B.prototype = Object.create(Error.prototype, {
      constructor: { value: B, writable: !0, enumerable: !1, configurable: !0 },
      name: {
        get: function Q() {
          return A;
        },
        set: void 0,
        enumerable: !1,
        configurable: !0,
      },
      toString: {
        value: function Q() {
          return this.name + ': ' + this.message;
        },
        writable: !0,
        enumerable: !1,
        configurable: !0,
      },
    })),
    B
  );
}
V9.newError = P52;
V9.ProtocolError = P52('ProtocolError');
V9.oneOfGetter = function A(B) {
  var Q = {};
  for (var I = 0; I < B.length; ++I) Q[B[I]] = 1;
  return function () {
    for (var G = Object.keys(this), D = G.length - 1; D > -1; --D)
      if (Q[G[D]] === 1 && this[G[D]] !== void 0 && this[G[D]] !== null) return G[D];
  };
};
V9.oneOfSetter = function A(B) {
  return function (Q) {
    for (var I = 0; I < B.length; ++I) if (B[I] !== Q) delete this[B[I]];
  };
};
V9.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 };
V9._configure = function () {
  var A = V9.Buffer;
  if (!A) {
    V9._Buffer_from = V9._Buffer_allocUnsafe = null;
    return;
  }
  ((V9._Buffer_from =
    (A.from !== Uint8Array.from && A.from) ||
    function B(Q, I) {
      return new A(Q, I);
    }),
    (V9._Buffer_allocUnsafe =
      A.allocUnsafe ||
      function B(Q) {
        return new A(Q);
      }));
};
