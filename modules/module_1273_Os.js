// Module: Os
// Params: $V8,Uj0

var { isBlobLike: PY1, iteratorMixin: d86 } = GF(),
  { kState: CZ } = OL(),
  { kEnumerableProperty: dg } = I6(),
  { FileLike: Hj0, isFileLike: u86 } = Xm1(),
  { webidl: n8 } = WG(),
  { File: Ej0 } = D1('node:buffer'),
  zj0 = D1('node:util'),
  wj0 = globalThis.File ?? Ej0;
class kz {
  constructor(A) {
    if ((n8.util.markAsUncloneable(this), A !== void 0))
      throw n8.errors.conversionFailed({
        prefix: 'FormData constructor',
        argument: 'Argument 1',
        types: ['undefined'],
      });
    this[CZ] = [];
  }
  append(A, B, Q = void 0) {
    n8.brandCheck(this, kz);
    let I = 'FormData.append';
    if ((n8.argumentLengthCheck(arguments, 2, I), arguments.length === 3 && !PY1(B)))
      throw new TypeError(
        "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'"
      );
    ((A = n8.converters.USVString(A, I, 'name')),
      (B = PY1(B)
        ? n8.converters.Blob(B, I, 'value', { strict: !1 })
        : n8.converters.USVString(B, I, 'value')),
      (Q = arguments.length === 3 ? n8.converters.USVString(Q, I, 'filename') : void 0));
    let G = Vm1(A, B, Q);
    this[CZ].push(G);
  }
  delete(A) {
    n8.brandCheck(this, kz);
    let B = 'FormData.delete';
    (n8.argumentLengthCheck(arguments, 1, B),
      (A = n8.converters.USVString(A, B, 'name')),
      (this[CZ] = this[CZ].filter((Q) => Q.name !== A)));
  }
  get(A) {
    n8.brandCheck(this, kz);
    let B = 'FormData.get';
    (n8.argumentLengthCheck(arguments, 1, B), (A = n8.converters.USVString(A, B, 'name')));
    let Q = this[CZ].findIndex((I) => I.name === A);
    if (Q === -1) return null;
    return this[CZ][Q].value;
  }
  getAll(A) {
    n8.brandCheck(this, kz);
    let B = 'FormData.getAll';
    return (
      n8.argumentLengthCheck(arguments, 1, B),
      (A = n8.converters.USVString(A, B, 'name')),
      this[CZ].filter((Q) => Q.name === A).map((Q) => Q.value)
    );
  }
  has(A) {
    n8.brandCheck(this, kz);
    let B = 'FormData.has';
    return (
      n8.argumentLengthCheck(arguments, 1, B),
      (A = n8.converters.USVString(A, B, 'name')),
      this[CZ].findIndex((Q) => Q.name === A) !== -1
    );
  }
  set(A, B, Q = void 0) {
    n8.brandCheck(this, kz);
    let I = 'FormData.set';
    if ((n8.argumentLengthCheck(arguments, 2, I), arguments.length === 3 && !PY1(B)))
      throw new TypeError(
        "Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'"
      );
    ((A = n8.converters.USVString(A, I, 'name')),
      (B = PY1(B)
        ? n8.converters.Blob(B, I, 'name', { strict: !1 })
        : n8.converters.USVString(B, I, 'name')),
      (Q = arguments.length === 3 ? n8.converters.USVString(Q, I, 'name') : void 0));
    let G = Vm1(A, B, Q),
      D = this[CZ].findIndex((Z) => Z.name === A);
    if (D !== -1)
      this[CZ] = [...this[CZ].slice(0, D), G, ...this[CZ].slice(D + 1).filter((Z) => Z.name !== A)];
    else this[CZ].push(G);
  }
  [zj0.inspect.custom](A, B) {
    let Q = this[CZ].reduce(
      (G, D) => {
        if (G[D.name])
          if (Array.isArray(G[D.name])) G[D.name].push(D.value);
          else G[D.name] = [G[D.name], D.value];
        else G[D.name] = D.value;
        return G;
      },
      { __proto__: null }
    );
    ((B.depth ??= A), (B.colors ??= !0));
    let I = zj0.formatWithOptions(B, Q);
    return `FormData ${I.slice(I.indexOf(']') + 2)}`;
  }
}
d86('FormData', kz, CZ, 'name', 'value');
Object.defineProperties(kz.prototype, {
  append: dg,
  delete: dg,
  get: dg,
  getAll: dg,
  has: dg,
  set: dg,
  [Symbol.toStringTag]: { value: 'FormData', configurable: !0 },
});
function Vm1(A, B, Q) {
  if (typeof B === 'string');
  else {
    if (!u86(B))
      B =
        B instanceof Blob
          ? new wj0([B], 'blob', { type: B.type })
          : new Hj0(B, 'blob', { type: B.type });
    if (Q !== void 0) {
      let I = { type: B.type, lastModified: B.lastModified };
      B = B instanceof Ej0 ? new wj0([B], Q, I) : new Hj0(B, Q, I);
    }
  }
  return { name: A, value: B };
}
Uj0.exports = { FormData: kz, makeEntry: Vm1 };
