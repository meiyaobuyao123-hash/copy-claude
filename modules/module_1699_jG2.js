// Module: jG2
// Params: SG2

Object.defineProperty(SG2, '__esModule', { value: !0 });
SG2.Http2SubchannelCall = void 0;
var ON = D1('http2'),
  zn6 = D1('os'),
  X8 = O6(),
  TN = XD(),
  wn6 = Pn1(),
  En6 = r8(),
  Un6 = O6(),
  Nn6 = 'subchannel_call';
function $n6(A) {
  for (let [B, Q] of Object.entries(zn6.constants.errno)) if (Q === A) return B;
  return 'Unknown system error ' + A;
}
function Sn1(A) {
  let B = `Received HTTP status code ${A}`,
    Q;
  switch (A) {
    case 400:
      Q = X8.Status.INTERNAL;
      break;
    case 401:
      Q = X8.Status.UNAUTHENTICATED;
      break;
    case 403:
      Q = X8.Status.PERMISSION_DENIED;
      break;
    case 404:
      Q = X8.Status.UNIMPLEMENTED;
      break;
    case 429:
    case 502:
    case 503:
    case 504:
      Q = X8.Status.UNAVAILABLE;
      break;
    default:
      Q = X8.Status.UNKNOWN;
  }
  return { code: Q, details: B, metadata: new TN.Metadata() };
}
class PG2 {
  constructor(A, B, Q, I, G) {
    var D;
    ((this.http2Stream = A),
      (this.callEventTracker = B),
      (this.listener = Q),
      (this.transport = I),
      (this.callId = G),
      (this.isReadFilterPending = !1),
      (this.isPushPending = !1),
      (this.canPush = !1),
      (this.readsClosed = !1),
      (this.statusOutput = !1),
      (this.unpushedReadMessages = []),
      (this.finalStatus = null),
      (this.internalError = null),
      (this.serverEndedCall = !1),
      (this.connectionDropped = !1));
    let Z =
      (D = I.getOptions()['grpc.max_receive_message_length']) !== null && D !== void 0
        ? D
        : X8.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
    ((this.decoder = new wn6.StreamDecoder(Z)),
      A.on('response', (Y, W) => {
        let F = '';
        for (let J of Object.keys(Y))
          F +=
            '\t\t' +
            J +
            ': ' +
            Y[J] +
            `
`;
        if (
          (this.trace(
            `Received server headers:
` + F
          ),
          (this.httpStatusCode = Y[':status']),
          W & ON.constants.NGHTTP2_FLAG_END_STREAM)
        )
          this.handleTrailers(Y);
        else {
          let J;
          try {
            J = TN.Metadata.fromHttp2Headers(Y);
          } catch (C) {
            this.endCall({
              code: X8.Status.UNKNOWN,
              details: C.message,
              metadata: new TN.Metadata(),
            });
            return;
          }
          this.listener.onReceiveMetadata(J);
        }
      }),
      A.on('trailers', (Y) => {
        this.handleTrailers(Y);
      }),
      A.on('data', (Y) => {
        if (this.statusOutput) return;
        this.trace('receive HTTP/2 data frame of length ' + Y.length);
        let W;
        try {
          W = this.decoder.write(Y);
        } catch (F) {
          if (this.httpStatusCode !== void 0 && this.httpStatusCode !== 200) {
            let J = Sn1(this.httpStatusCode);
            this.cancelWithStatus(J.code, J.details);
          } else this.cancelWithStatus(X8.Status.RESOURCE_EXHAUSTED, F.message);
          return;
        }
        for (let F of W)
          (this.trace('parsed message of length ' + F.length),
            this.callEventTracker.addMessageReceived(),
            this.tryPush(F));
      }),
      A.on('end', () => {
        ((this.readsClosed = !0), this.maybeOutputStatus());
      }),
      A.on('close', () => {
        ((this.serverEndedCall = !0),
          process.nextTick(() => {
            var Y;
            if (
              (this.trace('HTTP/2 stream closed with code ' + A.rstCode),
              ((Y = this.finalStatus) === null || Y === void 0 ? void 0 : Y.code) === X8.Status.OK)
            )
              return;
            let W,
              F = '';
            switch (A.rstCode) {
              case ON.constants.NGHTTP2_NO_ERROR:
                if (this.finalStatus !== null) return;
                if (this.httpStatusCode && this.httpStatusCode !== 200) {
                  let J = Sn1(this.httpStatusCode);
                  ((W = J.code), (F = J.details));
                } else
                  ((W = X8.Status.INTERNAL),
                    (F = `Received RST_STREAM with code ${A.rstCode} (Call ended without gRPC status)`));
                break;
              case ON.constants.NGHTTP2_REFUSED_STREAM:
                ((W = X8.Status.UNAVAILABLE), (F = 'Stream refused by server'));
                break;
              case ON.constants.NGHTTP2_CANCEL:
                if (this.connectionDropped)
                  ((W = X8.Status.UNAVAILABLE), (F = 'Connection dropped'));
                else ((W = X8.Status.CANCELLED), (F = 'Call cancelled'));
                break;
              case ON.constants.NGHTTP2_ENHANCE_YOUR_CALM:
                ((W = X8.Status.RESOURCE_EXHAUSTED),
                  (F = 'Bandwidth exhausted or memory limit exceeded'));
                break;
              case ON.constants.NGHTTP2_INADEQUATE_SECURITY:
                ((W = X8.Status.PERMISSION_DENIED), (F = 'Protocol not secure enough'));
                break;
              case ON.constants.NGHTTP2_INTERNAL_ERROR:
                if (((W = X8.Status.INTERNAL), this.internalError === null))
                  F = `Received RST_STREAM with code ${A.rstCode} (Internal server error)`;
                else if (
                  this.internalError.code === 'ECONNRESET' ||
                  this.internalError.code === 'ETIMEDOUT'
                )
                  ((W = X8.Status.UNAVAILABLE), (F = this.internalError.message));
                else
                  F = `Received RST_STREAM with code ${A.rstCode} triggered by internal client error: ${this.internalError.message}`;
                break;
              default:
                ((W = X8.Status.INTERNAL), (F = `Received RST_STREAM with code ${A.rstCode}`));
            }
            this.endCall({ code: W, details: F, metadata: new TN.Metadata(), rstCode: A.rstCode });
          }));
      }),
      A.on('error', (Y) => {
        if (Y.code !== 'ERR_HTTP2_STREAM_ERROR')
          (this.trace(
            'Node error event: message=' +
              Y.message +
              ' code=' +
              Y.code +
              ' errno=' +
              $n6(Y.errno) +
              ' syscall=' +
              Y.syscall
          ),
            (this.internalError = Y));
        this.callEventTracker.onStreamEnd(!1);
      }));
  }
  getDeadlineInfo() {
    return [`remote_addr=${this.getPeer()}`];
  }
  onDisconnect() {
    ((this.connectionDropped = !0),
      setImmediate(() => {
        this.endCall({
          code: X8.Status.UNAVAILABLE,
          details: 'Connection dropped',
          metadata: new TN.Metadata(),
        });
      }));
  }
  outputStatus() {
    if (!this.statusOutput)
      ((this.statusOutput = !0),
        this.trace(
          'ended with status: code=' +
            this.finalStatus.code +
            ' details="' +
            this.finalStatus.details +
            '"'
        ),
        this.callEventTracker.onCallEnd(this.finalStatus),
        process.nextTick(() => {
          this.listener.onReceiveStatus(this.finalStatus);
        }),
        this.http2Stream.resume());
  }
  trace(A) {
    En6.trace(Un6.LogVerbosity.DEBUG, Nn6, '[' + this.callId + '] ' + A);
  }
  endCall(A) {
    if (this.finalStatus === null || this.finalStatus.code === X8.Status.OK)
      ((this.finalStatus = A), this.maybeOutputStatus());
    this.destroyHttp2Stream();
  }
  maybeOutputStatus() {
    if (this.finalStatus !== null) {
      if (
        this.finalStatus.code !== X8.Status.OK ||
        (this.readsClosed &&
          this.unpushedReadMessages.length === 0 &&
          !this.isReadFilterPending &&
          !this.isPushPending)
      )
        this.outputStatus();
    }
  }
  push(A) {
    (this.trace('pushing to reader message of length ' + (A instanceof Buffer ? A.length : null)),
      (this.canPush = !1),
      (this.isPushPending = !0),
      process.nextTick(() => {
        if (((this.isPushPending = !1), this.statusOutput)) return;
        (this.listener.onReceiveMessage(A), this.maybeOutputStatus());
      }));
  }
  tryPush(A) {
    if (this.canPush) (this.http2Stream.pause(), this.push(A));
    else
      (this.trace('unpushedReadMessages.push message of length ' + A.length),
        this.unpushedReadMessages.push(A));
  }
  handleTrailers(A) {
    ((this.serverEndedCall = !0), this.callEventTracker.onStreamEnd(!0));
    let B = '';
    for (let D of Object.keys(A))
      B +=
        '\t\t' +
        D +
        ': ' +
        A[D] +
        `
`;
    this.trace(
      `Received server trailers:
` + B
    );
    let Q;
    try {
      Q = TN.Metadata.fromHttp2Headers(A);
    } catch (D) {
      Q = new TN.Metadata();
    }
    let I = Q.getMap(),
      G;
    if (typeof I['grpc-status'] === 'string') {
      let D = Number(I['grpc-status']);
      (this.trace('received status code ' + D + ' from server'), Q.remove('grpc-status'));
      let Z = '';
      if (typeof I['grpc-message'] === 'string') {
        try {
          Z = decodeURI(I['grpc-message']);
        } catch (Y) {
          Z = I['grpc-message'];
        }
        (Q.remove('grpc-message'),
          this.trace('received status details string "' + Z + '" from server'));
      }
      G = { code: D, details: Z, metadata: Q };
    } else if (this.httpStatusCode) ((G = Sn1(this.httpStatusCode)), (G.metadata = Q));
    else G = { code: X8.Status.UNKNOWN, details: 'No status information received', metadata: Q };
    this.endCall(G);
  }
  destroyHttp2Stream() {
    var A;
    if (this.http2Stream.destroyed) return;
    if (this.serverEndedCall) this.http2Stream.end();
    else {
      let B;
      if (((A = this.finalStatus) === null || A === void 0 ? void 0 : A.code) === X8.Status.OK)
        B = ON.constants.NGHTTP2_NO_ERROR;
      else B = ON.constants.NGHTTP2_CANCEL;
      (this.trace('close http2 stream with code ' + B), this.http2Stream.close(B));
    }
  }
  cancelWithStatus(A, B) {
    (this.trace('cancelWithStatus code: ' + A + ' details: "' + B + '"'),
      this.endCall({ code: A, details: B, metadata: new TN.Metadata() }));
  }
  getStatus() {
    return this.finalStatus;
  }
  getPeer() {
    return this.transport.getPeerName();
  }
  getCallNumber() {
    return this.callId;
  }
  startRead() {
    if (this.finalStatus !== null && this.finalStatus.code !== X8.Status.OK) {
      ((this.readsClosed = !0), this.maybeOutputStatus());
      return;
    }
    if (((this.canPush = !0), this.unpushedReadMessages.length > 0)) {
      let A = this.unpushedReadMessages.shift();
      this.push(A);
      return;
    }
    this.http2Stream.resume();
  }
  sendMessageWithContext(A, B) {
    this.trace('write() called with message of length ' + B.length);
    let Q = (I) => {
      process.nextTick(() => {
        var G;
        let D = X8.Status.UNAVAILABLE;
        if ((I === null || I === void 0 ? void 0 : I.code) === 'ERR_STREAM_WRITE_AFTER_END')
          D = X8.Status.INTERNAL;
        if (I) this.cancelWithStatus(D, `Write error: ${I.message}`);
        (G = A.callback) === null || G === void 0 || G.call(A);
      });
    };
    (this.trace('sending data chunk of length ' + B.length),
      this.callEventTracker.addMessageSent());
    try {
      this.http2Stream.write(B, Q);
    } catch (I) {
      this.endCall({
        code: X8.Status.UNAVAILABLE,
        details: `Write failed with error ${I.message}`,
        metadata: new TN.Metadata(),
      });
    }
  }
  halfClose() {
    (this.trace('end() called'),
      this.trace('calling end() on HTTP/2 stream'),
      this.http2Stream.end());
  }
}
SG2.Http2SubchannelCall = PG2;
