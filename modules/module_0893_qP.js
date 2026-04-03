// Module: qP
// Params: Ap5,tnA

var { defineProperty: NB1, getOwnPropertyDescriptor: y34, getOwnPropertyNames: k34 } = Object,
  x34 = Object.prototype.hasOwnProperty,
  rnA = (A, B) => NB1(A, 'name', { value: B, configurable: !0 }),
  f34 = (A, B) => {
    for (var Q in B) NB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  v34 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of k34(B))
        if (!x34.call(A, G) && G !== Q)
          NB1(A, G, { get: () => B[G], enumerable: !(I = y34(B, G)) || I.enumerable });
    }
    return A;
  },
  b34 = (A) => v34(NB1({}, '__esModule', { value: !0 }), A),
  onA = {};
f34(onA, { Hash: () => m34 });
tnA.exports = b34(onA);
var SP1 = lG(),
  g34 = DQ(),
  h34 = D1('buffer'),
  snA = D1('crypto'),
  m34 = class {
    static {
      rnA(this, 'Hash');
    }
    constructor(A, B) {
      ((this.algorithmIdentifier = A), (this.secret = B), this.reset());
    }
    update(A, B) {
      this.hash.update(g34.toUint8Array(_P1(A, B)));
    }
    digest() {
      return Promise.resolve(this.hash.digest());
    }
    reset() {
      this.hash = this.secret
        ? snA.createHmac(this.algorithmIdentifier, _P1(this.secret))
        : snA.createHash(this.algorithmIdentifier);
    }
  };
function _P1(A, B) {
  if (h34.Buffer.isBuffer(A)) return A;
  if (typeof A === 'string') return SP1.fromString(A, B);
  if (ArrayBuffer.isView(A)) return SP1.fromArrayBuffer(A.buffer, A.byteOffset, A.byteLength);
  return SP1.fromArrayBuffer(A);
}
rnA(_P1, 'castSourceData');
