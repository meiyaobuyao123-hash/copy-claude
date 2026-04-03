// Module: cyA
// Params: zh5,pyA

var { defineProperty: Q51, getOwnPropertyDescriptor: sd9, getOwnPropertyNames: rd9 } = Object,
  od9 = Object.prototype.hasOwnProperty,
  sq = (A, B) => Q51(A, 'name', { value: B, configurable: !0 }),
  td9 = (A, B) => {
    for (var Q in B) Q51(A, Q, { get: B[Q], enumerable: !0 });
  },
  ed9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of rd9(B))
        if (!od9.call(A, G) && G !== Q)
          Q51(A, G, { get: () => B[G], enumerable: !(I = sd9(B, G)) || I.enumerable });
    }
    return A;
  },
  Au9 = (A) => ed9(Q51({}, '__esModule', { value: !0 }), A),
  hyA = {};
td9(hyA, {
  Field: () => Iu9,
  Fields: () => Gu9,
  HttpRequest: () => Du9,
  HttpResponse: () => Zu9,
  IHttpRequest: () => myA.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => Bu9,
  isValidHostname: () => uyA,
  resolveHttpHandlerRuntimeConfig: () => Qu9,
});
pyA.exports = Au9(hyA);
var Bu9 = sq((A) => {
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
  Qu9 = sq((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  myA = gyA(),
  Iu9 = class {
    static {
      sq(this, 'Field');
    }
    constructor({ name: A, kind: B = myA.FieldPosition.HEADER, values: Q = [] }) {
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
  Gu9 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      sq(this, 'Fields');
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
  Du9 = class A {
    static {
      sq(this, 'HttpRequest');
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
      if (Q.query) Q.query = dyA(Q.query);
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
function dyA(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
sq(dyA, 'cloneQuery');
var Zu9 = class {
  static {
    sq(this, 'HttpResponse');
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
function uyA(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
sq(uyA, 'isValidHostname');
