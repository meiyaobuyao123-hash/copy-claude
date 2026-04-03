// Module: g$0
// Params: QJ8,b$0

var { defineProperty: BZ1, getOwnPropertyDescriptor: Cs4, getOwnPropertyNames: Xs4 } = Object,
  Vs4 = Object.prototype.hasOwnProperty,
  CL = (A, B) => BZ1(A, 'name', { value: B, configurable: !0 }),
  Ks4 = (A, B) => {
    for (var Q in B) BZ1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Hs4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Xs4(B))
        if (!Vs4.call(A, G) && G !== Q)
          BZ1(A, G, { get: () => B[G], enumerable: !(I = Cs4(B, G)) || I.enumerable });
    }
    return A;
  },
  zs4 = (A) => Hs4(BZ1({}, '__esModule', { value: !0 }), A),
  k$0 = {};
Ks4(k$0, {
  Field: () => Us4,
  Fields: () => Ns4,
  HttpRequest: () => $s4,
  HttpResponse: () => qs4,
  IHttpRequest: () => x$0.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => ws4,
  isValidHostname: () => v$0,
  resolveHttpHandlerRuntimeConfig: () => Es4,
});
b$0.exports = zs4(k$0);
var ws4 = CL((A) => {
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
  Es4 = CL((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  x$0 = Ib1(),
  Us4 = class {
    static {
      CL(this, 'Field');
    }
    constructor({ name: A, kind: B = x$0.FieldPosition.HEADER, values: Q = [] }) {
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
  Ns4 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      CL(this, 'Fields');
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
  $s4 = class A {
    static {
      CL(this, 'HttpRequest');
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
      if (Q.query) Q.query = f$0(Q.query);
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
function f$0(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
CL(f$0, 'cloneQuery');
var qs4 = class {
  static {
    CL(this, 'HttpResponse');
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
function v$0(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
CL(v$0, 'isValidHostname');
