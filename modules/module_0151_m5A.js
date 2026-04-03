// Module: m5A
// Params: h5A

var { _nullishCoalesce: v5A } = tA();
Object.defineProperty(h5A, '__esModule', { value: !0 });
var b5A = D1('http');
D1('https');
var GH = Symbol('AgentBaseInternalState');
class g5A extends b5A.Agent {
  constructor(A) {
    super(A);
    this[GH] = {};
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
  createSocket(A, B, Q) {
    let I = { ...B, secureEndpoint: this.isSecureEndpoint(B) };
    Promise.resolve()
      .then(() => this.connect(A, I))
      .then((G) => {
        if (G instanceof b5A.Agent) return G.addRequest(A, I);
        ((this[GH].currentSocket = G), super.createSocket(A, B, Q));
      }, Q);
  }
  createConnection() {
    let A = this[GH].currentSocket;
    if (((this[GH].currentSocket = void 0), !A))
      throw new Error('No socket was returned in the `connect()` function');
    return A;
  }
  get defaultPort() {
    return v5A(this[GH].defaultPort, () => (this.protocol === 'https:' ? 443 : 80));
  }
  set defaultPort(A) {
    if (this[GH]) this[GH].defaultPort = A;
  }
  get protocol() {
    return v5A(this[GH].protocol, () => (this.isSecureEndpoint() ? 'https:' : 'http:'));
  }
  set protocol(A) {
    if (this[GH]) this[GH].protocol = A;
  }
}
h5A.Agent = g5A;
