// Module: VZ2
// Params: SR

var zs6 =
    (SR && SR.__runInitializers) ||
    function (A, B, Q) {
      var I = arguments.length > 2;
      for (var G = 0; G < B.length; G++) Q = I ? B[G].call(A, Q) : B[G].call(A);
      return I ? Q : void 0;
    },
  ws6 =
    (SR && SR.__esDecorate) ||
    function (A, B, Q, I, G, D) {
      function Z(q) {
        if (q !== void 0 && typeof q !== 'function') throw new TypeError('Function expected');
        return q;
      }
      var Y = I.kind,
        W = Y === 'getter' ? 'get' : Y === 'setter' ? 'set' : 'value',
        F = !B && A ? (I.static ? A : A.prototype) : null,
        J = B || (F ? Object.getOwnPropertyDescriptor(F, I.name) : {}),
        C,
        X = !1;
      for (var V = Q.length - 1; V >= 0; V--) {
        var K = {};
        for (var U in I) K[U] = U === 'access' ? {} : I[U];
        for (var U in I.access) K.access[U] = I.access[U];
        K.addInitializer = function (q) {
          if (X) throw new TypeError('Cannot add initializers after decoration has completed');
          D.push(Z(q || null));
        };
        var N = Q[V](Y === 'accessor' ? { get: J.get, set: J.set } : J[W], K);
        if (Y === 'accessor') {
          if (N === void 0) continue;
          if (N === null || typeof N !== 'object') throw new TypeError('Object expected');
          if ((C = Z(N.get))) J.get = C;
          if ((C = Z(N.set))) J.set = C;
          if ((C = Z(N.init))) G.unshift(C);
        } else if ((C = Z(N)))
          if (Y === 'field') G.unshift(C);
          else J[W] = C;
      }
      if (F) Object.defineProperty(F, I.name, J);
      X = !0;
    };
Object.defineProperty(SR, '__esModule', { value: !0 });
SR.Server = void 0;
var bY = D1('http2'),
  Es6 = D1('util'),
  UQ = O6(),
  fm = cD2(),
  Ga1 = oC1(),
  YZ2 = Iw(),
  xm = r8(),
  PR = qC(),
  aV = xY(),
  S7 = b_(),
  WZ2 = Ia1(),
  km = 2147483647,
  Da1 = 2147483647,
  Us6 = 20000,
  FZ2 = 2147483647,
  { HTTP2_HEADER_PATH: JZ2 } = bY.constants,
  Ns6 = 'server',
  CZ2 = Buffer.from('max_age');
function XZ2(A) {
  xm.trace(UQ.LogVerbosity.DEBUG, 'server_call', A);
}
function $s6() {}
function qs6(A) {
  return function (B, Q) {
    return Es6.deprecate(B, A);
  };
}
function Za1(A) {
  return {
    code: UQ.Status.UNIMPLEMENTED,
    details: `The server does not implement the method ${A}`,
  };
}
function Ms6(A, B) {
  let Q = Za1(B);
  switch (A) {
    case 'unary':
      return (I, G) => {
        G(Q, null);
      };
    case 'clientStream':
      return (I, G) => {
        G(Q, null);
      };
    case 'serverStream':
      return (I) => {
        I.emit('error', Q);
      };
    case 'bidi':
      return (I) => {
        I.emit('error', Q);
      };
    default:
      throw new Error(`Invalid handlerType ${A}`);
  }
}
var Ls6 = (() => {
  var A;
  let B = [],
    Q;
  return (
    (A = class I {
      constructor(G) {
        var D, Z, Y, W, F, J;
        if (
          ((this.boundPorts = (zs6(this, B), new Map())),
          (this.http2Servers = new Map()),
          (this.sessionIdleTimeouts = new Map()),
          (this.handlers = new Map()),
          (this.sessions = new Map()),
          (this.started = !1),
          (this.shutdown = !1),
          (this.serverAddressString = 'null'),
          (this.channelzEnabled = !0),
          (this.options = G !== null && G !== void 0 ? G : {}),
          this.options['grpc.enable_channelz'] === 0)
        )
          ((this.channelzEnabled = !1),
            (this.channelzTrace = new S7.ChannelzTraceStub()),
            (this.callTracker = new S7.ChannelzCallTrackerStub()),
            (this.listenerChildrenTracker = new S7.ChannelzChildrenTrackerStub()),
            (this.sessionChildrenTracker = new S7.ChannelzChildrenTrackerStub()));
        else
          ((this.channelzTrace = new S7.ChannelzTrace()),
            (this.callTracker = new S7.ChannelzCallTracker()),
            (this.listenerChildrenTracker = new S7.ChannelzChildrenTracker()),
            (this.sessionChildrenTracker = new S7.ChannelzChildrenTracker()));
        if (
          ((this.channelzRef = S7.registerChannelzServer(
            'server',
            () => this.getChannelzInfo(),
            this.channelzEnabled
          )),
          this.channelzTrace.addTrace('CT_INFO', 'Server created'),
          (this.maxConnectionAgeMs =
            (D = this.options['grpc.max_connection_age_ms']) !== null && D !== void 0 ? D : km),
          (this.maxConnectionAgeGraceMs =
            (Z = this.options['grpc.max_connection_age_grace_ms']) !== null && Z !== void 0
              ? Z
              : km),
          (this.keepaliveTimeMs =
            (Y = this.options['grpc.keepalive_time_ms']) !== null && Y !== void 0 ? Y : Da1),
          (this.keepaliveTimeoutMs =
            (W = this.options['grpc.keepalive_timeout_ms']) !== null && W !== void 0 ? W : Us6),
          (this.sessionIdleTimeout =
            (F = this.options['grpc.max_connection_idle_ms']) !== null && F !== void 0 ? F : FZ2),
          (this.commonServerOptions = { maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER }),
          'grpc-node.max_session_memory' in this.options)
        )
          this.commonServerOptions.maxSessionMemory = this.options['grpc-node.max_session_memory'];
        else this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
        if ('grpc.max_concurrent_streams' in this.options)
          this.commonServerOptions.settings = {
            maxConcurrentStreams: this.options['grpc.max_concurrent_streams'],
          };
        ((this.interceptors = (J = this.options.interceptors) !== null && J !== void 0 ? J : []),
          this.trace('Server constructed'));
      }
      getChannelzInfo() {
        return {
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          listenerChildren: this.listenerChildrenTracker.getChildLists(),
          sessionChildren: this.sessionChildrenTracker.getChildLists(),
        };
      }
      getChannelzSessionInfo(G) {
        var D, Z, Y;
        let W = this.sessions.get(G),
          F = G.socket,
          J = F.remoteAddress ? PR.stringToSubchannelAddress(F.remoteAddress, F.remotePort) : null,
          C = F.localAddress ? PR.stringToSubchannelAddress(F.localAddress, F.localPort) : null,
          X;
        if (G.encrypted) {
          let K = F,
            U = K.getCipher(),
            N = K.getCertificate(),
            q = K.getPeerCertificate();
          X = {
            cipherSuiteStandardName: (D = U.standardName) !== null && D !== void 0 ? D : null,
            cipherSuiteOtherName: U.standardName ? null : U.name,
            localCertificate: N && 'raw' in N ? N.raw : null,
            remoteCertificate: q && 'raw' in q ? q.raw : null,
          };
        } else X = null;
        return {
          remoteAddress: J,
          localAddress: C,
          security: X,
          remoteName: null,
          streamsStarted: W.streamTracker.callsStarted,
          streamsSucceeded: W.streamTracker.callsSucceeded,
          streamsFailed: W.streamTracker.callsFailed,
          messagesSent: W.messagesSent,
          messagesReceived: W.messagesReceived,
          keepAlivesSent: W.keepAlivesSent,
          lastLocalStreamCreatedTimestamp: null,
          lastRemoteStreamCreatedTimestamp: W.streamTracker.lastCallStartedTimestamp,
          lastMessageSentTimestamp: W.lastMessageSentTimestamp,
          lastMessageReceivedTimestamp: W.lastMessageReceivedTimestamp,
          localFlowControlWindow: (Z = G.state.localWindowSize) !== null && Z !== void 0 ? Z : null,
          remoteFlowControlWindow:
            (Y = G.state.remoteWindowSize) !== null && Y !== void 0 ? Y : null,
        };
      }
      trace(G) {
        xm.trace(UQ.LogVerbosity.DEBUG, Ns6, '(' + this.channelzRef.id + ') ' + G);
      }
      keepaliveTrace(G) {
        xm.trace(UQ.LogVerbosity.DEBUG, 'keepalive', '(' + this.channelzRef.id + ') ' + G);
      }
      addProtoService() {
        throw new Error('Not implemented. Use addService() instead');
      }
      addService(G, D) {
        if (G === null || typeof G !== 'object' || D === null || typeof D !== 'object')
          throw new Error('addService() requires two objects as arguments');
        let Z = Object.keys(G);
        if (Z.length === 0) throw new Error('Cannot add an empty service to a server');
        Z.forEach((Y) => {
          let W = G[Y],
            F;
          if (W.requestStream)
            if (W.responseStream) F = 'bidi';
            else F = 'clientStream';
          else if (W.responseStream) F = 'serverStream';
          else F = 'unary';
          let J = D[Y],
            C;
          if (J === void 0 && typeof W.originalName === 'string') J = D[W.originalName];
          if (J !== void 0) C = J.bind(D);
          else C = Ms6(F, Y);
          if (this.register(W.path, C, W.responseSerialize, W.requestDeserialize, F) === !1)
            throw new Error(`Method handler for ${W.path} already provided.`);
        });
      }
      removeService(G) {
        if (G === null || typeof G !== 'object')
          throw new Error('removeService() requires object as argument');
        Object.keys(G).forEach((Z) => {
          let Y = G[Z];
          this.unregister(Y.path);
        });
      }
      bind(G, D) {
        throw new Error('Not implemented. Use bindAsync() instead');
      }
      experimentalRegisterListenerToChannelz(G) {
        return S7.registerChannelzSocket(
          PR.subchannelAddressToString(G),
          () => {
            return {
              localAddress: G,
              remoteAddress: null,
              security: null,
              remoteName: null,
              streamsStarted: 0,
              streamsSucceeded: 0,
              streamsFailed: 0,
              messagesSent: 0,
              messagesReceived: 0,
              keepAlivesSent: 0,
              lastLocalStreamCreatedTimestamp: null,
              lastRemoteStreamCreatedTimestamp: null,
              lastMessageSentTimestamp: null,
              lastMessageReceivedTimestamp: null,
              localFlowControlWindow: null,
              remoteFlowControlWindow: null,
            };
          },
          this.channelzEnabled
        );
      }
      experimentalUnregisterListenerFromChannelz(G) {
        S7.unregisterChannelzRef(G);
      }
      createHttp2Server(G) {
        let D;
        if (G._isSecure()) {
          let Z = G._getConstructorOptions(),
            Y = G._getSecureContextOptions(),
            W = Object.assign(
              Object.assign(Object.assign(Object.assign({}, this.commonServerOptions), Z), Y),
              { enableTrace: this.options['grpc-node.tls_enable_trace'] === 1 }
            ),
            F = Y !== null;
          (this.trace('Initial credentials valid: ' + F),
            (D = bY.createSecureServer(W)),
            D.prependListener('connection', (C) => {
              if (!F)
                (this.trace(
                  'Dropped connection from ' +
                    JSON.stringify(C.address()) +
                    ' due to unloaded credentials'
                ),
                  C.destroy());
            }),
            D.on('secureConnection', (C) => {
              C.on('error', (X) => {
                this.trace('An incoming TLS connection closed with error: ' + X.message);
              });
            }));
          let J = (C) => {
            if (C) {
              let X = D;
              try {
                X.setSecureContext(C);
              } catch (V) {
                (xm.log(
                  UQ.LogVerbosity.ERROR,
                  'Failed to set secure context with error ' + V.message
                ),
                  (C = null));
              }
            }
            ((F = C !== null), this.trace('Post-update credentials valid: ' + F));
          };
          (G._addWatcher(J),
            D.on('close', () => {
              G._removeWatcher(J);
            }));
        } else D = bY.createServer(this.commonServerOptions);
        return (D.setTimeout(0, $s6), this._setupHandlers(D, G._getInterceptors()), D);
      }
      bindOneAddress(G, D) {
        this.trace('Attempting to bind ' + PR.subchannelAddressToString(G));
        let Z = this.createHttp2Server(D.credentials);
        return new Promise((Y, W) => {
          let F = (J) => {
            (this.trace(
              'Failed to bind ' + PR.subchannelAddressToString(G) + ' with error ' + J.message
            ),
              Y({ port: 'port' in G ? G.port : 1, error: J.message }));
          };
          (Z.once('error', F),
            Z.listen(G, () => {
              let J = Z.address(),
                C;
              if (typeof J === 'string') C = { path: J };
              else C = { host: J.address, port: J.port };
              let X = this.experimentalRegisterListenerToChannelz(C);
              (this.listenerChildrenTracker.refChild(X),
                this.http2Servers.set(Z, {
                  channelzRef: X,
                  sessions: new Set(),
                  ownsChannelzRef: !0,
                }),
                D.listeningServers.add(Z),
                this.trace('Successfully bound ' + PR.subchannelAddressToString(C)),
                Y({ port: 'port' in C ? C.port : 1 }),
                Z.removeListener('error', F));
            }));
        });
      }
      async bindManyPorts(G, D) {
        if (G.length === 0) return { count: 0, port: 0, errors: [] };
        if (PR.isTcpSubchannelAddress(G[0]) && G[0].port === 0) {
          let Z = await this.bindOneAddress(G[0], D);
          if (Z.error) {
            let Y = await this.bindManyPorts(G.slice(1), D);
            return Object.assign(Object.assign({}, Y), { errors: [Z.error, ...Y.errors] });
          } else {
            let Y = G.slice(1).map((J) =>
                PR.isTcpSubchannelAddress(J) ? { host: J.host, port: Z.port } : J
              ),
              W = await Promise.all(Y.map((J) => this.bindOneAddress(J, D))),
              F = [Z, ...W];
            return {
              count: F.filter((J) => J.error === void 0).length,
              port: Z.port,
              errors: F.filter((J) => J.error).map((J) => J.error),
            };
          }
        } else {
          let Z = await Promise.all(G.map((Y) => this.bindOneAddress(Y, D)));
          return {
            count: Z.filter((Y) => Y.error === void 0).length,
            port: Z[0].port,
            errors: Z.filter((Y) => Y.error).map((Y) => Y.error),
          };
        }
      }
      async bindAddressList(G, D) {
        let Z = await this.bindManyPorts(G, D);
        if (Z.count > 0) {
          if (Z.count < G.length)
            xm.log(
              UQ.LogVerbosity.INFO,
              `WARNING Only ${Z.count} addresses added out of total ${G.length} resolved`
            );
          return Z.port;
        } else {
          let Y = `No address added out of total ${G.length} resolved`;
          throw (
            xm.log(UQ.LogVerbosity.ERROR, Y),
            new Error(`${Y} errors: [${Z.errors.join(',')}]`)
          );
        }
      }
      resolvePort(G) {
        return new Promise((D, Z) => {
          let Y = {
            onSuccessfulResolution: (F, J, C) => {
              Y.onSuccessfulResolution = () => {};
              let X = [].concat(...F.map((V) => V.addresses));
              if (X.length === 0) {
                Z(new Error(`No addresses resolved for port ${G}`));
                return;
              }
              D(X);
            },
            onError: (F) => {
              Z(new Error(F.details));
            },
          };
          YZ2.createResolver(G, Y, this.options).updateResolution();
        });
      }
      async bindPort(G, D) {
        let Z = await this.resolvePort(G);
        if (D.cancelled)
          throw (this.completeUnbind(D), new Error('bindAsync operation cancelled by unbind call'));
        let Y = await this.bindAddressList(Z, D);
        if (D.cancelled)
          throw (this.completeUnbind(D), new Error('bindAsync operation cancelled by unbind call'));
        return Y;
      }
      normalizePort(G) {
        let D = aV.parseUri(G);
        if (D === null) throw new Error(`Could not parse port "${G}"`);
        let Z = YZ2.mapUriDefaultScheme(D);
        if (Z === null) throw new Error(`Could not get a default scheme for port "${G}"`);
        return Z;
      }
      bindAsync(G, D, Z) {
        if (this.shutdown) throw new Error('bindAsync called after shutdown');
        if (typeof G !== 'string') throw new TypeError('port must be a string');
        if (D === null || !(D instanceof Ga1.ServerCredentials))
          throw new TypeError('creds must be a ServerCredentials object');
        if (typeof Z !== 'function') throw new TypeError('callback must be a function');
        this.trace('bindAsync port=' + G);
        let Y = this.normalizePort(G),
          W = (X, V) => {
            process.nextTick(() => Z(X, V));
          },
          F = this.boundPorts.get(aV.uriToString(Y));
        if (F) {
          if (!D._equals(F.credentials)) {
            W(new Error(`${G} already bound with incompatible credentials`), 0);
            return;
          }
          if (((F.cancelled = !1), F.completionPromise))
            F.completionPromise.then(
              (X) => Z(null, X),
              (X) => Z(X, 0)
            );
          else W(null, F.portNumber);
          return;
        }
        F = {
          mapKey: aV.uriToString(Y),
          originalUri: Y,
          completionPromise: null,
          cancelled: !1,
          portNumber: 0,
          credentials: D,
          listeningServers: new Set(),
        };
        let J = aV.splitHostPort(Y.path),
          C = this.bindPort(Y, F);
        if (((F.completionPromise = C), (J === null || J === void 0 ? void 0 : J.port) === 0))
          C.then(
            (X) => {
              let V = {
                scheme: Y.scheme,
                authority: Y.authority,
                path: aV.combineHostPort({ host: J.host, port: X }),
              };
              ((F.mapKey = aV.uriToString(V)),
                (F.completionPromise = null),
                (F.portNumber = X),
                this.boundPorts.set(F.mapKey, F),
                Z(null, X));
            },
            (X) => {
              Z(X, 0);
            }
          );
        else
          (this.boundPorts.set(F.mapKey, F),
            C.then(
              (X) => {
                ((F.completionPromise = null), (F.portNumber = X), Z(null, X));
              },
              (X) => {
                Z(X, 0);
              }
            ));
      }
      registerInjectorToChannelz() {
        return S7.registerChannelzSocket(
          'injector',
          () => {
            return {
              localAddress: null,
              remoteAddress: null,
              security: null,
              remoteName: null,
              streamsStarted: 0,
              streamsSucceeded: 0,
              streamsFailed: 0,
              messagesSent: 0,
              messagesReceived: 0,
              keepAlivesSent: 0,
              lastLocalStreamCreatedTimestamp: null,
              lastRemoteStreamCreatedTimestamp: null,
              lastMessageSentTimestamp: null,
              lastMessageReceivedTimestamp: null,
              localFlowControlWindow: null,
              remoteFlowControlWindow: null,
            };
          },
          this.channelzEnabled
        );
      }
      experimentalCreateConnectionInjectorWithChannelzRef(G, D, Z = !1) {
        if (G === null || !(G instanceof Ga1.ServerCredentials))
          throw new TypeError('creds must be a ServerCredentials object');
        if (this.channelzEnabled) this.listenerChildrenTracker.refChild(D);
        let Y = this.createHttp2Server(G),
          W = new Set();
        return (
          this.http2Servers.set(Y, { channelzRef: D, sessions: W, ownsChannelzRef: Z }),
          {
            injectConnection: (F) => {
              Y.emit('connection', F);
            },
            drain: (F) => {
              var J, C;
              for (let X of W) this.closeSession(X);
              (C = (J = setTimeout(() => {
                for (let X of W) X.destroy(bY.constants.NGHTTP2_CANCEL);
              }, F)).unref) === null ||
                C === void 0 ||
                C.call(J);
            },
            destroy: () => {
              this.closeServer(Y);
              for (let F of W) this.closeSession(F);
            },
          }
        );
      }
      createConnectionInjector(G) {
        if (G === null || !(G instanceof Ga1.ServerCredentials))
          throw new TypeError('creds must be a ServerCredentials object');
        let D = this.registerInjectorToChannelz();
        return this.experimentalCreateConnectionInjectorWithChannelzRef(G, D, !0);
      }
      closeServer(G, D) {
        this.trace('Closing server with address ' + JSON.stringify(G.address()));
        let Z = this.http2Servers.get(G);
        G.close(() => {
          if (Z && Z.ownsChannelzRef)
            (this.listenerChildrenTracker.unrefChild(Z.channelzRef),
              S7.unregisterChannelzRef(Z.channelzRef));
          (this.http2Servers.delete(G), D === null || D === void 0 || D());
        });
      }
      closeSession(G, D) {
        var Z;
        this.trace(
          'Closing session initiated by ' +
            ((Z = G.socket) === null || Z === void 0 ? void 0 : Z.remoteAddress)
        );
        let Y = this.sessions.get(G),
          W = () => {
            if (Y) (this.sessionChildrenTracker.unrefChild(Y.ref), S7.unregisterChannelzRef(Y.ref));
            D === null || D === void 0 || D();
          };
        if (G.closed) queueMicrotask(W);
        else G.close(W);
      }
      completeUnbind(G) {
        for (let D of G.listeningServers) {
          let Z = this.http2Servers.get(D);
          if (
            (this.closeServer(D, () => {
              G.listeningServers.delete(D);
            }),
            Z)
          )
            for (let Y of Z.sessions) this.closeSession(Y);
        }
        this.boundPorts.delete(G.mapKey);
      }
      unbind(G) {
        this.trace('unbind port=' + G);
        let D = this.normalizePort(G),
          Z = aV.splitHostPort(D.path);
        if ((Z === null || Z === void 0 ? void 0 : Z.port) === 0)
          throw new Error('Cannot unbind port 0');
        let Y = this.boundPorts.get(aV.uriToString(D));
        if (Y)
          if (
            (this.trace(
              'unbinding ' + Y.mapKey + ' originally bound as ' + aV.uriToString(Y.originalUri)
            ),
            Y.completionPromise)
          )
            Y.cancelled = !0;
          else this.completeUnbind(Y);
      }
      drain(G, D) {
        var Z, Y;
        this.trace('drain port=' + G + ' graceTimeMs=' + D);
        let W = this.normalizePort(G),
          F = aV.splitHostPort(W.path);
        if ((F === null || F === void 0 ? void 0 : F.port) === 0)
          throw new Error('Cannot drain port 0');
        let J = this.boundPorts.get(aV.uriToString(W));
        if (!J) return;
        let C = new Set();
        for (let X of J.listeningServers) {
          let V = this.http2Servers.get(X);
          if (V)
            for (let K of V.sessions)
              (C.add(K),
                this.closeSession(K, () => {
                  C.delete(K);
                }));
        }
        (Y = (Z = setTimeout(() => {
          for (let X of C) X.destroy(bY.constants.NGHTTP2_CANCEL);
        }, D)).unref) === null ||
          Y === void 0 ||
          Y.call(Z);
      }
      forceShutdown() {
        for (let G of this.boundPorts.values()) G.cancelled = !0;
        this.boundPorts.clear();
        for (let G of this.http2Servers.keys()) this.closeServer(G);
        (this.sessions.forEach((G, D) => {
          (this.closeSession(D), D.destroy(bY.constants.NGHTTP2_CANCEL));
        }),
          this.sessions.clear(),
          S7.unregisterChannelzRef(this.channelzRef),
          (this.shutdown = !0));
      }
      register(G, D, Z, Y, W) {
        if (this.handlers.has(G)) return !1;
        return (
          this.handlers.set(G, { func: D, serialize: Z, deserialize: Y, type: W, path: G }),
          !0
        );
      }
      unregister(G) {
        return this.handlers.delete(G);
      }
      start() {
        if (
          this.http2Servers.size === 0 ||
          [...this.http2Servers.keys()].every((G) => !G.listening)
        )
          throw new Error('server must be bound in order to start');
        if (this.started === !0) throw new Error('server is already started');
        this.started = !0;
      }
      tryShutdown(G) {
        var D;
        let Z = (F) => {
            (S7.unregisterChannelzRef(this.channelzRef), G(F));
          },
          Y = 0;
        function W() {
          if ((Y--, Y === 0)) Z();
        }
        this.shutdown = !0;
        for (let [F, J] of this.http2Servers.entries()) {
          Y++;
          let C = J.channelzRef.name;
          (this.trace('Waiting for server ' + C + ' to close'),
            this.closeServer(F, () => {
              (this.trace('Server ' + C + ' finished closing'), W());
            }));
          for (let X of J.sessions.keys()) {
            Y++;
            let V = (D = X.socket) === null || D === void 0 ? void 0 : D.remoteAddress;
            (this.trace('Waiting for session ' + V + ' to close'),
              this.closeSession(X, () => {
                (this.trace('Session ' + V + ' finished closing'), W());
              }));
          }
        }
        if (Y === 0) Z();
      }
      addHttp2Port() {
        throw new Error('Not yet implemented');
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      _verifyContentType(G, D) {
        let Z = D[bY.constants.HTTP2_HEADER_CONTENT_TYPE];
        if (typeof Z !== 'string' || !Z.startsWith('application/grpc'))
          return (
            G.respond(
              {
                [bY.constants.HTTP2_HEADER_STATUS]: bY.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE,
              },
              { endStream: !0 }
            ),
            !1
          );
        return !0;
      }
      _retrieveHandler(G) {
        XZ2('Received call to method ' + G + ' at address ' + this.serverAddressString);
        let D = this.handlers.get(G);
        if (D === void 0)
          return (
            XZ2('No handler registered for method ' + G + '. Sending UNIMPLEMENTED status.'),
            null
          );
        return D;
      }
      _respondWithError(G, D, Z = null) {
        var Y, W;
        let F = Object.assign(
          {
            'grpc-status': (Y = G.code) !== null && Y !== void 0 ? Y : UQ.Status.INTERNAL,
            'grpc-message': G.details,
            [bY.constants.HTTP2_HEADER_STATUS]: bY.constants.HTTP_STATUS_OK,
            [bY.constants.HTTP2_HEADER_CONTENT_TYPE]: 'application/grpc+proto',
          },
          (W = G.metadata) === null || W === void 0 ? void 0 : W.toHttp2Headers()
        );
        (D.respond(F, { endStream: !0 }),
          this.callTracker.addCallFailed(),
          Z === null || Z === void 0 || Z.streamTracker.addCallFailed());
      }
      _channelzHandler(G, D, Z) {
        this.onStreamOpened(D);
        let Y = this.sessions.get(D.session);
        if (
          (this.callTracker.addCallStarted(),
          Y === null || Y === void 0 || Y.streamTracker.addCallStarted(),
          !this._verifyContentType(D, Z))
        ) {
          (this.callTracker.addCallFailed(),
            Y === null || Y === void 0 || Y.streamTracker.addCallFailed());
          return;
        }
        let W = Z[JZ2],
          F = this._retrieveHandler(W);
        if (!F) {
          this._respondWithError(Za1(W), D, Y);
          return;
        }
        let J = {
            addMessageSent: () => {
              if (Y) ((Y.messagesSent += 1), (Y.lastMessageSentTimestamp = new Date()));
            },
            addMessageReceived: () => {
              if (Y) ((Y.messagesReceived += 1), (Y.lastMessageReceivedTimestamp = new Date()));
            },
            onCallEnd: (X) => {
              if (X.code === UQ.Status.OK) this.callTracker.addCallSucceeded();
              else this.callTracker.addCallFailed();
            },
            onStreamEnd: (X) => {
              if (Y)
                if (X) Y.streamTracker.addCallSucceeded();
                else Y.streamTracker.addCallFailed();
            },
          },
          C = WZ2.getServerInterceptingCall([...G, ...this.interceptors], D, Z, J, F, this.options);
        if (!this._runHandlerForCall(C, F))
          (this.callTracker.addCallFailed(),
            Y === null || Y === void 0 || Y.streamTracker.addCallFailed(),
            C.sendStatus({ code: UQ.Status.INTERNAL, details: `Unknown handler type: ${F.type}` }));
      }
      _streamHandler(G, D, Z) {
        if ((this.onStreamOpened(D), this._verifyContentType(D, Z) !== !0)) return;
        let Y = Z[JZ2],
          W = this._retrieveHandler(Y);
        if (!W) {
          this._respondWithError(Za1(Y), D, null);
          return;
        }
        let F = WZ2.getServerInterceptingCall(
          [...G, ...this.interceptors],
          D,
          Z,
          null,
          W,
          this.options
        );
        if (!this._runHandlerForCall(F, W))
          F.sendStatus({ code: UQ.Status.INTERNAL, details: `Unknown handler type: ${W.type}` });
      }
      _runHandlerForCall(G, D) {
        let { type: Z } = D;
        if (Z === 'unary') Rs6(G, D);
        else if (Z === 'clientStream') Os6(G, D);
        else if (Z === 'serverStream') Ts6(G, D);
        else if (Z === 'bidi') Ps6(G, D);
        else return !1;
        return !0;
      }
      _setupHandlers(G, D) {
        if (G === null) return;
        let Z = G.address(),
          Y = 'null';
        if (Z)
          if (typeof Z === 'string') Y = Z;
          else Y = Z.address + ':' + Z.port;
        this.serverAddressString = Y;
        let W = this.channelzEnabled ? this._channelzHandler : this._streamHandler,
          F = this.channelzEnabled ? this._channelzSessionHandler(G) : this._sessionHandler(G);
        (G.on('stream', W.bind(this, D)), G.on('session', F));
      }
      _sessionHandler(G) {
        return (D) => {
          var Z, Y;
          (Z = this.http2Servers.get(G)) === null || Z === void 0 || Z.sessions.add(D);
          let W = null,
            F = null,
            J = null,
            C = !1,
            X = this.enableIdleTimeout(D);
          if (this.maxConnectionAgeMs !== km) {
            let q = this.maxConnectionAgeMs / 10,
              M = Math.random() * q * 2 - q;
            ((W = setTimeout(() => {
              var R, T;
              ((C = !0),
                this.trace(
                  'Connection dropped by max connection age: ' +
                    ((R = D.socket) === null || R === void 0 ? void 0 : R.remoteAddress)
                ));
              try {
                D.goaway(bY.constants.NGHTTP2_NO_ERROR, 2147483647, CZ2);
              } catch (O) {
                D.destroy();
                return;
              }
              if ((D.close(), this.maxConnectionAgeGraceMs !== km))
                ((F = setTimeout(() => {
                  D.destroy();
                }, this.maxConnectionAgeGraceMs)),
                  (T = F.unref) === null || T === void 0 || T.call(F));
            }, this.maxConnectionAgeMs + M)),
              (Y = W.unref) === null || Y === void 0 || Y.call(W));
          }
          let V = () => {
              if (J) (clearTimeout(J), (J = null));
            },
            K = () => {
              return !D.destroyed && this.keepaliveTimeMs < Da1 && this.keepaliveTimeMs > 0;
            },
            U,
            N = () => {
              var q;
              if (!K()) return;
              (this.keepaliveTrace('Starting keepalive timer for ' + this.keepaliveTimeMs + 'ms'),
                (J = setTimeout(() => {
                  (V(), U());
                }, this.keepaliveTimeMs)),
                (q = J.unref) === null || q === void 0 || q.call(J));
            };
          ((U = () => {
            var q;
            if (!K()) return;
            this.keepaliveTrace('Sending ping with timeout ' + this.keepaliveTimeoutMs + 'ms');
            let M = '';
            try {
              if (
                !D.ping((T, O, S) => {
                  if ((V(), T))
                    (this.keepaliveTrace('Ping failed with error: ' + T.message),
                      (C = !0),
                      D.close());
                  else (this.keepaliveTrace('Received ping response'), N());
                })
              )
                M = 'Ping returned false';
            } catch (R) {
              M = (R instanceof Error ? R.message : '') || 'Unknown error';
            }
            if (M) {
              (this.keepaliveTrace('Ping send failed: ' + M),
                this.trace('Connection dropped due to ping send error: ' + M),
                (C = !0),
                D.close());
              return;
            }
            ((J = setTimeout(() => {
              (V(),
                this.keepaliveTrace('Ping timeout passed without response'),
                this.trace('Connection dropped by keepalive timeout'),
                (C = !0),
                D.close());
            }, this.keepaliveTimeoutMs)),
              (q = J.unref) === null || q === void 0 || q.call(J));
          }),
            N(),
            D.on('close', () => {
              var q, M;
              if (!C)
                this.trace(
                  `Connection dropped by client ${(q = D.socket) === null || q === void 0 ? void 0 : q.remoteAddress}`
                );
              if (W) clearTimeout(W);
              if (F) clearTimeout(F);
              if ((V(), X !== null)) (clearTimeout(X.timeout), this.sessionIdleTimeouts.delete(D));
              (M = this.http2Servers.get(G)) === null || M === void 0 || M.sessions.delete(D);
            }));
        };
      }
      _channelzSessionHandler(G) {
        return (D) => {
          var Z, Y, W, F;
          let J = S7.registerChannelzSocket(
              (Y = (Z = D.socket) === null || Z === void 0 ? void 0 : Z.remoteAddress) !== null &&
                Y !== void 0
                ? Y
                : 'unknown',
              this.getChannelzSessionInfo.bind(this, D),
              this.channelzEnabled
            ),
            C = {
              ref: J,
              streamTracker: new S7.ChannelzCallTracker(),
              messagesSent: 0,
              messagesReceived: 0,
              keepAlivesSent: 0,
              lastMessageSentTimestamp: null,
              lastMessageReceivedTimestamp: null,
            };
          ((W = this.http2Servers.get(G)) === null || W === void 0 || W.sessions.add(D),
            this.sessions.set(D, C));
          let X = `${D.socket.remoteAddress}:${D.socket.remotePort}`;
          (this.channelzTrace.addTrace('CT_INFO', 'Connection established by client ' + X),
            this.trace('Connection established by client ' + X),
            this.sessionChildrenTracker.refChild(J));
          let V = null,
            K = null,
            U = null,
            N = !1,
            q = this.enableIdleTimeout(D);
          if (this.maxConnectionAgeMs !== km) {
            let S = this.maxConnectionAgeMs / 10,
              f = Math.random() * S * 2 - S;
            ((V = setTimeout(() => {
              var a;
              ((N = !0),
                this.channelzTrace.addTrace(
                  'CT_INFO',
                  'Connection dropped by max connection age from ' + X
                ));
              try {
                D.goaway(bY.constants.NGHTTP2_NO_ERROR, 2147483647, CZ2);
              } catch (g) {
                D.destroy();
                return;
              }
              if ((D.close(), this.maxConnectionAgeGraceMs !== km))
                ((K = setTimeout(() => {
                  D.destroy();
                }, this.maxConnectionAgeGraceMs)),
                  (a = K.unref) === null || a === void 0 || a.call(K));
            }, this.maxConnectionAgeMs + f)),
              (F = V.unref) === null || F === void 0 || F.call(V));
          }
          let M = () => {
              if (U) (clearTimeout(U), (U = null));
            },
            R = () => {
              return !D.destroyed && this.keepaliveTimeMs < Da1 && this.keepaliveTimeMs > 0;
            },
            T,
            O = () => {
              var S;
              if (!R()) return;
              (this.keepaliveTrace('Starting keepalive timer for ' + this.keepaliveTimeMs + 'ms'),
                (U = setTimeout(() => {
                  (M(), T());
                }, this.keepaliveTimeMs)),
                (S = U.unref) === null || S === void 0 || S.call(U));
            };
          ((T = () => {
            var S;
            if (!R()) return;
            this.keepaliveTrace('Sending ping with timeout ' + this.keepaliveTimeoutMs + 'ms');
            let f = '';
            try {
              if (
                !D.ping((g, Y1, r) => {
                  if ((M(), g))
                    (this.keepaliveTrace('Ping failed with error: ' + g.message),
                      this.channelzTrace.addTrace(
                        'CT_INFO',
                        'Connection dropped due to error of a ping frame ' +
                          g.message +
                          ' return in ' +
                          Y1
                      ),
                      (N = !0),
                      D.close());
                  else (this.keepaliveTrace('Received ping response'), O());
                })
              )
                f = 'Ping returned false';
            } catch (a) {
              f = (a instanceof Error ? a.message : '') || 'Unknown error';
            }
            if (f) {
              (this.keepaliveTrace('Ping send failed: ' + f),
                this.channelzTrace.addTrace(
                  'CT_INFO',
                  'Connection dropped due to ping send error: ' + f
                ),
                (N = !0),
                D.close());
              return;
            }
            ((C.keepAlivesSent += 1),
              (U = setTimeout(() => {
                (M(),
                  this.keepaliveTrace('Ping timeout passed without response'),
                  this.channelzTrace.addTrace(
                    'CT_INFO',
                    'Connection dropped by keepalive timeout from ' + X
                  ),
                  (N = !0),
                  D.close());
              }, this.keepaliveTimeoutMs)),
              (S = U.unref) === null || S === void 0 || S.call(U));
          }),
            O(),
            D.on('close', () => {
              var S;
              if (!N) this.channelzTrace.addTrace('CT_INFO', 'Connection dropped by client ' + X);
              if ((this.sessionChildrenTracker.unrefChild(J), S7.unregisterChannelzRef(J), V))
                clearTimeout(V);
              if (K) clearTimeout(K);
              if ((M(), q !== null)) (clearTimeout(q.timeout), this.sessionIdleTimeouts.delete(D));
              ((S = this.http2Servers.get(G)) === null || S === void 0 || S.sessions.delete(D),
                this.sessions.delete(D));
            }));
        };
      }
      enableIdleTimeout(G) {
        var D, Z;
        if (this.sessionIdleTimeout >= FZ2) return null;
        let Y = {
          activeStreams: 0,
          lastIdle: Date.now(),
          onClose: this.onStreamClose.bind(this, G),
          timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, G),
        };
        ((Z = (D = Y.timeout).unref) === null || Z === void 0 || Z.call(D),
          this.sessionIdleTimeouts.set(G, Y));
        let { socket: W } = G;
        return (this.trace('Enable idle timeout for ' + W.remoteAddress + ':' + W.remotePort), Y);
      }
      onIdleTimeout(G, D) {
        let { socket: Z } = D,
          Y = G.sessionIdleTimeouts.get(D);
        if (Y !== void 0 && Y.activeStreams === 0)
          if (Date.now() - Y.lastIdle >= G.sessionIdleTimeout)
            (G.trace(
              'Session idle timeout triggered for ' +
                (Z === null || Z === void 0 ? void 0 : Z.remoteAddress) +
                ':' +
                (Z === null || Z === void 0 ? void 0 : Z.remotePort) +
                ' last idle at ' +
                Y.lastIdle
            ),
              G.closeSession(D));
          else Y.timeout.refresh();
      }
      onStreamOpened(G) {
        let D = G.session,
          Z = this.sessionIdleTimeouts.get(D);
        if (Z) ((Z.activeStreams += 1), G.once('close', Z.onClose));
      }
      onStreamClose(G) {
        var D, Z;
        let Y = this.sessionIdleTimeouts.get(G);
        if (Y) {
          if (((Y.activeStreams -= 1), Y.activeStreams === 0))
            ((Y.lastIdle = Date.now()),
              Y.timeout.refresh(),
              this.trace(
                'Session onStreamClose' +
                  ((D = G.socket) === null || D === void 0 ? void 0 : D.remoteAddress) +
                  ':' +
                  ((Z = G.socket) === null || Z === void 0 ? void 0 : Z.remotePort) +
                  ' at ' +
                  Y.lastIdle
              ));
        }
      }
    }),
    (() => {
      let I = typeof Symbol === 'function' && Symbol.metadata ? Object.create(null) : void 0;
      if (
        ((Q = [qs6('Calling start() is no longer necessary. It can be safely omitted.')]),
        ws6(
          A,
          null,
          Q,
          {
            kind: 'method',
            name: 'start',
            static: !1,
            private: !1,
            access: { has: (G) => 'start' in G, get: (G) => G.start },
            metadata: I,
          },
          null,
          B
        ),
        I)
      )
        Object.defineProperty(A, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: I,
        });
    })(),
    A
  );
})();
SR.Server = Ls6;
async function Rs6(A, B) {
  let Q;
  function I(Z, Y, W, F) {
    if (Z) {
      A.sendStatus(fm.serverErrorToStatus(Z, W));
      return;
    }
    A.sendMessage(Y, () => {
      A.sendStatus({
        code: UQ.Status.OK,
        details: 'OK',
        metadata: W !== null && W !== void 0 ? W : null,
      });
    });
  }
  let G,
    D = null;
  A.start({
    onReceiveMetadata(Z) {
      ((G = Z), A.startRead());
    },
    onReceiveMessage(Z) {
      if (D) {
        A.sendStatus({
          code: UQ.Status.UNIMPLEMENTED,
          details: `Received a second request message for server streaming method ${B.path}`,
          metadata: null,
        });
        return;
      }
      ((D = Z), A.startRead());
    },
    onReceiveHalfClose() {
      if (!D) {
        A.sendStatus({
          code: UQ.Status.UNIMPLEMENTED,
          details: `Received no request message for server streaming method ${B.path}`,
          metadata: null,
        });
        return;
      }
      Q = new fm.ServerWritableStreamImpl(B.path, A, G, D);
      try {
        B.func(Q, I);
      } catch (Z) {
        A.sendStatus({
          code: UQ.Status.UNKNOWN,
          details: `Server method handler threw error ${Z.message}`,
          metadata: null,
        });
      }
    },
    onCancel() {
      if (Q) ((Q.cancelled = !0), Q.emit('cancelled', 'cancelled'));
    },
  });
}
function Os6(A, B) {
  let Q;
  function I(G, D, Z, Y) {
    if (G) {
      A.sendStatus(fm.serverErrorToStatus(G, Z));
      return;
    }
    A.sendMessage(D, () => {
      A.sendStatus({
        code: UQ.Status.OK,
        details: 'OK',
        metadata: Z !== null && Z !== void 0 ? Z : null,
      });
    });
  }
  A.start({
    onReceiveMetadata(G) {
      Q = new fm.ServerDuplexStreamImpl(B.path, A, G);
      try {
        B.func(Q, I);
      } catch (D) {
        A.sendStatus({
          code: UQ.Status.UNKNOWN,
          details: `Server method handler threw error ${D.message}`,
          metadata: null,
        });
      }
    },
    onReceiveMessage(G) {
      Q.push(G);
    },
    onReceiveHalfClose() {
      Q.push(null);
    },
    onCancel() {
      if (Q) ((Q.cancelled = !0), Q.emit('cancelled', 'cancelled'), Q.destroy());
    },
  });
}
function Ts6(A, B) {
  let Q,
    I,
    G = null;
  A.start({
    onReceiveMetadata(D) {
      ((I = D), A.startRead());
    },
    onReceiveMessage(D) {
      if (G) {
        A.sendStatus({
          code: UQ.Status.UNIMPLEMENTED,
          details: `Received a second request message for server streaming method ${B.path}`,
          metadata: null,
        });
        return;
      }
      ((G = D), A.startRead());
    },
    onReceiveHalfClose() {
      if (!G) {
        A.sendStatus({
          code: UQ.Status.UNIMPLEMENTED,
          details: `Received no request message for server streaming method ${B.path}`,
          metadata: null,
        });
        return;
      }
      Q = new fm.ServerWritableStreamImpl(B.path, A, I, G);
      try {
        B.func(Q);
      } catch (D) {
        A.sendStatus({
          code: UQ.Status.UNKNOWN,
          details: `Server method handler threw error ${D.message}`,
          metadata: null,
        });
      }
    },
    onCancel() {
      if (Q) ((Q.cancelled = !0), Q.emit('cancelled', 'cancelled'), Q.destroy());
    },
  });
}
function Ps6(A, B) {
  let Q;
  A.start({
    onReceiveMetadata(I) {
      Q = new fm.ServerDuplexStreamImpl(B.path, A, I);
      try {
        B.func(Q);
      } catch (G) {
        A.sendStatus({
          code: UQ.Status.UNKNOWN,
          details: `Server method handler threw error ${G.message}`,
          metadata: null,
        });
      }
    },
    onReceiveMessage(I) {
      Q.push(I);
    },
    onReceiveHalfClose() {
      Q.push(null);
    },
    onCancel() {
      if (Q) ((Q.cancelled = !0), Q.emit('cancelled', 'cancelled'), Q.destroy());
    },
  });
}
