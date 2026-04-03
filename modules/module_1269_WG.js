// Module: WG
// Params: wV8,s_0

var { types: _z, inspect: x56 } = D1('node:util'),
  { markAsUncloneable: f56 } = D1('node:worker_threads'),
  { toUSVString: v56 } = I6(),
  O0 = {};
O0.converters = {};
O0.util = {};
O0.errors = {};
O0.errors.exception = function (A) {
  return new TypeError(`${A.header}: ${A.message}`);
};
O0.errors.conversionFailed = function (A) {
  let B = A.types.length === 1 ? '' : ' one of',
    Q = `${A.argument} could not be converted to${B}: ${A.types.join(', ')}.`;
  return O0.errors.exception({ header: A.prefix, message: Q });
};
O0.errors.invalidArgument = function (A) {
  return O0.errors.exception({
    header: A.prefix,
    message: `"${A.value}" is an invalid ${A.type}.`,
  });
};
O0.brandCheck = function (A, B, Q) {
  if (Q?.strict !== !1) {
    if (!(A instanceof B)) {
      let I = new TypeError('Illegal invocation');
      throw ((I.code = 'ERR_INVALID_THIS'), I);
    }
  } else if (A?.[Symbol.toStringTag] !== B.prototype[Symbol.toStringTag]) {
    let I = new TypeError('Illegal invocation');
    throw ((I.code = 'ERR_INVALID_THIS'), I);
  }
};
O0.argumentLengthCheck = function ({ length: A }, B, Q) {
  if (A < B)
    throw O0.errors.exception({
      message: `${B} argument${B !== 1 ? 's' : ''} required, but${A ? ' only' : ''} ${A} found.`,
      header: Q,
    });
};
O0.illegalConstructor = function () {
  throw O0.errors.exception({ header: 'TypeError', message: 'Illegal constructor' });
};
O0.util.Type = function (A) {
  switch (typeof A) {
    case 'undefined':
      return 'Undefined';
    case 'boolean':
      return 'Boolean';
    case 'string':
      return 'String';
    case 'symbol':
      return 'Symbol';
    case 'number':
      return 'Number';
    case 'bigint':
      return 'BigInt';
    case 'function':
    case 'object': {
      if (A === null) return 'Null';
      return 'Object';
    }
  }
};
O0.util.markAsUncloneable = f56 || (() => {});
O0.util.ConvertToInt = function (A, B, Q, I) {
  let G, D;
  if (B === 64)
    if (((G = Math.pow(2, 53) - 1), Q === 'unsigned')) D = 0;
    else D = Math.pow(-2, 53) + 1;
  else if (Q === 'unsigned') ((D = 0), (G = Math.pow(2, B) - 1));
  else ((D = Math.pow(-2, B) - 1), (G = Math.pow(2, B - 1) - 1));
  let Z = Number(A);
  if (Z === 0) Z = 0;
  if (I?.enforceRange === !0) {
    if (Number.isNaN(Z) || Z === Number.POSITIVE_INFINITY || Z === Number.NEGATIVE_INFINITY)
      throw O0.errors.exception({
        header: 'Integer conversion',
        message: `Could not convert ${O0.util.Stringify(A)} to an integer.`,
      });
    if (((Z = O0.util.IntegerPart(Z)), Z < D || Z > G))
      throw O0.errors.exception({
        header: 'Integer conversion',
        message: `Value must be between ${D}-${G}, got ${Z}.`,
      });
    return Z;
  }
  if (!Number.isNaN(Z) && I?.clamp === !0) {
    if (((Z = Math.min(Math.max(Z, D), G)), Math.floor(Z) % 2 === 0)) Z = Math.floor(Z);
    else Z = Math.ceil(Z);
    return Z;
  }
  if (
    Number.isNaN(Z) ||
    (Z === 0 && Object.is(0, Z)) ||
    Z === Number.POSITIVE_INFINITY ||
    Z === Number.NEGATIVE_INFINITY
  )
    return 0;
  if (
    ((Z = O0.util.IntegerPart(Z)),
    (Z = Z % Math.pow(2, B)),
    Q === 'signed' && Z >= Math.pow(2, B) - 1)
  )
    return Z - Math.pow(2, B);
  return Z;
};
O0.util.IntegerPart = function (A) {
  let B = Math.floor(Math.abs(A));
  if (A < 0) return -1 * B;
  return B;
};
O0.util.Stringify = function (A) {
  switch (O0.util.Type(A)) {
    case 'Symbol':
      return `Symbol(${A.description})`;
    case 'Object':
      return x56(A);
    case 'String':
      return `"${A}"`;
    default:
      return `${A}`;
  }
};
O0.sequenceConverter = function (A) {
  return (B, Q, I, G) => {
    if (O0.util.Type(B) !== 'Object')
      throw O0.errors.exception({
        header: Q,
        message: `${I} (${O0.util.Stringify(B)}) is not iterable.`,
      });
    let D = typeof G === 'function' ? G() : B?.[Symbol.iterator]?.(),
      Z = [],
      Y = 0;
    if (D === void 0 || typeof D.next !== 'function')
      throw O0.errors.exception({ header: Q, message: `${I} is not iterable.` });
    while (!0) {
      let { done: W, value: F } = D.next();
      if (W) break;
      Z.push(A(F, Q, `${I}[${Y++}]`));
    }
    return Z;
  };
};
O0.recordConverter = function (A, B) {
  return (Q, I, G) => {
    if (O0.util.Type(Q) !== 'Object')
      throw O0.errors.exception({
        header: I,
        message: `${G} ("${O0.util.Type(Q)}") is not an Object.`,
      });
    let D = {};
    if (!_z.isProxy(Q)) {
      let Y = [...Object.getOwnPropertyNames(Q), ...Object.getOwnPropertySymbols(Q)];
      for (let W of Y) {
        let F = A(W, I, G),
          J = B(Q[W], I, G);
        D[F] = J;
      }
      return D;
    }
    let Z = Reflect.ownKeys(Q);
    for (let Y of Z)
      if (Reflect.getOwnPropertyDescriptor(Q, Y)?.enumerable) {
        let F = A(Y, I, G),
          J = B(Q[Y], I, G);
        D[F] = J;
      }
    return D;
  };
};
O0.interfaceConverter = function (A) {
  return (B, Q, I, G) => {
    if (G?.strict !== !1 && !(B instanceof A))
      throw O0.errors.exception({
        header: Q,
        message: `Expected ${I} ("${O0.util.Stringify(B)}") to be an instance of ${A.name}.`,
      });
    return B;
  };
};
O0.dictionaryConverter = function (A) {
  return (B, Q, I) => {
    let G = O0.util.Type(B),
      D = {};
    if (G === 'Null' || G === 'Undefined') return D;
    else if (G !== 'Object')
      throw O0.errors.exception({
        header: Q,
        message: `Expected ${B} to be one of: Null, Undefined, Object.`,
      });
    for (let Z of A) {
      let { key: Y, defaultValue: W, required: F, converter: J } = Z;
      if (F === !0) {
        if (!Object.hasOwn(B, Y))
          throw O0.errors.exception({ header: Q, message: `Missing required key "${Y}".` });
      }
      let C = B[Y],
        X = Object.hasOwn(Z, 'defaultValue');
      if (X && C !== null) C ??= W();
      if (F || X || C !== void 0) {
        if (((C = J(C, Q, `${I}.${Y}`)), Z.allowedValues && !Z.allowedValues.includes(C)))
          throw O0.errors.exception({
            header: Q,
            message: `${C} is not an accepted type. Expected one of ${Z.allowedValues.join(', ')}.`,
          });
        D[Y] = C;
      }
    }
    return D;
  };
};
O0.nullableConverter = function (A) {
  return (B, Q, I) => {
    if (B === null) return B;
    return A(B, Q, I);
  };
};
O0.converters.DOMString = function (A, B, Q, I) {
  if (A === null && I?.legacyNullToEmptyString) return '';
  if (typeof A === 'symbol')
    throw O0.errors.exception({
      header: B,
      message: `${Q} is a symbol, which cannot be converted to a DOMString.`,
    });
  return String(A);
};
O0.converters.ByteString = function (A, B, Q) {
  let I = O0.converters.DOMString(A, B, Q);
  for (let G = 0; G < I.length; G++)
    if (I.charCodeAt(G) > 255)
      throw new TypeError(
        `Cannot convert argument to a ByteString because the character at index ${G} has a value of ${I.charCodeAt(G)} which is greater than 255.`
      );
  return I;
};
O0.converters.USVString = v56;
O0.converters.boolean = function (A) {
  return Boolean(A);
};
O0.converters.any = function (A) {
  return A;
};
O0.converters['long long'] = function (A, B, Q) {
  return O0.util.ConvertToInt(A, 64, 'signed', void 0, B, Q);
};
O0.converters['unsigned long long'] = function (A, B, Q) {
  return O0.util.ConvertToInt(A, 64, 'unsigned', void 0, B, Q);
};
O0.converters['unsigned long'] = function (A, B, Q) {
  return O0.util.ConvertToInt(A, 32, 'unsigned', void 0, B, Q);
};
O0.converters['unsigned short'] = function (A, B, Q, I) {
  return O0.util.ConvertToInt(A, 16, 'unsigned', I, B, Q);
};
O0.converters.ArrayBuffer = function (A, B, Q, I) {
  if (O0.util.Type(A) !== 'Object' || !_z.isAnyArrayBuffer(A))
    throw O0.errors.conversionFailed({
      prefix: B,
      argument: `${Q} ("${O0.util.Stringify(A)}")`,
      types: ['ArrayBuffer'],
    });
  if (I?.allowShared === !1 && _z.isSharedArrayBuffer(A))
    throw O0.errors.exception({
      header: 'ArrayBuffer',
      message: 'SharedArrayBuffer is not allowed.',
    });
  if (A.resizable || A.growable)
    throw O0.errors.exception({
      header: 'ArrayBuffer',
      message: 'Received a resizable ArrayBuffer.',
    });
  return A;
};
O0.converters.TypedArray = function (A, B, Q, I, G) {
  if (O0.util.Type(A) !== 'Object' || !_z.isTypedArray(A) || A.constructor.name !== B.name)
    throw O0.errors.conversionFailed({
      prefix: Q,
      argument: `${I} ("${O0.util.Stringify(A)}")`,
      types: [B.name],
    });
  if (G?.allowShared === !1 && _z.isSharedArrayBuffer(A.buffer))
    throw O0.errors.exception({
      header: 'ArrayBuffer',
      message: 'SharedArrayBuffer is not allowed.',
    });
  if (A.buffer.resizable || A.buffer.growable)
    throw O0.errors.exception({
      header: 'ArrayBuffer',
      message: 'Received a resizable ArrayBuffer.',
    });
  return A;
};
O0.converters.DataView = function (A, B, Q, I) {
  if (O0.util.Type(A) !== 'Object' || !_z.isDataView(A))
    throw O0.errors.exception({ header: B, message: `${Q} is not a DataView.` });
  if (I?.allowShared === !1 && _z.isSharedArrayBuffer(A.buffer))
    throw O0.errors.exception({
      header: 'ArrayBuffer',
      message: 'SharedArrayBuffer is not allowed.',
    });
  if (A.buffer.resizable || A.buffer.growable)
    throw O0.errors.exception({
      header: 'ArrayBuffer',
      message: 'Received a resizable ArrayBuffer.',
    });
  return A;
};
O0.converters.BufferSource = function (A, B, Q, I) {
  if (_z.isAnyArrayBuffer(A)) return O0.converters.ArrayBuffer(A, B, Q, { ...I, allowShared: !1 });
  if (_z.isTypedArray(A))
    return O0.converters.TypedArray(A, A.constructor, B, Q, { ...I, allowShared: !1 });
  if (_z.isDataView(A)) return O0.converters.DataView(A, B, Q, { ...I, allowShared: !1 });
  throw O0.errors.conversionFailed({
    prefix: B,
    argument: `${Q} ("${O0.util.Stringify(A)}")`,
    types: ['BufferSource'],
  });
};
O0.converters['sequence<ByteString>'] = O0.sequenceConverter(O0.converters.ByteString);
O0.converters['sequence<sequence<ByteString>>'] = O0.sequenceConverter(
  O0.converters['sequence<ByteString>']
);
O0.converters['record<ByteString, ByteString>'] = O0.recordConverter(
  O0.converters.ByteString,
  O0.converters.ByteString
);
s_0.exports = { webidl: O0 };
