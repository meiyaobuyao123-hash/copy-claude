// Module: fv0
// Params: NK8,xv0

var { kConstruct: Zr } = SW1(),
  { Cache: jW1 } = kv0(),
  { webidl: FD } = WG(),
  { kEnumerableProperty: Yr } = I6();
class hL {
  #A = new Map();
  constructor() {
    if (arguments[0] !== Zr) FD.illegalConstructor();
    FD.util.markAsUncloneable(this);
  }
  async match(A, B = {}) {
    if (
      (FD.brandCheck(this, hL),
      FD.argumentLengthCheck(arguments, 1, 'CacheStorage.match'),
      (A = FD.converters.RequestInfo(A)),
      (B = FD.converters.MultiCacheQueryOptions(B)),
      B.cacheName != null)
    ) {
      if (this.#A.has(B.cacheName)) {
        let Q = this.#A.get(B.cacheName);
        return await new jW1(Zr, Q).match(A, B);
      }
    } else
      for (let Q of this.#A.values()) {
        let G = await new jW1(Zr, Q).match(A, B);
        if (G !== void 0) return G;
      }
  }
  async has(A) {
    FD.brandCheck(this, hL);
    let B = 'CacheStorage.has';
    return (
      FD.argumentLengthCheck(arguments, 1, B),
      (A = FD.converters.DOMString(A, B, 'cacheName')),
      this.#A.has(A)
    );
  }
  async open(A) {
    FD.brandCheck(this, hL);
    let B = 'CacheStorage.open';
    if (
      (FD.argumentLengthCheck(arguments, 1, B),
      (A = FD.converters.DOMString(A, B, 'cacheName')),
      this.#A.has(A))
    ) {
      let I = this.#A.get(A);
      return new jW1(Zr, I);
    }
    let Q = [];
    return (this.#A.set(A, Q), new jW1(Zr, Q));
  }
  async delete(A) {
    FD.brandCheck(this, hL);
    let B = 'CacheStorage.delete';
    return (
      FD.argumentLengthCheck(arguments, 1, B),
      (A = FD.converters.DOMString(A, B, 'cacheName')),
      this.#A.delete(A)
    );
  }
  async keys() {
    return (FD.brandCheck(this, hL), [...this.#A.keys()]);
  }
}
Object.defineProperties(hL.prototype, {
  [Symbol.toStringTag]: { value: 'CacheStorage', configurable: !0 },
  match: Yr,
  has: Yr,
  open: Yr,
  delete: Yr,
  keys: Yr,
});
xv0.exports = { CacheStorage: hL };
