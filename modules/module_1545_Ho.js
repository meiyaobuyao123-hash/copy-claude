// Module: Ho
// Params: e92

Object.defineProperty(e92, '__esModule', { value: !0 });
e92.AttributeHashMap = e92.HashMap = void 0;
var Qv6 = hV();
class Il1 {
  _hash;
  _valueMap = new Map();
  _keyMap = new Map();
  constructor(A) {
    this._hash = A;
  }
  get(A, B) {
    return ((B ??= this._hash(A)), this._valueMap.get(B));
  }
  getOrDefault(A, B) {
    let Q = this._hash(A);
    if (this._valueMap.has(Q)) return this._valueMap.get(Q);
    let I = B();
    if (!this._keyMap.has(Q)) this._keyMap.set(Q, A);
    return (this._valueMap.set(Q, I), I);
  }
  set(A, B, Q) {
    if (((Q ??= this._hash(A)), !this._keyMap.has(Q))) this._keyMap.set(Q, A);
    this._valueMap.set(Q, B);
  }
  has(A, B) {
    return ((B ??= this._hash(A)), this._valueMap.has(B));
  }
  *keys() {
    let A = this._keyMap.entries(),
      B = A.next();
    while (B.done !== !0) (yield [B.value[1], B.value[0]], (B = A.next()));
  }
  *entries() {
    let A = this._valueMap.entries(),
      B = A.next();
    while (B.done !== !0)
      (yield [this._keyMap.get(B.value[0]), B.value[1], B.value[0]], (B = A.next()));
  }
  get size() {
    return this._valueMap.size;
  }
}
e92.HashMap = Il1;
class t92 extends Il1 {
  constructor() {
    super(Qv6.hashAttributes);
  }
}
e92.AttributeHashMap = t92;
