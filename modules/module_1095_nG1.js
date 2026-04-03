// Module: nG1
// Params: DW8,MV0

var { defineProperty: iG1, getOwnPropertyDescriptor: Ih4, getOwnPropertyNames: Gh4 } = Object,
  Dh4 = Object.prototype.hasOwnProperty,
  ZL = (A, B) => iG1(A, 'name', { value: B, configurable: !0 }),
  Zh4 = (A, B) => {
    for (var Q in B) iG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Yh4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Gh4(B))
        if (!Dh4.call(A, G) && G !== Q)
          iG1(A, G, { get: () => B[G], enumerable: !(I = Ih4(B, G)) || I.enumerable });
    }
    return A;
  },
  Wh4 = (A) => Yh4(iG1({}, '__esModule', { value: !0 }), A),
  zV0 = {};
Zh4(zV0, {
  Field: () => Xh4,
  Fields: () => Vh4,
  HttpRequest: () => Kh4,
  HttpResponse: () => Hh4,
  getHttpHandlerExtensionConfiguration: () => Fh4,
  isValidHostname: () => qV0,
  resolveHttpHandlerRuntimeConfig: () => Jh4,
});
MV0.exports = Wh4(zV0);
var Fh4 = ZL((A) => {
    let B = A.httpHandler;
    return {
      setHttpHandler(Q) {
        B = Q;
      },
      httpHandler() {
        return B;
      },
      updateHttpClientConfig(Q, I) {
        B.updateHttpClientConfig(Q, I);
      },
      httpHandlerConfigs() {
        return B.httpHandlerConfigs();
      },
    };
  }, 'getHttpHandlerExtensionConfiguration'),
  Jh4 = ZL((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  Ch4 = ef1(),
  wV0 = class A {
    constructor({ name: B, kind: Q = Ch4.FieldPosition.HEADER, values: I = [] }) {
      ((this.name = B), (this.kind = Q), (this.values = I));
    }
    add(B) {
      this.values.push(B);
    }
    set(B) {
      this.values = B;
    }
    remove(B) {
      this.values = this.values.filter((Q) => Q !== B);
    }
    toString() {
      return this.values.map((B) => (B.includes(',') || B.includes(' ') ? `"${B}"` : B)).join(', ');
    }
    get() {
      return this.values;
    }
  };
ZL(wV0, 'Field');
var Xh4 = wV0,
  EV0 = class A {
    constructor({ fields: B = [], encoding: Q = 'utf-8' }) {
      ((this.entries = {}), B.forEach(this.setField.bind(this)), (this.encoding = Q));
    }
    setField(B) {
      this.entries[B.name.toLowerCase()] = B;
    }
    getField(B) {
      return this.entries[B.toLowerCase()];
    }
    removeField(B) {
      delete this.entries[B.toLowerCase()];
    }
    getByType(B) {
      return Object.values(this.entries).filter((Q) => Q.kind === B);
    }
  };
ZL(EV0, 'Fields');
var Vh4 = EV0,
  UV0 = class A {
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
      let B = new A({ ...this, headers: { ...this.headers } });
      if (B.query) B.query = NV0(B.query);
      return B;
    }
  };
ZL(UV0, 'HttpRequest');
var Kh4 = UV0;
function NV0(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
ZL(NV0, 'cloneQuery');
var $V0 = class A {
  constructor(B) {
    ((this.statusCode = B.statusCode),
      (this.reason = B.reason),
      (this.headers = B.headers || {}),
      (this.body = B.body));
  }
  static isInstance(B) {
    if (!B) return !1;
    let Q = B;
    return typeof Q.statusCode === 'number' && typeof Q.headers === 'object';
  }
};
ZL($V0, 'HttpResponse');
var Hh4 = $V0;
function qV0(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
ZL(qV0, 'isValidHostname');
