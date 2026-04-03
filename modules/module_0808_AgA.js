// Module: AgA
// Params: bm5,ebA

var { defineProperty: n51, getOwnPropertyDescriptor: Cs9, getOwnPropertyNames: Xs9 } = Object,
  Vs9 = Object.prototype.hasOwnProperty,
  GM = (A, B) => n51(A, 'name', { value: B, configurable: !0 }),
  Ks9 = (A, B) => {
    for (var Q in B) n51(A, Q, { get: B[Q], enumerable: !0 });
  },
  Hs9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Xs9(B))
        if (!Vs9.call(A, G) && G !== Q)
          n51(A, G, { get: () => B[G], enumerable: !(I = Cs9(B, G)) || I.enumerable });
    }
    return A;
  },
  zs9 = (A) => Hs9(n51({}, '__esModule', { value: !0 }), A),
  sbA = {};
Ks9(sbA, {
  Field: () => Us9,
  Fields: () => Ns9,
  HttpRequest: () => $s9,
  HttpResponse: () => qs9,
  IHttpRequest: () => rbA.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => ws9,
  isValidHostname: () => tbA,
  resolveHttpHandlerRuntimeConfig: () => Es9,
});
ebA.exports = zs9(sbA);
var ws9 = GM((A) => {
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
  Es9 = GM((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  rbA = abA(),
  Us9 = class {
    static {
      GM(this, 'Field');
    }
    constructor({ name: A, kind: B = rbA.FieldPosition.HEADER, values: Q = [] }) {
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
  Ns9 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      GM(this, 'Fields');
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
  $s9 = class A {
    static {
      GM(this, 'HttpRequest');
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
      if (Q.query) Q.query = obA(Q.query);
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
function obA(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
GM(obA, 'cloneQuery');
var qs9 = class {
  static {
    GM(this, 'HttpResponse');
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
function tbA(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
GM(tbA, 'isValidHostname');
