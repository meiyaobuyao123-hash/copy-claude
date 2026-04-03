// Module: DE0
// Params: DF8,GE0

var { defineProperty: PD1, getOwnPropertyDescriptor: mc4, getOwnPropertyNames: dc4 } = Object,
  uc4 = Object.prototype.hasOwnProperty,
  FL = (A, B) => PD1(A, 'name', { value: B, configurable: !0 }),
  pc4 = (A, B) => {
    for (var Q in B) PD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  cc4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of dc4(B))
        if (!uc4.call(A, G) && G !== Q)
          PD1(A, G, { get: () => B[G], enumerable: !(I = mc4(B, G)) || I.enumerable });
    }
    return A;
  },
  lc4 = (A) => cc4(PD1({}, '__esModule', { value: !0 }), A),
  AE0 = {};
pc4(AE0, {
  Field: () => ac4,
  Fields: () => sc4,
  HttpRequest: () => rc4,
  HttpResponse: () => oc4,
  IHttpRequest: () => BE0.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => ic4,
  isValidHostname: () => IE0,
  resolveHttpHandlerRuntimeConfig: () => nc4,
});
GE0.exports = lc4(AE0);
var ic4 = FL((A) => {
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
  nc4 = FL((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  BE0 = ew0(),
  ac4 = class {
    static {
      FL(this, 'Field');
    }
    constructor({ name: A, kind: B = BE0.FieldPosition.HEADER, values: Q = [] }) {
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
  sc4 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      FL(this, 'Fields');
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
  rc4 = class A {
    static {
      FL(this, 'HttpRequest');
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
      if (Q.query) Q.query = QE0(Q.query);
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
function QE0(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
FL(QE0, 'cloneQuery');
var oc4 = class {
  static {
    FL(this, 'HttpResponse');
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
function IE0(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
FL(IE0, 'isValidHostname');
