// Module: h80
// Params: Wr5,g80

var Aq4 = D1('events'),
  gQ1 = D1('http'),
  { Duplex: Yr5 } = D1('stream'),
  { createHash: Bq4 } = D1('crypto'),
  f80 = Ry1(),
  iP = li(),
  Qq4 = x80(),
  Iq4 = bQ1(),
  { GUID: Gq4, kWebSocket: Dq4 } = wU(),
  Zq4 = /^[+/0-9A-Za-z]{22}==$/;
class b80 extends Aq4 {
  constructor(A, B) {
    super();
    if (
      ((A = {
        allowSynchronousEvents: !0,
        autoPong: !0,
        maxPayload: 104857600,
        skipUTF8Validation: !1,
        perMessageDeflate: !1,
        handleProtocols: null,
        clientTracking: !0,
        verifyClient: null,
        noServer: !1,
        backlog: null,
        server: null,
        host: null,
        path: null,
        port: null,
        WebSocket: Iq4,
        ...A,
      }),
      (A.port == null && !A.server && !A.noServer) ||
        (A.port != null && (A.server || A.noServer)) ||
        (A.server && A.noServer))
    )
      throw new TypeError(
        'One and only one of the "port", "server", or "noServer" options must be specified'
      );
    if (A.port != null)
      ((this._server = gQ1.createServer((Q, I) => {
        let G = gQ1.STATUS_CODES[426];
        (I.writeHead(426, { 'Content-Length': G.length, 'Content-Type': 'text/plain' }), I.end(G));
      })),
        this._server.listen(A.port, A.host, A.backlog, B));
    else if (A.server) this._server = A.server;
    if (this._server) {
      let Q = this.emit.bind(this, 'connection');
      this._removeListeners = Yq4(this._server, {
        listening: this.emit.bind(this, 'listening'),
        error: this.emit.bind(this, 'error'),
        upgrade: (I, G, D) => {
          this.handleUpgrade(I, G, D, Q);
        },
      });
    }
    if (A.perMessageDeflate === !0) A.perMessageDeflate = {};
    if (A.clientTracking) ((this.clients = new Set()), (this._shouldEmitClose = !1));
    ((this.options = A), (this._state = 0));
  }
  address() {
    if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
    if (!this._server) return null;
    return this._server.address();
  }
  close(A) {
    if (this._state === 2) {
      if (A)
        this.once('close', () => {
          A(new Error('The server is not running'));
        });
      process.nextTick(si, this);
      return;
    }
    if (A) this.once('close', A);
    if (this._state === 1) return;
    if (((this._state = 1), this.options.noServer || this.options.server)) {
      if (this._server) (this._removeListeners(), (this._removeListeners = this._server = null));
      if (this.clients)
        if (!this.clients.size) process.nextTick(si, this);
        else this._shouldEmitClose = !0;
      else process.nextTick(si, this);
    } else {
      let B = this._server;
      (this._removeListeners(),
        (this._removeListeners = this._server = null),
        B.close(() => {
          si(this);
        }));
    }
  }
  shouldHandle(A) {
    if (this.options.path) {
      let B = A.url.indexOf('?');
      if ((B !== -1 ? A.url.slice(0, B) : A.url) !== this.options.path) return !1;
    }
    return !0;
  }
  handleUpgrade(A, B, Q, I) {
    B.on('error', v80);
    let G = A.headers['sec-websocket-key'],
      D = A.headers.upgrade,
      Z = +A.headers['sec-websocket-version'];
    if (A.method !== 'GET') {
      nP(this, A, B, 405, 'Invalid HTTP method');
      return;
    }
    if (D === void 0 || D.toLowerCase() !== 'websocket') {
      nP(this, A, B, 400, 'Invalid Upgrade header');
      return;
    }
    if (G === void 0 || !Zq4.test(G)) {
      nP(this, A, B, 400, 'Missing or invalid Sec-WebSocket-Key header');
      return;
    }
    if (Z !== 8 && Z !== 13) {
      nP(this, A, B, 400, 'Missing or invalid Sec-WebSocket-Version header');
      return;
    }
    if (!this.shouldHandle(A)) {
      ri(B, 400);
      return;
    }
    let Y = A.headers['sec-websocket-protocol'],
      W = new Set();
    if (Y !== void 0)
      try {
        W = Qq4.parse(Y);
      } catch (C) {
        nP(this, A, B, 400, 'Invalid Sec-WebSocket-Protocol header');
        return;
      }
    let F = A.headers['sec-websocket-extensions'],
      J = {};
    if (this.options.perMessageDeflate && F !== void 0) {
      let C = new iP(this.options.perMessageDeflate, !0, this.options.maxPayload);
      try {
        let X = f80.parse(F);
        if (X[iP.extensionName]) (C.accept(X[iP.extensionName]), (J[iP.extensionName] = C));
      } catch (X) {
        nP(this, A, B, 400, 'Invalid or unacceptable Sec-WebSocket-Extensions header');
        return;
      }
    }
    if (this.options.verifyClient) {
      let C = {
        origin: A.headers[`${Z === 8 ? 'sec-websocket-origin' : 'origin'}`],
        secure: !!(A.socket.authorized || A.socket.encrypted),
        req: A,
      };
      if (this.options.verifyClient.length === 2) {
        this.options.verifyClient(C, (X, V, K, U) => {
          if (!X) return ri(B, V || 401, K, U);
          this.completeUpgrade(J, G, W, A, B, Q, I);
        });
        return;
      }
      if (!this.options.verifyClient(C)) return ri(B, 401);
    }
    this.completeUpgrade(J, G, W, A, B, Q, I);
  }
  completeUpgrade(A, B, Q, I, G, D, Z) {
    if (!G.readable || !G.writable) return G.destroy();
    if (G[Dq4])
      throw new Error(
        'server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration'
      );
    if (this._state > 0) return ri(G, 503);
    let W = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        `Sec-WebSocket-Accept: ${Bq4('sha1')
          .update(B + Gq4)
          .digest('base64')}`,
      ],
      F = new this.options.WebSocket(null, void 0, this.options);
    if (Q.size) {
      let J = this.options.handleProtocols
        ? this.options.handleProtocols(Q, I)
        : Q.values().next().value;
      if (J) (W.push(`Sec-WebSocket-Protocol: ${J}`), (F._protocol = J));
    }
    if (A[iP.extensionName]) {
      let J = A[iP.extensionName].params,
        C = f80.format({ [iP.extensionName]: [J] });
      (W.push(`Sec-WebSocket-Extensions: ${C}`), (F._extensions = A));
    }
    if (
      (this.emit('headers', W, I),
      G.write(
        W.concat(`\r
`).join(`\r
`)
      ),
      G.removeListener('error', v80),
      F.setSocket(G, D, {
        allowSynchronousEvents: this.options.allowSynchronousEvents,
        maxPayload: this.options.maxPayload,
        skipUTF8Validation: this.options.skipUTF8Validation,
      }),
      this.clients)
    )
      (this.clients.add(F),
        F.on('close', () => {
          if ((this.clients.delete(F), this._shouldEmitClose && !this.clients.size))
            process.nextTick(si, this);
        }));
    Z(F, I);
  }
}
g80.exports = b80;
function Yq4(A, B) {
  for (let Q of Object.keys(B)) A.on(Q, B[Q]);
  return function Q() {
    for (let I of Object.keys(B)) A.removeListener(I, B[I]);
  };
}
function si(A) {
  ((A._state = 2), A.emit('close'));
}
function v80() {
  this.destroy();
}
function ri(A, B, Q, I) {
  ((Q = Q || gQ1.STATUS_CODES[B]),
    (I = {
      Connection: 'close',
      'Content-Type': 'text/html',
      'Content-Length': Buffer.byteLength(Q),
      ...I,
    }),
    A.once('finish', A.destroy),
    A.end(
      `HTTP/1.1 ${B} ${gQ1.STATUS_CODES[B]}\r
` +
        Object.keys(I).map((G) => `${G}: ${I[G]}`).join(`\r
`) +
        `\r
\r
` +
        Q
    ));
}
function nP(A, B, Q, I, G) {
  if (A.listenerCount('wsClientError')) {
    let D = new Error(G);
    (Error.captureStackTrace(D, nP), A.emit('wsClientError', D, Q, B));
  } else ri(Q, I, G);
}
