// Module: pL0
// Params: QF

var mL0 =
    (QF && QF.__createBinding) ||
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
  M16 =
    (QF && QF.__setModuleDefault) ||
    (Object.create
      ? function (A, B) {
          Object.defineProperty(A, 'default', { enumerable: !0, value: B });
        }
      : function (A, B) {
          A.default = B;
        }),
  dL0 =
    (QF && QF.__importStar) ||
    function (A) {
      if (A && A.__esModule) return A;
      var B = {};
      if (A != null) {
        for (var Q in A)
          if (Q !== 'default' && Object.prototype.hasOwnProperty.call(A, Q)) mL0(B, A, Q);
      }
      return (M16(B, A), B);
    },
  L16 =
    (QF && QF.__exportStar) ||
    function (A, B) {
      for (var Q in A)
        if (Q !== 'default' && !Object.prototype.hasOwnProperty.call(B, Q)) mL0(B, A, Q);
    };
Object.defineProperty(QF, '__esModule', { value: !0 });
QF.Agent = void 0;
var R16 = dL0(D1('net')),
  hL0 = dL0(D1('http')),
  O16 = D1('https');
L16(gL0(), QF);
var Lz = Symbol('AgentBaseInternalState');
class uL0 extends hL0.Agent {
  constructor(A) {
    super(A);
    this[Lz] = {};
  }
  isSecureEndpoint(A) {
    if (A) {
      if (typeof A.secureEndpoint === 'boolean') return A.secureEndpoint;
      if (typeof A.protocol === 'string') return A.protocol === 'https:';
    }
    let { stack: B } = new Error();
    if (typeof B !== 'string') return !1;
    return B.split(
      `
`
    ).some((Q) => Q.indexOf('(https.js:') !== -1 || Q.indexOf('node:https:') !== -1);
  }
  incrementSockets(A) {
    if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
    if (!this.sockets[A]) this.sockets[A] = [];
    let B = new R16.Socket({ writable: !1 });
    return (this.sockets[A].push(B), this.totalSocketCount++, B);
  }
  decrementSockets(A, B) {
    if (!this.sockets[A] || B === null) return;
    let Q = this.sockets[A],
      I = Q.indexOf(B);
    if (I !== -1) {
      if ((Q.splice(I, 1), this.totalSocketCount--, Q.length === 0)) delete this.sockets[A];
    }
  }
  getName(A) {
    if (typeof A.secureEndpoint === 'boolean' ? A.secureEndpoint : this.isSecureEndpoint(A))
      return O16.Agent.prototype.getName.call(this, A);
    return super.getName(A);
  }
  createSocket(A, B, Q) {
    let I = { ...B, secureEndpoint: this.isSecureEndpoint(B) },
      G = this.getName(I),
      D = this.incrementSockets(G);
    Promise.resolve()
      .then(() => this.connect(A, I))
      .then(
        (Z) => {
          if ((this.decrementSockets(G, D), Z instanceof hL0.Agent))
            try {
              return Z.addRequest(A, I);
            } catch (Y) {
              return Q(Y);
            }
          ((this[Lz].currentSocket = Z), super.createSocket(A, B, Q));
        },
        (Z) => {
          (this.decrementSockets(G, D), Q(Z));
        }
      );
  }
  createConnection() {
    let A = this[Lz].currentSocket;
    if (((this[Lz].currentSocket = void 0), !A))
      throw new Error('No socket was returned in the `connect()` function');
    return A;
  }
  get defaultPort() {
    return this[Lz].defaultPort ?? (this.protocol === 'https:' ? 443 : 80);
  }
  set defaultPort(A) {
    if (this[Lz]) this[Lz].defaultPort = A;
  }
  get protocol() {
    return this[Lz].protocol ?? (this.isSecureEndpoint() ? 'https:' : 'http:');
  }
  set protocol(A) {
    if (this[Lz]) this[Lz].protocol = A;
  }
}
QF.Agent = uL0;
