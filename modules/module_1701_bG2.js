// Module: bG2
// Params: fG2

Object.defineProperty(fG2, '__esModule', { value: !0 });
fG2.Http2SubchannelConnector = void 0;
var mC1 = D1('http2'),
  gC1 = b_(),
  eo = O6(),
  Rn6 = Tn1(),
  Pm = r8(),
  On6 = Iw(),
  hC1 = qC(),
  jn1 = xY(),
  Tn6 = D1('net'),
  Pn6 = jG2(),
  Sn6 = _n1(),
  yn1 = 'transport',
  _n6 = 'transport_flowctrl',
  jn6 = Ai1().version,
  {
    HTTP2_HEADER_AUTHORITY: yn6,
    HTTP2_HEADER_CONTENT_TYPE: kn6,
    HTTP2_HEADER_METHOD: xn6,
    HTTP2_HEADER_PATH: fn6,
    HTTP2_HEADER_TE: vn6,
    HTTP2_HEADER_USER_AGENT: bn6,
  } = mC1.constants,
  gn6 = 20000,
  hn6 = Buffer.from('too_many_pings', 'ascii');
class kG2 {
  constructor(A, B, Q, I) {
    if (
      ((this.session = A),
      (this.options = Q),
      (this.remoteName = I),
      (this.keepaliveTimer = null),
      (this.pendingSendKeepalivePing = !1),
      (this.activeCalls = new Set()),
      (this.disconnectListeners = []),
      (this.disconnectHandled = !1),
      (this.channelzEnabled = !0),
      (this.keepalivesSent = 0),
      (this.messagesSent = 0),
      (this.messagesReceived = 0),
      (this.lastMessageSentTimestamp = null),
      (this.lastMessageReceivedTimestamp = null),
      (this.subchannelAddressString = hC1.subchannelAddressToString(B)),
      Q['grpc.enable_channelz'] === 0)
    )
      ((this.channelzEnabled = !1), (this.streamTracker = new gC1.ChannelzCallTrackerStub()));
    else this.streamTracker = new gC1.ChannelzCallTracker();
    if (
      ((this.channelzRef = gC1.registerChannelzSocket(
        this.subchannelAddressString,
        () => this.getChannelzInfo(),
        this.channelzEnabled
      )),
      (this.userAgent = [
        Q['grpc.primary_user_agent'],
        `grpc-node-js/${jn6}`,
        Q['grpc.secondary_user_agent'],
      ]
        .filter((G) => G)
        .join(' ')),
      'grpc.keepalive_time_ms' in Q)
    )
      this.keepaliveTimeMs = Q['grpc.keepalive_time_ms'];
    else this.keepaliveTimeMs = -1;
    if ('grpc.keepalive_timeout_ms' in Q) this.keepaliveTimeoutMs = Q['grpc.keepalive_timeout_ms'];
    else this.keepaliveTimeoutMs = gn6;
    if ('grpc.keepalive_permit_without_calls' in Q)
      this.keepaliveWithoutCalls = Q['grpc.keepalive_permit_without_calls'] === 1;
    else this.keepaliveWithoutCalls = !1;
    if (
      (A.once('close', () => {
        (this.trace('session closed'), this.handleDisconnect());
      }),
      A.once('goaway', (G, D, Z) => {
        let Y = !1;
        if (G === mC1.constants.NGHTTP2_ENHANCE_YOUR_CALM && Z && Z.equals(hn6)) Y = !0;
        (this.trace(
          'connection closed by GOAWAY with code ' +
            G +
            ' and data ' +
            (Z === null || Z === void 0 ? void 0 : Z.toString())
        ),
          this.reportDisconnectToOwner(Y));
      }),
      A.once('error', (G) => {
        (this.trace('connection closed with error ' + G.message), this.handleDisconnect());
      }),
      A.socket.once('close', (G) => {
        (this.trace('connection closed. hadError=' + G), this.handleDisconnect());
      }),
      Pm.isTracerEnabled(yn1))
    )
      (A.on('remoteSettings', (G) => {
        this.trace(
          'new settings received' +
            (this.session !== A ? ' on the old connection' : '') +
            ': ' +
            JSON.stringify(G)
        );
      }),
        A.on('localSettings', (G) => {
          this.trace(
            'local settings acknowledged by remote' +
              (this.session !== A ? ' on the old connection' : '') +
              ': ' +
              JSON.stringify(G)
          );
        }));
    if (this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer();
  }
  getChannelzInfo() {
    var A, B, Q;
    let I = this.session.socket,
      G = I.remoteAddress ? hC1.stringToSubchannelAddress(I.remoteAddress, I.remotePort) : null,
      D = I.localAddress ? hC1.stringToSubchannelAddress(I.localAddress, I.localPort) : null,
      Z;
    if (this.session.encrypted) {
      let W = I,
        F = W.getCipher(),
        J = W.getCertificate(),
        C = W.getPeerCertificate();
      Z = {
        cipherSuiteStandardName: (A = F.standardName) !== null && A !== void 0 ? A : null,
        cipherSuiteOtherName: F.standardName ? null : F.name,
        localCertificate: J && 'raw' in J ? J.raw : null,
        remoteCertificate: C && 'raw' in C ? C.raw : null,
      };
    } else Z = null;
    return {
      remoteAddress: G,
      localAddress: D,
      security: Z,
      remoteName: this.remoteName,
      streamsStarted: this.streamTracker.callsStarted,
      streamsSucceeded: this.streamTracker.callsSucceeded,
      streamsFailed: this.streamTracker.callsFailed,
      messagesSent: this.messagesSent,
      messagesReceived: this.messagesReceived,
      keepAlivesSent: this.keepalivesSent,
      lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
      lastRemoteStreamCreatedTimestamp: null,
      lastMessageSentTimestamp: this.lastMessageSentTimestamp,
      lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
      localFlowControlWindow:
        (B = this.session.state.localWindowSize) !== null && B !== void 0 ? B : null,
      remoteFlowControlWindow:
        (Q = this.session.state.remoteWindowSize) !== null && Q !== void 0 ? Q : null,
    };
  }
  trace(A) {
    Pm.trace(
      eo.LogVerbosity.DEBUG,
      yn1,
      '(' + this.channelzRef.id + ') ' + this.subchannelAddressString + ' ' + A
    );
  }
  keepaliveTrace(A) {
    Pm.trace(
      eo.LogVerbosity.DEBUG,
      'keepalive',
      '(' + this.channelzRef.id + ') ' + this.subchannelAddressString + ' ' + A
    );
  }
  flowControlTrace(A) {
    Pm.trace(
      eo.LogVerbosity.DEBUG,
      _n6,
      '(' + this.channelzRef.id + ') ' + this.subchannelAddressString + ' ' + A
    );
  }
  internalsTrace(A) {
    Pm.trace(
      eo.LogVerbosity.DEBUG,
      'transport_internals',
      '(' + this.channelzRef.id + ') ' + this.subchannelAddressString + ' ' + A
    );
  }
  reportDisconnectToOwner(A) {
    if (this.disconnectHandled) return;
    ((this.disconnectHandled = !0), this.disconnectListeners.forEach((B) => B(A)));
  }
  handleDisconnect() {
    (this.clearKeepaliveTimeout(), this.reportDisconnectToOwner(!1));
    for (let A of this.activeCalls) A.onDisconnect();
    setImmediate(() => {
      this.session.destroy();
    });
  }
  addDisconnectListener(A) {
    this.disconnectListeners.push(A);
  }
  canSendPing() {
    return (
      !this.session.destroyed &&
      this.keepaliveTimeMs > 0 &&
      (this.keepaliveWithoutCalls || this.activeCalls.size > 0)
    );
  }
  maybeSendPing() {
    var A, B;
    if (!this.canSendPing()) {
      this.pendingSendKeepalivePing = !0;
      return;
    }
    if (this.keepaliveTimer) {
      console.error('keepaliveTimeout is not null');
      return;
    }
    if (this.channelzEnabled) this.keepalivesSent += 1;
    (this.keepaliveTrace('Sending ping with timeout ' + this.keepaliveTimeoutMs + 'ms'),
      (this.keepaliveTimer = setTimeout(() => {
        ((this.keepaliveTimer = null),
          this.keepaliveTrace('Ping timeout passed without response'),
          this.handleDisconnect());
      }, this.keepaliveTimeoutMs)),
      (B = (A = this.keepaliveTimer).unref) === null || B === void 0 || B.call(A));
    let Q = '';
    try {
      if (
        !this.session.ping((G, D, Z) => {
          if ((this.clearKeepaliveTimeout(), G))
            (this.keepaliveTrace('Ping failed with error ' + G.message), this.handleDisconnect());
          else (this.keepaliveTrace('Received ping response'), this.maybeStartKeepalivePingTimer());
        })
      )
        Q = 'Ping returned false';
    } catch (I) {
      Q = (I instanceof Error ? I.message : '') || 'Unknown error';
    }
    if (Q) (this.keepaliveTrace('Ping send failed: ' + Q), this.handleDisconnect());
  }
  maybeStartKeepalivePingTimer() {
    var A, B;
    if (!this.canSendPing()) return;
    if (this.pendingSendKeepalivePing) ((this.pendingSendKeepalivePing = !1), this.maybeSendPing());
    else if (!this.keepaliveTimer)
      (this.keepaliveTrace('Starting keepalive timer for ' + this.keepaliveTimeMs + 'ms'),
        (this.keepaliveTimer = setTimeout(() => {
          ((this.keepaliveTimer = null), this.maybeSendPing());
        }, this.keepaliveTimeMs)),
        (B = (A = this.keepaliveTimer).unref) === null || B === void 0 || B.call(A));
  }
  clearKeepaliveTimeout() {
    if (this.keepaliveTimer) (clearTimeout(this.keepaliveTimer), (this.keepaliveTimer = null));
  }
  removeActiveCall(A) {
    if ((this.activeCalls.delete(A), this.activeCalls.size === 0)) this.session.unref();
  }
  addActiveCall(A) {
    if ((this.activeCalls.add(A), this.activeCalls.size === 1)) {
      if ((this.session.ref(), !this.keepaliveWithoutCalls)) this.maybeStartKeepalivePingTimer();
    }
  }
  createCall(A, B, Q, I, G) {
    let D = A.toHttp2Headers();
    ((D[yn6] = B),
      (D[bn6] = this.userAgent),
      (D[kn6] = 'application/grpc'),
      (D[xn6] = 'POST'),
      (D[fn6] = Q),
      (D[vn6] = 'trailers'));
    let Z;
    try {
      Z = this.session.request(D);
    } catch (F) {
      throw (this.handleDisconnect(), F);
    }
    (this.flowControlTrace(
      'local window size: ' +
        this.session.state.localWindowSize +
        ' remote window size: ' +
        this.session.state.remoteWindowSize
    ),
      this.internalsTrace(
        'session.closed=' +
          this.session.closed +
          ' session.destroyed=' +
          this.session.destroyed +
          ' session.socket.destroyed=' +
          this.session.socket.destroyed
      ));
    let Y, W;
    if (this.channelzEnabled)
      (this.streamTracker.addCallStarted(),
        (Y = {
          addMessageSent: () => {
            var F;
            ((this.messagesSent += 1),
              (this.lastMessageSentTimestamp = new Date()),
              (F = G.addMessageSent) === null || F === void 0 || F.call(G));
          },
          addMessageReceived: () => {
            var F;
            ((this.messagesReceived += 1),
              (this.lastMessageReceivedTimestamp = new Date()),
              (F = G.addMessageReceived) === null || F === void 0 || F.call(G));
          },
          onCallEnd: (F) => {
            var J;
            ((J = G.onCallEnd) === null || J === void 0 || J.call(G, F), this.removeActiveCall(W));
          },
          onStreamEnd: (F) => {
            var J;
            if (F) this.streamTracker.addCallSucceeded();
            else this.streamTracker.addCallFailed();
            (J = G.onStreamEnd) === null || J === void 0 || J.call(G, F);
          },
        }));
    else
      Y = {
        addMessageSent: () => {
          var F;
          (F = G.addMessageSent) === null || F === void 0 || F.call(G);
        },
        addMessageReceived: () => {
          var F;
          (F = G.addMessageReceived) === null || F === void 0 || F.call(G);
        },
        onCallEnd: (F) => {
          var J;
          ((J = G.onCallEnd) === null || J === void 0 || J.call(G, F), this.removeActiveCall(W));
        },
        onStreamEnd: (F) => {
          var J;
          (J = G.onStreamEnd) === null || J === void 0 || J.call(G, F);
        },
      };
    return (
      (W = new Pn6.Http2SubchannelCall(Z, Y, I, this, Sn6.getNextCallNumber())),
      this.addActiveCall(W),
      W
    );
  }
  getChannelzRef() {
    return this.channelzRef;
  }
  getPeerName() {
    return this.subchannelAddressString;
  }
  getOptions() {
    return this.options;
  }
  shutdown() {
    (this.session.close(), gC1.unregisterChannelzRef(this.channelzRef));
  }
}
class xG2 {
  constructor(A) {
    ((this.channelTarget = A), (this.session = null), (this.isShutdown = !1));
  }
  trace(A) {
    Pm.trace(eo.LogVerbosity.DEBUG, yn1, jn1.uriToString(this.channelTarget) + ' ' + A);
  }
  createSession(A, B, Q) {
    if (this.isShutdown) return Promise.reject();
    if (A.socket.closed)
      return Promise.reject('Connection closed before starting HTTP/2 handshake');
    return new Promise((I, G) => {
      var D;
      let Z = null,
        Y = this.channelTarget;
      if ('grpc.http_connect_target' in Q) {
        let U = jn1.parseUri(Q['grpc.http_connect_target']);
        if (U) ((Y = U), (Z = jn1.uriToString(U)));
      }
      let W = A.secure ? 'https' : 'http',
        F = On6.getDefaultAuthority(Y),
        J = () => {
          var U;
          ((U = this.session) === null || U === void 0 || U.destroy(),
            (this.session = null),
            setImmediate(() => {
              if (!K) ((K = !0), G(`${V.trim()} (${new Date().toISOString()})`));
            }));
        },
        C = (U) => {
          var N;
          if (
            ((N = this.session) === null || N === void 0 || N.destroy(),
            (V = U.message),
            this.trace('connection failed with error ' + V),
            !K)
          )
            ((K = !0), G(`${V} (${new Date().toISOString()})`));
        },
        X = mC1.connect(`${W}://${F}`, {
          createConnection: (U, N) => {
            return A.socket;
          },
          settings: {
            initialWindowSize:
              (D = Q['grpc-node.flow_control_window']) !== null && D !== void 0
                ? D
                : mC1.getDefaultSettings().initialWindowSize,
          },
        });
      this.session = X;
      let V = 'Failed to connect',
        K = !1;
      (X.unref(),
        X.once('remoteSettings', () => {
          (X.removeAllListeners(),
            A.socket.removeListener('close', J),
            A.socket.removeListener('error', C),
            I(new kG2(X, B, Q, Z)),
            (this.session = null));
        }),
        X.once('close', J),
        X.once('error', C),
        A.socket.once('close', J),
        A.socket.once('error', C));
    });
  }
  tcpConnect(A, B) {
    return Rn6.getProxiedConnection(A, B).then((Q) => {
      if (Q) return Q;
      else
        return new Promise((I, G) => {
          let D = () => {
              G(new Error('Socket closed'));
            },
            Z = (W) => {
              G(W);
            },
            Y = Tn6.connect(A, () => {
              (Y.removeListener('close', D), Y.removeListener('error', Z), I(Y));
            });
          (Y.once('close', D), Y.once('error', Z));
        });
    });
  }
  async connect(A, B, Q) {
    if (this.isShutdown) return Promise.reject();
    let I = null,
      G = null,
      D = hC1.subchannelAddressToString(A);
    try {
      return (
        this.trace(D + ' Waiting for secureConnector to be ready'),
        await B.waitForReady(),
        this.trace(D + ' secureConnector is ready'),
        (I = await this.tcpConnect(A, Q)),
        this.trace(D + ' Established TCP connection'),
        (G = await B.connect(I)),
        this.trace(D + ' Established secure connection'),
        this.createSession(G, A, Q)
      );
    } catch (Z) {
      throw (
        I === null || I === void 0 || I.destroy(),
        G === null || G === void 0 || G.socket.destroy(),
        Z
      );
    }
  }
  shutdown() {
    var A;
    ((this.isShutdown = !0),
      (A = this.session) === null || A === void 0 || A.close(),
      (this.session = null));
  }
}
fG2.Http2SubchannelConnector = xG2;
