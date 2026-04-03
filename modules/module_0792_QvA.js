// Module: QvA
// Params: Cm5,BvA

var { defineProperty: _51, getOwnPropertyDescriptor: qi9, getOwnPropertyNames: Mi9 } = Object,
  Li9 = Object.prototype.hasOwnProperty,
  AM = (A, B) => _51(A, 'name', { value: B, configurable: !0 }),
  Ri9 = (A, B) => {
    for (var Q in B) _51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Oi9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Mi9(B))
        if (!Li9.call(A, G) && G !== Q)
          _51(A, G, { get: () => B[G], enumerable: !(I = qi9(B, G)) || I.enumerable });
    }
    return A;
  },
  Ti9 = (A) => Oi9(_51({}, '__esModule', { value: !0 }), A),
  ofA = {};
Ri9(ofA, {
  Field: () => _i9,
  Fields: () => ji9,
  HttpRequest: () => yi9,
  HttpResponse: () => ki9,
  IHttpRequest: () => tfA.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => Pi9,
  isValidHostname: () => AvA,
  resolveHttpHandlerRuntimeConfig: () => Si9,
});
BvA.exports = Ti9(ofA);
var Pi9 = AM((A) => {
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
  Si9 = AM((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  tfA = rfA(),
  _i9 = class {
    static {
      AM(this, 'Field');
    }
    constructor({ name: A, kind: B = tfA.FieldPosition.HEADER, values: Q = [] }) {
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
  ji9 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      AM(this, 'Fields');
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
  yi9 = class A {
    static {
      AM(this, 'HttpRequest');
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
      if (Q.query) Q.query = efA(Q.query);
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
function efA(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
AM(efA, 'cloneQuery');
var ki9 = class {
  static {
    AM(this, 'HttpResponse');
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
function AvA(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
AM(AvA, 'isValidHostname');
