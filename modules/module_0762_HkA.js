// Module: HkA
// Params: Mh5,KkA

var { defineProperty: W51, getOwnPropertyDescriptor: ku9, getOwnPropertyNames: xu9 } = Object,
  fu9 = Object.prototype.hasOwnProperty,
  rq = (A, B) => W51(A, 'name', { value: B, configurable: !0 }),
  vu9 = (A, B) => {
    for (var Q in B) W51(A, Q, { get: B[Q], enumerable: !0 });
  },
  bu9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of xu9(B))
        if (!fu9.call(A, G) && G !== Q)
          W51(A, G, { get: () => B[G], enumerable: !(I = ku9(B, G)) || I.enumerable });
    }
    return A;
  },
  gu9 = (A) => bu9(W51({}, '__esModule', { value: !0 }), A),
  JkA = {};
vu9(JkA, {
  Field: () => du9,
  Fields: () => uu9,
  HttpRequest: () => pu9,
  HttpResponse: () => cu9,
  IHttpRequest: () => CkA.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => hu9,
  isValidHostname: () => VkA,
  resolveHttpHandlerRuntimeConfig: () => mu9,
});
KkA.exports = gu9(JkA);
var hu9 = rq((A) => {
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
  mu9 = rq((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  CkA = FkA(),
  du9 = class {
    static {
      rq(this, 'Field');
    }
    constructor({ name: A, kind: B = CkA.FieldPosition.HEADER, values: Q = [] }) {
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
  uu9 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      rq(this, 'Fields');
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
  pu9 = class A {
    static {
      rq(this, 'HttpRequest');
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
      if (Q.query) Q.query = XkA(Q.query);
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
function XkA(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
rq(XkA, 'cloneQuery');
var cu9 = class {
  static {
    rq(this, 'HttpResponse');
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
function VkA(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
rq(VkA, 'isValidHostname');
