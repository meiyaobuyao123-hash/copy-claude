// Module: Ia1
// Params: DZ2

Object.defineProperty(DZ2, '__esModule', { value: !0 });
DZ2.BaseServerInterceptingCall =
  DZ2.ServerInterceptingCall =
  DZ2.ResponderBuilder =
  DZ2.ServerListenerBuilder =
    void 0;
DZ2.isInterceptingServerListener = Ds6;
DZ2.getServerInterceptingCall = Js6;
var Aa1 = XD(),
  vY = O6(),
  ym = D1('http2'),
  nD2 = lJ1(),
  aD2 = D1('zlib'),
  Gs6 = Pn1(),
  tD2 = r8(),
  eD2 = 'server_call';
function m_(A) {
  tD2.trace(vY.LogVerbosity.DEBUG, eD2, A);
}
class AZ2 {
  constructor() {
    ((this.metadata = void 0),
      (this.message = void 0),
      (this.halfClose = void 0),
      (this.cancel = void 0));
  }
  withOnReceiveMetadata(A) {
    return ((this.metadata = A), this);
  }
  withOnReceiveMessage(A) {
    return ((this.message = A), this);
  }
  withOnReceiveHalfClose(A) {
    return ((this.halfClose = A), this);
  }
  withOnCancel(A) {
    return ((this.cancel = A), this);
  }
  build() {
    return {
      onReceiveMetadata: this.metadata,
      onReceiveMessage: this.message,
      onReceiveHalfClose: this.halfClose,
      onCancel: this.cancel,
    };
  }
}
DZ2.ServerListenerBuilder = AZ2;
function Ds6(A) {
  return A.onReceiveMetadata !== void 0 && A.onReceiveMetadata.length === 1;
}
class BZ2 {
  constructor(A, B) {
    ((this.listener = A),
      (this.nextListener = B),
      (this.cancelled = !1),
      (this.processingMetadata = !1),
      (this.hasPendingMessage = !1),
      (this.pendingMessage = null),
      (this.processingMessage = !1),
      (this.hasPendingHalfClose = !1));
  }
  processPendingMessage() {
    if (this.hasPendingMessage)
      (this.nextListener.onReceiveMessage(this.pendingMessage),
        (this.pendingMessage = null),
        (this.hasPendingMessage = !1));
  }
  processPendingHalfClose() {
    if (this.hasPendingHalfClose)
      (this.nextListener.onReceiveHalfClose(), (this.hasPendingHalfClose = !1));
  }
  onReceiveMetadata(A) {
    if (this.cancelled) return;
    ((this.processingMetadata = !0),
      this.listener.onReceiveMetadata(A, (B) => {
        if (((this.processingMetadata = !1), this.cancelled)) return;
        (this.nextListener.onReceiveMetadata(B),
          this.processPendingMessage(),
          this.processPendingHalfClose());
      }));
  }
  onReceiveMessage(A) {
    if (this.cancelled) return;
    ((this.processingMessage = !0),
      this.listener.onReceiveMessage(A, (B) => {
        if (((this.processingMessage = !1), this.cancelled)) return;
        if (this.processingMetadata) ((this.pendingMessage = B), (this.hasPendingMessage = !0));
        else (this.nextListener.onReceiveMessage(B), this.processPendingHalfClose());
      }));
  }
  onReceiveHalfClose() {
    if (this.cancelled) return;
    this.listener.onReceiveHalfClose(() => {
      if (this.cancelled) return;
      if (this.processingMetadata || this.processingMessage) this.hasPendingHalfClose = !0;
      else this.nextListener.onReceiveHalfClose();
    });
  }
  onCancel() {
    ((this.cancelled = !0), this.listener.onCancel(), this.nextListener.onCancel());
  }
}
class QZ2 {
  constructor() {
    ((this.start = void 0),
      (this.metadata = void 0),
      (this.message = void 0),
      (this.status = void 0));
  }
  withStart(A) {
    return ((this.start = A), this);
  }
  withSendMetadata(A) {
    return ((this.metadata = A), this);
  }
  withSendMessage(A) {
    return ((this.message = A), this);
  }
  withSendStatus(A) {
    return ((this.status = A), this);
  }
  build() {
    return {
      start: this.start,
      sendMetadata: this.metadata,
      sendMessage: this.message,
      sendStatus: this.status,
    };
  }
}
DZ2.ResponderBuilder = QZ2;
var tC1 = {
    onReceiveMetadata: (A, B) => {
      B(A);
    },
    onReceiveMessage: (A, B) => {
      B(A);
    },
    onReceiveHalfClose: (A) => {
      A();
    },
    onCancel: () => {},
  },
  eC1 = {
    start: (A) => {
      A();
    },
    sendMetadata: (A, B) => {
      B(A);
    },
    sendMessage: (A, B) => {
      B(A);
    },
    sendStatus: (A, B) => {
      B(A);
    },
  };
class IZ2 {
  constructor(A, B) {
    var Q, I, G, D;
    ((this.nextCall = A),
      (this.processingMetadata = !1),
      (this.sentMetadata = !1),
      (this.processingMessage = !1),
      (this.pendingMessage = null),
      (this.pendingMessageCallback = null),
      (this.pendingStatus = null),
      (this.responder = {
        start:
          (Q = B === null || B === void 0 ? void 0 : B.start) !== null && Q !== void 0
            ? Q
            : eC1.start,
        sendMetadata:
          (I = B === null || B === void 0 ? void 0 : B.sendMetadata) !== null && I !== void 0
            ? I
            : eC1.sendMetadata,
        sendMessage:
          (G = B === null || B === void 0 ? void 0 : B.sendMessage) !== null && G !== void 0
            ? G
            : eC1.sendMessage,
        sendStatus:
          (D = B === null || B === void 0 ? void 0 : B.sendStatus) !== null && D !== void 0
            ? D
            : eC1.sendStatus,
      }));
  }
  processPendingMessage() {
    if (this.pendingMessageCallback)
      (this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback),
        (this.pendingMessage = null),
        (this.pendingMessageCallback = null));
  }
  processPendingStatus() {
    if (this.pendingStatus)
      (this.nextCall.sendStatus(this.pendingStatus), (this.pendingStatus = null));
  }
  start(A) {
    this.responder.start((B) => {
      var Q, I, G, D;
      let Z = {
          onReceiveMetadata:
            (Q = B === null || B === void 0 ? void 0 : B.onReceiveMetadata) !== null && Q !== void 0
              ? Q
              : tC1.onReceiveMetadata,
          onReceiveMessage:
            (I = B === null || B === void 0 ? void 0 : B.onReceiveMessage) !== null && I !== void 0
              ? I
              : tC1.onReceiveMessage,
          onReceiveHalfClose:
            (G = B === null || B === void 0 ? void 0 : B.onReceiveHalfClose) !== null &&
            G !== void 0
              ? G
              : tC1.onReceiveHalfClose,
          onCancel:
            (D = B === null || B === void 0 ? void 0 : B.onCancel) !== null && D !== void 0
              ? D
              : tC1.onCancel,
        },
        Y = new BZ2(Z, A);
      this.nextCall.start(Y);
    });
  }
  sendMetadata(A) {
    ((this.processingMetadata = !0),
      (this.sentMetadata = !0),
      this.responder.sendMetadata(A, (B) => {
        ((this.processingMetadata = !1),
          this.nextCall.sendMetadata(B),
          this.processPendingMessage(),
          this.processPendingStatus());
      }));
  }
  sendMessage(A, B) {
    if (((this.processingMessage = !0), !this.sentMetadata)) this.sendMetadata(new Aa1.Metadata());
    this.responder.sendMessage(A, (Q) => {
      if (((this.processingMessage = !1), this.processingMetadata))
        ((this.pendingMessage = Q), (this.pendingMessageCallback = B));
      else this.nextCall.sendMessage(Q, B);
    });
  }
  sendStatus(A) {
    this.responder.sendStatus(A, (B) => {
      if (this.processingMetadata || this.processingMessage) this.pendingStatus = B;
      else this.nextCall.sendStatus(B);
    });
  }
  startRead() {
    this.nextCall.startRead();
  }
  getPeer() {
    return this.nextCall.getPeer();
  }
  getDeadline() {
    return this.nextCall.getDeadline();
  }
  getHost() {
    return this.nextCall.getHost();
  }
}
DZ2.ServerInterceptingCall = IZ2;
var GZ2 = 'grpc-accept-encoding',
  Ba1 = 'grpc-encoding',
  sD2 = 'grpc-message',
  rD2 = 'grpc-status',
  en1 = 'grpc-timeout',
  Zs6 = /(\d{1,8})\s*([HMSmun])/,
  Ys6 = { H: 3600000, M: 60000, S: 1000, m: 1, u: 0.001, n: 0.000001 },
  Ws6 = { [GZ2]: 'identity,deflate,gzip', [Ba1]: 'identity' },
  oD2 = {
    [ym.constants.HTTP2_HEADER_STATUS]: ym.constants.HTTP_STATUS_OK,
    [ym.constants.HTTP2_HEADER_CONTENT_TYPE]: 'application/grpc+proto',
  },
  Fs6 = { waitForTrailers: !0 };
class Qa1 {
  constructor(A, B, Q, I, G) {
    var D;
    if (
      ((this.stream = A),
      (this.callEventTracker = Q),
      (this.handler = I),
      (this.listener = null),
      (this.deadlineTimer = null),
      (this.deadline = 1 / 0),
      (this.maxSendMessageSize = vY.DEFAULT_MAX_SEND_MESSAGE_LENGTH),
      (this.maxReceiveMessageSize = vY.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH),
      (this.cancelled = !1),
      (this.metadataSent = !1),
      (this.wantTrailers = !1),
      (this.cancelNotified = !1),
      (this.incomingEncoding = 'identity'),
      (this.readQueue = []),
      (this.isReadPending = !1),
      (this.receivedHalfClose = !1),
      (this.streamEnded = !1),
      this.stream.once('error', (F) => {}),
      this.stream.once('close', () => {
        var F;
        if (
          (m_(
            'Request to method ' +
              ((F = this.handler) === null || F === void 0 ? void 0 : F.path) +
              ' stream closed with rstCode ' +
              this.stream.rstCode
          ),
          this.callEventTracker && !this.streamEnded)
        )
          ((this.streamEnded = !0),
            this.callEventTracker.onStreamEnd(!1),
            this.callEventTracker.onCallEnd({
              code: vY.Status.CANCELLED,
              details: 'Stream closed before sending status',
              metadata: null,
            }));
        this.notifyOnCancel();
      }),
      this.stream.on('data', (F) => {
        this.handleDataFrame(F);
      }),
      this.stream.pause(),
      this.stream.on('end', () => {
        this.handleEndEvent();
      }),
      'grpc.max_send_message_length' in G)
    )
      this.maxSendMessageSize = G['grpc.max_send_message_length'];
    if ('grpc.max_receive_message_length' in G)
      this.maxReceiveMessageSize = G['grpc.max_receive_message_length'];
    ((this.host = (D = B[':authority']) !== null && D !== void 0 ? D : B.host),
      (this.decoder = new Gs6.StreamDecoder(this.maxReceiveMessageSize)));
    let Z = Aa1.Metadata.fromHttp2Headers(B);
    if (tD2.isTracerEnabled(eD2))
      m_('Request to ' + this.handler.path + ' received headers ' + JSON.stringify(Z.toJSON()));
    let Y = Z.get(en1);
    if (Y.length > 0) this.handleTimeoutHeader(Y[0]);
    let W = Z.get(Ba1);
    if (W.length > 0) this.incomingEncoding = W[0];
    (Z.remove(en1),
      Z.remove(Ba1),
      Z.remove(GZ2),
      Z.remove(ym.constants.HTTP2_HEADER_ACCEPT_ENCODING),
      Z.remove(ym.constants.HTTP2_HEADER_TE),
      Z.remove(ym.constants.HTTP2_HEADER_CONTENT_TYPE),
      (this.metadata = Z));
  }
  handleTimeoutHeader(A) {
    let B = A.toString().match(Zs6);
    if (B === null) {
      let G = { code: vY.Status.INTERNAL, details: `Invalid ${en1} value "${A}"`, metadata: null };
      process.nextTick(() => {
        this.sendStatus(G);
      });
      return;
    }
    let Q = (+B[1] * Ys6[B[2]]) | 0,
      I = new Date();
    ((this.deadline = I.setMilliseconds(I.getMilliseconds() + Q)),
      (this.deadlineTimer = setTimeout(() => {
        let G = { code: vY.Status.DEADLINE_EXCEEDED, details: 'Deadline exceeded', metadata: null };
        this.sendStatus(G);
      }, Q)));
  }
  checkCancelled() {
    if (!this.cancelled && (this.stream.destroyed || this.stream.closed))
      (this.notifyOnCancel(), (this.cancelled = !0));
    return this.cancelled;
  }
  notifyOnCancel() {
    if (this.cancelNotified) return;
    if (
      ((this.cancelNotified = !0),
      (this.cancelled = !0),
      process.nextTick(() => {
        var A;
        (A = this.listener) === null || A === void 0 || A.onCancel();
      }),
      this.deadlineTimer)
    )
      clearTimeout(this.deadlineTimer);
    this.stream.resume();
  }
  maybeSendMetadata() {
    if (!this.metadataSent) this.sendMetadata(new Aa1.Metadata());
  }
  serializeMessage(A) {
    let B = this.handler.serialize(A),
      Q = B.byteLength,
      I = Buffer.allocUnsafe(Q + 5);
    return (I.writeUInt8(0, 0), I.writeUInt32BE(Q, 1), B.copy(I, 5), I);
  }
  decompressMessage(A, B) {
    let Q = A.subarray(5);
    if (B === 'identity') return Q;
    else if (B === 'deflate' || B === 'gzip') {
      let I;
      if (B === 'deflate') I = aD2.createInflate();
      else I = aD2.createGunzip();
      return new Promise((G, D) => {
        let Z = 0,
          Y = [];
        (I.on('data', (W) => {
          if (
            (Y.push(W),
            (Z += W.byteLength),
            this.maxReceiveMessageSize !== -1 && Z > this.maxReceiveMessageSize)
          )
            (I.destroy(),
              D({
                code: vY.Status.RESOURCE_EXHAUSTED,
                details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}`,
              }));
        }),
          I.on('end', () => {
            G(Buffer.concat(Y));
          }),
          I.write(Q),
          I.end());
      });
    } else
      return Promise.reject({
        code: vY.Status.UNIMPLEMENTED,
        details: `Received message compressed with unsupported encoding "${B}"`,
      });
  }
  async decompressAndMaybePush(A) {
    if (A.type !== 'COMPRESSED') throw new Error(`Invalid queue entry type: ${A.type}`);
    let Q = A.compressedMessage.readUInt8(0) === 1 ? this.incomingEncoding : 'identity',
      I;
    try {
      I = await this.decompressMessage(A.compressedMessage, Q);
    } catch (G) {
      this.sendStatus(G);
      return;
    }
    try {
      A.parsedMessage = this.handler.deserialize(I);
    } catch (G) {
      this.sendStatus({
        code: vY.Status.INTERNAL,
        details: `Error deserializing request: ${G.message}`,
      });
      return;
    }
    ((A.type = 'READABLE'), this.maybePushNextMessage());
  }
  maybePushNextMessage() {
    if (
      this.listener &&
      this.isReadPending &&
      this.readQueue.length > 0 &&
      this.readQueue[0].type !== 'COMPRESSED'
    ) {
      this.isReadPending = !1;
      let A = this.readQueue.shift();
      if (A.type === 'READABLE') this.listener.onReceiveMessage(A.parsedMessage);
      else this.listener.onReceiveHalfClose();
    }
  }
  handleDataFrame(A) {
    var B;
    if (this.checkCancelled()) return;
    m_('Request to ' + this.handler.path + ' received data frame of size ' + A.length);
    let Q;
    try {
      Q = this.decoder.write(A);
    } catch (I) {
      this.sendStatus({ code: vY.Status.RESOURCE_EXHAUSTED, details: I.message });
      return;
    }
    for (let I of Q) {
      this.stream.pause();
      let G = { type: 'COMPRESSED', compressedMessage: I, parsedMessage: null };
      (this.readQueue.push(G),
        this.decompressAndMaybePush(G),
        (B = this.callEventTracker) === null || B === void 0 || B.addMessageReceived());
    }
  }
  handleEndEvent() {
    (this.readQueue.push({ type: 'HALF_CLOSE', compressedMessage: null, parsedMessage: null }),
      (this.receivedHalfClose = !0),
      this.maybePushNextMessage());
  }
  start(A) {
    if ((m_('Request to ' + this.handler.path + ' start called'), this.checkCancelled())) return;
    ((this.listener = A), A.onReceiveMetadata(this.metadata));
  }
  sendMetadata(A) {
    if (this.checkCancelled()) return;
    if (this.metadataSent) return;
    this.metadataSent = !0;
    let B = A ? A.toHttp2Headers() : null,
      Q = Object.assign(Object.assign(Object.assign({}, oD2), Ws6), B);
    this.stream.respond(Q, Fs6);
  }
  sendMessage(A, B) {
    if (this.checkCancelled()) return;
    let Q;
    try {
      Q = this.serializeMessage(A);
    } catch (I) {
      this.sendStatus({
        code: vY.Status.INTERNAL,
        details: `Error serializing response: ${nD2.getErrorMessage(I)}`,
        metadata: null,
      });
      return;
    }
    if (this.maxSendMessageSize !== -1 && Q.length - 5 > this.maxSendMessageSize) {
      this.sendStatus({
        code: vY.Status.RESOURCE_EXHAUSTED,
        details: `Sent message larger than max (${Q.length} vs. ${this.maxSendMessageSize})`,
        metadata: null,
      });
      return;
    }
    (this.maybeSendMetadata(),
      m_('Request to ' + this.handler.path + ' sent data frame of size ' + Q.length),
      this.stream.write(Q, (I) => {
        var G;
        if (I) {
          this.sendStatus({
            code: vY.Status.INTERNAL,
            details: `Error writing message: ${nD2.getErrorMessage(I)}`,
            metadata: null,
          });
          return;
        }
        ((G = this.callEventTracker) === null || G === void 0 || G.addMessageSent(), B());
      }));
  }
  sendStatus(A) {
    var B, Q;
    if (this.checkCancelled()) return;
    if (
      (m_(
        'Request to method ' +
          ((B = this.handler) === null || B === void 0 ? void 0 : B.path) +
          ' ended with status code: ' +
          vY.Status[A.code] +
          ' details: ' +
          A.details
      ),
      this.metadataSent)
    )
      if (!this.wantTrailers)
        ((this.wantTrailers = !0),
          this.stream.once('wantTrailers', () => {
            var I;
            if (this.callEventTracker && !this.streamEnded)
              ((this.streamEnded = !0),
                this.callEventTracker.onStreamEnd(!0),
                this.callEventTracker.onCallEnd(A));
            let G = Object.assign(
              { [rD2]: A.code, [sD2]: encodeURI(A.details) },
              (I = A.metadata) === null || I === void 0 ? void 0 : I.toHttp2Headers()
            );
            (this.stream.sendTrailers(G), this.notifyOnCancel());
          }),
          this.stream.end());
      else this.notifyOnCancel();
    else {
      if (this.callEventTracker && !this.streamEnded)
        ((this.streamEnded = !0),
          this.callEventTracker.onStreamEnd(!0),
          this.callEventTracker.onCallEnd(A));
      let I = Object.assign(
        Object.assign({ [rD2]: A.code, [sD2]: encodeURI(A.details) }, oD2),
        (Q = A.metadata) === null || Q === void 0 ? void 0 : Q.toHttp2Headers()
      );
      (this.stream.respond(I, { endStream: !0 }), this.notifyOnCancel());
    }
  }
  startRead() {
    if ((m_('Request to ' + this.handler.path + ' startRead called'), this.checkCancelled()))
      return;
    if (((this.isReadPending = !0), this.readQueue.length === 0)) {
      if (!this.receivedHalfClose) this.stream.resume();
    } else this.maybePushNextMessage();
  }
  getPeer() {
    var A;
    let B = (A = this.stream.session) === null || A === void 0 ? void 0 : A.socket;
    if (B === null || B === void 0 ? void 0 : B.remoteAddress)
      if (B.remotePort) return `${B.remoteAddress}:${B.remotePort}`;
      else return B.remoteAddress;
    else return 'unknown';
  }
  getDeadline() {
    return this.deadline;
  }
  getHost() {
    return this.host;
  }
}
DZ2.BaseServerInterceptingCall = Qa1;
function Js6(A, B, Q, I, G, D) {
  let Z = {
      path: G.path,
      requestStream: G.type === 'clientStream' || G.type === 'bidi',
      responseStream: G.type === 'serverStream' || G.type === 'bidi',
      requestDeserialize: G.deserialize,
      responseSerialize: G.serialize,
    },
    Y = new Qa1(B, Q, I, G, D);
  return A.reduce((W, F) => {
    return F(Z, W);
  }, Y);
}
