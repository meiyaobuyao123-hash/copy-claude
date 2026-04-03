// Module: JC0
// Params: FY8,FC0

var { defineProperty: vG1, getOwnPropertyDescriptor: Kv4, getOwnPropertyNames: Hv4 } = Object,
  zv4 = Object.prototype.hasOwnProperty,
  DL = (A, B) => vG1(A, 'name', { value: B, configurable: !0 }),
  wv4 = (A, B) => {
    for (var Q in B) vG1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ev4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Hv4(B))
        if (!zv4.call(A, G) && G !== Q)
          vG1(A, G, { get: () => B[G], enumerable: !(I = Kv4(B, G)) || I.enumerable });
    }
    return A;
  },
  Uv4 = (A) => Ev4(vG1({}, '__esModule', { value: !0 }), A),
  DC0 = {};
wv4(DC0, {
  Field: () => qv4,
  Fields: () => Mv4,
  HttpRequest: () => Lv4,
  HttpResponse: () => Rv4,
  IHttpRequest: () => ZC0.HttpRequest,
  getHttpHandlerExtensionConfiguration: () => Nv4,
  isValidHostname: () => WC0,
  resolveHttpHandlerRuntimeConfig: () => $v4,
});
FC0.exports = Uv4(DC0);
var Nv4 = DL((A) => {
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
  $v4 = DL((A) => {
    return { httpHandler: A.httpHandler() };
  }, 'resolveHttpHandlerRuntimeConfig'),
  ZC0 = Of1(),
  qv4 = class {
    static {
      DL(this, 'Field');
    }
    constructor({ name: A, kind: B = ZC0.FieldPosition.HEADER, values: Q = [] }) {
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
  Mv4 = class {
    constructor({ fields: A = [], encoding: B = 'utf-8' }) {
      ((this.entries = {}), A.forEach(this.setField.bind(this)), (this.encoding = B));
    }
    static {
      DL(this, 'Fields');
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
  Lv4 = class A {
    static {
      DL(this, 'HttpRequest');
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
      if (Q.query) Q.query = YC0(Q.query);
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
function YC0(A) {
  return Object.keys(A).reduce((B, Q) => {
    let I = A[Q];
    return { ...B, [Q]: Array.isArray(I) ? [...I] : I };
  }, {});
}
DL(YC0, 'cloneQuery');
var Rv4 = class {
  static {
    DL(this, 'HttpResponse');
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
function WC0(A) {
  return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A);
}
DL(WC0, 'isValidHostname');
