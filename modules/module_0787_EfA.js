// Module: EfA
// Params: Am5,wfA

var { defineProperty: R51, getOwnPropertyDescriptor: wl9, getOwnPropertyNames: El9 } = Object,
  Ul9 = Object.prototype.hasOwnProperty,
  eq = (A, B) => R51(A, 'name', { value: B, configurable: !0 }),
  Nl9 = (A, B) => {
    for (var Q in B) R51(A, Q, { get: B[Q], enumerable: !0 });
  },
  $l9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of El9(B))
        if (!Ul9.call(A, G) && G !== Q)
          R51(A, G, { get: () => B[G], enumerable: !(I = wl9(B, G)) || I.enumerable });
    }
    return A;
  },
  ql9 = (A) => $l9(R51({}, '__esModule', { value: !0 }), A),
  VfA = {};
Nl9(VfA, {
  Field: () => Rl9,
  Fields: () => Ol9,
  HttpRequest: () => Tl9,
  HttpResponse: () => Pl9,
  IHttpRequest: () => KfA.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => Ml9,
  isValidHostname: () => zfA,
  resolveHttpHandlerRuntimeConfig: () => Ll9,
});
wfA.exports = ql9(VfA);
var Ml9 = eq((A) => {
    return {
      setHttpHandler(B) {
        A.httpHandler = B;
      },
      httpHandler() {
        return A.httpHandler;
      },
      updateHttpClientConfig(B, Q) {
        A.httpHandler?.updateHttpClientConfig(B, Q);
      },
      httpHandlerConfigs() {
        return A.httpHandler.httpHandlerConfigs();
      },
    };
  }, 'getHttpHandlerExtensionConfiguration'),
  Ll9 = eq((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  KfA = XfA(),
  Rl9 = class {
    static {
      eq(this, 'Field');
    }
    constructor({ name: A, kind: B = KfA.FieldPosition.HEADER, values: Q = [] }) {
      ((this.name = A), (this.kind = B), (this.values = Q));
    }
    add(A) {
      this.values.push(A);
    }
    set(A) {
      this.values = A;
    }
    remove(A) {
      this.values = this.values.filter((B) => B !== A);
    }
    toString() {
      return this.values.map((A) => (A.includes(',') || A.includes(' ') ? `"${A}"` : A)).join(', ');
    }
    get() {
      return this.values;
    }
  },
  Ol9 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      eq(this, 'Fields');
    }
    setField(A) {
      this.entries[A.name.toLowerCase()] = A;
    }
    getField(A) {
      return this.entries[A.toLowerCase()];
    }
    removeField(A) {
      delete this.entries[A.toLowerCase()];
    }
    getByType(A) {
      return Object.values(this.entries).filter((B) => B.kind === A);
    }
  },
  Tl9 = class A {
    static {
      eq(this, 'HttpRequest');
    }
    constructor(B) {
      ((this.method = B.method || 'GET'),
        (this.hostname = B.hostname || 'localhost'),
        (this.port = B.port),
        (this.query = B.query || {}),
        (this.headers = B.headers || {}),
        (this.body = B.body),
        (this.protocol = B.protocol
          ? B.protocol.slice(-1) !== ':'
            ? `${B.protocol}:`
            : B.protocol
          : 'https:'),
        (this.path = B.path ? (B.path.charAt(0) !== '/' ? `/${B.path}` : B.path) : '/'),
        (this.username = B.username),
        (this.password = B.password),
        (this.fragment = B.fragment));
    }
    static clone(B) {
      let Q = new A({ ...B, headers: { ...B.headers } });
      if (Q.query) Q.query = HfA(Q.query);
      return Q;
    }
    static isInstance(B) {
      if (!B) return !1;
      let Q = B;
      return (
        'method' in Q &&
        'protocol' in Q &&
        'hostname' in Q &&
        'path' in Q &&
        typeof Q.query === 'object' &&
        typeof Q.headers === 'object'
      );
    }
    clone() {
      return A.clone(this);
    }
  };
function HfA(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
eq(HfA, 'cloneQuery');
var Pl9 = class {
  static {
    eq(this, 'HttpResponse');
  }
  constructor(A) {
    ((this.statusCode = A.statusCode),
      (this.reason = A.reason),
      (this.headers = A.headers || {}),
      (this.body = A.body));
  }
  static isInstance(A) {
    if (!A) return !1;
    let B = A;
    return typeof B.statusCode === 'number' && typeof B.headers === 'object';
  }
};
function zfA(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
eq(zfA, 'isValidHostname');
