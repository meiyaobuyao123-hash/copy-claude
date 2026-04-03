// Module: NL
// Params: UL

var NV =
    (UL && UL.__classPrivateFieldGet) ||
    function (A, B, Q, I) {
      if (Q === 'a' && !I) throw new TypeError('Private accessor was defined without a getter');
      if (typeof B === 'function' ? A !== B || !I : !B.has(A))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        );
      return Q === 'm' ? I : Q === 'a' ? I.call(A) : I ? I.value : B.get(A);
    },
  wg,
  cU,
  Og1,
  Tg1;
Object.defineProperty(UL, '__esModule', { value: !0 });
UL.LRUCache = void 0;
UL.snakeToCamel = JO0;
UL.originalOrCamelOptions = z06;
function JO0(A) {
  return A.replace(/([_][^_])/g, (B) => B.slice(1).toUpperCase());
}
function z06(A) {
  function B(Q) {
    var I;
    let G = A || {};
    return (I = G[Q]) !== null && I !== void 0 ? I : G[JO0(Q)];
  }
  return { get: B };
}
class CO0 {
  constructor(A) {
    (wg.add(this), cU.set(this, new Map()), (this.capacity = A.capacity), (this.maxAge = A.maxAge));
  }
  set(A, B) {
    (NV(this, wg, 'm', Og1).call(this, A, B), NV(this, wg, 'm', Tg1).call(this));
  }
  get(A) {
    let B = NV(this, cU, 'f').get(A);
    if (!B) return;
    return (
      NV(this, wg, 'm', Og1).call(this, A, B.value),
      NV(this, wg, 'm', Tg1).call(this),
      B.value
    );
  }
}
UL.LRUCache = CO0;
((cU = new WeakMap()),
  (wg = new WeakSet()),
  (Og1 = function A(B, Q) {
    (NV(this, cU, 'f').delete(B), NV(this, cU, 'f').set(B, { value: Q, lastAccessed: Date.now() }));
  }),
  (Tg1 = function A() {
    let B = this.maxAge ? Date.now() - this.maxAge : 0,
      Q = NV(this, cU, 'f').entries().next();
    while (!Q.done && (NV(this, cU, 'f').size > this.capacity || Q.value[1].lastAccessed < B))
      (NV(this, cU, 'f').delete(Q.value[0]), (Q = NV(this, cU, 'f').entries().next()));
  }));
