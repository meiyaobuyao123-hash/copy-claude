// Module: dS
// Params: YK8,wf0

var { kConstruct: XG6 } = uB(),
  { kEnumerableProperty: Wh } = I6(),
  { iteratorMixin: VG6, isValidHeaderName: es, isValidHeaderValue: Xf0 } = GF(),
  { webidl: n6 } = WG(),
  Od1 = D1('node:assert'),
  JW1 = D1('node:util'),
  sQ = Symbol('headers map'),
  YF = Symbol('headers map sorted');
function Cf0(A) {
  return A === 10 || A === 13 || A === 9 || A === 32;
}
function Vf0(A) {
  let B = 0,
    Q = A.length;
  while (Q > B && Cf0(A.charCodeAt(Q - 1))) --Q;
  while (Q > B && Cf0(A.charCodeAt(B))) ++B;
  return B === 0 && Q === A.length ? A : A.substring(B, Q);
}
function Kf0(A, B) {
  if (Array.isArray(B))
    for (let Q = 0; Q < B.length; ++Q) {
      let I = B[Q];
      if (I.length !== 2)
        throw n6.errors.exception({
          header: 'Headers constructor',
          message: `expected name/value pair to be length 2, found ${I.length}.`,
        });
      Td1(A, I[0], I[1]);
    }
  else if (typeof B === 'object' && B !== null) {
    let Q = Object.keys(B);
    for (let I = 0; I < Q.length; ++I) Td1(A, Q[I], B[Q[I]]);
  } else
    throw n6.errors.conversionFailed({
      prefix: 'Headers constructor',
      argument: 'Argument 1',
      types: ['sequence<sequence<ByteString>>', 'record<ByteString, ByteString>'],
    });
}
function Td1(A, B, Q) {
  if (((Q = Vf0(Q)), !es(B)))
    throw n6.errors.invalidArgument({ prefix: 'Headers.append', value: B, type: 'header name' });
  else if (!Xf0(Q))
    throw n6.errors.invalidArgument({ prefix: 'Headers.append', value: Q, type: 'header value' });
  if (zf0(A) === 'immutable') throw new TypeError('immutable');
  return Pd1(A).append(B, Q, !1);
}
function Hf0(A, B) {
  return A[0] < B[0] ? -1 : 1;
}
class CW1 {
  cookies = null;
  constructor(A) {
    if (A instanceof CW1)
      ((this[sQ] = new Map(A[sQ])),
        (this[YF] = A[YF]),
        (this.cookies = A.cookies === null ? null : [...A.cookies]));
    else ((this[sQ] = new Map(A)), (this[YF] = null));
  }
  contains(A, B) {
    return this[sQ].has(B ? A : A.toLowerCase());
  }
  clear() {
    (this[sQ].clear(), (this[YF] = null), (this.cookies = null));
  }
  append(A, B, Q) {
    this[YF] = null;
    let I = Q ? A : A.toLowerCase(),
      G = this[sQ].get(I);
    if (G) {
      let D = I === 'cookie' ? '; ' : ', ';
      this[sQ].set(I, { name: G.name, value: `${G.value}${D}${B}` });
    } else this[sQ].set(I, { name: A, value: B });
    if (I === 'set-cookie') (this.cookies ??= []).push(B);
  }
  set(A, B, Q) {
    this[YF] = null;
    let I = Q ? A : A.toLowerCase();
    if (I === 'set-cookie') this.cookies = [B];
    this[sQ].set(I, { name: A, value: B });
  }
  delete(A, B) {
    if (((this[YF] = null), !B)) A = A.toLowerCase();
    if (A === 'set-cookie') this.cookies = null;
    this[sQ].delete(A);
  }
  get(A, B) {
    return this[sQ].get(B ? A : A.toLowerCase())?.value ?? null;
  }
  *[Symbol.iterator]() {
    for (let {
      0: A,
      1: { value: B },
    } of this[sQ])
      yield [A, B];
  }
  get entries() {
    let A = {};
    if (this[sQ].size !== 0) for (let { name: B, value: Q } of this[sQ].values()) A[B] = Q;
    return A;
  }
  rawValues() {
    return this[sQ].values();
  }
  get entriesList() {
    let A = [];
    if (this[sQ].size !== 0)
      for (let {
        0: B,
        1: { name: Q, value: I },
      } of this[sQ])
        if (B === 'set-cookie') for (let G of this.cookies) A.push([Q, G]);
        else A.push([Q, I]);
    return A;
  }
  toSortedArray() {
    let A = this[sQ].size,
      B = new Array(A);
    if (A <= 32) {
      if (A === 0) return B;
      let Q = this[sQ][Symbol.iterator](),
        I = Q.next().value;
      ((B[0] = [I[0], I[1].value]), Od1(I[1].value !== null));
      for (let G = 1, D = 0, Z = 0, Y = 0, W = 0, F, J; G < A; ++G) {
        ((J = Q.next().value),
          (F = B[G] = [J[0], J[1].value]),
          Od1(F[1] !== null),
          (Y = 0),
          (Z = G));
        while (Y < Z)
          if (((W = Y + ((Z - Y) >> 1)), B[W][0] <= F[0])) Y = W + 1;
          else Z = W;
        if (G !== W) {
          D = G;
          while (D > Y) B[D] = B[--D];
          B[Y] = F;
        }
      }
      if (!Q.next().done) throw new TypeError('Unreachable');
      return B;
    } else {
      let Q = 0;
      for (let {
        0: I,
        1: { value: G },
      } of this[sQ])
        ((B[Q++] = [I, G]), Od1(G !== null));
      return B.sort(Hf0);
    }
  }
}
class YD {
  #A;
  #B;
  constructor(A = void 0) {
    if ((n6.util.markAsUncloneable(this), A === XG6)) return;
    if (((this.#B = new CW1()), (this.#A = 'none'), A !== void 0))
      ((A = n6.converters.HeadersInit(A, 'Headers contructor', 'init')), Kf0(this, A));
  }
  append(A, B) {
    (n6.brandCheck(this, YD), n6.argumentLengthCheck(arguments, 2, 'Headers.append'));
    let Q = 'Headers.append';
    return (
      (A = n6.converters.ByteString(A, Q, 'name')),
      (B = n6.converters.ByteString(B, Q, 'value')),
      Td1(this, A, B)
    );
  }
  delete(A) {
    (n6.brandCheck(this, YD), n6.argumentLengthCheck(arguments, 1, 'Headers.delete'));
    let B = 'Headers.delete';
    if (((A = n6.converters.ByteString(A, B, 'name')), !es(A)))
      throw n6.errors.invalidArgument({ prefix: 'Headers.delete', value: A, type: 'header name' });
    if (this.#A === 'immutable') throw new TypeError('immutable');
    if (!this.#B.contains(A, !1)) return;
    this.#B.delete(A, !1);
  }
  get(A) {
    (n6.brandCheck(this, YD), n6.argumentLengthCheck(arguments, 1, 'Headers.get'));
    let B = 'Headers.get';
    if (((A = n6.converters.ByteString(A, B, 'name')), !es(A)))
      throw n6.errors.invalidArgument({ prefix: B, value: A, type: 'header name' });
    return this.#B.get(A, !1);
  }
  has(A) {
    (n6.brandCheck(this, YD), n6.argumentLengthCheck(arguments, 1, 'Headers.has'));
    let B = 'Headers.has';
    if (((A = n6.converters.ByteString(A, B, 'name')), !es(A)))
      throw n6.errors.invalidArgument({ prefix: B, value: A, type: 'header name' });
    return this.#B.contains(A, !1);
  }
  set(A, B) {
    (n6.brandCheck(this, YD), n6.argumentLengthCheck(arguments, 2, 'Headers.set'));
    let Q = 'Headers.set';
    if (
      ((A = n6.converters.ByteString(A, Q, 'name')),
      (B = n6.converters.ByteString(B, Q, 'value')),
      (B = Vf0(B)),
      !es(A))
    )
      throw n6.errors.invalidArgument({ prefix: Q, value: A, type: 'header name' });
    else if (!Xf0(B))
      throw n6.errors.invalidArgument({ prefix: Q, value: B, type: 'header value' });
    if (this.#A === 'immutable') throw new TypeError('immutable');
    this.#B.set(A, B, !1);
  }
  getSetCookie() {
    n6.brandCheck(this, YD);
    let A = this.#B.cookies;
    if (A) return [...A];
    return [];
  }
  get [YF]() {
    if (this.#B[YF]) return this.#B[YF];
    let A = [],
      B = this.#B.toSortedArray(),
      Q = this.#B.cookies;
    if (Q === null || Q.length === 1) return (this.#B[YF] = B);
    for (let I = 0; I < B.length; ++I) {
      let { 0: G, 1: D } = B[I];
      if (G === 'set-cookie') for (let Z = 0; Z < Q.length; ++Z) A.push([G, Q[Z]]);
      else A.push([G, D]);
    }
    return (this.#B[YF] = A);
  }
  [JW1.inspect.custom](A, B) {
    return ((B.depth ??= A), `Headers ${JW1.formatWithOptions(B, this.#B.entries)}`);
  }
  static getHeadersGuard(A) {
    return A.#A;
  }
  static setHeadersGuard(A, B) {
    A.#A = B;
  }
  static getHeadersList(A) {
    return A.#B;
  }
  static setHeadersList(A, B) {
    A.#B = B;
  }
}
var { getHeadersGuard: zf0, setHeadersGuard: KG6, getHeadersList: Pd1, setHeadersList: HG6 } = YD;
Reflect.deleteProperty(YD, 'getHeadersGuard');
Reflect.deleteProperty(YD, 'setHeadersGuard');
Reflect.deleteProperty(YD, 'getHeadersList');
Reflect.deleteProperty(YD, 'setHeadersList');
VG6('Headers', YD, YF, 0, 1);
Object.defineProperties(YD.prototype, {
  append: Wh,
  delete: Wh,
  get: Wh,
  has: Wh,
  set: Wh,
  getSetCookie: Wh,
  [Symbol.toStringTag]: { value: 'Headers', configurable: !0 },
  [JW1.inspect.custom]: { enumerable: !1 },
});
n6.converters.HeadersInit = function (A, B, Q) {
  if (n6.util.Type(A) === 'Object') {
    let I = Reflect.get(A, Symbol.iterator);
    if (!JW1.types.isProxy(A) && I === YD.prototype.entries)
      try {
        return Pd1(A).entriesList;
      } catch {}
    if (typeof I === 'function')
      return n6.converters['sequence<sequence<ByteString>>'](A, B, Q, I.bind(A));
    return n6.converters['record<ByteString, ByteString>'](A, B, Q);
  }
  throw n6.errors.conversionFailed({
    prefix: 'Headers constructor',
    argument: 'Argument 1',
    types: ['sequence<sequence<ByteString>>', 'record<ByteString, ByteString>'],
  });
};
wf0.exports = {
  fill: Kf0,
  compareHeaderName: Hf0,
  Headers: YD,
  HeadersList: CW1,
  getHeadersGuard: zf0,
  setHeadersGuard: KG6,
  setHeadersList: HG6,
  getHeadersList: Pd1,
};
