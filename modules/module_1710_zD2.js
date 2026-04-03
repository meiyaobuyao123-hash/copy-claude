// Module: zD2
// Params: KD2

Object.defineProperty(KD2, '__esModule', { value: !0 });
KD2.ResolvingCall = void 0;
var Ua6 = sJ1(),
  g_ = O6(),
  h_ = Bt(),
  XD2 = XD(),
  Na6 = r8(),
  $a6 = pC1(),
  qa6 = 'resolving_call';
class VD2 {
  constructor(A, B, Q, I, G) {
    if (
      ((this.channel = A),
      (this.method = B),
      (this.filterStackFactory = I),
      (this.callNumber = G),
      (this.child = null),
      (this.readPending = !1),
      (this.pendingMessage = null),
      (this.pendingHalfClose = !1),
      (this.ended = !1),
      (this.readFilterPending = !1),
      (this.writeFilterPending = !1),
      (this.pendingChildStatus = null),
      (this.metadata = null),
      (this.listener = null),
      (this.statusWatchers = []),
      (this.deadlineTimer = setTimeout(() => {}, 0)),
      (this.filterStack = null),
      (this.deadlineStartTime = null),
      (this.configReceivedTime = null),
      (this.childStartTime = null),
      (this.credentials = Ua6.CallCredentials.createEmpty()),
      (this.deadline = Q.deadline),
      (this.host = Q.host),
      Q.parentCall)
    ) {
      if (Q.flags & g_.Propagate.CANCELLATION)
        Q.parentCall.on('cancelled', () => {
          this.cancelWithStatus(g_.Status.CANCELLED, 'Cancelled by parent call');
        });
      if (Q.flags & g_.Propagate.DEADLINE)
        (this.trace('Propagating deadline from parent: ' + Q.parentCall.getDeadline()),
          (this.deadline = h_.minDeadline(this.deadline, Q.parentCall.getDeadline())));
    }
    (this.trace('Created'), this.runDeadlineTimer());
  }
  trace(A) {
    Na6.trace(g_.LogVerbosity.DEBUG, qa6, '[' + this.callNumber + '] ' + A);
  }
  runDeadlineTimer() {
    (clearTimeout(this.deadlineTimer),
      (this.deadlineStartTime = new Date()),
      this.trace('Deadline: ' + h_.deadlineToString(this.deadline)));
    let A = h_.getRelativeTimeout(this.deadline);
    if (A !== 1 / 0) {
      this.trace('Deadline will be reached in ' + A + 'ms');
      let B = () => {
        if (!this.deadlineStartTime) {
          this.cancelWithStatus(g_.Status.DEADLINE_EXCEEDED, 'Deadline exceeded');
          return;
        }
        let Q = [],
          I = new Date();
        if (
          (Q.push(`Deadline exceeded after ${h_.formatDateDifference(this.deadlineStartTime, I)}`),
          this.configReceivedTime)
        ) {
          if (this.configReceivedTime > this.deadlineStartTime)
            Q.push(
              `name resolution: ${h_.formatDateDifference(this.deadlineStartTime, this.configReceivedTime)}`
            );
          if (this.childStartTime) {
            if (this.childStartTime > this.configReceivedTime)
              Q.push(
                `metadata filters: ${h_.formatDateDifference(this.configReceivedTime, this.childStartTime)}`
              );
          } else Q.push('waiting for metadata filters');
        } else Q.push('waiting for name resolution');
        if (this.child) Q.push(...this.child.getDeadlineInfo());
        this.cancelWithStatus(g_.Status.DEADLINE_EXCEEDED, Q.join(','));
      };
      if (A <= 0) process.nextTick(B);
      else this.deadlineTimer = setTimeout(B, A);
    }
  }
  outputStatus(A) {
    if (!this.ended) {
      if (((this.ended = !0), !this.filterStack))
        this.filterStack = this.filterStackFactory.createFilter();
      clearTimeout(this.deadlineTimer);
      let B = this.filterStack.receiveTrailers(A);
      (this.trace('ended with status: code=' + B.code + ' details="' + B.details + '"'),
        this.statusWatchers.forEach((Q) => Q(B)),
        process.nextTick(() => {
          var Q;
          (Q = this.listener) === null || Q === void 0 || Q.onReceiveStatus(B);
        }));
    }
  }
  sendMessageOnChild(A, B) {
    if (!this.child) throw new Error('sendMessageonChild called with child not populated');
    let Q = this.child;
    ((this.writeFilterPending = !0),
      this.filterStack.sendMessage(Promise.resolve({ message: B, flags: A.flags })).then(
        (I) => {
          if (
            ((this.writeFilterPending = !1),
            Q.sendMessageWithContext(A, I.message),
            this.pendingHalfClose)
          )
            Q.halfClose();
        },
        (I) => {
          this.cancelWithStatus(I.code, I.details);
        }
      ));
  }
  getConfig() {
    if (this.ended) return;
    if (!this.metadata || !this.listener) throw new Error('getConfig called before start');
    let A = this.channel.getConfig(this.method, this.metadata);
    if (A.type === 'NONE') {
      this.channel.queueCallForConfig(this);
      return;
    } else if (A.type === 'ERROR') {
      if (this.metadata.getOptions().waitForReady) this.channel.queueCallForConfig(this);
      else this.outputStatus(A.error);
      return;
    }
    this.configReceivedTime = new Date();
    let B = A.config;
    if (B.status !== g_.Status.OK) {
      let { code: Q, details: I } = $a6.restrictControlPlaneStatusCode(
        B.status,
        'Failed to route call to method ' + this.method
      );
      this.outputStatus({ code: Q, details: I, metadata: new XD2.Metadata() });
      return;
    }
    if (B.methodConfig.timeout) {
      let Q = new Date();
      (Q.setSeconds(Q.getSeconds() + B.methodConfig.timeout.seconds),
        Q.setMilliseconds(Q.getMilliseconds() + B.methodConfig.timeout.nanos / 1e6),
        (this.deadline = h_.minDeadline(this.deadline, Q)),
        this.runDeadlineTimer());
    }
    (this.filterStackFactory.push(B.dynamicFilterFactories),
      (this.filterStack = this.filterStackFactory.createFilter()),
      this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then(
        (Q) => {
          if (
            ((this.child = this.channel.createRetryingCall(
              B,
              this.method,
              this.host,
              this.credentials,
              this.deadline
            )),
            this.trace('Created child [' + this.child.getCallNumber() + ']'),
            (this.childStartTime = new Date()),
            this.child.start(Q, {
              onReceiveMetadata: (I) => {
                (this.trace('Received metadata'),
                  this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(I)));
              },
              onReceiveMessage: (I) => {
                (this.trace('Received message'),
                  (this.readFilterPending = !0),
                  this.filterStack.receiveMessage(I).then(
                    (G) => {
                      if (
                        (this.trace('Finished filtering received message'),
                        (this.readFilterPending = !1),
                        this.listener.onReceiveMessage(G),
                        this.pendingChildStatus)
                      )
                        this.outputStatus(this.pendingChildStatus);
                    },
                    (G) => {
                      this.cancelWithStatus(G.code, G.details);
                    }
                  ));
              },
              onReceiveStatus: (I) => {
                if ((this.trace('Received status'), this.readFilterPending))
                  this.pendingChildStatus = I;
                else this.outputStatus(I);
              },
            }),
            this.readPending)
          )
            this.child.startRead();
          if (this.pendingMessage)
            this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message);
          else if (this.pendingHalfClose) this.child.halfClose();
        },
        (Q) => {
          this.outputStatus(Q);
        }
      ));
  }
  reportResolverError(A) {
    var B;
    if ((B = this.metadata) === null || B === void 0 ? void 0 : B.getOptions().waitForReady)
      this.channel.queueCallForConfig(this);
    else this.outputStatus(A);
  }
  cancelWithStatus(A, B) {
    var Q;
    (this.trace('cancelWithStatus code: ' + A + ' details: "' + B + '"'),
      (Q = this.child) === null || Q === void 0 || Q.cancelWithStatus(A, B),
      this.outputStatus({ code: A, details: B, metadata: new XD2.Metadata() }));
  }
  getPeer() {
    var A, B;
    return (B = (A = this.child) === null || A === void 0 ? void 0 : A.getPeer()) !== null &&
      B !== void 0
      ? B
      : this.channel.getTarget();
  }
  start(A, B) {
    (this.trace('start called'),
      (this.metadata = A.clone()),
      (this.listener = B),
      this.getConfig());
  }
  sendMessageWithContext(A, B) {
    if ((this.trace('write() called with message of length ' + B.length), this.child))
      this.sendMessageOnChild(A, B);
    else this.pendingMessage = { context: A, message: B };
  }
  startRead() {
    if ((this.trace('startRead called'), this.child)) this.child.startRead();
    else this.readPending = !0;
  }
  halfClose() {
    if ((this.trace('halfClose called'), this.child && !this.writeFilterPending))
      this.child.halfClose();
    else this.pendingHalfClose = !0;
  }
  setCredentials(A) {
    this.credentials = A;
  }
  addStatusWatcher(A) {
    this.statusWatchers.push(A);
  }
  getCallNumber() {
    return this.callNumber;
  }
}
KD2.ResolvingCall = VD2;
