// Module: Ri1
// Params: uQ2

Object.defineProperty(uQ2, '__esModule', { value: !0 });
uQ2.Client = void 0;
var Gw = OQ2(),
  Mp6 = Oi1(),
  Lp6 = $C(),
  UR = O6(),
  Vm = XD(),
  YC1 = Mi1(),
  cV = Symbol(),
  Km = Symbol(),
  Hm = Symbol(),
  NN = Symbol();
function Li1(A) {
  return typeof A === 'function';
}
function zm(A) {
  var B;
  return (
    ((B = A.stack) === null || B === void 0
      ? void 0
      : B.split(
          `
`
        ).slice(1).join(`
`)) || 'no stack trace available'
  );
}
class dQ2 {
  constructor(A, B, Q = {}) {
    var I, G;
    if (
      ((Q = Object.assign({}, Q)),
      (this[Km] = (I = Q.interceptors) !== null && I !== void 0 ? I : []),
      delete Q.interceptors,
      (this[Hm] = (G = Q.interceptor_providers) !== null && G !== void 0 ? G : []),
      delete Q.interceptor_providers,
      this[Km].length > 0 && this[Hm].length > 0)
    )
      throw new Error(
        'Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.'
      );
    if (
      ((this[NN] = Q.callInvocationTransformer),
      delete Q.callInvocationTransformer,
      Q.channelOverride)
    )
      this[cV] = Q.channelOverride;
    else if (Q.channelFactoryOverride) {
      let D = Q.channelFactoryOverride;
      (delete Q.channelFactoryOverride, (this[cV] = D(A, B, Q)));
    } else this[cV] = new Mp6.ChannelImplementation(A, B, Q);
  }
  close() {
    this[cV].close();
  }
  getChannel() {
    return this[cV];
  }
  waitForReady(A, B) {
    let Q = (I) => {
      if (I) {
        B(new Error('Failed to connect before the deadline'));
        return;
      }
      let G;
      try {
        G = this[cV].getConnectivityState(!0);
      } catch (D) {
        B(new Error('The channel has been closed'));
        return;
      }
      if (G === Lp6.ConnectivityState.READY) B();
      else
        try {
          this[cV].watchConnectivityState(G, A, Q);
        } catch (D) {
          B(new Error('The channel has been closed'));
        }
    };
    setImmediate(Q);
  }
  checkOptionalUnaryResponseArguments(A, B, Q) {
    if (Li1(A)) return { metadata: new Vm.Metadata(), options: {}, callback: A };
    else if (Li1(B))
      if (A instanceof Vm.Metadata) return { metadata: A, options: {}, callback: B };
      else return { metadata: new Vm.Metadata(), options: A, callback: B };
    else {
      if (!(A instanceof Vm.Metadata && B instanceof Object && Li1(Q)))
        throw new Error('Incorrect arguments passed');
      return { metadata: A, options: B, callback: Q };
    }
  }
  makeUnaryRequest(A, B, Q, I, G, D, Z) {
    var Y, W;
    let F = this.checkOptionalUnaryResponseArguments(G, D, Z),
      J = {
        path: A,
        requestStream: !1,
        responseStream: !1,
        requestSerialize: B,
        responseDeserialize: Q,
      },
      C = {
        argument: I,
        metadata: F.metadata,
        call: new Gw.ClientUnaryCallImpl(),
        channel: this[cV],
        methodDefinition: J,
        callOptions: F.options,
        callback: F.callback,
      };
    if (this[NN]) C = this[NN](C);
    let X = C.call,
      V = {
        clientInterceptors: this[Km],
        clientInterceptorProviders: this[Hm],
        callInterceptors: (Y = C.callOptions.interceptors) !== null && Y !== void 0 ? Y : [],
        callInterceptorProviders:
          (W = C.callOptions.interceptor_providers) !== null && W !== void 0 ? W : [],
      },
      K = YC1.getInterceptingCall(V, C.methodDefinition, C.callOptions, C.channel);
    X.call = K;
    let U = null,
      N = !1,
      q = new Error();
    return (
      K.start(C.metadata, {
        onReceiveMetadata: (M) => {
          X.emit('metadata', M);
        },
        onReceiveMessage(M) {
          if (U !== null)
            K.cancelWithStatus(UR.Status.UNIMPLEMENTED, 'Too many responses received');
          U = M;
        },
        onReceiveStatus(M) {
          if (N) return;
          if (((N = !0), M.code === UR.Status.OK))
            if (U === null) {
              let R = zm(q);
              C.callback(
                Gw.callErrorFromStatus(
                  {
                    code: UR.Status.UNIMPLEMENTED,
                    details: 'No message received',
                    metadata: M.metadata,
                  },
                  R
                )
              );
            } else C.callback(null, U);
          else {
            let R = zm(q);
            C.callback(Gw.callErrorFromStatus(M, R));
          }
          ((q = null), X.emit('status', M));
        },
      }),
      K.sendMessage(I),
      K.halfClose(),
      X
    );
  }
  makeClientStreamRequest(A, B, Q, I, G, D) {
    var Z, Y;
    let W = this.checkOptionalUnaryResponseArguments(I, G, D),
      F = {
        path: A,
        requestStream: !0,
        responseStream: !1,
        requestSerialize: B,
        responseDeserialize: Q,
      },
      J = {
        metadata: W.metadata,
        call: new Gw.ClientWritableStreamImpl(B),
        channel: this[cV],
        methodDefinition: F,
        callOptions: W.options,
        callback: W.callback,
      };
    if (this[NN]) J = this[NN](J);
    let C = J.call,
      X = {
        clientInterceptors: this[Km],
        clientInterceptorProviders: this[Hm],
        callInterceptors: (Z = J.callOptions.interceptors) !== null && Z !== void 0 ? Z : [],
        callInterceptorProviders:
          (Y = J.callOptions.interceptor_providers) !== null && Y !== void 0 ? Y : [],
      },
      V = YC1.getInterceptingCall(X, J.methodDefinition, J.callOptions, J.channel);
    C.call = V;
    let K = null,
      U = !1,
      N = new Error();
    return (
      V.start(J.metadata, {
        onReceiveMetadata: (q) => {
          C.emit('metadata', q);
        },
        onReceiveMessage(q) {
          if (K !== null)
            V.cancelWithStatus(UR.Status.UNIMPLEMENTED, 'Too many responses received');
          ((K = q), V.startRead());
        },
        onReceiveStatus(q) {
          if (U) return;
          if (((U = !0), q.code === UR.Status.OK))
            if (K === null) {
              let M = zm(N);
              J.callback(
                Gw.callErrorFromStatus(
                  {
                    code: UR.Status.UNIMPLEMENTED,
                    details: 'No message received',
                    metadata: q.metadata,
                  },
                  M
                )
              );
            } else J.callback(null, K);
          else {
            let M = zm(N);
            J.callback(Gw.callErrorFromStatus(q, M));
          }
          ((N = null), C.emit('status', q));
        },
      }),
      C
    );
  }
  checkMetadataAndOptions(A, B) {
    let Q, I;
    if (A instanceof Vm.Metadata)
      if (((Q = A), B)) I = B;
      else I = {};
    else {
      if (A) I = A;
      else I = {};
      Q = new Vm.Metadata();
    }
    return { metadata: Q, options: I };
  }
  makeServerStreamRequest(A, B, Q, I, G, D) {
    var Z, Y;
    let W = this.checkMetadataAndOptions(G, D),
      F = {
        path: A,
        requestStream: !1,
        responseStream: !0,
        requestSerialize: B,
        responseDeserialize: Q,
      },
      J = {
        argument: I,
        metadata: W.metadata,
        call: new Gw.ClientReadableStreamImpl(Q),
        channel: this[cV],
        methodDefinition: F,
        callOptions: W.options,
      };
    if (this[NN]) J = this[NN](J);
    let C = J.call,
      X = {
        clientInterceptors: this[Km],
        clientInterceptorProviders: this[Hm],
        callInterceptors: (Z = J.callOptions.interceptors) !== null && Z !== void 0 ? Z : [],
        callInterceptorProviders:
          (Y = J.callOptions.interceptor_providers) !== null && Y !== void 0 ? Y : [],
      },
      V = YC1.getInterceptingCall(X, J.methodDefinition, J.callOptions, J.channel);
    C.call = V;
    let K = !1,
      U = new Error();
    return (
      V.start(J.metadata, {
        onReceiveMetadata(N) {
          C.emit('metadata', N);
        },
        onReceiveMessage(N) {
          C.push(N);
        },
        onReceiveStatus(N) {
          if (K) return;
          if (((K = !0), C.push(null), N.code !== UR.Status.OK)) {
            let q = zm(U);
            C.emit('error', Gw.callErrorFromStatus(N, q));
          }
          ((U = null), C.emit('status', N));
        },
      }),
      V.sendMessage(I),
      V.halfClose(),
      C
    );
  }
  makeBidiStreamRequest(A, B, Q, I, G) {
    var D, Z;
    let Y = this.checkMetadataAndOptions(I, G),
      W = {
        path: A,
        requestStream: !0,
        responseStream: !0,
        requestSerialize: B,
        responseDeserialize: Q,
      },
      F = {
        metadata: Y.metadata,
        call: new Gw.ClientDuplexStreamImpl(B, Q),
        channel: this[cV],
        methodDefinition: W,
        callOptions: Y.options,
      };
    if (this[NN]) F = this[NN](F);
    let J = F.call,
      C = {
        clientInterceptors: this[Km],
        clientInterceptorProviders: this[Hm],
        callInterceptors: (D = F.callOptions.interceptors) !== null && D !== void 0 ? D : [],
        callInterceptorProviders:
          (Z = F.callOptions.interceptor_providers) !== null && Z !== void 0 ? Z : [],
      },
      X = YC1.getInterceptingCall(C, F.methodDefinition, F.callOptions, F.channel);
    J.call = X;
    let V = !1,
      K = new Error();
    return (
      X.start(F.metadata, {
        onReceiveMetadata(U) {
          J.emit('metadata', U);
        },
        onReceiveMessage(U) {
          J.push(U);
        },
        onReceiveStatus(U) {
          if (V) return;
          if (((V = !0), J.push(null), U.code !== UR.Status.OK)) {
            let N = zm(K);
            J.emit('error', Gw.callErrorFromStatus(U, N));
          }
          ((K = null), J.emit('status', U));
        },
      }),
      J
    );
  }
}
uQ2.Client = dQ2;
