// Module: t7
// Params: am5,sgA

var { defineProperty: B81, getOwnPropertyDescriptor: es9, getOwnPropertyNames: Ar9 } = Object,
  Br9 = Object.prototype.hasOwnProperty,
  CP = (A, B) => B81(A, 'name', { value: B, configurable: !0 }),
  Qr9 = (A, B) => {
    for (var Q in B) B81(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ir9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Ar9(B))
        if (!Br9.call(A, G) && G !== Q)
          B81(A, G, { get: () => B[G], enumerable: !(I = es9(B, G)) || I.enumerable });
    }
    return A;
  },
  Gr9 = (A) => Ir9(B81({}, '__esModule', { value: !0 }), A),
  agA = {};
Qr9(agA, {
  CredentialsProviderError: () => Dr9,
  ProviderError: () => Q81,
  TokenProviderError: () => Zr9,
  chain: () => Yr9,
  fromStatic: () => Wr9,
  memoize: () => Fr9,
});
sgA.exports = Gr9(agA);
var Q81 = class A extends Error {
    constructor(B, Q = !0) {
      let I,
        G = !0;
      if (typeof Q === 'boolean') ((I = void 0), (G = Q));
      else if (Q != null && typeof Q === 'object') ((I = Q.logger), (G = Q.tryNextLink ?? !0));
      super(B);
      ((this.name = 'ProviderError'),
        (this.tryNextLink = G),
        Object.setPrototypeOf(this, A.prototype),
        I?.debug?.(`@smithy/property-provider ${G ? '->' : '(!)'} ${B}`));
    }
    static {
      CP(this, 'ProviderError');
    }
    static from(B, Q = !0) {
      return Object.assign(new this(B.message, Q), B);
    }
  },
  Dr9 = class A extends Q81 {
    constructor(B, Q = !0) {
      super(B, Q);
      ((this.name = 'CredentialsProviderError'), Object.setPrototypeOf(this, A.prototype));
    }
    static {
      CP(this, 'CredentialsProviderError');
    }
  },
  Zr9 = class A extends Q81 {
    constructor(B, Q = !0) {
      super(B, Q);
      ((this.name = 'TokenProviderError'), Object.setPrototypeOf(this, A.prototype));
    }
    static {
      CP(this, 'TokenProviderError');
    }
  },
  Yr9 = CP(
    (...A) =>
      async () => {
        if (A.length === 0) throw new Q81('No providers in chain');
        let B;
        for (let Q of A)
          try {
            return await Q();
          } catch (I) {
            if (((B = I), I?.tryNextLink)) continue;
            throw I;
          }
        throw B;
      },
    'chain'
  ),
  Wr9 = CP((A) => () => Promise.resolve(A), 'fromStatic'),
  Fr9 = CP((A, B, Q) => {
    let I,
      G,
      D,
      Z = !1,
      Y = CP(async () => {
        if (!G) G = A();
        try {
          ((I = await G), (D = !0), (Z = !1));
        } finally {
          G = void 0;
        }
        return I;
      }, 'coalesceProvider');
    if (B === void 0)
      return async (W) => {
        if (!D || W?.forceRefresh) I = await Y();
        return I;
      };
    return async (W) => {
      if (!D || W?.forceRefresh) I = await Y();
      if (Z) return I;
      if (Q && !Q(I)) return ((Z = !0), I);
      if (B(I)) return (await Y(), I);
      return I;
    };
  }, 'memoize');
