// Module: CD2
// Params: FD2

Object.defineProperty(FD2, '__esModule', { value: !0 });
FD2.LoadBalancingCall = void 0;
var ZD2 = $C(),
  cC1 = O6(),
  YD2 = Bt(),
  lC1 = XD(),
  Qt = ER(),
  Ha6 = xY(),
  za6 = r8(),
  hn1 = pC1(),
  wa6 = D1('http2'),
  Ea6 = 'load_balancing_call';
class WD2 {
  constructor(A, B, Q, I, G, D, Z) {
    var Y, W;
    ((this.channel = A),
      (this.callConfig = B),
      (this.methodName = Q),
      (this.host = I),
      (this.credentials = G),
      (this.deadline = D),
      (this.callNumber = Z),
      (this.child = null),
      (this.readPending = !1),
      (this.pendingMessage = null),
      (this.pendingHalfClose = !1),
      (this.ended = !1),
      (this.metadata = null),
      (this.listener = null),
      (this.onCallEnded = null),
      (this.childStartTime = null));
    let F = this.methodName.split('/'),
      J = '';
    if (F.length >= 2) J = F[1];
    let C =
      (W = (Y = Ha6.splitHostPort(this.host)) === null || Y === void 0 ? void 0 : Y.host) !==
        null && W !== void 0
        ? W
        : 'localhost';
    ((this.serviceUrl = `https://${C}/${J}`), (this.startTime = new Date()));
  }
  getDeadlineInfo() {
    var A, B;
    let Q = [];
    if (this.childStartTime) {
      if (this.childStartTime > this.startTime) {
        if ((A = this.metadata) === null || A === void 0 ? void 0 : A.getOptions().waitForReady)
          Q.push('wait_for_ready');
        Q.push(`LB pick: ${YD2.formatDateDifference(this.startTime, this.childStartTime)}`);
      }
      return (Q.push(...this.child.getDeadlineInfo()), Q);
    } else {
      if ((B = this.metadata) === null || B === void 0 ? void 0 : B.getOptions().waitForReady)
        Q.push('wait_for_ready');
      Q.push('Waiting for LB pick');
    }
    return Q;
  }
  trace(A) {
    za6.trace(cC1.LogVerbosity.DEBUG, Ea6, '[' + this.callNumber + '] ' + A);
  }
  outputStatus(A, B) {
    var Q, I;
    if (!this.ended) {
      ((this.ended = !0),
        this.trace(
          'ended with status: code=' +
            A.code +
            ' details="' +
            A.details +
            '" start time=' +
            this.startTime.toISOString()
        ));
      let G = Object.assign(Object.assign({}, A), { progress: B });
      ((Q = this.listener) === null || Q === void 0 || Q.onReceiveStatus(G),
        (I = this.onCallEnded) === null || I === void 0 || I.call(this, G.code));
    }
  }
  doPick() {
    var A, B;
    if (this.ended) return;
    if (!this.metadata) throw new Error('doPick called before start');
    this.trace('Pick called');
    let Q = this.metadata.clone(),
      I = this.channel.doPick(Q, this.callConfig.pickInformation),
      G = I.subchannel
        ? '(' + I.subchannel.getChannelzRef().id + ') ' + I.subchannel.getAddress()
        : '' + I.subchannel;
    switch (
      (this.trace(
        'Pick result: ' +
          Qt.PickResultType[I.pickResultType] +
          ' subchannel: ' +
          G +
          ' status: ' +
          ((A = I.status) === null || A === void 0 ? void 0 : A.code) +
          ' ' +
          ((B = I.status) === null || B === void 0 ? void 0 : B.details)
      ),
      I.pickResultType)
    ) {
      case Qt.PickResultType.COMPLETE:
        this.credentials
          .compose(I.subchannel.getCallCredentials())
          .generateMetadata({ method_name: this.methodName, service_url: this.serviceUrl })
          .then(
            (W) => {
              var F;
              if (this.ended) {
                this.trace('Credentials metadata generation finished after call ended');
                return;
              }
              if ((Q.merge(W), Q.get('authorization').length > 1))
                this.outputStatus(
                  {
                    code: cC1.Status.INTERNAL,
                    details: '"authorization" metadata cannot have multiple values',
                    metadata: new lC1.Metadata(),
                  },
                  'PROCESSED'
                );
              if (I.subchannel.getConnectivityState() !== ZD2.ConnectivityState.READY) {
                (this.trace(
                  'Picked subchannel ' +
                    G +
                    ' has state ' +
                    ZD2.ConnectivityState[I.subchannel.getConnectivityState()] +
                    ' after getting credentials metadata. Retrying pick'
                ),
                  this.doPick());
                return;
              }
              if (this.deadline !== 1 / 0)
                Q.set('grpc-timeout', YD2.getDeadlineTimeoutString(this.deadline));
              try {
                ((this.child = I.subchannel
                  .getRealSubchannel()
                  .createCall(Q, this.host, this.methodName, {
                    onReceiveMetadata: (J) => {
                      (this.trace('Received metadata'), this.listener.onReceiveMetadata(J));
                    },
                    onReceiveMessage: (J) => {
                      (this.trace('Received message'), this.listener.onReceiveMessage(J));
                    },
                    onReceiveStatus: (J) => {
                      if (
                        (this.trace('Received status'),
                        J.rstCode === wa6.constants.NGHTTP2_REFUSED_STREAM)
                      )
                        this.outputStatus(J, 'REFUSED');
                      else this.outputStatus(J, 'PROCESSED');
                    },
                  })),
                  (this.childStartTime = new Date()));
              } catch (J) {
                (this.trace(
                  'Failed to start call on picked subchannel ' + G + ' with error ' + J.message
                ),
                  this.outputStatus(
                    {
                      code: cC1.Status.INTERNAL,
                      details: 'Failed to start HTTP/2 stream with error ' + J.message,
                      metadata: new lC1.Metadata(),
                    },
                    'NOT_STARTED'
                  ));
                return;
              }
              if (
                ((F = I.onCallStarted) === null || F === void 0 || F.call(I),
                (this.onCallEnded = I.onCallEnded),
                this.trace('Created child call [' + this.child.getCallNumber() + ']'),
                this.readPending)
              )
                this.child.startRead();
              if (this.pendingMessage)
                this.child.sendMessageWithContext(
                  this.pendingMessage.context,
                  this.pendingMessage.message
                );
              if (this.pendingHalfClose) this.child.halfClose();
            },
            (W) => {
              let { code: F, details: J } = hn1.restrictControlPlaneStatusCode(
                typeof W.code === 'number' ? W.code : cC1.Status.UNKNOWN,
                `Getting metadata from plugin failed with error: ${W.message}`
              );
              this.outputStatus({ code: F, details: J, metadata: new lC1.Metadata() }, 'PROCESSED');
            }
          );
        break;
      case Qt.PickResultType.DROP:
        let { code: Z, details: Y } = hn1.restrictControlPlaneStatusCode(
          I.status.code,
          I.status.details
        );
        setImmediate(() => {
          this.outputStatus({ code: Z, details: Y, metadata: I.status.metadata }, 'DROP');
        });
        break;
      case Qt.PickResultType.TRANSIENT_FAILURE:
        if (this.metadata.getOptions().waitForReady) this.channel.queueCallForPick(this);
        else {
          let { code: W, details: F } = hn1.restrictControlPlaneStatusCode(
            I.status.code,
            I.status.details
          );
          setImmediate(() => {
            this.outputStatus({ code: W, details: F, metadata: I.status.metadata }, 'PROCESSED');
          });
        }
        break;
      case Qt.PickResultType.QUEUE:
        this.channel.queueCallForPick(this);
    }
  }
  cancelWithStatus(A, B) {
    var Q;
    (this.trace('cancelWithStatus code: ' + A + ' details: "' + B + '"'),
      (Q = this.child) === null || Q === void 0 || Q.cancelWithStatus(A, B),
      this.outputStatus({ code: A, details: B, metadata: new lC1.Metadata() }, 'PROCESSED'));
  }
  getPeer() {
    var A, B;
    return (B = (A = this.child) === null || A === void 0 ? void 0 : A.getPeer()) !== null &&
      B !== void 0
      ? B
      : this.channel.getTarget();
  }
  start(A, B) {
    (this.trace('start called'), (this.listener = B), (this.metadata = A), this.doPick());
  }
  sendMessageWithContext(A, B) {
    if ((this.trace('write() called with message of length ' + B.length), this.child))
      this.child.sendMessageWithContext(A, B);
    else this.pendingMessage = { context: A, message: B };
  }
  startRead() {
    if ((this.trace('startRead called'), this.child)) this.child.startRead();
    else this.readPending = !0;
  }
  halfClose() {
    if ((this.trace('halfClose called'), this.child)) this.child.halfClose();
    else this.pendingHalfClose = !0;
  }
  setCredentials(A) {
    throw new Error('Method not implemented.');
  }
  getCallNumber() {
    return this.callNumber;
  }
}
FD2.LoadBalancingCall = WD2;
