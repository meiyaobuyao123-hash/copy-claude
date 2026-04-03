// Module: i5A
// Params: l5A

var { _nullishCoalesce: Ca2, _optionalChain: Xa2 } = tA();
Object.defineProperty(l5A, '__esModule', { value: !0 });
var Wp = D1('net'),
  p5A = D1('tls'),
  Va2 = D1('url'),
  Ka2 = tA(),
  Ha2 = m5A(),
  za2 = u5A();
function Fp(...A) {
  Ka2.logger.log('[https-proxy-agent]', ...A);
}
class pE1 extends Ha2.Agent {
  static __initStatic() {
    this.protocols = ['http', 'https'];
  }
  constructor(A, B) {
    super(B);
    ((this.options = {}),
      (this.proxy = typeof A === 'string' ? new Va2.URL(A) : A),
      (this.proxyHeaders = Ca2(Xa2([B, 'optionalAccess', (G) => G.headers]), () => ({}))),
      Fp('Creating new HttpsProxyAgent instance: %o', this.proxy.href));
    let Q = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ''),
      I = this.proxy.port
        ? parseInt(this.proxy.port, 10)
        : this.proxy.protocol === 'https:'
          ? 443
          : 80;
    this.connectOpts = {
      ALPNProtocols: ['http/1.1'],
      ...(B ? c5A(B, 'headers') : null),
      host: Q,
      port: I,
    };
  }
  async connect(A, B) {
    let { proxy: Q } = this;
    if (!B.host) throw new TypeError('No "host" provided');
    let I;
    if (Q.protocol === 'https:') {
      Fp('Creating `tls.Socket`: %o', this.connectOpts);
      let C = this.connectOpts.servername || this.connectOpts.host;
      I = p5A.connect({ ...this.connectOpts, servername: C && Wp.isIP(C) ? void 0 : C });
    } else (Fp('Creating `net.Socket`: %o', this.connectOpts), (I = Wp.connect(this.connectOpts)));
    let G =
        typeof this.proxyHeaders === 'function' ? this.proxyHeaders() : { ...this.proxyHeaders },
      D = Wp.isIPv6(B.host) ? `[${B.host}]` : B.host,
      Z = `CONNECT ${D}:${B.port} HTTP/1.1\r
`;
    if (Q.username || Q.password) {
      let C = `${decodeURIComponent(Q.username)}:${decodeURIComponent(Q.password)}`;
      G['Proxy-Authorization'] = `Basic ${Buffer.from(C).toString('base64')}`;
    }
    if (((G.Host = `${D}:${B.port}`), !G['Proxy-Connection']))
      G['Proxy-Connection'] = this.keepAlive ? 'Keep-Alive' : 'close';
    for (let C of Object.keys(G))
      Z += `${C}: ${G[C]}\r
`;
    let Y = za2.parseProxyResponse(I);
    I.write(`${Z}\r
`);
    let { connect: W, buffered: F } = await Y;
    if ((A.emit('proxyConnect', W), this.emit('proxyConnect', W, A), W.statusCode === 200)) {
      if ((A.once('socket', wa2), B.secureEndpoint)) {
        Fp('Upgrading socket connection to TLS');
        let C = B.servername || B.host;
        return p5A.connect({
          ...c5A(B, 'host', 'path', 'port'),
          socket: I,
          servername: Wp.isIP(C) ? void 0 : C,
        });
      }
      return I;
    }
    I.destroy();
    let J = new Wp.Socket({ writable: !1 });
    return (
      (J.readable = !0),
      A.once('socket', (C) => {
        (Fp('Replaying proxy buffer for failed request'), C.push(F), C.push(null));
      }),
      J
    );
  }
}
pE1.__initStatic();
function wa2(A) {
  A.resume();
}
function c5A(A, ...B) {
  let Q = {},
    I;
  for (I in A) if (!B.includes(I)) Q[I] = A[I];
  return Q;
}
l5A.HttpsProxyAgent = pE1;
