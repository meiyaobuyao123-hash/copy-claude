// Module: Mi1
// Params: hQ2

Object.defineProperty(hQ2, '__esModule', { value: !0 });
hQ2.InterceptingCall =
  hQ2.RequesterBuilder =
  hQ2.ListenerBuilder =
  hQ2.InterceptorConfigurationError =
    void 0;
hQ2.getInterceptingCall = Ep6;
var Hp6 = XD(),
  jQ2 = _Q2(),
  yQ2 = O6(),
  kQ2 = lJ1();
class fo extends Error {
  constructor(A) {
    super(A);
    ((this.name = 'InterceptorConfigurationError'), Error.captureStackTrace(this, fo));
  }
}
hQ2.InterceptorConfigurationError = fo;
class xQ2 {
  constructor() {
    ((this.metadata = void 0), (this.message = void 0), (this.status = void 0));
  }
  withOnReceiveMetadata(A) {
    return ((this.metadata = A), this);
  }
  withOnReceiveMessage(A) {
    return ((this.message = A), this);
  }
  withOnReceiveStatus(A) {
    return ((this.status = A), this);
  }
  build() {
    return {
      onReceiveMetadata: this.metadata,
      onReceiveMessage: this.message,
      onReceiveStatus: this.status,
    };
  }
}
hQ2.ListenerBuilder = xQ2;
class fQ2 {
  constructor() {
    ((this.start = void 0),
      (this.message = void 0),
      (this.halfClose = void 0),
      (this.cancel = void 0));
  }
  withStart(A) {
    return ((this.start = A), this);
  }
  withSendMessage(A) {
    return ((this.message = A), this);
  }
  withHalfClose(A) {
    return ((this.halfClose = A), this);
  }
  withCancel(A) {
    return ((this.cancel = A), this);
  }
  build() {
    return {
      start: this.start,
      sendMessage: this.message,
      halfClose: this.halfClose,
      cancel: this.cancel,
    };
  }
}
hQ2.RequesterBuilder = fQ2;
var $i1 = {
    onReceiveMetadata: (A, B) => {
      B(A);
    },
    onReceiveMessage: (A, B) => {
      B(A);
    },
    onReceiveStatus: (A, B) => {
      B(A);
    },
  },
  xo = {
    start: (A, B, Q) => {
      Q(A, B);
    },
    sendMessage: (A, B) => {
      B(A);
    },
    halfClose: (A) => {
      A();
    },
    cancel: (A) => {
      A();
    },
  };
class vQ2 {
  constructor(A, B) {
    var Q, I, G, D;
    if (
      ((this.nextCall = A),
      (this.processingMetadata = !1),
      (this.pendingMessageContext = null),
      (this.processingMessage = !1),
      (this.pendingHalfClose = !1),
      B)
    )
      this.requester = {
        start: (Q = B.start) !== null && Q !== void 0 ? Q : xo.start,
        sendMessage: (I = B.sendMessage) !== null && I !== void 0 ? I : xo.sendMessage,
        halfClose: (G = B.halfClose) !== null && G !== void 0 ? G : xo.halfClose,
        cancel: (D = B.cancel) !== null && D !== void 0 ? D : xo.cancel,
      };
    else this.requester = xo;
  }
  cancelWithStatus(A, B) {
    this.requester.cancel(() => {
      this.nextCall.cancelWithStatus(A, B);
    });
  }
  getPeer() {
    return this.nextCall.getPeer();
  }
  processPendingMessage() {
    if (this.pendingMessageContext)
      (this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage),
        (this.pendingMessageContext = null),
        (this.pendingMessage = null));
  }
  processPendingHalfClose() {
    if (this.pendingHalfClose) this.nextCall.halfClose();
  }
  start(A, B) {
    var Q, I, G, D, Z, Y;
    let W = {
      onReceiveMetadata:
        (I =
          (Q = B === null || B === void 0 ? void 0 : B.onReceiveMetadata) === null || Q === void 0
            ? void 0
            : Q.bind(B)) !== null && I !== void 0
          ? I
          : (F) => {},
      onReceiveMessage:
        (D =
          (G = B === null || B === void 0 ? void 0 : B.onReceiveMessage) === null || G === void 0
            ? void 0
            : G.bind(B)) !== null && D !== void 0
          ? D
          : (F) => {},
      onReceiveStatus:
        (Y =
          (Z = B === null || B === void 0 ? void 0 : B.onReceiveStatus) === null || Z === void 0
            ? void 0
            : Z.bind(B)) !== null && Y !== void 0
          ? Y
          : (F) => {},
    };
    ((this.processingMetadata = !0),
      this.requester.start(A, W, (F, J) => {
        var C, X, V;
        this.processingMetadata = !1;
        let K;
        if (jQ2.isInterceptingListener(J)) K = J;
        else {
          let U = {
            onReceiveMetadata:
              (C = J.onReceiveMetadata) !== null && C !== void 0 ? C : $i1.onReceiveMetadata,
            onReceiveMessage:
              (X = J.onReceiveMessage) !== null && X !== void 0 ? X : $i1.onReceiveMessage,
            onReceiveStatus:
              (V = J.onReceiveStatus) !== null && V !== void 0 ? V : $i1.onReceiveStatus,
          };
          K = new jQ2.InterceptingListenerImpl(U, W);
        }
        (this.nextCall.start(F, K), this.processPendingMessage(), this.processPendingHalfClose());
      }));
  }
  sendMessageWithContext(A, B) {
    ((this.processingMessage = !0),
      this.requester.sendMessage(B, (Q) => {
        if (((this.processingMessage = !1), this.processingMetadata))
          ((this.pendingMessageContext = A), (this.pendingMessage = B));
        else (this.nextCall.sendMessageWithContext(A, Q), this.processPendingHalfClose());
      }));
  }
  sendMessage(A) {
    this.sendMessageWithContext({}, A);
  }
  startRead() {
    this.nextCall.startRead();
  }
  halfClose() {
    this.requester.halfClose(() => {
      if (this.processingMetadata || this.processingMessage) this.pendingHalfClose = !0;
      else this.nextCall.halfClose();
    });
  }
}
hQ2.InterceptingCall = vQ2;
function zp6(A, B, Q) {
  var I, G;
  let D = (I = Q.deadline) !== null && I !== void 0 ? I : 1 / 0,
    Z = Q.host,
    Y = (G = Q.parent) !== null && G !== void 0 ? G : null,
    W = Q.propagate_flags,
    F = Q.credentials,
    J = A.createCall(B, D, Z, Y, W);
  if (F) J.setCredentials(F);
  return J;
}
class qi1 {
  constructor(A, B) {
    ((this.call = A), (this.methodDefinition = B));
  }
  cancelWithStatus(A, B) {
    this.call.cancelWithStatus(A, B);
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMessageWithContext(A, B) {
    let Q;
    try {
      Q = this.methodDefinition.requestSerialize(B);
    } catch (I) {
      this.call.cancelWithStatus(
        yQ2.Status.INTERNAL,
        `Request message serialization failure: ${kQ2.getErrorMessage(I)}`
      );
      return;
    }
    this.call.sendMessageWithContext(A, Q);
  }
  sendMessage(A) {
    this.sendMessageWithContext({}, A);
  }
  start(A, B) {
    let Q = null;
    this.call.start(A, {
      onReceiveMetadata: (I) => {
        var G;
        (G = B === null || B === void 0 ? void 0 : B.onReceiveMetadata) === null ||
          G === void 0 ||
          G.call(B, I);
      },
      onReceiveMessage: (I) => {
        var G;
        let D;
        try {
          D = this.methodDefinition.responseDeserialize(I);
        } catch (Z) {
          ((Q = {
            code: yQ2.Status.INTERNAL,
            details: `Response message parsing error: ${kQ2.getErrorMessage(Z)}`,
            metadata: new Hp6.Metadata(),
          }),
            this.call.cancelWithStatus(Q.code, Q.details));
          return;
        }
        (G = B === null || B === void 0 ? void 0 : B.onReceiveMessage) === null ||
          G === void 0 ||
          G.call(B, D);
      },
      onReceiveStatus: (I) => {
        var G, D;
        if (Q)
          (G = B === null || B === void 0 ? void 0 : B.onReceiveStatus) === null ||
            G === void 0 ||
            G.call(B, Q);
        else
          (D = B === null || B === void 0 ? void 0 : B.onReceiveStatus) === null ||
            D === void 0 ||
            D.call(B, I);
      },
    });
  }
  startRead() {
    this.call.startRead();
  }
  halfClose() {
    this.call.halfClose();
  }
}
class bQ2 extends qi1 {
  constructor(A, B) {
    super(A, B);
  }
  start(A, B) {
    var Q, I;
    let G = !1,
      D = {
        onReceiveMetadata:
          (I =
            (Q = B === null || B === void 0 ? void 0 : B.onReceiveMetadata) === null || Q === void 0
              ? void 0
              : Q.bind(B)) !== null && I !== void 0
            ? I
            : (Z) => {},
        onReceiveMessage: (Z) => {
          var Y;
          ((G = !0),
            (Y = B === null || B === void 0 ? void 0 : B.onReceiveMessage) === null ||
              Y === void 0 ||
              Y.call(B, Z));
        },
        onReceiveStatus: (Z) => {
          var Y, W;
          if (!G)
            (Y = B === null || B === void 0 ? void 0 : B.onReceiveMessage) === null ||
              Y === void 0 ||
              Y.call(B, null);
          (W = B === null || B === void 0 ? void 0 : B.onReceiveStatus) === null ||
            W === void 0 ||
            W.call(B, Z);
        },
      };
    (super.start(A, D), this.call.startRead());
  }
}
class gQ2 extends qi1 {}
function wp6(A, B, Q) {
  let I = zp6(A, Q.path, B);
  if (Q.responseStream) return new gQ2(I, Q);
  else return new bQ2(I, Q);
}
function Ep6(A, B, Q, I) {
  if (A.clientInterceptors.length > 0 && A.clientInterceptorProviders.length > 0)
    throw new fo(
      'Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.'
    );
  if (A.callInterceptors.length > 0 && A.callInterceptorProviders.length > 0)
    throw new fo(
      'Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.'
    );
  let G = [];
  if (A.callInterceptors.length > 0 || A.callInterceptorProviders.length > 0)
    G = []
      .concat(
        A.callInterceptors,
        A.callInterceptorProviders.map((Y) => Y(B))
      )
      .filter((Y) => Y);
  else
    G = []
      .concat(
        A.clientInterceptors,
        A.clientInterceptorProviders.map((Y) => Y(B))
      )
      .filter((Y) => Y);
  let D = Object.assign({}, Q, { method_definition: B });
  return G.reduceRight(
    (Y, W) => {
      return (F) => W(F, Y);
    },
    (Y) => wp6(I, Y, B)
  )(D);
}
