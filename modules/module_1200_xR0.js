// Module: xR0
// Params: Z8

var VA6 =
    (Z8 && Z8.__createBinding) ||
    (Object.create
      ? function (A, B, Q, I) {
          if (I === void 0) I = Q;
          var G = Object.getOwnPropertyDescriptor(B, Q);
          if (!G || ('get' in G ? !B.__esModule : G.writable || G.configurable))
            G = {
              enumerable: !0,
              get: function () {
                return B[Q];
              },
            };
          Object.defineProperty(A, I, G);
        }
      : function (A, B, Q, I) {
          if (I === void 0) I = Q;
          A[I] = B[Q];
        }),
  KA6 =
    (Z8 && Z8.__setModuleDefault) ||
    (Object.create
      ? function (A, B) {
          Object.defineProperty(A, 'default', { enumerable: !0, value: B });
        }
      : function (A, B) {
          A.default = B;
        }),
  SR0 =
    (Z8 && Z8.__importStar) ||
    function (A) {
      if (A && A.__esModule) return A;
      var B = {};
      if (A != null) {
        for (var Q in A)
          if (Q !== 'default' && Object.prototype.hasOwnProperty.call(A, Q)) VA6(B, A, Q);
      }
      return (KA6(B, A), B);
    };
Object.defineProperty(Z8, '__esModule', { value: !0 });
Z8.env = Z8.DebugLogBackendBase = Z8.placeholder = Z8.AdhocDebugLogger = Z8.LogSeverity = void 0;
Z8.getNodeBackend = Vg1;
Z8.getDebugBackend = zA6;
Z8.getStructuredBackend = wA6;
Z8.setBackend = EA6;
Z8.log = kR0;
var HA6 = D1('node:events'),
  As = SR0(D1('node:process')),
  _R0 = SR0(D1('node:util')),
  IF = PR0(),
  UV;
(function (A) {
  ((A.DEFAULT = 'DEFAULT'),
    (A.DEBUG = 'DEBUG'),
    (A.INFO = 'INFO'),
    (A.WARNING = 'WARNING'),
    (A.ERROR = 'ERROR'));
})(UV || (Z8.LogSeverity = UV = {}));
class uZ1 extends HA6.EventEmitter {
  constructor(A, B) {
    super();
    ((this.namespace = A),
      (this.upstream = B),
      (this.func = Object.assign(this.invoke.bind(this), {
        instance: this,
        on: (Q, I) => this.on(Q, I),
      })),
      (this.func.debug = (...Q) => this.invokeSeverity(UV.DEBUG, ...Q)),
      (this.func.info = (...Q) => this.invokeSeverity(UV.INFO, ...Q)),
      (this.func.warn = (...Q) => this.invokeSeverity(UV.WARNING, ...Q)),
      (this.func.error = (...Q) => this.invokeSeverity(UV.ERROR, ...Q)),
      (this.func.sublog = (Q) => kR0(Q, this.func)));
  }
  invoke(A, ...B) {
    if (this.upstream) this.upstream(A, ...B);
    this.emit('log', A, B);
  }
  invokeSeverity(A, ...B) {
    this.invoke({ severity: A }, ...B);
  }
}
Z8.AdhocDebugLogger = uZ1;
Z8.placeholder = new uZ1('', () => {}).func;
class Bs {
  constructor() {
    var A;
    ((this.cached = new Map()), (this.filters = []), (this.filtersSet = !1));
    let B = (A = As.env[Z8.env.nodeEnables]) !== null && A !== void 0 ? A : '*';
    if (B === 'all') B = '*';
    this.filters = B.split(',');
  }
  log(A, B, ...Q) {
    try {
      if (!this.filtersSet) (this.setFilters(), (this.filtersSet = !0));
      let I = this.cached.get(A);
      if (!I) ((I = this.makeLogger(A)), this.cached.set(A, I));
      I(B, ...Q);
    } catch (I) {
      console.error(I);
    }
  }
}
Z8.DebugLogBackendBase = Bs;
class Hg1 extends Bs {
  constructor() {
    super(...arguments);
    this.enabledRegexp = /.*/g;
  }
  isEnabled(A) {
    return this.enabledRegexp.test(A);
  }
  makeLogger(A) {
    if (!this.enabledRegexp.test(A)) return () => {};
    return (B, ...Q) => {
      var I;
      let G = `${IF.Colours.green}${A}${IF.Colours.reset}`,
        D = `${IF.Colours.yellow}${As.pid}${IF.Colours.reset}`,
        Z;
      switch (B.severity) {
        case UV.ERROR:
          Z = `${IF.Colours.red}${B.severity}${IF.Colours.reset}`;
          break;
        case UV.INFO:
          Z = `${IF.Colours.magenta}${B.severity}${IF.Colours.reset}`;
          break;
        case UV.WARNING:
          Z = `${IF.Colours.yellow}${B.severity}${IF.Colours.reset}`;
          break;
        default:
          Z = (I = B.severity) !== null && I !== void 0 ? I : UV.DEFAULT;
          break;
      }
      let Y = _R0.formatWithOptions({ colors: IF.Colours.enabled }, ...Q),
        W = Object.assign({}, B);
      delete W.severity;
      let F = Object.getOwnPropertyNames(W).length ? JSON.stringify(W) : '',
        J = F ? `${IF.Colours.grey}${F}${IF.Colours.reset}` : '';
      console.error('%s [%s|%s] %s%s', D, G, Z, Y, F ? ` ${J}` : '');
    };
  }
  setFilters() {
    let B = this.filters
      .join(',')
      .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
      .replace(/\*/g, '.*')
      .replace(/,/g, '$|^');
    this.enabledRegexp = new RegExp(`^${B}$`, 'i');
  }
}
function Vg1() {
  return new Hg1();
}
class jR0 extends Bs {
  constructor(A) {
    super();
    this.debugPkg = A;
  }
  makeLogger(A) {
    let B = this.debugPkg(A);
    return (Q, ...I) => {
      B(I[0], ...I.slice(1));
    };
  }
  setFilters() {
    var A;
    let B = (A = As.env.NODE_DEBUG) !== null && A !== void 0 ? A : '';
    As.env.NODE_DEBUG = `${B}${B ? ',' : ''}${this.filters.join(',')}`;
  }
}
function zA6(A) {
  return new jR0(A);
}
class yR0 extends Bs {
  constructor(A) {
    var B;
    super();
    this.upstream = (B = A) !== null && B !== void 0 ? B : new Hg1();
  }
  makeLogger(A) {
    let B = this.upstream.makeLogger(A);
    return (Q, ...I) => {
      var G;
      let D = (G = Q.severity) !== null && G !== void 0 ? G : UV.INFO,
        Z = Object.assign({ severity: D, message: _R0.format(...I) }, Q),
        Y = JSON.stringify(Z);
      B(Q, Y);
    };
  }
  setFilters() {
    this.upstream.setFilters();
  }
}
function wA6(A) {
  return new yR0(A);
}
Z8.env = { nodeEnables: 'GOOGLE_SDK_NODE_LOGGING' };
var Kg1 = new Map(),
  tJ = void 0;
function EA6(A) {
  ((tJ = A), Kg1.clear());
}
function kR0(A, B) {
  if (!As.env[Z8.env.nodeEnables]) return Z8.placeholder;
  if (!A) return Z8.placeholder;
  if (B) A = `${B.instance.namespace}:${A}`;
  let I = Kg1.get(A);
  if (I) return I.func;
  if (tJ === null) return Z8.placeholder;
  else if (tJ === void 0) tJ = Vg1();
  let G = (() => {
    let D = void 0;
    return new uZ1(A, (Y, ...W) => {
      if (D !== tJ) {
        if (tJ === null) return;
        else if (tJ === void 0) tJ = Vg1();
        D = tJ;
      }
      tJ === null || tJ === void 0 || tJ.log(A, Y, ...W);
    });
  })();
  return (Kg1.set(A, G), G.func);
}
