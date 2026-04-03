// Module: rL0
// Params: oJ

var _16 =
    (oJ && oJ.__createBinding) ||
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
  j16 =
    (oJ && oJ.__setModuleDefault) ||
    (Object.create
      ? function (A, B) {
          Object.defineProperty(A, 'default', { enumerable: !0, value: B });
        }
      : function (A, B) {
          A.default = B;
        }),
  aL0 =
    (oJ && oJ.__importStar) ||
    function (A) {
      if (A && A.__esModule) return A;
      var B = {};
      if (A != null) {
        for (var Q in A)
          if (Q !== 'default' && Object.prototype.hasOwnProperty.call(A, Q)) _16(B, A, Q);
      }
      return (j16(B, A), B);
    },
  sL0 =
    (oJ && oJ.__importDefault) ||
    function (A) {
      return A && A.__esModule ? A : { default: A };
    };
Object.defineProperty(oJ, '__esModule', { value: !0 });
oJ.HttpsProxyAgent = void 0;
var xZ1 = aL0(D1('net')),
  lL0 = aL0(D1('tls')),
  y16 = sL0(D1('assert')),
  k16 = sL0(Ic()),
  x16 = pL0(),
  f16 = D1('url'),
  v16 = cL0(),
  ea = k16.default('https-proxy-agent'),
  iL0 = (A) => {
    if (A.servername === void 0 && A.host && !xZ1.isIP(A.host)) return { ...A, servername: A.host };
    return A;
  };
class Fg1 extends x16.Agent {
  constructor(A, B) {
    super(B);
    ((this.options = { path: void 0 }),
      (this.proxy = typeof A === 'string' ? new f16.URL(A) : A),
      (this.proxyHeaders = B?.headers ?? {}),
      ea('Creating new HttpsProxyAgent instance: %o', this.proxy.href));
    let Q = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ''),
      I = this.proxy.port
        ? parseInt(this.proxy.port, 10)
        : this.proxy.protocol === 'https:'
          ? 443
          : 80;
    this.connectOpts = {
      ALPNProtocols: ['http/1.1'],
      ...(B ? nL0(B, 'headers') : null),
      host: Q,
      port: I,
    };
  }
  async connect(A, B) {
    let { proxy: Q } = this;
    if (!B.host) throw new TypeError('No "host" provided');
    let I;
    if (Q.protocol === 'https:')
      (ea('Creating `tls.Socket`: %o', this.connectOpts), (I = lL0.connect(iL0(this.connectOpts))));
    else (ea('Creating `net.Socket`: %o', this.connectOpts), (I = xZ1.connect(this.connectOpts)));
    let G =
        typeof this.proxyHeaders === 'function' ? this.proxyHeaders() : { ...this.proxyHeaders },
      D = xZ1.isIPv6(B.host) ? `[${B.host}]` : B.host,
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
    let Y = v16.parseProxyResponse(I);
    I.write(`${Z}\r
`);
    let { connect: W, buffered: F } = await Y;
    if ((A.emit('proxyConnect', W), this.emit('proxyConnect', W, A), W.statusCode === 200)) {
      if ((A.once('socket', b16), B.secureEndpoint))
        return (
          ea('Upgrading socket connection to TLS'),
          lL0.connect({ ...nL0(iL0(B), 'host', 'path', 'port'), socket: I })
        );
      return I;
    }
    I.destroy();
    let J = new xZ1.Socket({ writable: !1 });
    return (
      (J.readable = !0),
      A.once('socket', (C) => {
        (ea('Replaying proxy buffer for failed request'),
          y16.default(C.listenerCount('data') > 0),
          C.push(F),
          C.push(null));
      }),
      J
    );
  }
}
Fg1.protocols = ['http', 'https'];
oJ.HttpsProxyAgent = Fg1;
function b16(A) {
  A.resume();
}
function nL0(A, ...B) {
  let Q = {},
    I;
  for (I in A) if (!B.includes(I)) Q[I] = A[I];
  return Q;
}
