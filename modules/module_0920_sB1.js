// Module: sB1
// Params: np5,eoA

var { defineProperty: aB1, getOwnPropertyDescriptor: PZ4, getOwnPropertyNames: SZ4 } = Object,
  _Z4 = Object.prototype.hasOwnProperty,
  UM = (A, B) => aB1(A, 'name', { value: B, configurable: !0 }),
  jZ4 = (A, B) => {
    for (var Q in B) aB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  yZ4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of SZ4(B))
        if (!_Z4.call(A, G) && G !== Q)
          aB1(A, G, { get: () => B[G], enumerable: !(I = PZ4(B, G)) || I.enumerable });
    }
    return A;
  },
  kZ4 = (A) => yZ4(aB1({}, '__esModule', { value: !0 }), A),
  soA = {};
jZ4(soA, {
  Field: () => vZ4,
  Fields: () => bZ4,
  HttpRequest: () => gZ4,
  HttpResponse: () => hZ4,
  IHttpRequest: () => roA.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => xZ4,
  isValidHostname: () => toA,
  resolveHttpHandlerRuntimeConfig: () => fZ4,
});
eoA.exports = kZ4(soA);
var xZ4 = UM((A) => {
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
  fZ4 = UM((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  roA = tP1(),
  vZ4 = class {
    static {
      UM(this, 'Field');
    }
    constructor({ name: A, kind: B = roA.FieldPosition.HEADER, values: Q = [] }) {
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
  bZ4 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      UM(this, 'Fields');
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
  gZ4 = class A {
    static {
      UM(this, 'HttpRequest');
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
      if (Q.query) Q.query = ooA(Q.query);
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
function ooA(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
UM(ooA, 'cloneQuery');
var hZ4 = class {
  static {
    UM(this, 'HttpResponse');
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
function toA(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
UM(toA, 'isValidHostname');
