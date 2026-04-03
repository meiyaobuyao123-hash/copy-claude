// Module: IO1
// Params: yh5,AxA

var { defineProperty: w51, getOwnPropertyDescriptor: bp9, getOwnPropertyNames: gp9 } = Object,
  hp9 = Object.prototype.hasOwnProperty,
  oq = (A, B) => w51(A, 'name', { value: B, configurable: !0 }),
  mp9 = (A, B) => {
    for (var Q in B) w51(A, Q, { get: B[Q], enumerable: !0 });
  },
  dp9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of gp9(B))
        if (!hp9.call(A, G) && G !== Q)
          w51(A, G, { get: () => B[G], enumerable: !(I = bp9(B, G)) || I.enumerable });
    }
    return A;
  },
  up9 = (A) => dp9(w51({}, '__esModule', { value: !0 }), A),
  rkA = {};
mp9(rkA, {
  Field: () => lp9,
  Fields: () => ip9,
  HttpRequest: () => np9,
  HttpResponse: () => ap9,
  IHttpRequest: () => okA.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => pp9,
  isValidHostname: () => ekA,
  resolveHttpHandlerRuntimeConfig: () => cp9,
});
AxA.exports = up9(rkA);
var pp9 = oq((A) => {
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
  cp9 = oq((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  okA = BO1(),
  lp9 = class {
    static {
      oq(this, 'Field');
    }
    constructor({ name: A, kind: B = okA.FieldPosition.HEADER, values: Q = [] }) {
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
  ip9 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      oq(this, 'Fields');
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
  np9 = class A {
    static {
      oq(this, 'HttpRequest');
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
      if (Q.query) Q.query = tkA(Q.query);
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
function tkA(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
oq(tkA, 'cloneQuery');
var ap9 = class {
  static {
    oq(this, 'HttpResponse');
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
function ekA(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
oq(ekA, 'isValidHostname');
